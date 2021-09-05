import { useCallback, useMemo, useState } from 'react'

const useQuery = (fetcher: any) => {
   const [error, setError] = useState<any>(null)
   const [loading, setLoading] = useState(false)

   const query = useCallback(
      async (params: any) => {
         try {
            const data = await fetcher(params)
            setLoading(false)
            return data
         } catch (err) {
            setError(err)
            setLoading(false)
         }
      },
      [fetcher],
   )

   return { query, loading, error }
}

export default useQuery
