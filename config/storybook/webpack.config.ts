import { BuildPaths } from '../build/types/config';
import path from 'path';
import webpack, { RuleSetRule } from 'webpack';
import { buildCSSLoaders } from '../build/loaders/buildCSSLoaders';
import { buildSVGLoader } from '../build/loaders/buildSVGLoader';

module.exports = async ({ config }: { config: webpack.Configuration }) => {
	const buildPath: BuildPaths['src'] = path.resolve(__dirname, '..', '..', 'src');

	config.resolve.modules.push(buildPath);

	config.module.rules.push(buildCSSLoaders(true));

	config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
		// Исключаем svg из стандартного обработчика, чтобы использовать наш
		if (rule.test instanceof RegExp && rule.test.toString().includes('svg')){
			return { ...rule, exclude: /\.svg$/i };
		}
		return rule;
	});

	config.module.rules.push(buildSVGLoader());

	return config;
};
