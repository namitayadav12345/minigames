import styled from 'styled-components'

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 14px;
  font-family: bree serif;
`

export const Paragraph = styled.p`
  color: #223a5f;
  font-size: 14px;
  font-family: ${props => props.fontFamily};
`
