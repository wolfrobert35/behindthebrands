import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Heading from '../components/Heading'
import Container from '../components/Container'

export default class IndexPage extends React.Component {
  render() {

    return (
      <Wrapper>
        <Heading>Contact</Heading>
        <Container>
          <Half>
            <h2>Marketa Hamadakova</h2>
            <p>Founder & CEO</p>
            <a href="tel:+8618526403753">M Asia + 86 185 2640 3753</a>
            <a href="tel:+420605863268">M Europe +420 605 863 268</a>
            <a href="mailto:marketa@behindthebrands.net">marketa@behindthebrands.net</a>
          </Half>
          <Half>
          <h2>Behind The Brands Ltd.</h2>
            <p>RM B 19/F KAM CHING COMM BLDG<br/>19-21 HENESSY RD WAMCHAI<br/>HONG KONG </p>
          </Half>
        </Container>
      </Wrapper>
    )
  }
}

const Wrapper = styled.article`
height: calc(100vh - 88px);
display: flex;
flex-direction: column;
justify-content: center
text-align: center;
background: linear-gradient(180deg, rgba(255, 252, 247, 0) 0%, rgba(255, 252, 247, 0.51) 32.04%, #FFF7F7 100%);
`


const Half = styled.p`
width: calc(50% - 2rem);
padding: 1rem;
a {
  display: block;
}
`