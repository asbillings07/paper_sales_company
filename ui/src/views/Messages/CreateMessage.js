import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import { useSetError } from '../../store/hooks'
import { Modal, TextArea } from '../../components'
import { useDunderContext } from '../../store'

export function CreateMessage({ messageToggle, setMessageToggle }) {
  const { createMessage, dispatch, interactionId, agentId } = useDunderContext()
  const [message, setMessage] = useState('')
  const [error, setError] = useSetError(false, message)

  const handleSubmit = () => {
    const messageInfo = {
      content: message,
      type: 'agent_message',
      agentId
    }
    if (message) {
      dispatch(createMessage(interactionId, messageInfo))
      setMessageToggle(false)
    } else {
      setError(true)
    }
  }

  return (
    <Modal id='message_modal' toggle={messageToggle} setToggle={setMessageToggle}>
      <Modal.Header>New message to customer</Modal.Header>
      <Modal.Body>
        <h5>Agent Id: {agentId}</h5>
        <TextArea
          label='Message to customer:'
          name='content'
          domID='content'
          hasError={error}
          errorMessage='Field can not be submitted when empty'
          onChange={(e) => setMessage(e.target.value)}
        />
      </Modal.Body>
      <Modal.Button id='createMessageButton' name='Send message' onClick={handleSubmit} />
    </Modal>
  )
}

CreateMessage.propTypes = {
  setMessageToggle: PropTypes.func,
  messageToggle: PropTypes.bool
}
