import List from '@/components/ui/list/List'
import { useSession } from '@/providers/session/SessionProvider'
import type { UserData } from '@/services/twitter/models/twitterModels'
import React from 'react'
import styled from 'styled-components'

export type FollowsSectionProps = {
   title: string
   users: UserData[]
   badgeRender: (user: UserData) => any
}

const FollowsSection: React.FC<FollowsSectionProps> = ({
   title,
   users,
   badgeRender,
}) => {
   return (
      <Section>
         <h3 className="follow-section_title">{title}</h3>
         <List style={{ gap: '1rem' }} items={users} render={badgeRender} />
      </Section>
   )
}

const Section = styled('section')`
   margin-bottom: 2rem;
   .follow-section_title {
      margin-bottom: 1rem;
   }
`
export default FollowsSection
