import { Component } from 'react'
import Navbar from 'components/navbar/Navbar'
import mapboxgl from 'mapbox-gl'

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [4.895168, 52.370216],
      zoom: 5
    });
  }

  render() {
    return (
      <>
        <div id='map'></div>
      </>
    )
  }
}