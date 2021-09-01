import React from 'react'

export type ErrorMsg = ReturnType<React.FC>
type Props = { errorMsg?: ErrorMsg }

export class ErrorBoundary extends React.Component<
   Props,
   { hasError: boolean }
> {
   constructor(props: Props) {
      super(props)
      this.state = { hasError: false }
   }

   static getDerivedStateFromError(error: Error) {
      console.log(error)
      return { hasError: true }
   }

   render() {
      const { hasError } = this.state
      const { errorMsg } = this.props

      return hasError ? errorMsg || null : this.props.children
   }
}
