import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { BuildOptions } from "../types/types";
import ReactRefreshTypeScript from 'react-refresh-typescript';

export function getLoaders({mode}: BuildOptions): ModuleOptions['rules'] {
  const IS_PROD = mode === 'production'
  const IS_DEV = mode === 'development'

  const cssLoader = {
    loader: 'css-loader',
    options: {
      modules: {
        localIdentName: IS_PROD ? "[hash:base64:8]" : "[path]_[name]__[local]",
      }
    }
  }
  
  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      IS_PROD ? MiniCssExtractPlugin.loader : 'style-loader',
      cssLoader,
      "sass-loader",
    ],
  }

  const assetsLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  }

  const svgLoader = {
    test: /\.svg$/,
    use: [{loader: '@svgr/webpack', options:{
      icon: true
    }}],
  }

  const tsLoader = {
    test: /\.tsx?$/,
    use: {loader:'ts-loader',
      options: {
        getCustomTransformers: () => ({
          before: [IS_DEV && ReactRefreshTypeScript()].filter(Boolean),
        })
      }
  },
    exclude: /node_modules/,
  }

  return [
    tsLoader ,
    scssLoader,
    svgLoader,
    assetsLoader,
  ]
}