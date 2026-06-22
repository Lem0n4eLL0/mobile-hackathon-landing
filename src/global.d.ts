declare module '*.css'
declare module '*.scss'
declare module '*.sass'
declare module '*.less'

declare module '*.module.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}
declare module '*.module.scss' {
  const classes: { readonly [key: string]: string }
  export default classes
}
declare module '*.module.sass' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.webp'
declare module '*.avif'

declare module '*.svg' {
  const src: string
  export default src
}

declare module '*.woff'
declare module '*.woff2'
declare module '*.ttf'
declare module '*.eot'

declare module '*.mp4'
declare module '*.webm'
declare module '*.mp3'
declare module '*.wav'
