import styled from 'styled-components'
import { Button } from '../Button/Button'

export const Alert = styled.div`
  display: flex;
  padding: 15px;
  width: 50%;
  position: fixed;
  top: 54px;
  left: 20em;
  margin: 5px 5px 5px 5px;
  justify-content: space-between;
  margin-top: 8px;
  border: 1px solid transparent;
  border-radius: 4px;
  ${({ alertType }) => {
    switch (alertType) {
      case 'warning':
        return `
          background-color: #fae2e2;
          color: #d84040;
          border-color: #f4c5c5;
        `
      case 'info':
        return `
          background-color: #fff5db;
          color: #000000;
          border-color: #ffebb6;
        `
      case 'success':
        return `
          background-color: #dff0d8;
          border-color: #d6e9c6;
          color: #3c763d;
        `
      default:
        return `background-color: #fff5db;
          color: #000000;
          border-color: #ffebb6;`
    }
  }}
`

export const CloseButton = styled(Button)`
  font-size: 21px;
  font-weight: bold;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.2;
  &:hover {
    color: #000;
    text-decoration: none;
    opacity: 0.5;
  }
`
export const List = styled.li`
  margin-bottom: 5px;
  list-style-type: ${({ listStyle }) => {
    switch (listStyle) {
      case 'unstyled':
        return `decimal outside none`
      case 'number':
        return `decimal outside none`
      case 'circle':
        return `circle outside none`
      case 'disc':
        return `disc outside none`
      case 'square':
        return `square outside none`
      default:
        return `decimal outside none`
    }
  }};
`
export const Messages = styled.ul`
  display: flex;
  flex-direction: column;
`
