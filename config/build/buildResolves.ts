import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolves({ src }: BuildOptions['paths']): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js', '.sass'],
        preferAbsolute: true,
        modules: [src, 'node_modules'],
        mainFiles: ['index'],
        alias: {},
    }
}