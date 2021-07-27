import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import { Modal, TextArea } from '../../components'
import { useDunderContext } from '../../store'
import { useSetError } from '../../store/hooks'

export function AlterNote({ noteToggle, setNoteToggle, editNoteData }) {
  const initialNoteData = editNoteData !== null ? editNoteData.content : ''
  const { agentId, dispatch, createNote, interactionId, editNote } = useDunderContext()
  const [note, setNote] = useState('')
  const [error, setError] = useSetError(false, note)
  console.log(note)

  useEffect(() => {
    if (editNoteData !== null) {
      setNote(editNoteData.content)
    }
  }, [editNoteData])

  const handleSubmit = () => {
    let noteInfo
    if (editNoteData !== null) {
      noteInfo = {
        noteId: editNoteData.id,
        content: note,
        agentId: editNoteData.agentId
      }
    } else {
      noteInfo = {
        content: note,
        agentId
      }
    }

    if (editNoteData !== null) {
      dispatch(editNote(interactionId, noteInfo))
      setNoteToggle(false)
    } else if (editNoteData == null && note) {
      dispatch(createNote(interactionId, noteInfo))
      setNoteToggle(false)
    } else {
      setError(true)
    }
  }

  return (
    <Modal id='note_modal' toggle={noteToggle} setToggle={setNoteToggle}>
      <Modal.Header>{editNoteData ? 'Edit Note' : 'New Note'}</Modal.Header>
      <Modal.Body>
        <h5>Agent Id: {agentId}</h5>
        <TextArea
          label='Note:'
          hasError={error}
          errorMessage='Field can not be submitted when empty'
          name='content'
          value={note}
          domID='content'
          onChange={(e) => setNote(e.target.value)}
        />
      </Modal.Body>
      <Modal.Button id='createNoteButton' name='Save note' onClick={handleSubmit} />
    </Modal>
  )
}

AlterNote.propTypes = {
  noteToggle: PropTypes.bool,
  setNoteToggle: PropTypes.func
}
