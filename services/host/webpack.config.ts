
import { BuildPaths, Mode, buildWebpack } from '@packages/webpack-build'
import path from 'path'
import webpack from 'webpack'
import packageJson from './package.json'

interface Envs {
  mode: Mode
}

export default (env: Envs) => {

  const ADMIN_REMOTE_URL = 'http://localhost:4001'
  const DASHBOARD_REMOTE_URL = 'http://localhost:4002'

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
  })

  config.plugins.push(new webpack.container.ModuleFederationPlugin({
    name:'host',
    filename:'remoteEntry.js',
    remotes: {
      admin:`admin@${ADMIN_REMOTE_URL}/remoteEntry.js`,
      // dashboard:`dashboard@${DASHBOARD_REMOTE_URL}/remoteEntry.js`
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