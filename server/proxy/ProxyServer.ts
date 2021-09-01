import cors_proxy from 'cors-anywhere'

const host = '127.0.0.1' //SNOWPACK_PUBLIC_PROXY_HOST
const port = '8084' //SNOWPACK_PUBLIC_PROXY_PORT

export const createProxyServer = () => {
   return new Promise((resolve, reject) => {
      cors_proxy
         .createServer({
            originWhitelist: [], // Allow all origins
            requireHeader: ['origin', 'x-requested-with'],
            removeHeaders: ['cookie', 'cookie2'],
         })
         .listen(port, host, () => {
            resolve('Running CORS Anywhere on ' + host + ':' + port)
         })
   })
}
