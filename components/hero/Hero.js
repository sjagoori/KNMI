import { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import Link from 'next/link'
import theme from 'styles/theme'


export default class Hero extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>

          <Link href={this.props.url}>
            <ImageContainer>
              <Image src={this.props.imgUrl} />
            </ImageContainer>
          </Link>

          <DescriptionContainer>
            <div>
              <Label>{this.props.label}</Label>
              <Link href={this.props.url}>
                <Title>{this.props.title}</Title>
              </Link>
            </div>
            <Description>{this.props.description}</Description>
          </DescriptionContainer>

        </Container>
      </ThemeProvider>
    )
  }
}

const Container = styled.div`
  margin: 0 auto;
  max-width: 65%;

  @media (max-width: 1200px) {
    max-width: 95%;
  }
`

const ImageContainer = styled.div`
  width: 100%;
  height: 70vh;
  cursor: pointer;
`

const Image = styled.img`
  min-width: 350px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const DescriptionContainer = styled.div`
  /* display: flex; */

  div {
    width: 50%;
    display: flex;
    flex-direction: column; 
    justify-content: space-between;
  }

  @media (max-width: 600px) {
    flex-direction: column; 

    div{
      width: 100%;
      flex-direction: row;
    }
  }
`

const Title = styled.h2` 
  font-size: 2.5rem;
  margin-top: 15px;
  margin-bottom: 0;
  font-weight: 500;
  width: max-content;

  :hover{
    cursor: pointer;
    text-decoration: underline;
  }

  @media (max-width: 600px) {
    font-size: 1.8rem;
  }
`

const Description = styled.p`
  width: 55%;
  line-height: 1.5;
  /* padding-left: 2rem; */

  @media (max-width: 600px) {
    width: 100%;
    padding: 0;
  }
`

const Label = styled.p`
  font-weight: 700;
  color: ${props => { props.theme.colors.primary }}
`