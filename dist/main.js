!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var r=(a=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[t].concat(i).concat([r]).join("\n")}var a,c,s;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);o&&r[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},function(e,n,t){var o=t(2),r=t(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);e.exports=r.locals||{}},function(e,n,t){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function c(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},o=[],r=0;r<e.length;r++){var i=e[r],s=n.base?i[0]+n.base:i[0],l=t[s]||0,d="".concat(s," ").concat(l);t[s]=l+1;var u=c(d),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:d,updater:g(p,n),references:1}),o.push(d)}return o}function l(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var d,u=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function p(e,n,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=u(n,r);else{var i=document.createTextNode(r),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function h(e,n,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var f=null,b=0;function g(e,n){var t,o,r;if(n.singleton){var i=b++;t=f||(f=l(n)),o=p.bind(null,t,i,!1),r=p.bind(null,t,i,!0)}else t=l(n),o=h.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=r());var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<t.length;o++){var r=c(t[o]);a[r].references--}for(var i=s(e,n),l=0;l<t.length;l++){var d=c(t[l]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}t=i}}}},function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),i=t(5),a=t.n(i),c=t(6),s=t(7),l=t(8),d=r()(!1),u=a()(c.a),p=a()(s.a),h=a()(l.a);d.push([e.i,":root {\n  --body-bg-color: white;\n  --header-bg-color: rgb(48, 136, 203);\n  --header-height: 0px;\n  --cities-header-height: 140px;\n  --weather-header-height: 60px;\n  --main-background-color: #000;\n  --cities-header-bg-color: #7af;\n  --cities-body-bg-color: #57a;\n}\n\n/* #27f; */\n\n* {\n  box-sizing: border-box;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n\n* ::-webkit-scrollbar {\n  display: none;\n}\n\nhtml {\n  height: 100vh;\n  padding: 0;\n  margin: 0;\n  font-family: 'Times New Roman', Times, serif;\n}\n\nbody {\n  height: 100%;\n  background-color: var(--body-bg-color);\n  padding: 0;\n  margin: 0;\n}\n\nheader {\n  background-color: var(--header-bg-color);\n  height: var(--header-height);\n  margin: 0;\n}\n\nmain {\n  position: relative;\n  background-color: var(--main-background-color);\n  width: 100%;\n  height: calc(100% - var(--header-height));\n  border-top: 4px solid var(--header-bg-color);\n  border-bottom: 4px solid var(--header-bg-color);\n  border-right: 4px solid var(--header-bg-color);\n}\n\n#citiesTableView {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 30%;\n  /* min-width: 200px; */\n  height: 100%;\n  border: 4px solid var(--header-bg-color);\n  /* border-right: 4px solid var(--header-bg-color); */\n  color: white;\n}\n\n#citiesTableHeader,\n#weatherViewHeader {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: var(--cities-header-height);\n  /* background-color: var(--cities-header-bg-color); */\n  border-bottom: 4px solid var(--header-bg-color);\n  font-size: 28px;\n  /* display: flex;\n  justify-content: center;\n  align-items: center; */\n}\n\n#weatherViewHeader {\n  height: var(--weather-header-height);\n}\n\n#weatherViewHeader > p {\n  font-size: 42px;\n  /* background-color: #555; */\n  margin: 0;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#searchCity,\n#searchCountry {\n  height: 60px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #888;\n}\n\n\n#searchCountry {\n  visibility: hidden;\n  display: none;\n}\n\n#searchCityInput,\n#searchCountryInput {\n  margin: auto 5px auto 10px;\n  font-size: medium;\n  padding: 10px 20px;\n  border: none;\n  background-color: black;\n  color: white;\n  outline: none;\n  width: calc(100% - 70px);\n  border: 1px solid #555;\n}\n\n#searchCityButton,\n#searchCountryButton {\n  width: 40px;\n  height: 40px;\n  margin: auto 10px auto 5px;\n  display: inline-block;\n  background-image: url("+u+");\n  background-position: center;\n  background-size: 50%;\n  background-repeat: no-repeat;\n  cursor: pointer;\n}\n\n#searchCityButton:hover,\n#searchCountryButton:hover {\n  background-color: #555;\n}\n\n#searchCityButton:active,\n#searchCountryButton:active {\n  background-color: #888;\n}\n\n.citiesTabsBar {\n  width: 100%;\n  height: 76px;\n  background-color: #666;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.citiesTab {\n  /* width: 30%; */\n  flex: 1;\n  margin: 30px 5px 0 5px;\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 18px;\n  background-color: #333;\n  cursor: pointer;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n}\n\n.citiesTabSelected {\n  background-color: #777;\n  box-shadow: 0 0 4px 4px rgba(255, 255, 255, 0.5);\n} \n\n.citiesTabsBar div:hover {\n  background-color: #555;\n}\n\n.citiesTabsBar div:active {\n  background-color: #777;\n  cursor: pointer;\n}\n\n#citiesTableBody,\n#countriesTableBody,\n#weatherViewBody {\n  position: absolute;\n  left: 0;\n  top: var(--cities-header-height);\n  width: 100%;\n  height: calc(100% - var(--cities-header-height));\n  /* background-color: var(--cities-body-bg-color); */\n  overflow: auto;\n  padding: 0 10px 10px 10px;\n}\n\n#weatherViewBody {\n  top: var(--weather-header-height);\n  height: calc(100% - var(--weather-header-height));\n}\n\n.citiesTableRow,\n.countriesTableRow {\n  margin-top: 10px;\n  border: 1px solid #aaa;\n  height: 60px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 4px 10px;\n  cursor: pointer;\n}\n\n.citiesTableRow:hover {\n  background-color: #555;\n}\n\n.citiesTableRow:active {\n  background-color: #888;\n}\n\n#weatherView {\n  overflow: auto;\n  position: absolute;\n  left: 30%;\n  width: 70%;\n  height: 100%;\n  /* background-color: #57a; */\n  overflow: auto;\n  padding: 0 10px;\n  color: white;\n  border: ;\n  border: 4px solid var(--header-bg-color);\n  border-left: none;\n\n}\n\n#weatherViewBodyTopPanel {\n  position: relative;\n  margin-top: 10px;\n  height: 40%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  /* background-color: rgba(255, 255, 255, 0.3); */\n}\n\n#weatherViewTemperaturePanel {\n  /* width: 30vw; */\n  padding: 0 40px;\n  height: 100%;\n  font-size: 14vw;\n  /* background-color: rgba(50, 50, 50, 0.3); */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#weatherViewTemperaturePanel > span {\n  font-size: 2vw;\n  margin-bottom: -7vw;\n  /* line-height: 12vw; */\n}\n\n#temperatureToggle {\n  position: absolute;\n  top: 0;\n  right: 0;\n  cursor: pointer;\n  padding: 10px;\n}\n\n#temperatureToggle:hover {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\n#temperatureToggle:active {\n  background-color: rgba(100, 100, 100, 0.5);\n}\n\n#temperatureLabel {\n  position: absolute;\n  top: 10px;\n  width: 200px;\n  font-size: 18px;\n  text-align: center;\n  left: calc(50% - 100px);\n}\n\n.arrowLeft {\n  width: 60px;\n  height: 50px;\n  background-image: url("+p+");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: 32px 32px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  cursor: pointer;\n  visibility: hidden;\n}\n\n.arrowLeft:hover {\n  background-color: rgba(255, 255, 255, 0.5);\n  background-image: url("+h+");\n}\n\n\n@media screen and (max-width: 768px) {\n  .projectsSideBar {\n    border: none;\n  }\n\n  .main {\n    flex-direction: column;\n  }\n\n  .viewPlaceHolder {\n    font-size: 3vw;\n  }\n\n  #citiesTableView,\n  #citiesTableView {\n    width: 100%;\n    border: 4px solid var(--header-bg-color);\n  }\n\n  .arrowLeft {\n    visibility: visible;\n  }\n\n  /* #citiesTableView {\n    visibility: hidden;\n\n  } */\n}\n",""]),n.default=d},function(e,n,t){"use strict";t.r(n);t(1);function o(e){return document.getElementById(e)}function r(e){return document.createElement(e)}function i(e,n){e.appendChild(n)}function a(e){e.style.display="flex",e.style.opacity="1"}function c(e){var n;(n=e).style.opacity="0",setTimeout(()=>{n.style.display="none"},600),setTimeout(()=>{e.remove()},200)}function s(e,n){const t=r("div");t.className="backView",i(document.body,t),t.setAttribute("tabindex","0"),t.addEventListener("keypress",e=>{27===e.keyCode&&c(t)});const o=r("div");o.className="alertPanel";const s=r("div");s.className="alertTitle",s.textContent=e;const l=r("div");l.className="alertText",l.textContent=n;const d=r("div");d.className="okAlertButton",d.textContent="OK",d.addEventListener("click",()=>{c(t)}),i(o,s),i(o,l),i(o,d),i(t,o),a(t)}var l=function(e){fetch("./cities.json").then(e=>e.json()).then(n=>function(e,n){n(e.sort((e,n)=>e.country===n.country?e.name>n.name:e.country>n.country))}(n,e)).catch(e=>s("Error : ".concat(e)))};var d=function(e){fetch("./countries.json").then(e=>e.json()).then(n=>function(e,n){n(e.sort((e,n)=>e.name>n.name))}(n,e)).catch(e=>s("Error : ".concat(e)))};var u=()=>{const e=[],n=()=>{localStorage.setItem("weatherReport-favouriteCitiesDB",JSON.stringify(e))},t=t=>{e.push(t),n()},o=()=>{const n=JSON.parse(localStorage.getItem("weatherReport-favouriteCitiesDB"));n&&n.forEach(n=>{e.push(n)})};return o(),{cities:e,load:o,add:t,create:e=>{const n={id:e.id,name:e.name,country:e.country};return t(n),n},remove:t=>{const o=(n=>{for(let t=0;t<e.length;t+=1){if(e[t].id===n)return t}return-1})(t);if(-1!==o){const t=e[o];return e.splice(o,1),n(),t}return null},find:n=>{for(let t=0;t<e.length;t+=1){const o=e[t];if(o.id===n)return o}return null}}};const p={id:264371,name:"Athens",country:"GR"},h={id:3169070,name:"Rome",country:"IT"},f={id:2968815,name:"Paris",country:"FR"},b={id:2950158,name:"Berlin",country:"DE"},g={id:2643743,name:"London",country:"GB"};var m=function(e){e.add(p),e.add(h),e.add(f),e.add(b),e.add(g)};let y=null,v=null;function w(e){o("searchCity").style.visibility=0===e?"visible":"hidden",o("searchCity").style.display=0===e?"flex":"none",o("searchCountry").style.visibility=1===e?"visible":"hidden",o("searchCountry").style.display=1===e?"flex":"none"}localStorage.removeItem("weatherReport-favouriteCitiesDB");const x=u();0===x.cities.length&&m(x);function T(e){const n=document.getElementById("citiesTableBody");if(e.country){const t=document.createElement("div");t.setAttribute("datafield","city"),t.setAttribute("citycode",e.id),t.className="citiesTableRow";const r=document.createElement("div");r.innerHTML=e.name;const i=document.createElement("div");i.innerHTML=e.country,t.appendChild(r),t.appendChild(i),n.appendChild(t),t.addEventListener("click",()=>{"visible"===o("weatherView").style.visibility||(o("citiesTableView").style.display="none",o("weatherView").style.display="block",o("citiesTableView").style.visibility="hidden",o("weatherView").style.visibility="visible");L(t.getAttribute("citycode"))})}}function k(e){w(0);const n=document.getElementById("citiesTableBody");n.innerHTML="",n.scrollTo(0,0);const t=e.length>100?100:e.length;for(let n=0;n<t;n+=1)T(e[n])}function C(e){const n=document.getElementById("citiesTableBody"),t=document.createElement("div");t.setAttribute("datafield","country"),t.setAttribute("countrycode",e.code),t.className="citiesTableRow";const o=document.createElement("div");o.innerHTML=e.name;const r=document.createElement("div");r.innerHTML=e.code,t.appendChild(o),t.appendChild(r),n.appendChild(t),t.addEventListener("click",()=>{!function(e){w(0);const n=[];for(let t=0;t<y.length;t+=1){const o=y[t];o.country===e&&n.push(o)}I(document.getElementsByClassName("citiesTab"),1),k(n)}(e.code)})}function B(e){w(1);const n=document.getElementById("citiesTableBody");n.innerHTML="",n.scrollTo(0,0);for(let n=0;n<e.length;n+=1)C(e[n])}function E(e){const n=document.getElementById("weatherViewTemperaturePanel");n.setAttribute("temperatureData",e.toString());const t=parseInt(n.getAttribute("temperatureUnit"),10);if(0===t){const t=1.8*e-459.67;n.innerHTML=parseInt(t,10).toString().concat("<span>&deg;F</span>")}else if(1===t){const t=e-273.15;n.innerHTML=parseInt(t,10).toString().concat("<span>&deg;C</span>")}}function j(e){!function(e){const n=e.name;o("weatherCityName").innerHTML=n}(e),function(e){document.getElementById("allData").innerHTML="Data : ".concat(JSON.stringify(e))}(e),E(parseFloat(e.main.temp))}function L(e){!function(e){fetch(e).then(e=>e.json()).then(e=>j(e)).catch(e=>s("Error : ".concat(e)))}("https://api.openweathermap.org/data/2.5/weather?id=".concat(e).concat("&appid=a832f5712931bcd07786d24b4290543e"))}function S(){window.innerWidth>768?(o("citiesTableView").style.display="block",o("weatherView").style.display="block"):(o("citiesTableView").style.display="block",o("weatherView").style.display="none")}function I(e,n){for(let n=0;n<e.length;n+=1){e[n].className="citiesTab"}n>-1&&(e[n].className="citiesTab citiesTabSelected")}function N(e,n){switch(I(e,n),n){case 0:k(x.cities);break;case 1:k(y);break;case 2:B(v)}}k(x.cities),l((function(e){y=e})),d((function(e){v=e})),L("2643743"),window.addEventListener("resize",()=>{S()}),window.addEventListener("load",()=>{S()}),o("temperatureToggle").addEventListener("click",()=>{const e=document.getElementById("weatherViewTemperaturePanel"),n=0===parseInt(e.getAttribute("temperatureUnit"),10)?1:0;e.setAttribute("temperatureUnit",n.toString());E(parseInt(e.getAttribute("temperatureData"),10))}),function(){const e=document.getElementsByClassName("citiesTab");for(let n=0;n<e.length;n+=1){e[n].addEventListener("click",()=>{N(e,n)})}}(),o("searchCityButton").addEventListener("click",()=>{I(document.getElementsByClassName("citiesTab"),1);k(function(e){const n=[];for(let t=0;t<y.length;t+=1){const o=y[t],r=o.name.toUpperCase(),i=e.toUpperCase();r.includes(i)&&n.push(o)}return n}(o("searchCityInput").value))}),o("searchCountryButton").addEventListener("click",()=>{I(document.getElementsByClassName("citiesTab"),2);B(function(e){const n=[];for(let t=0;t<v.length;t+=1){const o=v[t],r=o.name.toUpperCase(),i=e.toUpperCase();r.includes(i)&&n.push(o)}return n}(o("searchCountryInput").value))})},function(e,n,t){"use strict";e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,n,t){"use strict";n.a=t.p+"06a5f04003c395e15a882558f175f448.png"},function(e,n,t){"use strict";n.a=t.p+"c0f8eeee57dc5305cbca17eb5b2ba024.png"},function(e,n,t){"use strict";n.a=t.p+"f4cdbea64157e60fe74985a2d030d190.png"}]);