import Navbar from 'components/navbar/Navbar'
import Hero from 'components/hero/Hero'
import Information from 'components/information/Information'
import Map from 'components/mapchart/Map'
import Chart from 'components/divergent/Chart'

export default function Home() {
  return (
    <>
      <Navbar
        links={{
          link1: { label: 'Introduction', url: '#intro' },
          link2: { label: 'About', url: '#about' },
          link3: { label: 'Map', url: '#container' },
          link4: { label: 'Countries', url: '#emission' },
        }}
        cta={{ label: 'Source', url: 'https://github.com/sjagoori/KNMI' }}
      />

      <Hero
        id='into'
        imgUrl='https://images.unsplash.com/photo-1566386576349-695cb12288f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80'
        title='What effect has the coronavirus on our Nitrogen Dioxide emission?'
        description='During this pandemic, we have seen alot, felt alot, and changed alot. This also includes our behaviour, mobility and kitchen time. All of summed up examples contain some kind of combustion process. This process produces Nitrogen dioxide (NO₂). Together with other pollutants it creates a hazardous air to live in. Examples we all may know are for example China, and India. Explore in the map how the emmission has changed from 2019 to 2020 and find out of COVID-19 had an impact on our emmission.'
        label='Introduction'
        url='#about'
        buttonLabel='What is NO₂'
      />

      <Information
        id='about'
        title='First of all, what is Nitrogen Dioxide (NO₂)?'
        infoDescription='Nitrogen Dioxide (NO₂) is one of the highly reactive gases and gets primarily in the air from the burning of fuel. It forms from emissions from gas-stoves, cars, trucks and buses, power plants, and off-road equipment.'
        infoDescriptionSecondary='Breathing air with high concentration of NO₂ can irritate airways in the human repiratory system. Short exposure can aggravate patients with respiratory diseases. Longer exposures to elevated concentratinos of NO₂ may contribute to the development of asthma.'
        imgUrl='https://i.ibb.co/Kz5s0KT/tropomi-map-NO2.jpg'
        sources={{
          source1: { url: 'https://aqicn.org/scale', label: 'AQICN severity levels (20-01-2021)' },
          source2: { url: 'https://www.epa.gov/no2-pollution/basic-information-about-no2#What%20is%20NO2', label: 'epa.gov (20-01-2021)' }
        }}
      />

      <Map
        id='container'
        title='Let’s compare before and after COVID-19 first wave'
        credits={[{ label: 'AQINC for emission data', url: 'https://aqicn.org/' }, { label: 'Markuslerner for the GeoJSON map', url: 'https://github.com/markuslerner/travelscope/blob/master/public/map/2.0.0/ne_50m_admin_0_countries_simplified.json' }]}
      />

      <Chart
        id="emission"
        imgUrl='https://i.ibb.co/5TvCjJC/cleanshot-graph.jpg'
      />

    </>
  )
}
