import.meta.env

const { SNOWPACK_PUBLIC_BEARER_TOKEN_TWITTER } = __SNOWPACK_ENV__

const BEARER_TOKEN = SNOWPACK_PUBLIC_BEARER_TOKEN_TWITTER

let API_URL_v2 = 'https://api.twitter.com/2'
let API_URL_v1 = 'https://api.twitter.com/1.1'

const MODE = 'development'
const host = '127.0.0.1' //SNOWPACK_PUBLIC_PROXY_HOST
const port = '8084' //SNOWPACK_PUBLIC_PROXY_PORT

const PROXY_SERVER_URL = `http://${host}:${port}`

if (MODE === 'development') {
   API_URL_v1 = `${PROXY_SERVER_URL}/${API_URL_v1}`
   API_URL_v2 = `${PROXY_SERVER_URL}/${API_URL_v2}`
}
export { API_URL_v1, API_URL_v2, BEARER_TOKEN }
