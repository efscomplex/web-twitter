import React from 'react'
import useSelectedUser from '@/hooks/useSelectedUser'
import type { UserData } from '@/services/twitter/models/twitterModels'

export type SelectorProps = {
   selected?: boolean
   onClick?: any
}
function withSelectedUser<T extends UserData & SelectorProps>(
   Comp: React.ComponentType<T>,
) {
   const EnhancedComp: React.FC<T> = ({ children, ...props }) => {
      const onSelect = useSelectedUser(props.id, props.selected as any)
      return (
         <Comp {...(props as T)} onClick={onSelect}>
            {children}
         </Comp>
      )
   }
   return EnhancedComp
}
export default withSelectedUser
