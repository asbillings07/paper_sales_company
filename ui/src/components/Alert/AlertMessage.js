import PropTypes from 'prop-types'
import React from 'react'
import { Alert, CloseButton, Messages, List } from './style'

export function AlertMessage({
  message,
  alertType = 'info',
  isOpen,
  onClose,
  listStyle = 'unstyled'
}) {
  return (
    <div>
      {isOpen ? (
        <Alert alertType={alertType}>
          {Array.isArray(message) ? (
            <Messages>
              {message.map((err, i) => (
                <List listStyle={listStyle} key={i}>
                  {err}
                </List>
              ))}
            </Messages>
          ) : (
            <span>{message}</span>
          )}
          <CloseButton
            buttonType='unstyled'
            domID='alert-close-button'
            name='X'
            onClick={onClose}
            size='medium'
          />
        </Alert>
      ) : (
        ''
      )}
    </div>
  )
}

AlertMessage.propTypes = {
  alertType: PropTypes.oneOf(['warning', 'info', 'success']).isRequired,
  isOpen: PropTypes.bool.isRequired,
  listStyle: PropTypes.oneOf(['number', 'unstyled', 'circle', 'disc', 'square']),
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  onClose: PropTypes.func.isRequired
}
