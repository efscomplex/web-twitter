import { useCallback, useState } from 'react'

const useQuery = (fetcher: any) => {
   const [data, setData] = useState()
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState(null)

   const query = useCallback(
      (params: any) => {
         setLoading(true)
         return fetcher(params)
            .then(setData)
            .catch(setError)
            .finally(() => {
               setLoading(false)
            })
      },
      [fetcher],
   )

   return { query, loading, error, data }
}

export default useQuery
