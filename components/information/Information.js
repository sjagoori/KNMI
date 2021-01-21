import { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styles/theme'
import Link from 'next/link'
import BoxIcon from 'assets/svg/box'
import TruckIcon from 'assets/svg/truck'

export default class Information extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container id={this.props.id}>
          <InfoContainer>
            <Title>{this.props.title}</Title>
            <Inf>
              <InfoDescription>
                <Block><BoxIcon /></Block>
                {this.props.infoDescription}
              </InfoDescription>
              <InfoDescription>
                <Block><TruckIcon /></Block>
                {this.props.infoDescriptionSecondary}
              </InfoDescription>
            </Inf>
          </InfoContainer>
          <ImageContainer>
            <Image src={this.props.imgUrl} />
            <Sources>
              {Object.keys(this.props.sources).map((key, index) => {
                return <Link key={key} href={this.props.sources[key].url}>{this.props.sources[key].label}</Link>
              })}
            </Sources>
          </ImageContainer>
        </Container>
      </ThemeProvider>
    )
  }
}

const Block = styled.div`
  > {
    display: block;
  }
`

const Container = styled.div`
  width: 75vw;
  height: 80vh;
  margin-left: 50%;
  transform: translateX(-50%);
  display: flex;

  padding: 15px;
`
const InfoContainer = styled.div`
  margin-left: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
`

const Inf = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
`

const Title = styled.h2`
  font-size: 2em;
  margin-bottom: 1.5em;
`

const InfoDescription = styled.div`
  opacity: 70%;
  max-width: 45%;
`

const ImageContainer = styled.div`
  order: 1;
  max-width: 45%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`

const Image = styled.img`
  width: 100%;
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
