import { createRequest } from '@/modules/Fetch'

let OAUTH_URL = 'https://api.twitter.com/oauth/request_token'
let API_URL = 'https://api.twitter.com/2'

const host = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_PROXY_HOST
const port = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_PROXY_PORT

const PROXY_SERVER_URL = `http://${host}:${port}`

if (__SNOWPACK_ENV__.MODE === 'development') {
   OAUTH_URL = `${PROXY_SERVER_URL}/${OAUTH_URL}`
   API_URL = `${PROXY_SERVER_URL}/${API_URL}`
}

class Twitter {
   private static instance: Twitter
   public request: ReturnType<typeof createRequest>

   private constructor() {
      this.request = createRequest(API_URL)
   }

   public static getInstance() {
      if (!Twitter.instance) Twitter.instance = new Twitter()
      return Twitter.instance
   }

   getToken() {
      const headers = {}
      return fetch(OAUTH_URL, { method: 'POST', headers })
   }

   getResource(endpoint: string) {
      return this.request.resource(endpoint)
   }
}

export const createTwitterService = Twitter.getInstance
