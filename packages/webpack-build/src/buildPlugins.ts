import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { Configuration, DefinePlugin } from "webpack";
import { BuildOptions } from "../types/types";
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

export function getPlugins ({paths, mode}: BuildOptions) {

  const IS_PROD = mode === 'production'
  const IS_DEV = mode === 'development'

  const htmlPlugin = new HtmlWebpackPlugin({template: paths.html})
  const definePlugin = new DefinePlugin({
    __MODE__: JSON.stringify(mode)
  })
  const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename:'css/[name].[contenthash:8].css'
  })

  const plugins: Configuration['plugins'] = [htmlPlugin, definePlugin]

  if (IS_PROD) {
    plugins.push(miniCssExtractPlugin)
  }

  if (IS_DEV) {
    plugins.push(new ForkTsCheckerWebpackPlugin(), new ReactRefreshWebpackPlugin())
  }

  return plugins
}