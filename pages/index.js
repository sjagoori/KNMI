import { Component } from 'react'
import Navbar from 'components/navbar/Navbar'
import mapboxgl from 'mapbox-gl'
import Map from 'components/mapchart/Map'

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // new mapboxgl.Map({
    //   container: 'map',
    //   style: 'mapbox://styles/mapbox/streets-v11',
    //   center: [4.895168, 52.370216],
    //   zoom: 5
    // });
  }


  render() {
    return (
      <>
        {/* <div id='map'></div> */}

        <Map
          id='container'
          title='Title'
          lead='description'
          // primarySet='https://example.com/dataset.json'
          // secondarySet='https://example.com/dataset.json' //optional
          // mapData='https://cartomap.github.io/nl/wgs84/gemeente_2020
          // mapData='https://gist.githubusercontent.com/MariellaCC/0055298b94fcf2c16940/raw/8b145cbcef92e1431446cf87fb278283750fa3b1/ne_50m_admin_0_countries_simplified.json'
          // filterOptions={['option1', 'option2']} //optional
        />
      </>
    )
  }
}