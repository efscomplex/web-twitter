import { useSession } from '@/providers/session/SessionProvider'
import type { ResourceParams } from '@/services/twitter/api/resources'
import { useMemo, useState } from 'react'

const useResource = (fetcher: any, options: ResourceParams) => {
   const { user } = useSession()
   const [resource, setResource] = useState()

   useMemo(() => {
      fetcher(user.id).then(setResource).catch()
   }, [user.id])

   return resource
}

export default useResource
