import styled from 'styled-components'
import { fixed, below } from '../../utils'

export const StyledHeading = styled.div `
display: flex;
justify-content: center;
align-items: center;
h1 {

}

`

export const StyledHeader = styled.header `
  display: flex;
  justify-content: space-between;
  background: gray;
  font-size: 2em;
  color: white;
  padding: 10px 5%;
  text-align: center;
  ${fixed()}
  span {
    font-size: 18px;
    margin-right: 2em;
  }
  ${below.medSmall`
    flex-direction: column;
    justify-content: center;
  `}
`;

 /*
  */