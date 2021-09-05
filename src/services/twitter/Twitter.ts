import { createRequest } from '@/modules/Fetch'
import { Oauth } from '@/modules/Oauth'
import { twitterAuth } from '@/services/firebase/Firebase'
import { API_URL_v1, API_URL_v2, BEARER_TOKEN } from './twitterConf'
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

   send(endpoint: string) {
      return this.api_v2.post(endpoint, this.headers_bearer)
   }

   get(endpoint: string) {
      return this.api_v2.get(endpoint, this.headers_bearer)
   }

   post(endpoint: string) {
      if (!this.oauth) throw 'Please, before twitting setCredential!'
      const url = this.api_v1.getUrl(endpoint)
      const params = this.oauth.getParams(url, 'POST')
      const uri = `${endpoint}&${params}`
      return this.api_v1.post(uri)
   }
   login() {
      return twitterAuth()
   }
}

export const createTwitterService = Twitter.getInstance
