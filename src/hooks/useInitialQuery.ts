import useQuery from '@/hooks/useQuery'
import { useEffect } from 'react'

const useInitialQuery = (query: any, queryParams: any) => {
   const queryData = useQuery(query)

   useEffect(() => {
      queryData.query(queryParams)
   }, [queryParams])

   return queryData
}

export default useInitialQuery
