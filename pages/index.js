import Head from 'next/head'
import Button from 'components/button/Button'
import TextInput from 'components/input/text/TextInput'
import Highlight from 'components/highlight/Highlight'
import Image from 'components/image/Image'

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Front-end setup</title>
      </Head>

      <h1>Front-end Setup</h1>

      <div>
        <h2>Text</h2>
        <h1>Header</h1>
        <h2>Subheader</h2>
        <p>The quick brown fox jumps over the lazy dog</p>
        <p>1234567890</p>
        <p>This is a high type <Highlight variant='high'>highlight</Highlight></p>
        <p>This is a low type <Highlight>highlight</Highlight></p>
      </div>

      <div>
        <h2>Buttons</h2>
        <Button
          label='primary'
          url='#'
          variant='primary'
        />

        <Button
          label='secondary'
          url='#'
          variant='secondary'
        />

        <Button
          label='ghost'
          url='#'
          variant='ghost'
        />

        <Button
          label='text'
          url='#'
          variant='text'
        />
      </div>

      <div>
        <h2>Inputs</h2>

        <TextInput
          placeholder='Placeholder text'
        />

      </div>

      <div>
        <h2>Image</h2>
        {/* <Image
          path={'../components/button/screenshot.png'}
        /> */}
        {console.log()}
      </div>
    </>
  )
}