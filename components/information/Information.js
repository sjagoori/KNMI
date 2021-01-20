import { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styles/theme'
import Link from 'next/link'

export default class Information extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <InfoContainer>
            <Title>{this.props.title}</Title>
            <InfoDescription>{this.props.infoDescription}</InfoDescription>
            <InfoDescription>{this.props.infoDescriptionSecondary}</InfoDescription>
            <Sources>
              {Object.keys(this.props.sources).map((key, index) => {
                return <Link href={this.props.sources[key].url}>{this.props.sources[key].label}</Link>
              })}
            </Sources>
          </InfoContainer>
          <ImageContainer>
            <Image src={this.props.imgUrl} />
          </ImageContainer>
        </Container>
      </ThemeProvider>
    )
  }
}

const Container = styled.div`
  width: 75vw;
  height: 500px;

  margin-left: 50%;
  transform: translateX(-50%);

  display: flex;
  justify-content: center;
  flex-direction: row;

  padding: 15px;
`
const InfoContainer = styled.div`
  margin: 0 auto;
  margin-left: 1em;
  max-width: 50%;
  
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  `

const Title = styled.h2`
  font-size: 2em;
  flex: 1 0 100%;
`

const InfoDescription = styled.p`
  opacity: 70%;
  flex: 0 0 47%;
  margin-right: 1em;
`

const ImageContainer = styled.div`
  margin: auto 20px;
  order: 1;
  max-width: 55%;
`

const Image = styled.img`
  width: 80%;
`

const Sources = styled.p`
  font-size: 1em;
  color: ${props => props.theme.colors.black};
  opacity: 0.5;
  white-space: pre-line;

  a {
    display: block;
  }
  a:hover {
    text-decoration: underline;
    color: ${props => props.theme.colors.primary}
  }

`
