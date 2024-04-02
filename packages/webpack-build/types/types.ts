export type BuildPaths = {
  entry: string,
  html: string,
  output: string,
  src: string,
  assets: string
}

export type Mode = 'development' | 'production'

export type BuildOptions = {
  paths: BuildPaths,
  mode: Mode
  env: any,
  port?: number
}