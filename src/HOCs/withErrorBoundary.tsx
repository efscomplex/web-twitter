import { ErrorBoundary, ErrorMsg } from '@/components/base/ErrorBoundary'
import React from 'react'

export type SafetyProps<T> = T & {
   errorMsg?: ErrorMsg
}

function withErrorBoundary<P>(Comp: React.ComponentType<P>) {
   const SafetyComponent: React.FC<SafetyProps<P>> = ({
      errorMsg,
      ...props
   }) => (
      <ErrorBoundary errorMsg={errorMsg}>
         <Comp {...(props as P)} />
      </ErrorBoundary>
   )
   SafetyComponent.displayName = `${Comp.displayName} - with error bounday`

   return SafetyComponent
}

export default withErrorBoundary
