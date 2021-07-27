import PropTypes from 'prop-types'
import React from 'react'
import { StyledButton } from './style'
import classNames from 'classnames'

export function Button({
  classes,
  buttonType = 'standard',
  name = null,
  disabled = false,
  type = 'button',
  size = 'dunder',
  onClick = () => false,
  ...restProps
}) {
  return (
    <StyledButton
      disabled={disabled}
      size={size}
      type={type}
      buttonType={buttonType}
      onClick={onClick}
      className={classNames(`${buttonType}_button`, classes)}
      {...restProps}
    >
      {name}
    </StyledButton>
  )
}

Button.propTypes = {
  awaitedResourceDidLoad: PropTypes.bool,
  buttonType: PropTypes.string,
  classes: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  onClick: PropTypes.func,
  onClickAfterLoaded: PropTypes.func,
  progress: PropTypes.number,
  showLoadOnClick: PropTypes.bool,
  size: PropTypes.string,
  type: PropTypes.string
}
