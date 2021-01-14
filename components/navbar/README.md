# Navbar component

## Table of contents
  - [What it does](#what-it-does)
  - [How to use](#how-to-use)
  - [Dependencies](#dependencies)
  - [Developer](#developer)
  - [Changelog](#changelog)

<div style="text-align:center"><img src="screenshot.png" alt="alt text" width="600"/></div>

## What it does 
* Generate a navbar

## How to use
Import and implement component

```js
import Navbar from '../components/navbar/Navbar'

<Navbar
  links={{
    link1: { label: 'Link', url: '#' },
    link2: { label: 'Link', url: '#' },
    link3: { label: 'Link', url: '#' },
  }}
  cta={{ label: 'label', url: '#' }}
/>
```

## Dependencies
* [NextJS](https://nextjs.org/)
* [Styled-components](https://styled-components.com/)
* A theme file in styling/theme.js

## Developer
[Shabier](https://www.github.com/sjagoori)

## Changelog
### 1.2
* Added support for logoss

### 1.1
* Initial creation