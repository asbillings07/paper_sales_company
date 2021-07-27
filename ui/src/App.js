import React from 'react'
import { GlobalStyle } from '../Global'
import { MainView } from './views/MainView'
import { Heading } from './components'

export function App() {
  return (
    <>
      <Heading title='Paper Sales Company' />
      <GlobalStyle />
      <MainView />
    </>
  )
}
