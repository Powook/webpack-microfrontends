
import {buildWebpack, BuildPaths, Mode} from '@packages/webpack-build'
import path from 'path'
import webpack from 'webpack'
import packageJson from './package.json'

interface Envs {
  mode: Mode,
  port?: number
}

export default (env: Envs) => {

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    assets: path.resolve(__dirname, 'assets')
  }

  const config = buildWebpack({
    mode: env.mode ?? 'development',
    paths,
    env,
    port: env.port ?? 4001
  })

  config.plugins.push(new webpack.container.ModuleFederationPlugin({
    name:'admin',
    filename:'remoteEntry.js',
    exposes: {
      './Router': './router/Router.tsx'
    },
    shared: {
      ...packageJson.dependencies,
      'react': {
        eager: true,
        requiredVersion: packageJson.dependencies['react']
      },
      'react-router-dom': {
        eager: true,
        requiredVersion: packageJson.dependencies['react-router-dom']
      },
      'react-dom': {
        eager: true,
        requiredVersion: packageJson.dependencies['react-dom']
      }
    }
  }))

  return config
}