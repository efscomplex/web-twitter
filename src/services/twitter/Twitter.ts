import { createRequest } from '@/modules/Fetch'
import { twitterAuth } from '@/services/firebase/Firebase'
import headers from './headers'
let OAUTH_URL = 'https://api.twitter.com/oauth/request_token'
let API_URL = 'https://api.twitter.com/2'

const MODE = 'development'
const host = '127.0.0.1' //SNOWPACK_PUBLIC_PROXY_HOST
const port = '8084' //SNOWPACK_PUBLIC_PROXY_PORT

const PROXY_SERVER_URL = `http://${host}:${port}`

if (MODE === 'development') {
   OAUTH_URL = `${PROXY_SERVER_URL}/${OAUTH_URL}`
   API_URL = `${PROXY_SERVER_URL}/${API_URL}`
}

export class Twitter {
   private static instance: Twitter
   public request: ReturnType<typeof createRequest>
   private headers = headers

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
   send(endpoint: string) {
      return this.request.post(endpoint, this.headers)
   }
   getResource(endpoint: string) {
      return this.request.get(endpoint, this.headers).then((resp) => resp.data)
   }
   login() {
      return twitterAuth()
   }
}

export const createTwitterService = Twitter.getInstance
