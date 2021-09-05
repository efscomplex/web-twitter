/* import Twitter from 'twitter-lite'

const consumer_key = 'cnMEmP5tdY2nXVA4iWlrq40Ri'
const consumer_secret = 'YOruMwJjiPiiPivE2G09gnBqfHjd08j7Kt758SH1hSw1AkkUrR'

export type Credential = {
   access_token_key: string
   access_token_secret: string
}

export class TwClient {
   private client: Twitter
   constructor(userCredential: Credential) {
      this.client = new Twitter({
         consumer_key,
         consumer_secret,
         ...userCredential,
      })
   }
   get(endpoint: string) {
      return this.client.get(endpoint)
   }
   post(endpoint: string, data: any) {
      return this.client.post(endpoint, data)
   }
}
 */
