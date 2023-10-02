import { BuildPaths } from '../build/types/config';
import path from 'path';
import webpack, { DefinePlugin } from 'webpack';
import { buildCSSLoaders } from '../build/loaders/buildCSSLoaders';
import { buildSVGLoader } from '../build/loaders/buildSVGLoader';

module.exports = async ({ config }: { config: webpack.Configuration }) => {
	const buildPath: BuildPaths['src'] = path.resolve(__dirname, '..', '..', 'src');
	const { resolve = {}, module = {}, plugins = [] } = config;
	resolve.modules = resolve.modules || [];
	module.rules = module.rules || [];
	
	resolve.modules.unshift(buildPath);

	module.rules.push(buildCSSLoaders(true));
	
	module.rules = module.rules.map((rule) => {
		// Исключаем svg из стандартного обработчика, чтобы использовать наш
		if (typeof rule !== 'string' && rule.test instanceof RegExp && rule.test.toString().includes('svg')){
			return { ...rule, exclude: /\.svg$/i };
		}
		return rule;
	});

	module.rules.push(buildSVGLoader());

	plugins.push(new DefinePlugin({
		__IS_DEV__: true,
		__API__: '',
	}));

	return config;
};
