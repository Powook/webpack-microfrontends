declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.png'
declare module '*.jpg'
declare module '*.svg'

declare const __MODE__ : 'production' | 'development'