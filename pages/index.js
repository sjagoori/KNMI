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
    </>
  )
}