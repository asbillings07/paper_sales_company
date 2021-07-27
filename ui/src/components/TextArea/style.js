import styled from 'styled-components'
import { InputLabel } from '../Input/style'
import { borders, elevation, typography, colors } from '../../utils'

export const StyledTextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 15em;
  padding: 6px 8px;
  ${borders('grey50')}
  ${borders('smallRadius')}
${elevation[1]}
${typography('default')}
color: ${colors('grey100')};
  background-color: white;
  resize: none;
  outline: none;
  &:hover {
    ${borders('grey70')}
  }
  &:focus {
    ${borders('grey100')}
  }
  &:placeholder {
    color: ${colors('grey50')};
    opacity: 1;
  }
`

export const TextAreaLabel = styled(InputLabel)`
  flex-grow: 1;
  color: black;
  ${typography('defaultLineHeight')}
  ${typography('bold')}
`
export const ErrorMessage = styled.span`
  display: block;
  color: red;
  ${typography('small')}
  ${typography('defaultLineHeight')}
  margin-bottom: 1.5em;
`
export const Wrapper = styled.div`
  position: relative;
  ${({ hasError }) =>
    hasError
      ? `
    label {
      color: red;
    }
    textarea {
      border: 1px solid red;
      box-shadow: 0 0 0 1px red;
      margin-bottom: 0.5em;
    }`
      : ''}
`
