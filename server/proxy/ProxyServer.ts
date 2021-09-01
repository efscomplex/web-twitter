import cors_proxy from 'cors-anywhere'

const { SNOWPACK_PUBLIC_PROXY_HOST: host, SNOWPACK_PUBLIC_PROXY_PORT: port } =
   __SNOWPACK_ENV__

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
