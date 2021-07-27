import styled from 'styled-components'
import { elevation, absolute } from '../../utils'
export const StyledButton = styled.button`
  padding: 5px 15px;
  margin-right: 10px;
  justify-content: center;
  font-size: 20px;
  &:hover {
    ${elevation[2]};
    cursor: pointer;
  }

  ${({ size }) => {
    switch (size) {
      case 'small': {
        return `font-size: 12px;
        `
      }
      case 'medium': {
        return `font-size: 16px;
                
        `
      }
      case 'dunder': {
        return `
        font-size: 15px;
        ${absolute({ yProp: 'bottom', xProp: 'left', y: '15px', x: '25px' })}
        `
      }
      case 'standard': {
        return `
        `
      }
      default:
        return
    }
  }}

  ${({ buttonType }) => {
    switch (buttonType) {
      case 'cancel': {
        return `background: tomato;
                border-color: tomato;
                color: white;
        `
      }
      case 'standard': {
        return `background: lightgray; 
                border-color: lightgray;
                color: black;
        `
      }
      case 'unstyled': {
        return `
        padding: 1px;
  justify-content: center;
  font-size: 15px;
  &:hover {
    ${elevation[2]};
    cursor: pointer;
  }
                background: lightgray; 
                border-color: lightgray;
                color: black;
        `
      }

      default: {
        return `background: cornflowerblue; 
                border-color: cornflowerblue;
                color: white;
        `
      }
    }
  }}
`
