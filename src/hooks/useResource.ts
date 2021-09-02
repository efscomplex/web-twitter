import { useUserData } from '@/providers/auth/UserDataProvider'
import type { ResourceParams } from '@/services/twitter/api/resources'
import { useMemo, useState } from 'react'

const useResource = (fetcher: any, options: ResourceParams) => {
   const { id } = useUserData()
   const [resource, setResource] = useState()

   useMemo(() => {
      fetcher(id).then(setResource).catch()
   }, [id])

   return resource
}

export default useResource
