import webpack from 'webpack'
import 'webpack-dev-server';
import { getLoaders } from './buildLoaders';
import { getPlugins } from './buildPlugins';
import { getDevServer } from './buildDevServer';
import { getResolvers } from './buildResolvers';
import { BuildOptions } from '../types/types';
import { getOptimization } from './buildOptimization';

export function buildWebpack (options: BuildOptions): webpack.Configuration {
  const {env, mode, paths} = options

  const IS_DEV = mode === 'development'

  return ({
    mode: env.mode,
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: '[name].[hash].js',
      clean: true
    },
    plugins: getPlugins(options),
    module: {rules: getLoaders(options)},
    resolve: getResolvers(options),
    devtool: IS_DEV ? 'eval-cheap-source-map' : 'source-map',
    devServer: IS_DEV ? getDevServer(options) : undefined,
    optimization: getOptimization(),
  })
}