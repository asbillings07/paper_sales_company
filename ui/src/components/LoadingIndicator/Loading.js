import React from 'react'
import { LoadingContainer, LoadingWrapper } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export const LoadingIndicator = ({ isOpen, size = '4x' }) => {
  return (
    <div>
      {isOpen ? (
        <LoadingWrapper>
          <LoadingContainer>
            <FontAwesomeIcon size={size} icon={faSpinner} spin />
          </LoadingContainer>
        </LoadingWrapper>
      ) : (
        ''
      )}
    </div>
  )
}
