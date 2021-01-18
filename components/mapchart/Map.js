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
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;

  .radiocontainer label {
    font-weight: 500;
    border-radius: 5px;
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
    border: 1px solid #9a0007;
    &:hover{
      transition: .3s;
      background-color: #9a0007;
    }
  }
  .radiocontainer input[type="radio"]:checked+label {
    transition: .3s;
    background-color: #9a0007;
  }
  & svg path {
    fill: transparent;
    stroke: ${props => props.theme.colors.black};
    stroke-width: 1px;

    :hover[continent='Europe'] {
        fill: ${props => props.theme.colors.primary + '30'};
    }
  }
`