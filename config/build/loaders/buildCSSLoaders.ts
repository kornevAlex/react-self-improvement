import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from '../types/config';

export function buildCSSLoaders (isDev: BuildOptions['isDev']){
	return {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? 'style-loader': MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: (resPath: string) => Boolean(resPath.includes('.module')),
						localIdentName: isDev
							? '[path][name]__[local]__[hash:base64:8]'
							: '[hash:base64:8]',
					},
				}
			},
			'sass-loader',
		],
	};
}
