import {Component} from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styles/theme'

export default class Chart extends Component {
  constructor(props) {
    super(props)
    this.state = { state: false }
  }

  async componentDidMount() {

    let state = composer({
      chartId: this.props.id,
      title: this.props.title,
    })

    this.setState({ state: state })
  }

  render() {
    const state = this.state.state
    const loadState = <Loader><CircularProgress /></Loader>

    return (
      <>
        <Container  id={this.props.id}>
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


const Loader = styled.div`
  position: absolute;
  left: 50%;
  top: 50%; 
  transform: translateY(-50%); 
  transform: translate(-50%, -50%);
`