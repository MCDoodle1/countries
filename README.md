# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

List of flags and statistics of each country in the world, created with React, HTLM and Sass / CSS. Based on the REST Countries API.

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode 

### Screenshot

![desktop-list](./src/assets/screenshots/Screenshot%20Desktop-list.png)
![desktop-details](./src/assets/screenshots/Screenshot%20Desktop-details.png)
![mobile-list](./src/assets/screenshots/Screenshot%20Mobile-list.png)
![mobile-details](./src/assets/screenshots/Screenshot%20Mobile-detail.png)

### Links

- Solution URL: [GitHub Page](https://mcdoodle1.github.io/countries/](https://github.com/MCDoodle1/countries)
- Live Site URL: [Rest Countries API Live Site](https://mcdoodle1.github.io/countries/)

## My process

I started determining which React components I wanted to divide the site into. I chose Searchbar, Filter, Header, a Country list and a component for Country Details.
I learned how to create an API in React and searched for information on how to create a searchbar and filter in React and apply it to the challenge. Then I looked for a solution to create a dark / light theme.
In the meantime I determined my HTML structure and Sass / CSS. I tried to implement fluid typography and responsiveness and tried to prevent the use of media queries. 


### Built with

- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Responsive design
- [BEM](https://en.bem.info/methodology/css/) - BEM Methodology
- [React](https://reactjs.org/) - JS library
- [Sass](https://sass-lang.com) - Sass documentation


### What I learned

I learned how to build searchbars and filters, how to alphabetize search results and make it diacritic insensitive. I also learned about possibilities for darkmode themes in React and how to work with an API. I created custom hooks to fetch data and for a return button. 


### Continued development

I want to extend my knowledge of React and Sass, and stay informed of the latest developments in the field of CSS. 


### Useful resources

- [BuiltIn](https://builtin.com/software-engineering-perspectives/react-api) -    How to make API calls in React
- [DEV](https://dev.to/alais29/building-a-real-time-search-filter-in-react-a-step-by-step-guide-3lmm) - Step-by-step guide on how to build a search filter in React
- [REST Countries API](https://restcountries.com) - The API used for this challenge


## Author

- Website - [Marco Clarijs](https://github.com/MCDoodle1)
- Frontend Mentor - [@MCDoodle1](https://www.frontendmentor.io/profile/MCDoodle1)
