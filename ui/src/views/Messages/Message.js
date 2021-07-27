import React, { useEffect } from 'react'
import { useDunderContext } from '../../store'
import { Card, CardContainer } from '../../components'
import { messageReducer } from '../../utils'

export function Message() {
  const { state, agents_customers, setAgentId } = useDunderContext()
  const id = state.interaction?.messages[1].agentId

  useEffect(() => {
    if (id) {
      setAgentId(id)
    }
  }, [id, setAgentId])

  const interactionMessage = state.interaction?.messages.map((message, i) => {
    const agent_customer = messageReducer(
      message.type,
      agents_customers,
      message.agentId,
      state.interaction.customerId
    )
    return (
      <Card id={`message_card${i}`} width='95%' key={message.id}>
        <Card.Title bold={true}>{message.content}</Card.Title>
        <Card.Body>
          <Card.Text>{agent_customer.name}</Card.Text>
        </Card.Body>
      </Card>
    )
  })

  return <CardContainer>{interactionMessage}</CardContainer>
}
