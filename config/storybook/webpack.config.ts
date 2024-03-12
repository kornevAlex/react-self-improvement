import { BuildPaths } from '../build/types/config';
import path from 'path';
import webpack, { DefinePlugin } from 'webpack';
import { buildCSSLoaders } from '../build/loaders/buildCSSLoaders';
import { buildSVGLoader } from '../build/loaders/buildSVGLoader';

module.exports = async ({ config }: { config: webpack.Configuration }) => {
	const buildPath: BuildPaths['src'] = path.resolve(__dirname, '..', '..', 'src');
    config!.resolve!.modules!.unshift(buildPath);
    config!.resolve!.extensions!.push('.ts', '.tsx');
	
	config!.module!.rules = config!.module!.rules!.map((rule) => {
		// Исключаем svg из стандартного обработчика, чтобы использовать наш
		if (typeof rule !== 'string' && rule.test instanceof RegExp && rule.test.toString().includes('svg')){
			return { ...rule, exclude: /\.svg$/i };
		}
		return rule;
	});

    config!.module!.rules.push(buildCSSLoaders(true));
	config!.module!.rules.push(buildSVGLoader());

    config!.plugins!.push(new DefinePlugin({
		__IS_DEV__: JSON.stringify(true),
		__API__: JSON.stringify(''),
		__PROJECT__: JSON.stringify('storybook'),
    }));

    return config;
};
