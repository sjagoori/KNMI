# Information component

## Table of content
- [What it does](#what-it-does)
- [How to use](#How-to-use)
- [Dependencies](#Dependencies)
- [Developer](#Developer)
- [Changelog](#Changelog)


## What it does
Creates a section to inform the user about some subject.

## How to use
Import and implement the component.
```JS
import Information from 'components/information/Information'

<Information
      title='What is NO₂ and what are the effects?'
      infoDescription='Nitrogen Dioxide (NO₂) is one of the highly reactive gases and gets primarily in the air from the burning of fuel. It forms from emissions from gas-stoves, cars, trucks and buses, power plants, and off-road equipment.'
      infoDescriptionSecondary='Breathing air with high concentration of NO₂ can irritate airways in the human repiratory system. Short exposure can aggravate patients with respiratory diseases. Longer exposures to elevated concentratinos of NO₂ may contribute to the development of asthma.'
      imgUrl='https://i.ibb.co/Kz5s0KT/tropomi-map-NO2.jpg'
      sources={{
        source1: { url: 'https://aqicn.org/scale', label: 'AQICN severity levels (20-01-2021)'},
        source2: { url: 'https://www.epa.gov/no2-pollution/basic-information-about-no2#What%20is%20NO2', label: 'epa.gov (20-01-2021)'}
      }}
    />
```

## Dependencies
* [Styled-Components](https://styled-components.com/)


## Developer
[Nathan Bommezijn](github.com/dewarian)

## Changelog

All notable changes to this component will be documented in this file.
The format adheres to the template from [Shabier](github.com/sjagoori).

## 1.0.2

### Added
- Added sources
- Updated changelog

### Removed
- Removed test styling

## 1.0.1

### Added
- Improved files to adhere to code standards.
- Created the component to show information
- This CHANGELOG file