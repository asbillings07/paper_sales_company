import PropTypes from 'prop-types'
import React from 'react'
import { StyledTextArea, TextAreaLabel, ErrorMessage, Wrapper } from './style'

export function TextArea({
  label = null,
  name = null,
  initialValue = '',
  domID = null,
  cols = null,
  errorMessage = '',
  hasError = null,
  rows = null,
  disabled = false,
  placeholder = null,
  readOnly = false,
  value,
  onChange = () => false,
  onClick = () => false,
  autoFocus = false
}) {
  if (label && !domID) {
    console.warn('Please enter a valid "domID" prop into Input component')
  }

  return (
    <Wrapper hasError={hasError}>
      {label ? <TextAreaLabel htmlFor={domID}>{label}</TextAreaLabel> : null}

      <StyledTextArea
        id={domID}
        name={name}
        rows={rows}
        readOnly={readOnly}
        initialValue={initialValue}
        value={value}
        autoFocus={autoFocus}
        cols={cols}
        onChange={onChange}
        onClick={onClick}
        placeholder={placeholder}
        disabled={disabled}
      />
      {hasError ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
    </Wrapper>
  )
}

TextArea.propTypes = {
  autoFocus: PropTypes.bool,
  cols: PropTypes.number,
  disabled: PropTypes.bool,
  domID: PropTypes.string,
  initialValue: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  rows: PropTypes.number
}
