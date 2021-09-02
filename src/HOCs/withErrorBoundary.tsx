import {
   ErrorBoundary,
   ErrorBoundaryProps,
} from '@/components/base/ErrorBoundary'
import React from 'react'

export type SafetyProps<T> = T & ErrorBoundaryProps

function withErrorBoundary<P>(Comp: React.ComponentType<P>) {
   const SafetyComponent: React.FC<SafetyProps<P>> = ({
      errorCb,
      ...props
   }) => (
      <ErrorBoundary errorCb={errorCb}>
         <Comp {...(props as P)} />
      </ErrorBoundary>
   )
   SafetyComponent.displayName = `${Comp.displayName} - with error bounday`

   return SafetyComponent
}

export default withErrorBoundary
