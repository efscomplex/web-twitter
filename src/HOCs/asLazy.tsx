import asResource from '@/HOCs/asResource'
import React, { lazy } from 'react'

type ResourceProps<P> = Omit<P, 'initialData'>

export type WithInitialData<I = any> = {
   initialData: I
}
function withInitialData<P>(Comp: React.ComponentType<P>, initialData: any) {
   return (props: any) => <Comp initialData={initialData} {...props} />
}

function asLazy<T extends WithInitialData = WithInitialData>(
   Comp: React.ComponentType<T>,
   fetcher: (params: any) => Promise<any>,
   params?: any,
) {
   return asResource<ResourceProps<T>>(
      lazy(() => {
         return new Promise<{ default: React.ComponentType<ResourceProps<T>> }>(
            async (resolve, reject) => {
               try {
                  const initialData = await fetcher(params)
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
