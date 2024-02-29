import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin  from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export function buildPlugins (options: BuildOptions): webpack.WebpackPluginInstance[]{
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	return [
		new HtmlWebpackPlugin({
			template: options.paths.html
		}),
		new webpack.ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
		}),
		new webpack.DefinePlugin({
			__IS_DEV__: JSON.stringify(options.isDev),
			__API__: JSON.stringify(options.apiUrl),
			__PROJECT__: JSON.stringify(options.project),
		}),
		options.isDev && new webpack.HotModuleReplacementPlugin(),
		options.isDev && new ReactRefreshWebpackPlugin(),
		options.isDev && new BundleAnalyzerPlugin({
			openAnalyzer: false,
		})
	].filter(el => el !== false);
}
