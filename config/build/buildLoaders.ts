import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

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

	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	};

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

	const sassLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			options.isDev ? 'style-loader': MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: (resPath: string) => Boolean(resPath.includes('.module')),
						localIdentName: options.isDev
							? '[path][name]__[local]__[hash:base64:8]'
							: '[hash:base64:8]',
					},
				}
			},
			'sass-loader',
		],
	};

	return [
		svgLoader,
		fileLoader,
		babelLoader,
		typescriptLoader,
		sassLoader
	];
}
