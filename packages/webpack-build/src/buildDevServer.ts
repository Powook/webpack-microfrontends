import { Configuration } from "webpack-dev-server";
import { BuildOptions } from "../types/types";

export function getDevServer(options: BuildOptions): Configuration {
  return {
    port: options.port ?? 4000,
    open: true,
    historyApiFallback: true,
    hot: true
  }
}