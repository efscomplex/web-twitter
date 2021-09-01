import asResource from '@/HOCs/asResource'
import React, { lazy } from 'react'

type ResourceProps<P> = Exclude<P, 'initialData'>

export type WithInitialData = {
   initialData: any
}
function withInitialData<P, I>(Comp: React.ComponentType<P>, initialData: I) {
   return (props: P) => <Comp initialData={initialData} {...props} />
}

function asLazy<T extends WithInitialData = WithInitialData>(
   Comp: React.ComponentType<T>,
   fetcher: () => Promise<any>,
) {
   return asResource<ResourceProps<T>>(
      lazy(() => {
         return new Promise<{ default: React.ComponentType<ResourceProps<T>> }>(
            async (resolve, reject) => {
               try {
                  const initialData = await fetcher()
                  resolve({ default: withInitialData(Comp, initialData) })
               } catch (error) {
                  reject(error)
               }
            },
         )
      }),
   )
}
export default asLazy
