import UserBadge from '@/components/base/userBadge/UserBadge'
import Btn from '@/components/ui/btn/Btn'
import List from '@/components/ui/list/List'
import { getUsers } from '@/testing/__MOCK__/data'
import React from 'react'
import styled from 'styled-components'

type FollowSectionProps = {
   title: string
   btnLabel: string
}

const FollowSection: React.FC<FollowSectionProps> = ({ title, btnLabel }) => {
   return (
      <Section>
         <h3 className="follow-section_title">{title}</h3>
         <List
            style={{ gap: '1rem' }}
            items={getUsers()}
            render={(user) => (
               <UserBadge {...user} button={<Btn>{btnLabel}</Btn>} />
            )}
         />
      </Section>
   )
}
const Section = styled('section')`
   margin-bottom: 2rem;
   padding: 1rem;

   .follow-section_title {
      margin-bottom: 1rem;
   }
`
export default FollowSection
