import React from 'react'
import styled from 'styled-components'

type ListProps<T> = {
   items: T[]
   render: (item: T) => JSX.Element
} & React.HTMLAttributes<HTMLElement>

function UiList<T>({ items, render, ...props }: ListProps<T>) {
   const jsxItems = items.map((item) => <li>{render(item)}</li>)

   return <List {...props}>{React.Children.toArray(jsxItems)}</List>
}

const List = styled('ul')`
   display: flex;
   flex-direction: column;
`

export default UiList
