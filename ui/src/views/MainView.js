import React from 'react'
import { Interactions } from './Interactions/Interactions'
import { Messages } from './Messages/Messages'
import { Notes } from './Notes/Notes'
import { MainContainer } from '../components'
import { useDunderContext } from '../store'
import { LoadingIndicator, AlertMessage } from '../components'

export function MainView() {
  const { isHidden, loading, alert, setAlert } = useDunderContext()
  return (
    <MainContainer>
      <AlertMessage
        isOpen={alert.isOpen}
        message={alert.message}
        alertType={alert.alertType}
        onClose={() => setAlert((prevState) => ({ ...prevState, isOpen: false }))}
      />
      <LoadingIndicator isOpen={loading} />
      <Interactions />
      <Messages hidden={isHidden} />
      <Notes hidden={isHidden} />
    </MainContainer>
  )
}
