import path from 'path';
import webpack from 'webpack';
import 'webpack-dev-server';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolves } from './buildResolves';
import { BuildOptions } from './types/config';

export function buildWebpackConfig({ paths, mode, port, isDev}: BuildOptions): webpack.Configuration {
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
        },
        module: {
          rules: buildLoaders(isDev),
        },
        resolve: buildResolves(),
        plugins: buildPlugins(paths.html),
        devtool: isDev ? 'inline-source-map': undefined,
        devServer: isDev ?buildDevServer(port) : undefined,
    }
}