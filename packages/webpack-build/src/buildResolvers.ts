import { Configuration } from "webpack";
import { BuildOptions } from "../types/types";

export function getResolvers(options: BuildOptions): Configuration['resolve'] {
  return {
    alias: {
      "@": options.paths.src,
      "assets": options.paths.assets
    },
    extensions: ['.tsx', '.ts', '.js'],
  }
}