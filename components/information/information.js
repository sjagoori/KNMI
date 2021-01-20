import { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styles/theme'
import Icon from 'assets/svg/help'

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
  background-color: #fffccc;
  max-width: 85vw;
  height: 500px;

  display: flex;
  justify-conten: center;
  flex-direction: row;

  margin: 40px;
  margin-left: 80px;
  padding: 15px;
  // margin-top: 200px;
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
  max-width: 55%
`
const Image = styled.img`
  width: 80%;
`