import oauthSignature from 'oauth-signature'

const parameters = {
   oauth_nonce: 'DSoO3UktmBI',
   oauth_timestamp: Math.floor(Date.now() / 1000),
   oauth_signature_method: 'HMAC-SHA1',
   oauth_version: '1.0',
}
const consumerSecret = 'YOruMwJjiPiiPivE2G09gnBqfHjd08j7Kt758SH1hSw1AkkUrR'
const tokenSecret = 'ZG9Uxv77OGBYIEcbm4rttogoU04PCJfrKaZD6fW3wq9Nw'

type Credential = {
   oauth_consumer_key: string
   oauth_token: string
}

export class Oauth {
   private params: any
   constructor(private credential: Credential) {
      this.params = {
         ...parameters,
         ...this.credential,
      }
   }
   getSignature(url: string, method: string) {
      return oauthSignature.generate(
         method,
         url,
         this.params,
         consumerSecret,
         tokenSecret,
      )
   }
   getParams(url: string, method: string) {
      const oauth_signature = this.getSignature(url, method)

      return this.getUrlParams({
         ...this.params,
         oauth_signature,
      })
   }
   private getUrlParams(params: any) {
      let res = ''
      for (const key in params) {
         res += `${key}=${params[key]}&`
      }
      return res.slice(0, -1)
   }
}
