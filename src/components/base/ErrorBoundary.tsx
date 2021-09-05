import React from 'react'

/**
 * @param errorCb - the error callback a function that the component will render as a fallback
 */

type ErrorMsg = ReturnType<React.FC>
export type ErrorBoundaryProps = { errorCb?: () => ErrorMsg }

export class ErrorBoundary extends React.Component<
   ErrorBoundaryProps,
   { hasError: boolean }
> {
   constructor(props: ErrorBoundaryProps) {
      super(props)
      this.state = { hasError: false }
   }

   static getDerivedStateFromError(error: Error) {
      return { hasError: true }
   }

   render() {
      const { hasError } = this.state
      const { errorCb } = this.props

      return hasError ? errorCb?.() || null : this.props.children
   }
}
