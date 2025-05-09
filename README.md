# Frontend Mentor - Results Summary Component Solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content

### Screenshot

![](./preview.jpg)

### Links

- Solution URL: [GitHub Repository](https://github.com/Ayokanmi-Adejola/Result-Summary-Component)
- Live Site URL: [Live Demo](https://ayokanmi-adejola.github.io/Result-Summary-Component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript
- JSON data handling

### What I learned

This project helped me practice several important front-end development concepts:

1. **Responsive Design**: Creating a layout that works well on both mobile and desktop screens using CSS flexbox and media queries.

2. **CSS Custom Properties**: Using CSS variables to maintain a consistent color scheme and make future updates easier.

```css
:root {
  /* Primary colors */
  --light-red: hsl(0, 100%, 67%);
  --light-red-bg: hsla(0, 100%, 67%, 0.1);
  --orangey-yellow: hsl(39, 100%, 56%);
  /* More color variables... */
}
```

3. **Dynamic Content Loading**: Working with JSON data to populate the page content dynamically using JavaScript.

4. **CORS Understanding**: Learning about Cross-Origin Resource Sharing (CORS) issues when working with local files and how to resolve them. I had to modify my approach to handle JSON data directly in the JavaScript file to avoid CORS errors when opening the HTML file directly from the file system.

### Continued development

In future projects, I plan to focus on:

- Implementing more advanced JavaScript functionality
- Exploring CSS Grid for more complex layouts
- Learning about proper error handling in fetch operations
- Setting up local development environments to avoid CORS issues

### Useful resources

- [MDN Web Docs - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) - Comprehensive guide to using the Fetch API.
- [MDN Web Docs - CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) - Helped me understand CORS issues and how to resolve them.
- [CSS-Tricks - A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - This helped me implement the responsive layout.

## Author

- Website - [Ayokanmi Adejola](https://ayokanmi-adejola-portfolio.netlify.app/)
- Frontend Mentor - [@Ayokanmi Adejola](https://www.frontendmentor.io/profile/Ayokanmi-Adejola)
