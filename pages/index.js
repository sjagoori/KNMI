import { Component } from 'react'
import Navbar from 'components/navbar/Navbar'
import Hero from 'components/hero/Hero'
import Information from 'components/information/Information'
import Map from 'components/mapchart/Map'

export default function Home() {
  return (
    <>
      <Navbar
        links={{
          link1: { label: 'Link', url: '#' },
          link2: { label: 'Link', url: '#' },
          link3: { label: 'Link', url: '#' },
        }}
        cta={{ label: 'Source', url: 'https://github.com/sjagoori/KNMI' }}
      />

      <Hero
        imgUrl='https://images.unsplash.com/photo-1454117096348-e4abbeba002c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D'
        title='What effect has the coronavirus on our Nitrogen Dioxide emission?'
        description='Throughout this pandemic we have seen alot, but we also have seen something extraordinary, our NO² got significantly less. But how much?'
        label='Introduction'
        url='#about'
        buttonLabel='What is NO²'
      />

      <Information
        id='about'
        title='What is NO₂ and what are the effects?'
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
        title='Title'
        lead='description'
      />
    </>
  )
}