!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=4)}([function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[t].concat(i).concat([o]).join("\n")}var a,c,s;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},function(n,e,t){var r=t(2),o=t(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);n.exports=o.locals||{}},function(n,e,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function c(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function s(n,e){for(var t={},r=[],o=0;o<n.length;o++){var i=n[o],s=e.base?i[0]+e.base:i[0],l=t[s]||0,d="".concat(s," ").concat(l);t[s]=l+1;var u=c(d),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:d,updater:b(p,e),references:1}),r.push(d)}return r}function l(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var d,u=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function p(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=u(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function h(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var f=null,g=0;function b(n,e){var t,r,o;if(e.singleton){var i=g++;t=f||(f=l(e)),r=p.bind(null,t,i,!1),o=p.bind(null,t,i,!0)}else t=l(e),r=h.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var t=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=c(t[r]);a[o].references--}for(var i=s(n,e),l=0;l<t.length;l++){var d=c(t[l]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}t=i}}}},function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),i=t(5),a=t.n(i),c=t(6),s=t(7),l=t(8),d=o()(!1),u=a()(c.a),p=a()(s.a),h=a()(l.a);d.push([n.i,":root {\n  --body-bg-color: white;\n  --header-bg-color: rgb(48, 136, 203);\n  --header-height: 0px;\n  --cities-header-height: 140px;\n  --weather-header-height: 60px;\n  --main-background-color: #000;\n  --cities-header-bg-color: #7af;\n  --cities-body-bg-color: #57a;\n}\n\n/* #27f; */\n\n* {\n  box-sizing: border-box;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n\n* ::-webkit-scrollbar {\n  display: none;\n}\n\nhtml {\n  height: 100vh;\n  padding: 0;\n  margin: 0;\n  font-family: 'Times New Roman', Times, serif;\n}\n\nbody {\n  height: 100%;\n  background-color: var(--body-bg-color);\n  padding: 0;\n  margin: 0;\n}\n\nheader {\n  background-color: var(--header-bg-color);\n  height: var(--header-height);\n  margin: 0;\n}\n\nmain {\n  position: relative;\n  background-color: var(--main-background-color);\n  width: 100%;\n  height: calc(100% - var(--header-height));\n  /* border-top: 4px solid var(--header-bg-color);\n  border-bottom: 4px solid var(--header-bg-color);\n  border-right: 4px solid var(--header-bg-color); */\n  border: 4px solid var(--header-bg-color);\n  display: flex;\n}\n\n#citiesTableView {\n  /* position: absolute;\n  left: 0;\n  top: 0;\n  width: 30%; */\n  position: relative;\n  border-right: 1px solid #cee;\n  flex: 1;\n  /* min-width: 200px; */\n  height: 100%;\n  border-right: 4px solid var(--header-bg-color);\n  /* border-right: 4px solid var(--header-bg-color); */\n  color: white;\n}\n\n#citiesTableHeader,\n#weatherViewHeader {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: var(--cities-header-height);\n  /* background-color: var(--cities-header-bg-color); */\n  border-bottom: 4px solid var(--header-bg-color);\n  font-size: 28px;\n  /* display: flex;\n  justify-content: center;\n  align-items: center; */\n}\n\n#weatherViewHeader {\n  height: var(--weather-header-height);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n#weatherCityName {\n  font-size: 36px;\n  /* background-color: #555; */\n  margin: 0;\n  flex: 4;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#weatherCountryName {\n  flex: 4;\n  font-size: 16px;\n  font-variant: small-caps;\n}\n\n#searchCity,\n#searchCountry {\n  height: 60px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  /* background-color: #888; */\n}\n\n\n#searchCountry {\n  visibility: hidden;\n  display: none;\n}\n\n#searchCityInput,\n#searchCountryInput {\n  margin: auto 5px auto 10px;\n  font-size: medium;\n  padding: 10px 20px;\n  border: none;\n  background-color: black;\n  color: white;\n  outline: none;\n  width: calc(100% - 70px);\n  border: 1px solid #555;\n}\n\n#searchCityButton,\n#searchCountryButton {\n  width: 40px;\n  height: 40px;\n  margin: auto 10px auto 5px;\n  display: inline-block;\n  background-image: url("+u+");\n  background-position: center;\n  background-size: 50%;\n  background-repeat: no-repeat;\n  cursor: pointer;\n}\n\n#searchCityButton:hover,\n#searchCountryButton:hover {\n  background-color: #555;\n}\n\n#searchCityButton:active,\n#searchCountryButton:active {\n  background-color: #888;\n}\n\n.citiesTabsBar {\n  width: 100%;\n  height: 76px;\n  /* background-color: #666; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-variant: small-caps;\n}\n\n.citiesTab {\n  /* width: 30%; */\n  flex: 1;\n  margin: 30px 5px 0 5px;\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 18px;\n  background-color: #333;\n  cursor: pointer;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n}\n\n.citiesTabSelected {\n  background-color: #777;\n  box-shadow: 0 0 4px 4px rgba(255, 255, 255, 0.5);\n} \n\n.citiesTabsBar div:hover {\n  background-color: #555;\n}\n\n.citiesTabsBar div:active {\n  background-color: #777;\n  cursor: pointer;\n}\n\n#citiesTableBody,\n#countriesTableBody,\n#weatherViewBody {\n  position: absolute;\n  left: 0;\n  top: var(--cities-header-height);\n  width: 100%;\n  height: calc(100% - var(--cities-header-height));\n  /* background-color: var(--cities-body-bg-color); */\n  overflow: auto;\n  padding: 0 10px 10px 10px;\n}\n\n#weatherViewBody {\n  top: var(--weather-header-height);\n  height: calc(100% - var(--weather-header-height));\n}\n\n.citiesTableRow,\n.countriesTableRow {\n  margin-top: 10px;\n  border: 1px solid #aaa;\n  height: 60px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 4px 10px;\n  cursor: pointer;\n}\n\n.citiesTableRow:hover {\n  background-color: #555;\n}\n\n.citiesTableRow:active {\n  background-color: #888;\n}\n\n#weatherView {\n  /* overflow: auto;\n  position: absolute;\n  left: 30%;\n  width: 70%;\n  height: 100%; */\n  position: relative;\n  display: block;\n  flex: 2;\n  /* background-color: #57a; */\n  /* overflow: auto; */\n  padding: 0 10px;\n  color: white;\n  /* border: ; */\n  /* border: 4px solid var(--header-bg-color); */\n  /* border-left: none; */\n\n}\n\n#weatherViewBodyTopPanel {\n  position: relative;\n  margin-top: 10px;\n  height: 40%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  /* background-color: rgba(255, 255, 255, 0.3); */\n}\n\n#weatherViewTemperaturePanel {\n  /* width: 30vw; */\n  padding: 0 40px;\n  height: 100%;\n  font-size: 14vw;\n  /* background-color: rgba(50, 50, 50, 0.3); */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#weatherViewTemperaturePanel > span {\n  font-size: 2vw;\n  margin-bottom: -7vw;\n  /* line-height: 12vw; */\n}\n\n#temperatureToggle {\n  position: absolute;\n  top: 0;\n  right: 0;\n  cursor: pointer;\n  padding: 10px;\n}\n\n#temperatureToggle:hover {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\n#temperatureToggle:active {\n  background-color: rgba(100, 100, 100, 0.5);\n}\n\n#temperatureLabel {\n  position: absolute;\n  top: 10px;\n  width: 200px;\n  font-size: 18px;\n  text-align: center;\n  left: calc(50% - 100px);\n}\n\n#arrowLeft {\n  width: 80px;\n  height: 100%;\n  background-image: url("+p+");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: 32px 32px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  cursor: pointer;\n  visibility: hidden;\n}\n\n#arrowLeft:hover {\n  background-color: rgba(255, 255, 255, 0.5);\n  background-image: url("+h+");\n}\n\n#minmaxContainer,\n#weatherDescriptionContainer {\n  height: 60px;\n  display: flex;\n  border-top: 1px solid #555;\n  border-bottom: 1px solid #555;\n  padding: 0 20px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n#minContainer,\n#maxContainer,\n#weatherMain,\n#weatherDescription {\n  width: 50%;\n  display: flex;\n  align-items: center;\n  font-size: 22px;\n  color: white;\n}\n\n#minContainer {\n  justify-content: flex-start;\n  font-variant: small-caps;\n}\n\n#maxContainer {\n  justify-content: flex-end;\n  font-variant: small-caps;\n}\n\n#weatherMain,\n#weatherDescription  {\n  justify-content: center;\n  font-variant: small-caps;\n}\n\n#weatherBackground {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  /* background-color: rgba(255, 255, 255, 0.3); */\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  opacity: 0.5;\n}\n\n@media screen and (max-width: 768px) {\n  main {\n    flex-direction: column;\n  }\n\n  #citiesTableView {\n    border: none;\n  }\n\n  #citiesTableView,\n  #citiesTableView {\n    width: 100%;\n  }\n\n  #arrowLeft {\n    visibility: visible;\n  }\n\n  #weatherViewTemperaturePanel {\n    font-size: 20vw;\n  }\n\n  #weatherViewTemperaturePanel > span {\n    font-size: 4vw;\n    margin-bottom: -10vw;\n  }\n}\n",""]),e.default=d},function(n,e,t){"use strict";t.r(e);t(1);function r(n){return document.getElementById(n)}function o(n){return document.createElement(n)}function i(n,e){n.appendChild(e)}function a(n){n.style.display="flex",n.style.opacity="1"}function c(n){var e;(e=n).style.opacity="0",setTimeout(()=>{e.style.display="none"},600),setTimeout(()=>{n.remove()},200)}function s(n,e){const t=o("div");t.className="backView",i(document.body,t),t.setAttribute("tabindex","0"),t.addEventListener("keypress",n=>{27===n.keyCode&&c(t)});const r=o("div");r.className="alertPanel";const s=o("div");s.className="alertTitle",s.textContent=n;const l=o("div");l.className="alertText",l.textContent=e;const d=o("div");d.className="okAlertButton",d.textContent="OK",d.addEventListener("click",()=>{c(t)}),i(r,s),i(r,l),i(r,d),i(t,r),a(t)}function l(n,e){return n.getAttribute(e)}function d(n,e,t){n.setAttribute(e,t)}var u=function(n){fetch("./cities.json").then(n=>n.json()).then(e=>function(n,e){e(n.sort((n,e)=>n.country===e.country?n.name>e.name:n.country>e.country))}(e,n)).catch(n=>s("Error : ".concat(n)))};var p=function(n){fetch("./countries.json").then(n=>n.json()).then(e=>function(n,e){e(n.sort((n,e)=>n.name>e.name))}(e,n)).catch(n=>s("Error : ".concat(n)))};var h=()=>{const n=[],e=()=>{localStorage.setItem("weatherReport-favouriteCitiesDB",JSON.stringify(n))},t=t=>{n.push(t),e()},r=()=>{const e=JSON.parse(localStorage.getItem("weatherReport-favouriteCitiesDB"));e&&e.forEach(e=>{n.push(e)})};return r(),{cities:n,load:r,add:t,create:n=>{const e={id:n.id,name:n.name,country:n.country};return t(e),e},remove:t=>{const r=(e=>{for(let t=0;t<n.length;t+=1){if(n[t].id===e)return t}return-1})(t);if(-1!==r){const t=n[r];return n.splice(r,1),e(),t}return null},find:e=>{for(let t=0;t<n.length;t+=1){const r=n[t];if(r.id===e)return r}return null}}};const f={id:264371,name:"Athens",country:"GR"},g={id:3169070,name:"Rome",country:"IT"},b={id:2968815,name:"Paris",country:"FR"},m={id:2950158,name:"Berlin",country:"DE"},y={id:2643743,name:"London",country:"GB"};var v=function(n){n.add(f),n.add(g),n.add(b),n.add(m),n.add(y)};let w=null,x=null;function T(n){r("searchCity").style.visibility=0===n?"visible":"hidden",r("searchCity").style.display=0===n?"flex":"none",r("searchCountry").style.visibility=1===n?"visible":"hidden",r("searchCountry").style.display=1===n?"flex":"none"}localStorage.removeItem("weatherReport-favouriteCitiesDB");const C=h();0===C.cities.length&&v(C);function k(n){const e=r("citiesTableBody");if(n.country){const t=o("div");d(t,"datafield","city"),d(t,"citycode",n.id),t.className="citiesTableRow";const r=o("div");r.innerHTML=n.name;const i=o("div");i.innerHTML=n.country,t.appendChild(r),t.appendChild(i),e.appendChild(t),t.addEventListener("click",()=>{R(t.getAttribute("citycode"))})}}function B(n){T(0);const e=document.getElementById("citiesTableBody");e.innerHTML="",e.scrollTo(0,0);const t=n.length>100?100:n.length;for(let e=0;e<t;e+=1)k(n[e])}function j(n){const e=document.getElementById("citiesTableBody"),t=o("div");t.setAttribute("datafield","country"),t.setAttribute("countrycode",n.code),t.className="citiesTableRow";const r=o("div");r.innerHTML=n.name;const i=o("div");i.innerHTML=n.code,t.appendChild(r),t.appendChild(i),e.appendChild(t),t.addEventListener("click",()=>{!function(n){T(0);const e=[];for(let t=0;t<w.length;t+=1){const r=w[t];r.country===n&&e.push(r)}z(document.getElementsByClassName("citiesTab"),1),B(e)}(n.code)})}function L(n){T(1);const e=document.getElementById("citiesTableBody");e.innerHTML="",e.scrollTo(0,0);for(let e=0;e<n.length;e+=1)j(n[e])}function E(n){const e=document.getElementById("weatherViewTemperaturePanel");return 0===parseInt(l(e,"temperatureUnit"),10)?1.8*n-459.67:n-273.15}function M(n){const e=document.getElementById("weatherViewTemperaturePanel"),t=0===parseInt(l(e,"temperatureUnit"),10)?"<span>&deg;F</span>":"<span>&deg;C</span>";d(e,"temperatureData",n.toString());const r=parseInt(E(n),10).toString().concat(t);e.innerHTML=r}function N(n){r("minContainer").innerHTML="min : ".concat(n.toFixed(2))}function V(n){r("maxContainer").innerHTML="max : ".concat(n.toFixed(2))}function I(n){const e=r("weatherBackground"),t="../resources/images/".concat(["sunshine.jpg","clouds-scattered.jpg","rain.jpg"][n]);e.style.backgroundImage="url('".concat(t).concat("')")}function S(n){const e=r("weatherView"),t=r("citiesTableView");"none"===window.getComputedStyle(e).display&&(e.style.display="block",t.style.display="none"),function(n){const e=n.name;r("weatherCityName").innerHTML=e}(n),M(parseFloat(n.main.temp)),function(n){const e=E(parseFloat(n.main.temp_min)),t=E(parseFloat(n.main.temp_max));d(r("minContainer"),"temperatureData",n.main.temp_min),d(r("maxContainer"),"temperatureData",n.main.temp_max),N(e),V(t)}(n),function(n){const e=r("weatherMain"),t=r("weatherDescription"),o=n.weather[0].main,i=n.weather[0].description;switch(e.innerHTML=o,t.innerHTML=i,o.toLowerCase()){case"clouds":I(1);break;case"rain":I(2);break;default:I(0)}}(n)}function R(n){!function(n){fetch(n).then(n=>n.json()).then(n=>S(n)).catch(n=>s("Error : ".concat(n)))}("https://api.openweathermap.org/data/2.5/weather?id=".concat(n).concat("&appid=a832f5712931bcd07786d24b4290543e"))}function H(){window.innerWidth>768?(r("citiesTableView").style.display="block",r("weatherView").style.display="block"):(r("citiesTableView").style.display="block",r("weatherView").style.display="none")}function z(n,e){for(let e=0;e<n.length;e+=1){n[e].className="citiesTab"}e>-1&&(n[e].className="citiesTab citiesTabSelected")}function A(n,e){switch(z(n,e),e){case 0:B(C.cities);break;case 1:B(w);break;case 2:L(x)}}B(C.cities),u((function(n){w=n})),p((function(n){x=n})),R("2643743"),window.addEventListener("resize",()=>{H()}),window.addEventListener("load",()=>{H()}),r("temperatureToggle").addEventListener("click",()=>{const n=document.getElementById("weatherViewTemperaturePanel"),e=0===parseInt(n.getAttribute("temperatureUnit"),10)?1:0;n.setAttribute("temperatureUnit",e.toString());M(parseInt(n.getAttribute("temperatureData"),10));const t=E(parseFloat(l(r("minContainer"),"temperatureData"))),o=E(parseFloat(l(r("maxContainer"),"temperatureData")));N(t),V(o)}),function(){const n=document.getElementsByClassName("citiesTab");for(let e=0;e<n.length;e+=1){n[e].addEventListener("click",()=>{A(n,e)})}}(),r("searchCityButton").addEventListener("click",()=>{z(document.getElementsByClassName("citiesTab"),1);B(function(n){const e=[];for(let t=0;t<w.length;t+=1){const r=w[t],o=r.name.toUpperCase(),i=n.toUpperCase();o.includes(i)&&e.push(r)}return e}(r("searchCityInput").value))}),r("searchCountryButton").addEventListener("click",()=>{z(document.getElementsByClassName("citiesTab"),2);L(function(n){const e=[];for(let t=0;t<x.length;t+=1){const r=x[t],o=r.name.toUpperCase(),i=n.toUpperCase();o.includes(i)&&e.push(r)}return e}(r("searchCountryInput").value))}),r("arrowLeft").addEventListener("click",()=>{r("citiesTableView").style.display="block",r("weatherView").style.display="none"})},function(n,e,t){"use strict";n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,e,t){"use strict";e.a=t.p+"06a5f04003c395e15a882558f175f448.png"},function(n,e,t){"use strict";e.a=t.p+"c0f8eeee57dc5305cbca17eb5b2ba024.png"},function(n,e,t){"use strict";e.a=t.p+"f4cdbea64157e60fe74985a2d030d190.png"}]);