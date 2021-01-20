import { Component } from 'react'
import Navbar from 'components/navbar/Navbar'
import Hero from 'components/hero/Hero'

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
        cta={{ label: 'label', url: '#' }}
      />

      <Hero
        imgUrl='https://images.unsplash.com/photo-1454117096348-e4abbeba002c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D'
        title='What effect has the coronavirus on our NO² emission?'
        lead='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.'
        label='something'
        url='#'
        buttonLabel='What is NO²'
      />


      <Map
        id='container'
        title='Title'
        lead='description'
      />
    </>
  )
}