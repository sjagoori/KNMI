import { Component } from 'react'
import styled from 'styled-components';

export default class Chart extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <Container>
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
  border: 1px solid red;
  width: 75vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Image = styled.img`
border: 1px solid green;
  margin: 0 auto;
  min-width: 450px;
  width: 90%;
  height: 70%;
  object-fit: cover;
`
