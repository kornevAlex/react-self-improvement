import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCSSLoaders } from './loaders/buildCSSLoaders';
import { buildSVGLoader } from './loaders/buildSVGLoader';

export function buildLoaders (options: BuildOptions): webpack.RuleSetRule[]{

	const babelLoader = {
		test: /\.(js|ts|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: [
					['@babel/preset-env', { targets: 'defaults' }]
				]
			}
		}
	};

	const svgLoader = buildSVGLoader();

	const fileLoader = {
		test: /\.(png|jpe?g|gif)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	};

	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	const sassLoader = buildCSSLoaders(options.isDev);

	return [
		svgLoader,
		fileLoader,
		babelLoader,
		typescriptLoader,
		sassLoader
	];
}
