import { Component } from 'react'
import styled from "styled-components"
import { composer } from './composer'
import CircularProgress from '@material-ui/core/CircularProgress';

export default class DivergingBarChart extends Component {
  constructor(props) {
    super(props)
    this.state = { state: false }
  }


  async componentDidMount() {
    console.log('mounted')

    // let testData = [
    //   {
    //     name: 'a',
    //     value: 11
    //   },
    //   {
    //     name: 'b',
    //     value: 22
    //   }
    // ]

    let state = composer({
      // data: testData,
      id: this.props.id
    })

    this.setState({ state: state })

  }

  render() {
    const state = this.state.state
    const loadState = <Loader><CircularProgress /></Loader>

    return !state ? <><Chart id="#chart">{loadState}</Chart></> : <>

      <select class="opt">
        <option value="_1">1</option>
        <option value="_2">2</option>
      </select>

      <svg id="chart"></svg>
    </>
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

`