import withStaticProps, { GetStaticProps } from '@/HOCs/withStaticProps'
import React, { useRef } from 'react'

const useLacyComp = <P, C>(
   Component: React.ComponentType<P>,
   getStaticProps: GetStaticProps<C>,
   context?: any,
) => {
   return useRef(withStaticProps(Component, getStaticProps, context)).current
}

export default useLacyComp
