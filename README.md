# Weather-Report

<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/ioanniskousis/Weather-Report">
    <img src="resources/images/microverse.png" alt="Microverse Logo" width="80" height="80">
  </a>
  
  <h3 align="center">The Weather-Report Application</h3>
  
  <p align="center">
    This project is part of the Microverse curriculum in JavaScript course!
    <br />
    <a href="https://github.com/ioanniskousis/Weather-Report"><strong>Explore the docs</strong></a>
    <br />
    <a href="https://ioanniskousis.github.io/Weather-Report/">Live Version</a>
    <br />
    <a href="https://github.com/ioanniskousis/Weather-Report/issues">Report Bug</a>
    <span> - </span>
    <a href="https://github.com/ioanniskousis/Weather-Report/issues">Request Feature</a>
  </p>
</p>

This is a small Weather-Report application where the user can select a city from a list and retreive the weather information about the requested city.

<hr />

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Screen Shots](#screen-shots)
- [About the Project](#about-the-project)
- [Application Instructions](#application-instructions)
- [Live Version](#live-version)
- [System Requierments](#system-requierments)
- [Development](#development)
- [Dependencies](#dependencies)
- [Built With](#built-with)
- [Contributors](#contributors)
- [Acknowledgements](#acknowledgements)

## Screen Shots  
<img src="resources/images/wr-rain.png" alt="wr-rain.png">
<hr />
<img src="resources/images/wr-clouds.png" alt="wr-clouds.png">
<hr />
<!-- ABOUT THE PROJECT -->

## About The Project  

  The project uses asynchronus flow and follows the MVC principles.  
  The main control is applied in index.js.  
  Partially,  
    - the model for countries is implemented in countriesDB.js creating a data set of countries stored in dist/countries.json  
    - the model for cities is implemented in citiesDB.js creating a data set of cities stored in dist/cities.json   
    - the main consept is controlled in index.js  
      - first a callback function (citySelected) is supplied to the interface elements that represent a city (city buttons)  
      - the callback receives the requested city.  
      - calls an asynchronous API fetch procedure provided a callback (cityWeatherArrived) to receive the weather data for the requested city  
      - the city weather data that arrived are passed to the interface module cityWeatherInterface.js   
    - the module cityWeatherInterface.js contains procedures to update the interface information with the new data  

  * An initial population is performed when the localStorage is empty of Favorites by data held in seed.js.  
  * Shorthand commands for creating and accessing elements are used and are held in utils.js.  

<hr/>

<!-- ABOUT THE PROJECT -->

## Application Instructions  

  * The application comes with some initial data about the favotires cities held in seed.js file  

  * The favorite cities list is on the left. Clicking a city button  an http request is generated to get information about the weather at the requested city.  

  <img src="resources/images/favourites.png" alt="favourites" width="300" height="180"></img>

  * the received data are passed to the weather interface (cityWeatherInterface).  

  <img src="resources/images/weather.png" alt="weather.png" width="300" height="180"></img>

  * click the units button at the top-right to toggle between Fahrenheit and Celcius  
  * play around selecting a particular country's cities and select a city to view their weather  

<hr/>

## Live Version

[GitHub Pages](https://ioanniskousis.github.io/Weather-Report/)

<hr/>

## System Requierments

  - JavaScript Enabled  
  - You need to Disable Cross-Origin-Restrictions from your browser if you want to open the index.html from your file system without using a server.  

<hr/>

## Development
  * Clone the project
  ```
    https://github.com/ioanniskousis/Weather-Report.git
    
    Use VSCode and Live Server to show index.html
    Since webpack is used, run 'npm run build' on you terminal before opening
  ``` 
<hr/>

## Dependencies

  please run
  ```
    npm run build
  ```
  to comply with the dependencies held in package.json
<hr/>

## Built With

This project was built using these technologies.

  - JavaScript (ES6)
  - HTML5
  - CSS3
  - webpack
  - APIs
  - Git - GitHub
  - ESLint
  - Stylelint
  - Stickler

<hr/>

<!-- CONTACT -->

## Contributors

:bust_in_silhouette:
​
## Ioannis Kousis

- Github: [@ioanniskousis](https://github.com/ioanniskousis)
- Twitter: [@ioanniskousis](https://twitter.com/ioanniskousis)
- Linkedin: [Ioannis Kousis](https://www.linkedin.com/in/jgkousis)
- E-mail: jgkousis@gmail.com
​
<hr/>
<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

  - [Microverse](https://www.microverse.org/)
  - [The Odin Project](https://www.theodinproject.com/)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/ioanniskousis/Weather-Report.svg?style=flat-square
[contributors-url]: https://github.com/ioanniskousis/Weather-Report/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ioanniskousis/Weather-Report.svg?style=flat-square
[forks-url]: https://github.com/ioanniskousis/Weather-Report/network/members
[stars-shield]: https://img.shields.io/github/stars/ioanniskousis/Weather-Report.svg?style=flat-square
[stars-url]: https://github.com/ioanniskousis/Weather-Report/stargazers
[issues-shield]: https://img.shields.io/github/issues/ioanniskousis/Weather-Report.svg?style=flat-square
[issues-url]: https://github.com/ioanniskousis/Weather-Report/issues

