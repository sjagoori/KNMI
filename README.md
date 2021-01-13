## Introduction

For the [KNMI](https://www.knmi.nl/home) we have been tasked to create an interactive data visualization tool about the effect COVID-19 had on the NO<sub>2</sub> during the first wave of COVID-19 (March 2020 - June 2020).

[Link to the data viz](#).

This project have been developed with [Next.js](https://nextjs.org/) with ```create-next-app```.

## About this project

This project is created with Next.js, a React framework for production, it allows for hybrid static & server rendering, route pre-fetching and more. We picked this framework to develop the tool to keep the tool readily available for when KNMI or policymakers wish to use it.

This tool helps the user to figure out what kind of impact COVID-19 had on the amount of pollutants and will help policymakers to make their next big decision regarding said pollutants.

The data we used within this project originates from [aqicn](https://aqicn.org/), a non-profit project who's mission it is to make citizens aware of air pollution and to provide those with a unified and world-wide air quality information. They receive data from more than 130 countries, covering more than 30,000 stations in 2000 major cities.

## Getting started

To run this project on your own machine follow the following steps:

1. Clone the project to the local machine
```bash
git clone https://github.com/sjagoori/KNMI.git
```
2. Install the required packages
```bash
# For NPM 
npm install
# for yarn
yarn
```

3. run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More about Nextjs

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
