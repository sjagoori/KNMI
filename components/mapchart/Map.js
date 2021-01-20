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
    })

    this.setState({ state: state })
  }

  render() {
    const state = this.state.state
    const loadState = <Loader><CircularProgress /></Loader>

    return !state ? <><ThemeProvider theme={theme}><Chart id={this.props.id}>{loadState}</Chart></ThemeProvider></> : <><ThemeProvider theme={theme}><Chart id={this.props.id}></Chart></ThemeProvider></>
  }
}

const Loader = styled.div`
  position: absolute;
  left: 50%;
  top: 50%; 
  transform: translateY(-50%); 
  transform: translate(-50%, -50%);
`

const Chart = styled.div`
  margin: 0 auto;
  max-width: 75vw;

  @media (max-width: 1300px) {
    & svg {
      width: 100vw
    }
  }

  & svg path {
    fill: ${props => props.theme.mapBackgroundColor};    
  }

  .topcontainer{
    padding: 0px 10px 0px 10px;

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