import asResource from '@/HOCs/asResource'
import React, { lazy } from 'react'

function withProps<P>(Comp: React.ComponentType<P>, props: P) {
   const Wrap: React.FC = ({ children }) => <Comp {...props}>{children}</Comp>
   Wrap.displayName = Comp.displayName

   return Wrap
}
export type GetStaticProps<Context, R = any> = (context?: Context) => Promise<R>

function withStaticProps<Props, C>(
   Comp: React.ComponentType<Props>,
   getStaticProps: GetStaticProps<C>,
   context?: C,
) {
   return asResource(
      lazy(() => {
         return new Promise<{ default: any }>(async (resolve, reject) => {
            try {
               const props = await getStaticProps(context)
               resolve({
                  default: withProps(Comp, props),
               })
            } catch (error) {
               reject(error)
            }
         })
      }),
   )
}
export default withStaticProps
