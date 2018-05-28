import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Image from 'gatsby-image'
import styled from 'styled-components'

import Script from 'react-load-script'

import Wrapper from '../components/Wrapper'
import Heading from '../components/Heading'
import Container from '../components/Container'
import Footer from '../components/Footer'

export default class IndexPage extends React.Component {

  handleScriptLoad() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }

  render() {
    const { markdownRemark: post } = this.props.data

    return (
      <Wrapper>
        <FrontpageWrapper>
        <Background>
        <Image sizes={post.frontmatter.image.childImageSharp.sizes}
        css={{
          width: '100%',
          height: '80vh',
          objectFit: 'contain',
          overflow: 'hidden',
          zIndex: -2
        }}
        />
        </Background>
        <Helmet>
          <title>{post.frontmatter.name}</title>
        </Helmet>
            <Script
              url="https://identity.netlify.com/v1/netlify-identity-widget.js"
              onLoad={this.handleScriptLoad.bind(this)}
            />
            <Container>
              <SuperHeading>{post.frontmatter.name}</SuperHeading>
              <Tagline>{post.frontmatter.tagline}</Tagline>
            </Container>
            </FrontpageWrapper>

            <Container background="#FFFCF7">
              <Column>
                <Believe>We believe in brands with...</Believe>
              </Column>
              <Column>
                <Values>
                  <Value><em>DISTINCTIONS</em></Value>
                  <Value><em>MISSION</em>, <em>FEELINGS</em> and <em>STORY</em> that resonate with people. </Value>
                  <Value><em>DIGITAL AND SOCIAL PRESENCE</em> that allow to clearly, easily <em>TRACE & OPTIMIZE</em> all marketing activities.</Value>
                  <Value>well-defined <em>KPIs</em> that <em>CREATE RESOURCES</em> and not burn them.</Value>
                </Values>
              </Column>
            </Container>
            <Profile>
              <Image sizes={post.frontmatter.image.childImageSharp.sizes} />
              <AboutBox>
                <div>
                <h2>{post.frontmatter.jmeno}</h2>
                <blockquote>{post.frontmatter.quote}</blockquote>
                </div>
                <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
              </AboutBox>
            </Profile>
            <Container background="#FFFCF7">
              <Column>
                <Believe>We can help you with...</Believe>
              </Column>
              <Column>
                <Values>
                {post.frontmatter.highlights.map((text) => {
                  const prepended = ' '+ text;
                  const uppercased = prepended.split(' ').reduce((result, word) => {
                    if (word == word.toUpperCase()) {
                      console.log(word);
                      return result + ' <em>' + word + '</em>';
                    } else {
                      console.log(word);
                      return result + ' ' + word;
                    }
                  })

                  return (
                  <Value key={text.id} dangerouslySetInnerHTML={{__html: uppercased}}></Value>
                )})}
                </Values>
              </Column>
            </Container>
            <Footer />
      </Wrapper>
    )
  }
}

export const frontpageQuery = graphql`
query frontpageQuery {
  markdownRemark(frontmatter: {templateKey: { eq: "frontpage" }}) {
    html
    frontmatter {
      templateKey
      name
      image {
        childImageSharp {
          sizes(
            quality: 100,
            traceSVG: {
              color: "rgb(20, 20, 20)",
              threshold: 95
            },
            toFormat: JPG
          ) {
            ...GatsbyImageSharpSizes_tracedSVG
            aspectRatio
          }
        }
      }
      tagline
      highlights
      quote
      jmeno
    }
  }
}
`

const Background = styled.div`
position: absolute;
bottom: 0;
left: 20%;
width: 100%;
z-index: -2;`

const FrontpageWrapper = styled.article`
display: flex;
flex-direction: column;
justify-content: center
text-align: center;
background-image: linear-gradient(180deg, rgba(255, 252, 247, 0) 0%, rgba(255, 252, 247, 0.51) 32.04%, #FFF 100%);
flex: 10;
min-height: 80vh;
position: relative
@media screen and (max-width: 600px) {
    justify-content: flex-end;
}
> div {
  display: block;
}
img {
  object-fit: contain !important;
  z-index: -2;
}
`

const SuperHeading = styled.h1`
text-align: left
font-size: 6rem
font-weight: 300
font-family: Bodoni
text-transform: uppercase
line-height: .9em;
width: 100%;
max-width: 500px;
@media screen and (max-width: 600px) {
  font-size: 16vw;
}
`

const Tagline = styled.p`
text-align: left
font-size: 1.5rem
max-width: 500px
@media screen and (max-width: 600px) {
  font-size: 5vw;
}
`


// from about.js

const Column = styled.div`
width: 50%
display: flex;
flex-direction: column;
justify-content: center;
align-items: center


@media screen and (max-width: 800px) {
  width: 100%;
}`

const Believe = styled.h2`
margin-top: 2rem;
padding-left: 1rem;
border-left: .5rem solid black;
border-style: double;`

const Values = styled.ul`
list-style-type: none;`

const Value = styled.li`
margin: 2rem 1rem`

const Profile = styled.section`
display: flex

@media screen and (max-width: 600px) {
  flex-direction: column
}


.gatsby-image-outer-wrapper {

  @media screen and (min-width: 600px) {
    width: 50%
    align-self: flex-start
    z-index: -2;
    position: sticky !important;
    top: 1rem;
  }
  
  @media screen and (max-width: 600px) {
    height: calc(100vw - 2rem);
    overflow: hidden;
    object-fit: cover;
    object-position: top center
  }
}`

const AboutBox = styled.div`
width: 50%
> *:first-child {
  margin: 1rem
  @media screen and (min-width: 700px) {
    margin-left: -6rem
  }
  blockquote {
    font-style: italic;
    font-weight: 500;
    padding-top: 1rem;
    line-height: 1.5em;
  }
}
p {
  padding: 1rem
  opacity: .7
  transition: opacity 1s ease;
  &:hover {
    opacity: 1
  }
}

@media screen and (max-width: 600px) {
  width: 100%
}
`

const Highlights = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: 2rem auto;
li {
  padding: .5rem;
  margin: .5rem;
  text-transform: uppercase;
  background-color: #E4E7EB;
  text-align: center;
}
`

const Gallery = styled.img`
width: calc(100% - 2rem);
padding: 1rem

@media screen and (min-width: 600px) {
width: calc(50% - 2rem);

}`