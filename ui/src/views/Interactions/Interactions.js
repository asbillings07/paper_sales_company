import React from 'react'
import { ComponentContainer } from '../../components'
import { Interaction } from './Interaction'
export function Interactions() {
  return (
    <>
      <ComponentContainer id='interaction_container' flexGrow={0} title='Interactions'>
        <Interaction />
      </ComponentContainer>
    </>
  )
}
