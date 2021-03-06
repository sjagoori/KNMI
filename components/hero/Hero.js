import { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import Link from 'next/link'
import theme from 'styles/theme'
import Button from 'components/button/Button'

export default class Hero extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container id={this.props.id}>
          <SubContainer>

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

              <Button
                label={this.props.buttonLabel}
                url={this.props.url}
                variant='ghost'
              />
            </DescriptionContainer>

          </SubContainer>
        </Container>
      </ThemeProvider>
    )
  }
}

const Container = styled.div`
  margin-top: 30px;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.secondary + '20'};
`

const SubContainer = styled.div`
  margin: 0 auto;
  max-width: 75%;
  height: 75%;
  display: flex;
  justify-content: space-between;
`

const ImageContainer = styled.div`
  width: 100%;
  cursor: pointer;
`

const Image = styled.img`
  min-width: 450px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column; 
  padding-left: 50px;
`

const Title = styled.h2` 
  font-size: 2.5rem;
  margin-top: 15px;
  margin-bottom: 0;
  font-weight: 500;
  
  :hover{
    cursor: pointer;
    text-decoration: underline;
  }
`

const Description = styled.p`
  line-height: 1.5;
`

const Label = styled.p`
  text-transform: uppercase;
  font-size: .8rem;
  font-weight: 700;
  color: ${props => props.theme.colors.secondary}
`