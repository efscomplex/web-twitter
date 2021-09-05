export const createRequest = (url: string) => {
   class Fetch {
      private headers: HeadersInit | undefined
      constructor(public url: string, headers?: HeadersInit) {}

      setHeaders(headers: HeadersInit) {
         this.headers = new Headers(headers)
      }
      getUrl(endpoint: string) {
         return `${this.url}/${endpoint}`
      }

      get(endpoint: string, headers?: HeadersInit) {
         return fetch(this.getUrl(endpoint), {
            headers: headers || this.headers,
         }).then((resp) => resp.json())
      }

      post(endpoint: string, headers?: any) {
         return fetch(this.getUrl(endpoint), {
            method: 'POST',
            headers: headers || this.headers,
            redirect: 'follow',
         }).then((resp) => resp.json())
      }
   }

   return new Fetch(url)
}
