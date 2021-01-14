import { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styles/theme'

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
  background-color: ${props => props.theme.colors.white};
  width: 95%;
  height: 450px;

  display: flex;
  align-items: center;
  flex-direction: row;

  margin: 40px;
  padding: 15px;
  margin-top: 200px;
`
const InfoContainer = styled.div`
  margin: 0 auto;
  margin-left: 1em;
  max-width: 50%;
  
  display: inline-flex;
  flex-direction: column;
`

const Title = styled.h2`
  font-size: 2em;
`

const InfoDescription = styled.p`
  opacity: 70%;
`
const ImageContainer = styled.div`
  margin: auto 20px;
  order: 1;
`
const Image = styled.img`
  width: 100%;
`
