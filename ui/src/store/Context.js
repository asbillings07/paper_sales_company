import PropTypes from 'prop-types'
import { useThunkReducer } from './hooks'
import {
  dunderReducer,
  initialState,
  fetchAgents,
  fetchCustomers,
  fetchInteractions,
  getInteraction,
  createMessage,
  deleteNote,
  editNote,
  createNote
} from './reducers'
import React, { createContext, useContext, useEffect, useState } from 'react'

const DunderContext = createContext()

export function useDunderContext() {
  const context = useContext(DunderContext)
  if (!context) {
    throw new Error(
      `You can't use context state outside of a provider, check where you are using this hook.`
    )
  }

  return context
}

export function Provider({ children }) {
  const [state, dispatch] = useThunkReducer(dunderReducer, initialState)
  const [isHidden, setIsHidden] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [interactionId, setInteractionId] = useState(null)
  const [agentId, setAgentId] = useState(null)
  const [alert, setAlert] = useState({
    isOpen: false,
    message: '',
    alertType: 'info'
  })

  const agents_customers = { agents: [...state.agents], customers: [...state.customers] }

  useEffect(() => {
    dispatch(fetchInteractions())
    dispatch(fetchCustomers())
    dispatch(fetchAgents())
  }, [])

  useEffect(() => {
    if (interactionId !== null) {
      dispatch(getInteraction(interactionId))
    }
  }, [interactionId])

  useEffect(() => {
    if (state.error) {
      console.log(state.errorMessage)
      setAlert((prevState) => ({
        ...prevState,
        isOpen: true,
        message: state.errorMessage,
        alertType: 'warning'
      }))
    }
  }, [state.error, state.errorMessage])

  const value = {
    state,
    alert,
    setAlert,
    dispatch,
    getInteraction,
    deleteNote,
    editNote,
    createNote,
    createMessage,
    agentId,
    setAgentId,
    isHidden,
    setIsHidden,
    interactionId,
    setInteractionId,
    agents_customers,
    isModalOpen,
    setIsModalOpen
  }

  return <DunderContext.Provider value={value}>{children}</DunderContext.Provider>
}

Provider.propTypes = {
  children: PropTypes.any
}
