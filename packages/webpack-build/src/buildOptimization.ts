import { Configuration } from "webpack";
import TerserPlugin from 'terser-webpack-plugin';

export function getOptimization(): Configuration['optimization'] {
  return {
    minimizer: [new TerserPlugin({
      extractComments: false,
    })],
  }
}