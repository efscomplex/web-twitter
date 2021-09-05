import { createRequest } from '@/modules/Fetch'
import { Oauth } from '@/modules/Oauth'
import { twitterAuth } from '@/services/firebase/Firebase'
import { BEARER_TOKEN } from './headers'

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

/* consumer_key: 'cnMEmP5tdY2nXVA4iWlrq40Ri',
   consumer_secret: 'YOruMwJjiPiiPivE2G09gnBqfHjd08j7Kt758SH1hSw1AkkUrR',
   access_token_key: '1015543898-Mkq72jfcOxGYJBNj2NzXkk8Za5dDcNpKE6hPc6X',
   access_token_secret: 'ZG9Uxv77OGBYIEcbm4rttogoU04PCJfrKaZD6fW3wq9Nw', */
export class Twitter {
   private static instance: Twitter
   private oauth: Oauth | undefined
   private headers_bearer = { Authorization: `Bearer ${BEARER_TOKEN}` }

   public api_v1: ReturnType<typeof createRequest> = createRequest(API_URL_v1)
   public api_v2: ReturnType<typeof createRequest> = createRequest(API_URL_v2)

   private constructor() {}

   public static getInstance() {
      if (!Twitter.instance) Twitter.instance = new Twitter()
      return Twitter.instance
   }
   setCredential(credential: any) {
      this.oauth = new Oauth(credential)
   }
   getOatuh1Headers() {
      const headers = new Headers()
      headers.append(
         'Cookie',
         'guest_id=v1%3A163039460597294965; personalization_id="v1_ZCXTHJOsTbmeOjN1NHTbrA=="; lang=ca',
      )

      return headers
   }
   send(endpoint: string) {
      return this.api_v2.post(endpoint, this.headers_bearer)
   }
   get(endpoint: string) {
      return this.api_v2.get(endpoint, this.headers_bearer)
   }
   post(endpoint: string, data?: any) {
      if (!this.oauth) throw 'Please, before twitting setCredential!'
      const url = this.api_v1.getUrl(endpoint)
      const params = this.oauth.getParams(url, 'POST')
      const uri = `${endpoint}&${params}`
      return this.api_v1.post(uri, this.getOatuh1Headers())
   }
   login() {
      return twitterAuth()
   }
}

export const createTwitterService = Twitter.getInstance
