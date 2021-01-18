import React from 'react'
import { composer } from './composer'
import { getData, filterAreaIdDisabled, matchAreaId, capitalizeFirstLetter } from '../util'
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from "styled-components"

export default class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = { state: false }
  }

  async componentDidMount() {
    // let mapData = localStorage.getItem(this.props.mapData) ? JSON.parse(localStorage.getItem(this.props.mapData)) : (localStorage.setItem(this.props.mapData, JSON.stringify(await getData(this.props.mapData))), JSON.parse(localStorage.getItem(this.props.mapData)))
    // let mapData = getData(this.props.mapData)

    // console.log(mapData)

    let state = composer({
      chartId: this.props.id,
      title: this.props.title,
      lead: this.props.lead,
      // mapData: mapData,
    })

    // this.setState({ state: state })
  }

  render() {
    const state = this.state.state
    // const loadState = <Loader><CircularProgress /></Loader>
    const loadState = <Loader></Loader>

    return !state ? <><Chart id={this.props.id}>{loadState}</Chart></> : <><Chart id={this.props.id}></Chart></>
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
    /* fill: #1a1e28; */
    stroke: #000;
    stroke-width: .3px
  }

  &svg {
    background-color: #FFF
  }
`