import styled from 'styled-components'
import { above, typography } from '../../utils'

export const TextInput = styled.input`
  box-sizing: border-box;
  box-shadow: none;
  max-width: 100%;
  border-image: initial;
  border: 1px solid;
  border-color: inherit;
  border-radius: 3px;
  font: inherit;
  margin: 0.5em 0;
  padding: 0.75em;
  transition: border-color 0.2s ease 0s;
  &:hover {
    border: 1px solid lightgray;
  }
  ${above.med`
  width: 50em;
  `}
  ${above.large`
  width: 70em;
  `}
`
export const InputLabel = styled.label`
  display: block;
  margin-top: 10px;
  margin-bottom: 0.3em;
  color: white;
  ${typography('medium')}
  ${typography('letterSpacing')}
  ${typography('bold')}
  ${above.med` 
    ${typography('default')}
  `}
`
export const ErrorMessage = styled.span`
  display: block;
  color: red;
  ${typography('small')}
  ${typography('defaultLineHeight')}
  margin-bottom: 1.5em;
`
