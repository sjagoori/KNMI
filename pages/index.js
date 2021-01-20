import Navbar from 'components/navbar/Navbar'
import Information from 'components/information/Information'

export default function Home() {
  return (
    <>
      <Navbar
        links={{
          link1: { label: 'Link', url: '#' },
          link2: { label: 'Link', url: '#' },
          link3: { label: 'Link', url: '#' },
        }}
        cta={{ label: 'label', url: '#' }}
      />

      <Information
        title='What is NO₂ and what are the effects?'
        infoDescription='Nitrogen Dioxide (NO₂) is one of the highly reactive gases and gets primarily in the air from the burning of fuel. It forms from emissions from gas-stoves, cars, trucks and buses, power plants, and off-road equipment.'
        infoDescriptionSecondary='Breathing air with high concentration of NO₂ can irritate airways in the human repiratory system. Short exposure can aggravate patients with respiratory diseases. Longer exposures to elevated concentratinos of NO₂ may contribute to the development of asthma.'
        imgUrl='https://i.ibb.co/Kz5s0KT/tropomi-map-NO2.jpg'
        sources={{
          source1: { url: 'https://aqicn.org/scale', label: 'AQICN severity levels (20-01-2021)' },
          source2: { url: 'https://www.epa.gov/no2-pollution/basic-information-about-no2#What%20is%20NO2', label: 'epa.gov (20-01-2021)' }
        }}
      />
    </>
  )
}