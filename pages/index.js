import Information from '@/components/information/information'
import Navbar from 'components/navbar/Navbar'

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
        title='NO₂ uitstoot'
        infoDescription='NO₂ is a chemical compound that has been used in fertilizers, but also is a product of burning fossil oils e.g. motor vehicles or stoves. NO₂ is a chemical compound that has been used in fertilizers, but also is a product of burning fossil oils e.g. motor vehicles or stoves.
        PM25 is fine particles on a specific size'
        infoDescriptionSecondary='PM25 is a fine particle matter'
        imgUrl='https://images.unsplash.com/photo-1581626221838-9715c0e06049?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80'
      />
    </>
  )
}