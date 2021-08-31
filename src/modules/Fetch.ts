import type { RequestOptions } from 'http'

export const createRequest = (url: string) => {
   class Fetch {
      constructor(public url: string) {}

      getUrl(endpoint: string) {
         return `${this.url}/${endpoint}`
      }

      resource(endpoint: string, headers?: any) {
         return fetch(this.getUrl(endpoint), { headers }).then((resp) =>
            resp.json(),
         )
      }

      send(endpoint: string, options: RequestInit) {
         return fetch(this.getUrl(endpoint), {
            method: 'POST',
            ...options,
         })
      }
   }

   return new Fetch(url)
}
