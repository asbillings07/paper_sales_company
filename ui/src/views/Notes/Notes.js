import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { ComponentContainer } from '../../components'
import { Note } from './Note'
import { Button } from '../../components'
import { AlterNote } from './alterNote'

export function Notes({ hidden }) {
  const [noteToggle, setNoteToggle] = useState(false)
  const [editNoteData, setEditNoteData] = useState(null)
  return (
    <ComponentContainer id='notes_container' hidden={hidden} title='Notes'>
      <Note setNoteToggle={setNoteToggle} setEditNoteData={setEditNoteData} />
      <AlterNote
        editNoteData={editNoteData}
        noteToggle={noteToggle}
        setNoteToggle={setNoteToggle}
      />
      <Button name='Add note' onClick={() => setNoteToggle({ isOpen: true, id: null })} />
    </ComponentContainer>
  )
}

Notes.propTypes = {
  hidden: PropTypes.bool
}
