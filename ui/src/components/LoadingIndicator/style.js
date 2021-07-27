import styled from 'styled-components'
import { fixed, absolute } from '../../utils'
export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  ${fixed({ y: '45%', x: '50%' })}
`

export const LoadingWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  ${absolute()};
  overflow: hidden;
  z-index: 899;
`
