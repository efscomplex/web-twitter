export const createRequest = (url: string) => {
   class Fetch {
      constructor(public url: string) {}

      getUrl(endpoint: string) {
         return `${this.url}/${endpoint}`
      }

      get(endpoint: string, headers?: HeadersInit) {
         return fetch(this.getUrl(endpoint), { headers }).then((resp) =>
            resp.json(),
         )
      }

      post(endpoint: string, headers?: HeadersInit) {
         return fetch(this.getUrl(endpoint), {
            method: 'POST',
            headers,
         }).then((resp) => resp.json())
      }
   }

   return new Fetch(url)
}
