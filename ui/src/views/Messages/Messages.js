import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { ComponentContainer } from '../../components'
import { Message } from './Message'
import { CreateMessage } from './CreateMessage'
import { Button } from '../../components'

export function Messages({ hidden }) {
  const [messageToggle, setMessageToggle] = useState(false)
  return (
    <>
      <ComponentContainer id='messages_container' hidden={hidden} flexGrow={10} title='Messages'>
        <Message />
        <CreateMessage messageToggle={messageToggle} setMessageToggle={setMessageToggle} />
        <Button name='Respond to customer' onClick={() => setMessageToggle(true)} />
      </ComponentContainer>
    </>
  )
}

Messages.propTypes = {
  hidden: PropTypes.bool
}
