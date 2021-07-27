import styled from 'styled-components'
import { belowHeight } from '../../utils'

export const MainContainer = styled.div`
  display: flex;
  padding: 40px;
  height: 85vh;
  justify-content: space-between;
`
export const CardContainer = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 41em;
  ${belowHeight.medLarge` 
max-height: 24em;
  `}
  ${belowHeight.medSmall` 
max-height: 21em;
  `}
`
export const StyledComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 15px;
  padding: 10px;
  border: black 1px solid;
`
export const InteractionContainer = styled(StyledComponentContainer)`
  flex-grow: ${({ flexGrow }) => flexGrow};
`
export const MessagesContainer = styled(StyledComponentContainer)`
  flex-grow: ${({ flexGrow }) => flexGrow};
  position: relative;
  visibility: ${({ hidden }) => (hidden ? 'hidden' : 'visible')};
`
export const NotesContainer = styled(StyledComponentContainer)`
  flex-grow: ${({ flexGrow }) => flexGrow};
  position: relative;
  visibility: ${({ hidden }) => (hidden ? 'hidden' : 'visible')};
`
