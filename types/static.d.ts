import 'styled-components'
declare module '*.module.css' {
   const classes: { [key: string]: string }
   export default classes
}
declare module '*.module.scss' {
   const classes: { [key: string]: string }
   export default classes
}
declare module '*.module.sass' {
   const classes: { [key: string]: string }
   export default classes
}
declare module '*.module.less' {
   const classes: { [key: string]: string }
   export default classes
}
declare module '*.module.styl' {
   const classes: { [key: string]: string }
   export default classes
}

/* CSS */
declare module '*.css'
declare module '*.scss'
declare module '*.sass'
declare module '*.less'
declare module '*.styl'

/* IMAGES */
declare module '*.svg' {
   const ref: string
   export default ref
}
declare module '*.bmp' {
   const ref: string
   export default ref
}
declare module '*.gif' {
   const ref: string
   export default ref
}
declare module '*.jpg' {
   const ref: string
   export default ref
}
declare module '*.jpeg' {
   const ref: string
   export default ref
}
declare module '*.png' {
   const ref: string
   export default ref
}

/* CUSTOM: ADD YOUR OWN HERE */
declare const __SNOWPACK_ENV__
declare module 'faker'
declare module 'styled-components' {
   export interface DefaultTheme {
      br: string
      surface_br: string
      onPrimary: string
      primary: string
      color: string
      bg: string
   }
}
