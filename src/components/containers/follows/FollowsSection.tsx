import UserBadge from '@/components/base/userBadge/UserBadge'
import Btn from '@/components/ui/btn/Btn'
import List from '@/components/ui/list/List'
import type { UserData } from '@/services/twitter/models/indext'
import React from 'react'
import styled from 'styled-components'

type FollowSectionProps = {
   title: string
   btnLabel: string
   initialData: UserData[]
}

const FollowsSection: React.FC<FollowSectionProps> = ({
   title,
   btnLabel,
   initialData: users,
}) => {
   return (
      <Section>
         <h3 className="follow-section_title">{title}</h3>
         <List
            style={{ gap: '1rem' }}
            items={users}
            render={(user) => (
               <UserBadge {...user} button={<Btn>{btnLabel}</Btn>} />
            )}
         />
      </Section>
   )
}
const Section = styled('section')`
   margin-bottom: 2rem;
   background-color: var(--surface);
   .follow-section_title {
      margin-bottom: 1rem;
   }
`
export default FollowsSection
