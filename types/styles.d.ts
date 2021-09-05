/* import 'styled-components' */
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
/* declare module 'styled-components' {
   export interface DefaultTheme {
      br: string
      surface_br: string
      onPrimary: string
      primary: string
      color: string
      bg: string
   }
} */
