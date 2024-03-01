import webpack from 'webpack';
import 'webpack-dev-server';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolves } from './buildResolves';
import { BuildOptions } from './types/config';

export function buildWebpackConfig (options: BuildOptions): webpack.Configuration{
	return {
		mode: options.mode,
		entry: options.paths.entry,
		output: {
			filename: '[name].[contenthash].js',
			path: options.paths.build,
			clean: true,
			publicPath: '/',
		},
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolves(options),
		plugins: buildPlugins(options),
		devtool: options.isDev ? 'inline-source-map': undefined,
		devServer: options.isDev ?buildDevServer(options) : undefined,
	};
}
