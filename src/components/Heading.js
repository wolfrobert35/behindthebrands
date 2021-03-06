import React from 'react'
import styled from 'styled-components'

const Heading = ({ children }) => (
  <Text>
      {children}
  </Text>
)

export default Heading

const Text = styled.h1`
letter-spacing: 1.5em;
color: #2A2A2A;
text-transform: uppercase;
text-align: center
margin: 10vh 0 10vh 1em
font-size: 2rem
line-height: 2
animation: showUp .5s ease;

@media screen and (max-width: 600px) {
  font-size: 4.5vw;
}
`