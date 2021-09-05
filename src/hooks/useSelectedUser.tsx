import { useSession } from '@/providers/session/UserSessionProvider'
import { useCallback } from 'react'

const useSelectedUser = (id: string, selected: boolean) => {
   const { setSelectedUserId } = useSession()

   const onSelect = useCallback(() => {
      selected ? setSelectedUserId(null) : setSelectedUserId(id)
   }, [selected, setSelectedUserId, id])

   return onSelect
}

export default useSelectedUser
