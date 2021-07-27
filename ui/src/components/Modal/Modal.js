import PropTypes from 'prop-types'
import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import { Container, Inner, Close, Header, Body, Button } from './style'

export function Modal({ classes, toggle, setToggle, children, ...restProps }) {
  return toggle
    ? ReactDOM.createPortal(
        <Container className={classNames('modal', classes)} {...restProps}>
          <Inner>
            <Close onClick={() => setToggle(!toggle)} />
            {children}
          </Inner>
        </Container>,
        document.body
      )
    : null
}

Modal.Header = function ModalHeader({ classes, children, ...restProps }) {
  return (
    <Header className={classNames('modal_header', classes)} {...restProps}>
      {children}
    </Header>
  )
}

Modal.Body = function ModalBody({ classes, children, ...restProps }) {
  return (
    <Body className={classNames('modal_body', classes)} {...restProps}>
      {children}
    </Body>
  )
}

Modal.Button = function ModalButton({ classes, name, onClick = () => false, ...restProps }) {
  return (
    <Button onClick={onClick} className={classNames('modal_button', classes)} {...restProps}>
      {name}
    </Button>
  )
}

Modal.Body.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.any
}

Modal.Button.propTypes = {
  name: PropTypes.any,
  classes: PropTypes.any,
  onClick: PropTypes.func
}

Modal.Header.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.any
}

Modal.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.any,
  setToggle: PropTypes.func,
  toggle: PropTypes.any
}
