export default (str: string) => {
   const date = new Date(str)
   const hours = date.getHours()
   const minutes = date.getMinutes()
   const seconds = date.getSeconds()

   if (!hours) return minutes ? minutes + ' m' : seconds + ' s'

   return hours + ' h'
}
