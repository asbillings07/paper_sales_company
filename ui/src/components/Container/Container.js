import PropTypes from 'prop-types'
import React from 'react'
import classNames from 'classnames'
import { Title, InteractionContainer, MessagesContainer, NotesContainer } from '..'

const componentMap = {
  Interactions: InteractionContainer,
  Messages: MessagesContainer,
  Notes: NotesContainer
}

export function ComponentContainer({ classes, title, children, ...restProps }) {
  const Container = componentMap[title]
  return (
    <>
      <Container className={classNames(`${title}_container`, classes)} {...restProps}>
        <Title>{title}</Title>
        {children}
      </Container>
    </>
  )
}

ComponentContainer.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.string,
  title: PropTypes.string.isRequired
}
