import React, { Suspense } from 'react'

type S = Partial<React.SuspenseProps>

function suspense<P>(Comp: React.ComponentType<P>) {
   const Suspensed: React.FC<P & S> = ({ fallback, ...props }) => (
      <Suspense fallback={fallback || null}>
         <Comp {...(props as P)} />
      </Suspense>
   )
   Suspensed.displayName = `Suspensed - ${Comp.displayName}`

   return Suspensed
}
export default suspense
