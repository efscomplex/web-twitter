import suspense from '@/HOCs/suspense'
import type { SafetyProps } from '@/HOCs/withErrorBoundary'
import withErrorBoundary from '@/HOCs/withErrorBoundary'

type ResourceProps<T> = T & SafetyProps<T> & React.SuspenseProps

function asResource<P>(Comp: React.ComponentType<P>) {
   const SuspensedComponent = suspense<P>(Comp)
   const ResourceComponent =
      withErrorBoundary<ResourceProps<P>>(SuspensedComponent)

   ResourceComponent.displayName = `resource(${Comp.displayName})`

   return ResourceComponent
}

export default asResource
