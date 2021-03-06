import React from 'react'
import { composer } from './composer'
import CircularProgress from '@material-ui/core/CircularProgress';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styles/theme'

export default class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = { state: false }
  }

  async componentDidMount() {

    let state = composer({
      chartId: this.props.id,
      title: this.props.title,
      credits: this.props.credits
    })

    this.setState({ state: state })
  }

  render() {
    const state = this.state.state
    const loadState = <Loader><CircularProgress /></Loader>

    return !state ? <><ThemeProvider theme={theme}><Container><Chart id={this.props.id}>{loadState}</Chart></Container></ThemeProvider></> : <><ThemeProvider theme={theme}><Container><Chart id={this.props.id}></Chart></Container></ThemeProvider></>
  }
}

const Loader = styled.div`
  position: absolute;
  left: 50%;
  top: 50%; 
  transform: translateY(-50%); 
  transform: translate(-50%, -50%);
`

const Container = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.secondary + '20'};
  padding: 50px;

  @media (max-width: 1300px) {
    padding: 0;
  }

`

const Chart = styled.div`
  margin: 0 auto;
  max-width: 75vw;

  @media (max-width: 1300px) {
    max-width: 100vw;

    svg {
      width: 100vw;
    }
  }

  & svg path {
    fill: ${props => props.theme.colors.secondary + '20'};
  }

  .topcontainer{
    div {
      min-width: 25%;

      @media (max-width: 1300px) {
      min-width: 0;

      }
    }
  }

  .radiocontainer label {
    font-weight: 500;
    border-radius: 5px;
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
    border: 1px solid ${props => props.theme.colors.primary};
    
    &:hover{
      transition: .3s;
      background-color: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.white};
    }
  }
  .radiocontainer input[type="radio"]:checked+label {
    transition: .3s;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
  }
`