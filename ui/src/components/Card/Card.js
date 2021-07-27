import PropTypes from 'prop-types'
import React from 'react'
import classNames from 'classnames'
import { Container, Body, Title, Text, Button, ButtonContainer } from './style'

export function Card({ classes, children, ...restProps }) {
  return (
    <Container className={classNames('card', classes)} {...restProps}>
      {children}
    </Container>
  )
}

Card.Body = function CardBody({ classes, children, ...restProps }) {
  return (
    <Body className={classNames('card__body', classes)} {...restProps}>
      {children}
    </Body>
  )
}

Card.Title = function CardTitle({ classes, children, ...restProps }) {
  return (
    <Title className={classNames('card__title', classes)} {...restProps}>
      {children}
    </Title>
  )
}

Card.Text = function CardText({ classes, children, ...restProps }) {
  return (
    <Text className={classNames('card__text', classes)} {...restProps}>
      {children}
    </Text>
  )
}

Card.Button = function CardButton({ classes, buttonType, size = 'small', children, ...restProps }) {
  return (
    <Button
      buttonType={buttonType}
      size={size}
      type='button'
      className={classNames('card__button', classes)}
      {...restProps}
    >
      {children}
    </Button>
  )
}

Card.ButtonContainer = function ContainerButton({ classes, children, ...restProps }) {
  return (
    <ButtonContainer className={classNames('card__button', classes)} {...restProps}>
      {children}
    </ButtonContainer>
  )
}

Card.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.string
}

Card.Body.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.string
}

Card.Title.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.string
}

Card.Text.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.string
}

Card.Button.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.string
}
