import { Component } from 'react'
import styled from 'styled-components';

export default class Chart extends Component {
  render() {
    return (
      <>
        <Container id={this.props.id}>
          <ImageContainer>
            <Image src={this.props.imgUrl} />
          </ImageContainer>
        </Container>
      </>
    )
  }
}

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const ImageContainer = styled.div`
  width: 75vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Image = styled.img`
  margin: 0 auto;
  min-width: 450px;
  width: 90%;
  height: 70%;
  object-fit: cover;
`