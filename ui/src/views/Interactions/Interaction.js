import React, { useState } from 'react'
import { useDunderContext } from '../../store'
import { Card, CardContainer } from '../../components'
import { findById } from '../../utils'

export function Interaction() {
  const { state, setIsHidden, setInteractionId } = useDunderContext()

  const [activeId, setActiveId] = useState(null)

  const runActions = (id) => {
    setActiveId(id)
    setInteractionId(id)
    setIsHidden(false)
  }

  const customerInteractions = state.interactions?.map((interaction) => {
    const { id, title, customerId } = interaction
    const customer = findById(customerId, state.customers)

    return (
      <Card
        id={`interaction_card${id}`}
        width='100%'
        key={id}
        hovered={true}
        selected={activeId === id}
        onClick={() => runActions(id)}
      >
        <Card.Title bold={true}>{title}</Card.Title>
        <Card.Body>
          <Card.Text>{customer?.name}</Card.Text>
          <Card.Text>{customer?.email}</Card.Text>
        </Card.Body>
      </Card>
    )
  })

  return <CardContainer>{customerInteractions}</CardContainer>
}
