import React, { useState } from 'react'
import { Card, CardContainer } from '../../components'
import { useDunderContext } from '../../store'
import { findById } from '../../utils'

export function Note({ setNoteToggle, setEditNoteData }) {
  const { state, deleteNote } = useDunderContext()
  const [editNote, setEditNote] = useState(false)

  const handleEditNote = (note) => {
    setNoteToggle(true)
    setEditNoteData(note)
  }

  const interactionNotes = state.interaction?.notes.map((note, i) => {
    const { id, agentId, content } = note
    const agent = findById(agentId, state.agents)
    return (
      <Card id={`note_card${i}`} width='225px' key={id}>
        <Card.Title bold={false}>{content}</Card.Title>
        <Card.Body>
          <Card.Text>{agent?.name}</Card.Text>
        </Card.Body>
        <Card.ButtonContainer>
          <Card.Button onClick={() => handleEditNote(note)}>Edit</Card.Button>
          <Card.Button buttonType='cancel'>Archive</Card.Button>
        </Card.ButtonContainer>
      </Card>
    )
  })

  return <CardContainer>{interactionNotes}</CardContainer>
}
