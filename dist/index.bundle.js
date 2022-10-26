"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/background.jpg */ "./src/assets/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\nhtml{\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center center fixed; \n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    overflow: hidden;\n}\nmain{\n    padding: 1% 5% 0 5%;\n}\n.heading{\n    color: white;\n    width: max-content;\n    margin: 0 auto 10px auto;\n}\n.top-section{\n    display: flex;\n    color: white;\n    margin-bottom: 15px;\n    justify-content:space-evenly;\n}\n\n.middle-section{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    text-align: center;\n}\n\n#today-icon{\n    height: 8em;\n    filter: invert(1);\n    margin: 10px 0 10px 0;\n}\n\n.temperatureContainer{\n    display: flex;\n    font-size: 3rem;\n    justify-content: center;\n    margin-bottom: 10px;\n}\n.temperatureContainer img{\n    width: 1em;\n    filter: invert(1);\n}\n#today-description{\n    font-style: italic;\n    margin-bottom: 10px;\n    font-size: 1rem;\n}\n\n#city-input{\n    position: relative;\n    left: 12px;\n    background-color: transparent;\n    border: none;\n    color: white;\n    height: 30px;\n    border-bottom: 1px groove white;\n}\n#city-input::placeholder{\n    color: white;\n    \n}\n#city-input:focus, #city-input:active {\n    background: transparent;\n    outline: none;\n}\ninput:-webkit-autofill,\ninput:-webkit-autofill:hover,\ninput:-webkit-autofill:focus,\ninput:-webkit-autofill:active {\n    transition: background-color 5000s ease-in-out 0s;\n    -webkit-text-fill-color: #fff !important;\n}\n\n#search-button{\n    background-color: transparent;\n    border: none;\n    filter: invert(1);\n    cursor: pointer;\n}\n\n#search-button #searchIcon{\n    height: 17px;\n    font-size: 17px;\n    position: relative;\n    top: 5px;\n    right: 15px;\n    cursor: pointer;\n}\n/* Left and Right section of the today weather section */\n.top-left-section, .top-right-section{\n    display: flex;\n    flex-direction: column;\n    justify-content:space-evenly;\n    /* Weird: pixels wont overflow data on shrink but percentage does?? */\n    width: 150px;\n}\n.top-left-section{\n    text-align: center;\n}\n.topRightItemContainer{\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    width: 80%;\n    align-items: center;\n}\n.leftImageIcon{\n    filter: invert(1);\n    height: 2.5rem;\n}\n.todayInfoLabel{\n    font-size: .3em;\n}\n.dataInfoAndUnit{\n    display: flex;\n    font-size: 2em;\n    align-items: center;\n}\n/* Carousel */\n.forecast-carousel{\n    position: relative;\n    width: 80%;\n    margin: 0 auto;\n    height: 150px;\n}\n\n.carousel-image{\n    height: 100%;\n    width: 100%;\n    /* Very useful for dynamic covering with images */\n    /* object-fit: cover; */\n    filter: invert(1);\n}\n\n.carousel-track-container{\n    position: relative;\n    height: 100%;\n    overflow: hidden;\n}\n\n.carousel-track{\n    list-style: none;\n    position: relative;\n    height: 100%;\n    transition: transform 880ms ease-in;\n}\n.carousel-slide{\n    position: absolute;\n    top: 0;\n    bottom: 0; \n    width: 100%;\n}\n.carousel-button{\n    position: absolute; \n    top: 50%;\n    transform: translateY(-50%);\n    border: 0;\n    background-color: transparent;\n    filter: invert(1);\n    cursor: pointer;\n}\n\n.carousel-button--left{\n    left: -40px;\n}\n\n.carousel-button--right{\n    right: -40px;\n}\n\n.carousel-button img {\n    width: 35px;\n}\n.carousel-nav{\n    display: flex;\n    justify-content: center;\n    padding: 10px 0;\n}\n\n.carousel-indicator{\n    border: 0;\n    border-radius: 50%;\n    width: 12px;\n    height: 12px;\n    background: rgba(255,255,255, .6);\n    margin: 25px 15px 0 15px;\n    cursor: pointer;\n\n}\n\n.carousel-indicator.current-slide{\n    background: rgba(255,255,255, 1);\n}\n\n.isHidden{\n    display: none;\n}\n/* Forecast items inside the carousel */\n.carousel-panel{\n    display: flex;\n    justify-content:space-evenly;\n    align-items: center;\n}\n.forecastContainer{\n    display: flex;\n    flex-direction: column;\n    color: white;\n    text-align: center;\n    height: 150px;\n    justify-content: space-evenly;\n    border: 1px groove white;\n    border-radius: 10%;\n    width: 100px;\n    \n}\n.forecastIcon{\n    height: 40px;\n    filter: invert(1);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;IACtB,kJAAkJ;AACtJ;AACA;IACI,iFAAwE;IACxE,8BAA8B;IAC9B,2BAA2B;IAC3B,yBAAyB;IACzB,sBAAsB;IACtB,gBAAgB;AACpB;AACA;IACI,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,kBAAkB;IAClB,wBAAwB;AAC5B;AACA;IACI,aAAa;IACb,YAAY;IACZ,mBAAmB;IACnB,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;IAC7B,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,iBAAiB;IACjB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,UAAU;IACV,iBAAiB;AACrB;AACA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,6BAA6B;IAC7B,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,+BAA+B;AACnC;AACA;IACI,YAAY;;AAEhB;AACA;IACI,uBAAuB;IACvB,aAAa;AACjB;AACA;;;;IAII,iDAAiD;IACjD,wCAAwC;AAC5C;;AAEA;IACI,6BAA6B;IAC7B,YAAY;IACZ,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,QAAQ;IACR,WAAW;IACX,eAAe;AACnB;AACA,wDAAwD;AACxD;IACI,aAAa;IACb,sBAAsB;IACtB,4BAA4B;IAC5B,qEAAqE;IACrE,YAAY;AAChB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,qCAAqC;IACrC,UAAU;IACV,mBAAmB;AACvB;AACA;IACI,iBAAiB;IACjB,cAAc;AAClB;AACA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,cAAc;IACd,mBAAmB;AACvB;AACA,aAAa;AACb;IACI,kBAAkB;IAClB,UAAU;IACV,cAAc;IACd,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,iDAAiD;IACjD,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,YAAY;IACZ,mCAAmC;AACvC;AACA;IACI,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,WAAW;AACf;AACA;IACI,kBAAkB;IAClB,QAAQ;IACR,2BAA2B;IAC3B,SAAS;IACT,6BAA6B;IAC7B,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,SAAS;IACT,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,iCAAiC;IACjC,wBAAwB;IACxB,eAAe;;AAEnB;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,aAAa;AACjB;AACA,uCAAuC;AACvC;IACI,aAAa;IACb,4BAA4B;IAC5B,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,6BAA6B;IAC7B,wBAAwB;IACxB,kBAAkB;IAClB,YAAY;;AAEhB;AACA;IACI,YAAY;IACZ,iBAAiB;AACrB","sourcesContent":["*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\nhtml{\n    background: url('./assets/background.jpg') no-repeat center center fixed; \n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    overflow: hidden;\n}\nmain{\n    padding: 1% 5% 0 5%;\n}\n.heading{\n    color: white;\n    width: max-content;\n    margin: 0 auto 10px auto;\n}\n.top-section{\n    display: flex;\n    color: white;\n    margin-bottom: 15px;\n    justify-content:space-evenly;\n}\n\n.middle-section{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    text-align: center;\n}\n\n#today-icon{\n    height: 8em;\n    filter: invert(1);\n    margin: 10px 0 10px 0;\n}\n\n.temperatureContainer{\n    display: flex;\n    font-size: 3rem;\n    justify-content: center;\n    margin-bottom: 10px;\n}\n.temperatureContainer img{\n    width: 1em;\n    filter: invert(1);\n}\n#today-description{\n    font-style: italic;\n    margin-bottom: 10px;\n    font-size: 1rem;\n}\n\n#city-input{\n    position: relative;\n    left: 12px;\n    background-color: transparent;\n    border: none;\n    color: white;\n    height: 30px;\n    border-bottom: 1px groove white;\n}\n#city-input::placeholder{\n    color: white;\n    \n}\n#city-input:focus, #city-input:active {\n    background: transparent;\n    outline: none;\n}\ninput:-webkit-autofill,\ninput:-webkit-autofill:hover,\ninput:-webkit-autofill:focus,\ninput:-webkit-autofill:active {\n    transition: background-color 5000s ease-in-out 0s;\n    -webkit-text-fill-color: #fff !important;\n}\n\n#search-button{\n    background-color: transparent;\n    border: none;\n    filter: invert(1);\n    cursor: pointer;\n}\n\n#search-button #searchIcon{\n    height: 17px;\n    font-size: 17px;\n    position: relative;\n    top: 5px;\n    right: 15px;\n    cursor: pointer;\n}\n/* Left and Right section of the today weather section */\n.top-left-section, .top-right-section{\n    display: flex;\n    flex-direction: column;\n    justify-content:space-evenly;\n    /* Weird: pixels wont overflow data on shrink but percentage does?? */\n    width: 150px;\n}\n.top-left-section{\n    text-align: center;\n}\n.topRightItemContainer{\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    width: 80%;\n    align-items: center;\n}\n.leftImageIcon{\n    filter: invert(1);\n    height: 2.5rem;\n}\n.todayInfoLabel{\n    font-size: .3em;\n}\n.dataInfoAndUnit{\n    display: flex;\n    font-size: 2em;\n    align-items: center;\n}\n/* Carousel */\n.forecast-carousel{\n    position: relative;\n    width: 80%;\n    margin: 0 auto;\n    height: 150px;\n}\n\n.carousel-image{\n    height: 100%;\n    width: 100%;\n    /* Very useful for dynamic covering with images */\n    /* object-fit: cover; */\n    filter: invert(1);\n}\n\n.carousel-track-container{\n    position: relative;\n    height: 100%;\n    overflow: hidden;\n}\n\n.carousel-track{\n    list-style: none;\n    position: relative;\n    height: 100%;\n    transition: transform 880ms ease-in;\n}\n.carousel-slide{\n    position: absolute;\n    top: 0;\n    bottom: 0; \n    width: 100%;\n}\n.carousel-button{\n    position: absolute; \n    top: 50%;\n    transform: translateY(-50%);\n    border: 0;\n    background-color: transparent;\n    filter: invert(1);\n    cursor: pointer;\n}\n\n.carousel-button--left{\n    left: -40px;\n}\n\n.carousel-button--right{\n    right: -40px;\n}\n\n.carousel-button img {\n    width: 35px;\n}\n.carousel-nav{\n    display: flex;\n    justify-content: center;\n    padding: 10px 0;\n}\n\n.carousel-indicator{\n    border: 0;\n    border-radius: 50%;\n    width: 12px;\n    height: 12px;\n    background: rgba(255,255,255, .6);\n    margin: 25px 15px 0 15px;\n    cursor: pointer;\n\n}\n\n.carousel-indicator.current-slide{\n    background: rgba(255,255,255, 1);\n}\n\n.isHidden{\n    display: none;\n}\n/* Forecast items inside the carousel */\n.carousel-panel{\n    display: flex;\n    justify-content:space-evenly;\n    align-items: center;\n}\n.forecastContainer{\n    display: flex;\n    flex-direction: column;\n    color: white;\n    text-align: center;\n    height: 150px;\n    justify-content: space-evenly;\n    border: 1px groove white;\n    border-radius: 10%;\n    width: 100px;\n    \n}\n.forecastIcon{\n    height: 40px;\n    filter: invert(1);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/getCityFromLatLon.js":
/*!**********************************!*\
  !*** ./src/getCityFromLatLon.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getCityFromLatLon)
/* harmony export */ });
async function getCityFromLatLon(lat, lon) {
  // Google Maps API Key
  const apiKey = 'AIzaSyAFIYFe32hp97dIG58SXLczpBUqC8fC95U';
  // Fetch
  const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${apiKey}`, { mode: 'cors' });

  // Make usable
  const data = await response.json();
  const cityName = data.results[0].address_components[3].long_name;

  return cityName;
}


/***/ }),

/***/ "./src/getLocalTime.js":
/*!*****************************!*\
  !*** ./src/getLocalTime.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getLocalTime)
/* harmony export */ });
async function getLocalTime(lat, lon) {
  // Google Maps API Key
  const apiKey = 'AIzaSyAFIYFe32hp97dIG58SXLczpBUqC8fC95U';
  // Fetch
  const response = await fetch(`https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lon}&timestamp=1331161200&key=${apiKey}`, { mode: 'cors' });
  // Make usable
  const data = await response.json();
  // Get the local time from the timezone used by the lat and lon fetch
  const result = new Date().toLocaleString('en-US', { timeZone: data.timeZoneId });
  // return the local time
  return result;
}


/***/ }),

/***/ "./src/getUserLocation.js":
/*!********************************!*\
  !*** ./src/getUserLocation.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getPosition)
/* harmony export */ });
/* harmony import */ var _weatherBrain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherBrain */ "./src/weatherBrain.js");


function loadPosition() {
  return new Promise((accept, reject) => {
    navigator.geolocation.getCurrentPosition(accept, reject);
  });
}

async function getPosition() {
  const position = await loadPosition();
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  _weatherBrain__WEBPACK_IMPORTED_MODULE_0__.weatherBrain.currentLocation.lat = lat;
  _weatherBrain__WEBPACK_IMPORTED_MODULE_0__.weatherBrain.currentLocation.lon = lon;
  return { lat, lon };
}


/***/ }),

/***/ "./src/helperFunctions.js":
/*!********************************!*\
  !*** ./src/helperFunctions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addSearchIcon": () => (/* binding */ addSearchIcon),
/* harmony export */   "firstCharSentenceUpper": () => (/* binding */ firstCharSentenceUpper),
/* harmony export */   "formatForecastTime": () => (/* binding */ formatForecastTime),
/* harmony export */   "todayWeatherIcon": () => (/* binding */ todayWeatherIcon)
/* harmony export */ });
/* harmony import */ var _assets_search_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/search.svg */ "./src/assets/search.svg");
/* harmony import */ var _assets_conditions_thunderstorm_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/conditions/thunderstorm.svg */ "./src/assets/conditions/thunderstorm.svg");
/* harmony import */ var _assets_conditions_sun_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/conditions/sun.svg */ "./src/assets/conditions/sun.svg");
/* harmony import */ var _assets_conditions_light_rain_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/conditions/light-rain.svg */ "./src/assets/conditions/light-rain.svg");
/* harmony import */ var _assets_conditions_moderate_rain_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/conditions/moderate-rain.svg */ "./src/assets/conditions/moderate-rain.svg");
/* harmony import */ var _assets_conditions_heavy_rain_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/conditions/heavy-rain.svg */ "./src/assets/conditions/heavy-rain.svg");
/* harmony import */ var _assets_conditions_drizzle_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/conditions/drizzle.svg */ "./src/assets/conditions/drizzle.svg");
/* harmony import */ var _assets_conditions_light_snow_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/conditions/light-snow.svg */ "./src/assets/conditions/light-snow.svg");
/* harmony import */ var _assets_conditions_snow_and_rain_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/conditions/snow-and-rain.svg */ "./src/assets/conditions/snow-and-rain.svg");
/* harmony import */ var _assets_conditions_heavy_snow_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/conditions/heavy-snow.svg */ "./src/assets/conditions/heavy-snow.svg");
/* harmony import */ var _assets_conditions_smoke_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/conditions/smoke.svg */ "./src/assets/conditions/smoke.svg");
/* harmony import */ var _assets_conditions_haze_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/conditions/haze.svg */ "./src/assets/conditions/haze.svg");
/* harmony import */ var _assets_conditions_fog_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/conditions/fog.svg */ "./src/assets/conditions/fog.svg");
/* harmony import */ var _assets_conditions_tornado_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/conditions/tornado.svg */ "./src/assets/conditions/tornado.svg");
/* harmony import */ var _assets_conditions_mist_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/conditions/mist.svg */ "./src/assets/conditions/mist.svg");
/* harmony import */ var _assets_conditions_few_clouds_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/conditions/few-clouds.svg */ "./src/assets/conditions/few-clouds.svg");
/* harmony import */ var _assets_conditions_scattered_clouds_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/conditions/scattered-clouds.svg */ "./src/assets/conditions/scattered-clouds.svg");
/* harmony import */ var _assets_conditions_broken_clouds_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/conditions/broken-clouds.svg */ "./src/assets/conditions/broken-clouds.svg");
/* harmony import */ var _assets_conditions_overcast_clouds_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/conditions/overcast-clouds.svg */ "./src/assets/conditions/overcast-clouds.svg");
/* harmony import */ var _assets_conditions_cat_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assets/conditions/cat.svg */ "./src/assets/conditions/cat.svg");





















function formatDate(date) {
  // Input: 2022-09-19
  // Output: 9/19/2022
  const string = String(date);
  const year = string.slice(0, 4);
  const month = string.slice(6, 7);
  const day = string.slice(8, 10);
  const result = `${month}/${day}/${year}`;
  return result;
}

function formatForecastTime(string) {
  // Input: 2022-09-18 00:00:00
  // Output:{ 00:00:00, 9/18/2022 }
  const time = string.substr(10);
  const temp = string.slice(0, 10);
  const date = formatDate(temp);
  return { time, date };
}

function todayWeatherIcon(val) {
  const value = Number(val);
  if (value >= 200 && value <= 232) {
    return _assets_conditions_thunderstorm_svg__WEBPACK_IMPORTED_MODULE_1__;
  }
  // Rain values
  if (value >= 300 && value <= 321) {
    return _assets_conditions_drizzle_svg__WEBPACK_IMPORTED_MODULE_6__;
  }
  if (value === 500) {
    return _assets_conditions_light_rain_svg__WEBPACK_IMPORTED_MODULE_3__;
  }
  if (value === 501) {
    return _assets_conditions_moderate_rain_svg__WEBPACK_IMPORTED_MODULE_4__;
  }
  if (value >= 503 && value <= 531) {
    return _assets_conditions_heavy_rain_svg__WEBPACK_IMPORTED_MODULE_5__;
  }
  // Snow values
  if (value === 600 || value === 601) {
    return _assets_conditions_light_snow_svg__WEBPACK_IMPORTED_MODULE_7__;
  }
  if (value === 615 || value === 616) {
    return _assets_conditions_snow_and_rain_svg__WEBPACK_IMPORTED_MODULE_8__;
  }
  if (value >= 600 && value <= 622) {
    return _assets_conditions_heavy_snow_svg__WEBPACK_IMPORTED_MODULE_9__;
  }
  // Atmosphere values
  if (value === 711) {
    return _assets_conditions_smoke_svg__WEBPACK_IMPORTED_MODULE_10__;
  }
  if (value === 721) {
    return _assets_conditions_haze_svg__WEBPACK_IMPORTED_MODULE_11__;
  }
  if (value === 741) {
    return _assets_conditions_fog_svg__WEBPACK_IMPORTED_MODULE_12__;
  }
  if (value === 781) {
    return _assets_conditions_tornado_svg__WEBPACK_IMPORTED_MODULE_13__;
  }
  if (value >= 701 && value <= 781) {
    return _assets_conditions_mist_svg__WEBPACK_IMPORTED_MODULE_14__;
  }
  // Cloud conditions
  if (value === 801) {
    return _assets_conditions_few_clouds_svg__WEBPACK_IMPORTED_MODULE_15__;
  }
  if (value === 802) {
    return _assets_conditions_scattered_clouds_svg__WEBPACK_IMPORTED_MODULE_16__;
  }
  if (value === 803) {
    return _assets_conditions_broken_clouds_svg__WEBPACK_IMPORTED_MODULE_17__;
  }
  if (value === 804) {
    return _assets_conditions_overcast_clouds_svg__WEBPACK_IMPORTED_MODULE_18__;
  }
  if (value === 800) {
    return _assets_conditions_sun_svg__WEBPACK_IMPORTED_MODULE_2__;
  }
  // Lazy coder, return cat
  return _assets_conditions_cat_svg__WEBPACK_IMPORTED_MODULE_19__;
}

function addSearchIcon() {
  const search = document.getElementById('searchIcon');
  let img = new Image();
  img = _assets_search_svg__WEBPACK_IMPORTED_MODULE_0__;
  search.src = img;
  search.alt = 'Image of search icon';
}
function firstCharSentenceUpper(string) {
  // Input:'this is a string'
  // Output: 'This Is A String'
  const words = string.split(' ');
  let result = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < words.length; i++) {
    result += words[i][0].toUpperCase();
    result += words[i].substr(1);
    result += ' ';
  }
  return result;
}




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _initWebsite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initWebsite */ "./src/initWebsite.js");
/* harmony import */ var _weatherAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weatherAPI */ "./src/weatherAPI.js");
/* harmony import */ var _weatherBrain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weatherBrain */ "./src/weatherBrain.js");
/* harmony import */ var _populateForecast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./populateForecast */ "./src/populateForecast.js");
/* harmony import */ var _populateTodayWeather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./populateTodayWeather */ "./src/populateTodayWeather.js");







window.onload = () => {
  (0,_initWebsite__WEBPACK_IMPORTED_MODULE_1__["default"])();
};

async function getWeather() {
  const cityName = document.getElementById('city-input').value;
  let mainWeatherData;
  let todayHourlyData;
  try {
    mainWeatherData = await (0,_weatherAPI__WEBPACK_IMPORTED_MODULE_2__.getTodayMainWeatherData)(cityName);
    todayHourlyData = await (0,_weatherAPI__WEBPACK_IMPORTED_MODULE_2__.getTodayHourlyData)(cityName);
  } catch {
    alert('Error searching for city, please retry.');
  }

  _weatherBrain__WEBPACK_IMPORTED_MODULE_3__.weatherBrain.hourlyForecastData = todayHourlyData;
  _weatherBrain__WEBPACK_IMPORTED_MODULE_3__.weatherBrain.todayForecastData = mainWeatherData;
  (0,_populateTodayWeather__WEBPACK_IMPORTED_MODULE_5__["default"])(mainWeatherData);
  (0,_populateForecast__WEBPACK_IMPORTED_MODULE_4__["default"])(todayHourlyData);
}

const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', getWeather);


/***/ }),

/***/ "./src/initWebsite.js":
/*!****************************!*\
  !*** ./src/initWebsite.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initWebsite)
/* harmony export */ });
/* harmony import */ var _weatherAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherAPI */ "./src/weatherAPI.js");
/* harmony import */ var _getCityFromLatLon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getCityFromLatLon */ "./src/getCityFromLatLon.js");
/* harmony import */ var _getUserLocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getUserLocation */ "./src/getUserLocation.js");
/* harmony import */ var _weatherBrain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weatherBrain */ "./src/weatherBrain.js");
/* harmony import */ var _populateForecast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./populateForecast */ "./src/populateForecast.js");
/* harmony import */ var _populateTodayWeather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./populateTodayWeather */ "./src/populateTodayWeather.js");







async function initWebsite() {
  // Get location of user
  try {
    const latLon = await (0,_getUserLocation__WEBPACK_IMPORTED_MODULE_2__["default"])();
    const cityName = await (0,_getCityFromLatLon__WEBPACK_IMPORTED_MODULE_1__["default"])(latLon.lat, latLon.lon);
    _weatherBrain__WEBPACK_IMPORTED_MODULE_3__.weatherBrain.currentLocation.cityName = cityName;
  } catch {
    // eslint-disable-next-line no-alert
    alert('Location services denied...loading default city.');
  }

  let mainWeatherData;
  let todayHourlyData;
  if (_weatherBrain__WEBPACK_IMPORTED_MODULE_3__.weatherBrain.currentLocation.cityName !== '') {
    mainWeatherData = await (0,_weatherAPI__WEBPACK_IMPORTED_MODULE_0__.getTodayMainWeatherData)(_weatherBrain__WEBPACK_IMPORTED_MODULE_3__.weatherBrain.currentLocation.cityName);
    todayHourlyData = await (0,_weatherAPI__WEBPACK_IMPORTED_MODULE_0__.getTodayHourlyData)(_weatherBrain__WEBPACK_IMPORTED_MODULE_3__.weatherBrain.currentLocation.cityName);
  } else {
    const defaultCity = 'New York';
    mainWeatherData = await (0,_weatherAPI__WEBPACK_IMPORTED_MODULE_0__.getTodayMainWeatherData)(defaultCity);
    todayHourlyData = await (0,_weatherAPI__WEBPACK_IMPORTED_MODULE_0__.getTodayHourlyData)(defaultCity);
  }

  _weatherBrain__WEBPACK_IMPORTED_MODULE_3__.weatherBrain.hourlyForecastData = todayHourlyData;
  _weatherBrain__WEBPACK_IMPORTED_MODULE_3__.weatherBrain.todayForecastData = mainWeatherData;
  (0,_populateTodayWeather__WEBPACK_IMPORTED_MODULE_5__["default"])(mainWeatherData);
  (0,_populateForecast__WEBPACK_IMPORTED_MODULE_4__["default"])(todayHourlyData);
}


/***/ }),

/***/ "./src/populateForecast.js":
/*!*********************************!*\
  !*** ./src/populateForecast.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ populateForecastWeatherData)
/* harmony export */ });
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunctions */ "./src/helperFunctions.js");


function clearCarousel() {
  const panelOne = document.getElementById('carousel-panel-one');
  const panelTwo = document.getElementById('carousel-panel-two');
  const panelThree = document.getElementById('carousel-panel-three');
  panelOne.innerHTML = '';
  panelTwo.innerHTML = '';
  panelThree.innerHTML = '';
}

function createForecastCard(data) {
  const container = document.createElement('div');
  container.classList.add('forecastContainer');
  // Image
  const img = document.createElement('img');
  img.classList.add('forecastIcon');
  img.src = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.todayWeatherIcon)(data.id, data.lat, data.lon);
  // Temperature
  const temp = document.createElement('h5');
  temp.innerHTML = data.temp;
  // Description
  const description = document.createElement('h5');
  description.innerHTML = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.firstCharSentenceUpper)(data.description);
  description.style.fontStyle = 'italic';
  // Get parsed formatted date and time object from formateForecastTime
  const dateTime = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.formatForecastTime)(data.time);
  const time = document.createElement('h5');
  time.innerHTML = dateTime.time;
  const date = document.createElement('h5');
  date.innerHTML = dateTime.date;
  container.append(img);
  container.append(temp);
  container.append(description);
  container.append(time);
  container.append(date);
  return container;
}

function populateForecastWeatherData(data) {
  clearCarousel();
  data.forEach((item, index) => {
    if (index < 4) {
      document.getElementById('carousel-panel-one').append(createForecastCard(item));
    } else if (index >= 4 && index < 8) {
      document.getElementById('carousel-panel-two').append(createForecastCard(item));
    } else {
      document.getElementById('carousel-panel-three').append(createForecastCard(item));
    }
  });
}


/***/ }),

/***/ "./src/populateTodayWeather.js":
/*!*************************************!*\
  !*** ./src/populateTodayWeather.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ populateTodayWeatherData)
/* harmony export */ });
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunctions */ "./src/helperFunctions.js");
/* harmony import */ var _assets_fahrenheit_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/fahrenheit.svg */ "./src/assets/fahrenheit.svg");
/* harmony import */ var _assets_celsius_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/celsius.svg */ "./src/assets/celsius.svg");
/* harmony import */ var _assets_city_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/city.svg */ "./src/assets/city.svg");
/* harmony import */ var _assets_location_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/location.svg */ "./src/assets/location.svg");
/* harmony import */ var _assets_thermostat_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/thermostat.svg */ "./src/assets/thermostat.svg");
/* harmony import */ var _assets_conditions_wind_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/conditions/wind.svg */ "./src/assets/conditions/wind.svg");
/* harmony import */ var _assets_speed_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/speed.svg */ "./src/assets/speed.svg");
/* harmony import */ var _assets_conditions_humidity_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/conditions/humidity.svg */ "./src/assets/conditions/humidity.svg");
/* harmony import */ var _assets_clock_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/clock.svg */ "./src/assets/clock.svg");
// Methods

// Images










function createWeatherWidget(img, heading, data, unitImg) {
  const container = document.createElement('div');
  container.classList.add('topRightItemContainer');
  const image = new Image();
  image.src = img;
  image.classList.add('leftImageIcon');
  const infoContainer = document.createElement('div');
  if (heading !== '') {
    const title = document.createElement('p');
    title.classList.add('todayInfoLabel');
    title.innerHTML = heading;
    infoContainer.append(title);
  }
  // Data with unit image
  const dataUnitContainer = document.createElement('div');
  dataUnitContainer.classList.add('dataInfoAndUnit');
  // The text
  const dataInfo = document.createElement('h5');
  dataInfo.innerHTML = data;
  dataUnitContainer.append(dataInfo);
  // The image
  if (unitImg !== '') {
    const unit = document.createElement('div');
    unit.style.filter = 'invert(1)';
    const unitImage = new Image();
    unitImage.src = unitImg;
    // Appends
    unit.append(unitImage);
    dataUnitContainer.append(unit);
  }
  infoContainer.append(dataUnitContainer);
  container.append(image);
  container.append(infoContainer);

  return container;
}

function createCityItem(cityName) {
  // Container for city name and city image
  const el = document.createElement('div');
  // Create image
  const img = new Image();
  img.src = _assets_city_svg__WEBPACK_IMPORTED_MODULE_3__;
  img.alt = 'Icon representing a city';
  img.classList.add('leftImageIcon');
  el.append(img);
  const name = document.createElement('h5');
  name.innerHTML = cityName;
  el.append(name);
  return el;
}

function createLatLonItem(lat, lon) {
  // Create image
  const el = document.createElement('div');
  el.classList.add('todayWeatherItemContainer');
  // Create image
  const img = new Image();
  img.src = _assets_location_svg__WEBPACK_IMPORTED_MODULE_4__;
  img.alt = 'Icon representing a drop location';
  img.classList.add('leftImageIcon');
  el.append(img);
  const coor = document.createElement('h5');
  coor.innerHTML = `${lat}, ${lon}`;
  el.append(coor);
  return el;
}

function formatLocalTime(string) {
  const date = string.slice(0, 9);
  const time = string.slice(11, 22);
  return { date, time };
}

function createLocalTime(time) {
  const dateTimeObject = formatLocalTime(time);
  // Container for time name and time image
  const el = document.createElement('div');
  // Create image
  const img = new Image();
  img.src = _assets_clock_svg__WEBPACK_IMPORTED_MODULE_9__;
  img.alt = 'Icon representing a city';
  img.classList.add('leftImageIcon');
  // Date / time section
  const dateTimeContainer = document.createElement('div');
  const timeEl = document.createElement('h5');
  timeEl.innerHTML = dateTimeObject.time;
  const dateEl = document.createElement('h5');
  dateEl.innerHTML = dateTimeObject.date;
  dateTimeContainer.append(timeEl);
  dateTimeContainer.append(dateEl);
  // Appends
  el.append(img);
  el.append(dateTimeContainer);
  return el;
}

function populateLeftSection(data) {
  // DOM element anchors
  const city = document.getElementById('city');
  const latitudeLongitude = document.getElementById('lat-lon');
  const currentTime = document.getElementById('current-time');
  // DOM appends
  city.append(createCityItem(data.city));
  latitudeLongitude.append(createLatLonItem(data.lat, data.lon));
  currentTime.append(createLocalTime(data.currentTime));
}

function populateRightSection(data) {
  const todayFeelsLike = document.getElementById('today-feels-like');
  const todayWindSpeed = document.getElementById('today-wind-speed');
  const todayHumidity = document.getElementById('today-humidity');
  todayFeelsLike.append(createWeatherWidget(_assets_thermostat_svg__WEBPACK_IMPORTED_MODULE_5__, 'Feels Like', data.feelsLike, _assets_fahrenheit_svg__WEBPACK_IMPORTED_MODULE_1__));
  todayWindSpeed.append(createWeatherWidget(_assets_conditions_wind_svg__WEBPACK_IMPORTED_MODULE_6__, 'Wind Speed', data.windSpeed, _assets_speed_svg__WEBPACK_IMPORTED_MODULE_7__));
  todayHumidity.append(createWeatherWidget(_assets_conditions_humidity_svg__WEBPACK_IMPORTED_MODULE_8__, 'Humidity', data.humidity, ''));
}

function populateMiddleSection(data) {
// Middle section
  const todayIcon = document.getElementById('today-icon');
  const todayTemp = document.getElementById('today-temp');
  const unit = document.getElementById('unit');
  const todayDescription = document.getElementById('today-description');
  // ID determines weather icon, lat & lon are used to determine if its day or night in the city
  todayIcon.src = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.todayWeatherIcon)(data.id, data.lat, data.lon);
  // Set current tempature
  todayTemp.innerHTML = data.temp;
  // Display temp with current unit
  if (data.unit === 'imperial') {
    // eslint-disable-next-line no-param-reassign
    unit.src = _assets_fahrenheit_svg__WEBPACK_IMPORTED_MODULE_1__;
  } else {
    unit.src = _assets_celsius_svg__WEBPACK_IMPORTED_MODULE_2__;
  }
  todayDescription.innerHTML = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.firstCharSentenceUpper)(data.description);
}

function clearPreviousData() {
  const todayIcon = document.getElementById('today-icon');
  const todayTemp = document.getElementById('today-temp');
  const unit = document.getElementById('unit');
  const todayDescription = document.getElementById('today-description');
  const todayFeelsLike = document.getElementById('today-feels-like');
  const todayWindSpeed = document.getElementById('today-wind-speed');
  const todayHumidity = document.getElementById('today-humidity');
  const city = document.getElementById('city');
  const latitudeLongitude = document.getElementById('lat-lon');
  const currentTime = document.getElementById('current-time');

  const array = [];
  array.push(todayIcon);
  array.push(todayTemp);
  array.push(unit);
  array.push(todayDescription);
  array.push(todayFeelsLike);
  array.push(todayFeelsLike);
  array.push(todayWindSpeed);
  array.push(todayHumidity);
  array.push(city);
  array.push(latitudeLongitude);
  array.push(currentTime);

  array.forEach((el) => {
    // eslint-disable-next-line no-param-reassign
    el.innerHTML = '';
  });
}

function populateTodayWeatherData(data) {
  (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.addSearchIcon)();
  clearPreviousData();
  populateLeftSection(data);
  populateRightSection(data);
  populateMiddleSection(data);
}


/***/ }),

/***/ "./src/weatherAPI.js":
/*!***************************!*\
  !*** ./src/weatherAPI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTodayHourlyData": () => (/* binding */ getTodayHourlyData),
/* harmony export */   "getTodayMainWeatherData": () => (/* binding */ getTodayMainWeatherData)
/* harmony export */ });
/* harmony import */ var _getLocalTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLocalTime */ "./src/getLocalTime.js");


/* eslint-disable no-unused-expressions */
class Forecast {
  constructor(id, temp, description, time, lat, lon) {
    this.id = id;
    this.temp = temp;
    this.description = description;
    this.time = time;
    this.lat = lat;
    this.lon = lon;
  }
}

async function getTodayMainWeatherData(cityName, units) {
  // Create object for storing relevant weather data
  const data = {
    id: '',
    mainWeather: '',
    city: '',
    temp: '',
    description: '',
    humidity: '',
    windSpeed: '',
    feelsLike: '',
    lat: '',
    lon: '',
    unit: '',
    currentTime: 'u',
  };
  // Determine the units of measure
  let unit = units;
  if (unit === '' || typeof unit === 'undefined') {
    unit = 'imperial';
  }
  // Save the units
  data.unit = unit;
  // Make the API call
  // The key for the Weather API
  const apiKey = 'fd553c93063c3987982ce1a5cc2cc71b';
  // Get a response (returns a promise) for the requested data from OpenWeather
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${unit}&appid=${apiKey}`, { mode: 'cors' });
  // Get data object we're are interested in
  const weatherData = await response.json();
  // save data
  data.id = weatherData.weather[0].id;
  data.mainWeather = weatherData.weather[0].main;
  data.city = weatherData.name;
  data.temp = Math.round(weatherData.main.temp);
  data.description = weatherData.weather[0].description;
  data.humidity = Math.round(weatherData.main.humidity);
  data.windSpeed = Math.round(weatherData.wind.speed);
  data.feelsLike = Math.round(weatherData.main.feels_like);
  data.lat = weatherData.coord.lat;
  data.lon = weatherData.coord.lon;
  // Get local time of city
  const time = await (0,_getLocalTime__WEBPACK_IMPORTED_MODULE_0__["default"])(data.lat, data.lon);
  data.currentTime = time;
  // Return weather data object
  return data;
}

function parseHourlyForecastData(data) {
  const array = [];
  // 12 because only need 12 forecast cards for the carousel
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 12; i++) {
    const iconId = data.list[i].weather[0].id;
    const { temp } = data.list[i].main;
    const { description } = data.list[i].weather[0];
    const time = data.list[i].dt_txt; // time
    const { lat } = data.city.coord;
    const { lon } = data.city.coord;
    array.push(new Forecast(iconId, temp, description, time, lat, lon));
  }
  // Save the array in the brain
  return array;
}
async function getTodayHourlyData(city, units) {
  // Determine the units of measure
  let unit = units;
  if (unit === '' || typeof unit === 'undefined') {
    unit = 'imperial';
  }
  // The key for the Weather API
  const apiKey = '6afefd0acc02015759340d80dc5686e2';
  // Get a response (returns a promise) for the requested data from OpenWeather
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${apiKey}`, { mode: 'cors' });
  // Get data object we're are interested in
  const weatherData = await response.json();
  // Pass the weather object, return an array of forecast objects
  return parseHourlyForecastData(weatherData);
}




/***/ }),

/***/ "./src/weatherBrain.js":
/*!*****************************!*\
  !*** ./src/weatherBrain.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "weatherBrain": () => (/* binding */ weatherBrain)
/* harmony export */ });
class Brain {
  constructor() {
    this.todayForecastData = '';
    this.hourlyForecastData = '';
    this.currentLocation = {
      lat: '',
      lon: '',
      cityName: '',
    };
  }
}

const weatherBrain = new Brain();




/***/ }),

/***/ "./src/assets/background.jpg":
/*!***********************************!*\
  !*** ./src/assets/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a7abdbc241892bff0227.jpg";

/***/ }),

/***/ "./src/assets/celsius.svg":
/*!********************************!*\
  !*** ./src/assets/celsius.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "39170e9f1ef72e30e8af.svg";

/***/ }),

/***/ "./src/assets/city.svg":
/*!*****************************!*\
  !*** ./src/assets/city.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e40d8fc69097de188bea.svg";

/***/ }),

/***/ "./src/assets/clock.svg":
/*!******************************!*\
  !*** ./src/assets/clock.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "61f16dd37fa2089408b1.svg";

/***/ }),

/***/ "./src/assets/conditions/broken-clouds.svg":
/*!*************************************************!*\
  !*** ./src/assets/conditions/broken-clouds.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5ff8ec961a4797824d38.svg";

/***/ }),

/***/ "./src/assets/conditions/cat.svg":
/*!***************************************!*\
  !*** ./src/assets/conditions/cat.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d186b07d970d6209f6eb.svg";

/***/ }),

/***/ "./src/assets/conditions/drizzle.svg":
/*!*******************************************!*\
  !*** ./src/assets/conditions/drizzle.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d8cb2cb6bafc9a2e5e5f.svg";

/***/ }),

/***/ "./src/assets/conditions/few-clouds.svg":
/*!**********************************************!*\
  !*** ./src/assets/conditions/few-clouds.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5236d269f663461a4917.svg";

/***/ }),

/***/ "./src/assets/conditions/fog.svg":
/*!***************************************!*\
  !*** ./src/assets/conditions/fog.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4cf17c1e0945eb643e43.svg";

/***/ }),

/***/ "./src/assets/conditions/haze.svg":
/*!****************************************!*\
  !*** ./src/assets/conditions/haze.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3616f5449ed2b52a3f25.svg";

/***/ }),

/***/ "./src/assets/conditions/heavy-rain.svg":
/*!**********************************************!*\
  !*** ./src/assets/conditions/heavy-rain.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "323e01d78c0e9514d477.svg";

/***/ }),

/***/ "./src/assets/conditions/heavy-snow.svg":
/*!**********************************************!*\
  !*** ./src/assets/conditions/heavy-snow.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "90819756e2a8278a8294.svg";

/***/ }),

/***/ "./src/assets/conditions/humidity.svg":
/*!********************************************!*\
  !*** ./src/assets/conditions/humidity.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1c7aa443ddb9d5f97854.svg";

/***/ }),

/***/ "./src/assets/conditions/light-rain.svg":
/*!**********************************************!*\
  !*** ./src/assets/conditions/light-rain.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8e9022759696112b3266.svg";

/***/ }),

/***/ "./src/assets/conditions/light-snow.svg":
/*!**********************************************!*\
  !*** ./src/assets/conditions/light-snow.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "10782b4ed6e9f8982082.svg";

/***/ }),

/***/ "./src/assets/conditions/mist.svg":
/*!****************************************!*\
  !*** ./src/assets/conditions/mist.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d9ea8571f7b7e6e70b93.svg";

/***/ }),

/***/ "./src/assets/conditions/moderate-rain.svg":
/*!*************************************************!*\
  !*** ./src/assets/conditions/moderate-rain.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a42f7cbb0c7206e0afb9.svg";

/***/ }),

/***/ "./src/assets/conditions/overcast-clouds.svg":
/*!***************************************************!*\
  !*** ./src/assets/conditions/overcast-clouds.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "89dc9f688f7a9b62b07b.svg";

/***/ }),

/***/ "./src/assets/conditions/scattered-clouds.svg":
/*!****************************************************!*\
  !*** ./src/assets/conditions/scattered-clouds.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1ec4a13c4eb0350ba260.svg";

/***/ }),

/***/ "./src/assets/conditions/smoke.svg":
/*!*****************************************!*\
  !*** ./src/assets/conditions/smoke.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c786c38b16caa6b3645e.svg";

/***/ }),

/***/ "./src/assets/conditions/snow-and-rain.svg":
/*!*************************************************!*\
  !*** ./src/assets/conditions/snow-and-rain.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a3e175f6a11e2fa58ab3.svg";

/***/ }),

/***/ "./src/assets/conditions/sun.svg":
/*!***************************************!*\
  !*** ./src/assets/conditions/sun.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5859cec808a3d8088316.svg";

/***/ }),

/***/ "./src/assets/conditions/thunderstorm.svg":
/*!************************************************!*\
  !*** ./src/assets/conditions/thunderstorm.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8a32d8244db591d495ec.svg";

/***/ }),

/***/ "./src/assets/conditions/tornado.svg":
/*!*******************************************!*\
  !*** ./src/assets/conditions/tornado.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3a16b528a352d30ff551.svg";

/***/ }),

/***/ "./src/assets/conditions/wind.svg":
/*!****************************************!*\
  !*** ./src/assets/conditions/wind.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2d76aaee46d4e33a801c.svg";

/***/ }),

/***/ "./src/assets/fahrenheit.svg":
/*!***********************************!*\
  !*** ./src/assets/fahrenheit.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4a1df6c5e3f1cc9850b9.svg";

/***/ }),

/***/ "./src/assets/location.svg":
/*!*********************************!*\
  !*** ./src/assets/location.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5907848e08ee1a3d4273.svg";

/***/ }),

/***/ "./src/assets/search.svg":
/*!*******************************!*\
  !*** ./src/assets/search.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f7a26ab2c1e6ae877b07.svg";

/***/ }),

/***/ "./src/assets/speed.svg":
/*!******************************!*\
  !*** ./src/assets/speed.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5e15a8793b1b80423f8e.svg";

/***/ }),

/***/ "./src/assets/thermostat.svg":
/*!***********************************!*\
  !*** ./src/assets/thermostat.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0770d444f097fa687156.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRkFBb0YsU0FBUyxTQUFTLEtBQUssU0FBUyxPQUFPLEtBQUssY0FBYztBQUM5STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHlEQUFhO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUI7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWSxjQUFjO0FBQzFCLHNDQUFzQztBQUN0QyxZQUFZLE1BQU07QUFDbEIsWUFBWSxNQUFNO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRkFBcUYsS0FBSyxTQUFTLEtBQUssU0FBUyxPQUFPLEtBQUssY0FBYztBQUMzSTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUtFOzs7Ozs7Ozs7Ozs7Ozs7QUNqR0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFd0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvZ2V0Q2l0eUZyb21MYXRMb24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvZ2V0TG9jYWxUaW1lLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2dldFVzZXJMb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9oZWxwZXJGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvaW5pdFdlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvcG9wdWxhdGVGb3JlY2FzdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9wb3B1bGF0ZVRvZGF5V2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy93ZWF0aGVyQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL3dlYXRoZXJCcmFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OnN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbn1cXG5odG1se1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkOyBcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbm1haW57XFxuICAgIHBhZGRpbmc6IDElIDUlIDAgNSU7XFxufVxcbi5oZWFkaW5ne1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgbWFyZ2luOiAwIGF1dG8gMTBweCBhdXRvO1xcbn1cXG4udG9wLXNlY3Rpb257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLm1pZGRsZS1zZWN0aW9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jdG9kYXktaWNvbntcXG4gICAgaGVpZ2h0OiA4ZW07XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xcbiAgICBtYXJnaW46IDEwcHggMCAxMHB4IDA7XFxufVxcblxcbi50ZW1wZXJhdHVyZUNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLnRlbXBlcmF0dXJlQ29udGFpbmVyIGltZ3tcXG4gICAgd2lkdGg6IDFlbTtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XFxufVxcbiN0b2RheS1kZXNjcmlwdGlvbntcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbiNjaXR5LWlucHV0e1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IDEycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggZ3Jvb3ZlIHdoaXRlO1xcbn1cXG4jY2l0eS1pbnB1dDo6cGxhY2Vob2xkZXJ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgXFxufVxcbiNjaXR5LWlucHV0OmZvY3VzLCAjY2l0eS1pbnB1dDphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCxcXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMsXFxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDphY3RpdmUge1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDUwMDBzIGVhc2UtaW4tb3V0IDBzO1xcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xcbn1cXG5cXG4jc2VhcmNoLWJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3NlYXJjaC1idXR0b24gI3NlYXJjaEljb257XFxuICAgIGhlaWdodDogMTdweDtcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogNXB4O1xcbiAgICByaWdodDogMTVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4vKiBMZWZ0IGFuZCBSaWdodCBzZWN0aW9uIG9mIHRoZSB0b2RheSB3ZWF0aGVyIHNlY3Rpb24gKi9cXG4udG9wLWxlZnQtc2VjdGlvbiwgLnRvcC1yaWdodC1zZWN0aW9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtZXZlbmx5O1xcbiAgICAvKiBXZWlyZDogcGl4ZWxzIHdvbnQgb3ZlcmZsb3cgZGF0YSBvbiBzaHJpbmsgYnV0IHBlcmNlbnRhZ2UgZG9lcz8/ICovXFxuICAgIHdpZHRoOiAxNTBweDtcXG59XFxuLnRvcC1sZWZ0LXNlY3Rpb257XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnRvcFJpZ2h0SXRlbUNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmxlZnRJbWFnZUljb257XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG59XFxuLnRvZGF5SW5mb0xhYmVse1xcbiAgICBmb250LXNpemU6IC4zZW07XFxufVxcbi5kYXRhSW5mb0FuZFVuaXR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4vKiBDYXJvdXNlbCAqL1xcbi5mb3JlY2FzdC1jYXJvdXNlbHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG59XFxuXFxuLmNhcm91c2VsLWltYWdle1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAvKiBWZXJ5IHVzZWZ1bCBmb3IgZHluYW1pYyBjb3ZlcmluZyB3aXRoIGltYWdlcyAqL1xcbiAgICAvKiBvYmplY3QtZml0OiBjb3ZlcjsgKi9cXG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XFxufVxcblxcbi5jYXJvdXNlbC10cmFjay1jb250YWluZXJ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uY2Fyb3VzZWwtdHJhY2t7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gODgwbXMgZWFzZS1pbjtcXG59XFxuLmNhcm91c2VsLXNsaWRle1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwOyBcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5jYXJvdXNlbC1idXR0b257XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXFxuICAgIHRvcDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jYXJvdXNlbC1idXR0b24tLWxlZnR7XFxuICAgIGxlZnQ6IC00MHB4O1xcbn1cXG5cXG4uY2Fyb3VzZWwtYnV0dG9uLS1yaWdodHtcXG4gICAgcmlnaHQ6IC00MHB4O1xcbn1cXG5cXG4uY2Fyb3VzZWwtYnV0dG9uIGltZyB7XFxuICAgIHdpZHRoOiAzNXB4O1xcbn1cXG4uY2Fyb3VzZWwtbmF2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweCAwO1xcbn1cXG5cXG4uY2Fyb3VzZWwtaW5kaWNhdG9ye1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgd2lkdGg6IDEycHg7XFxuICAgIGhlaWdodDogMTJweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwgLjYpO1xcbiAgICBtYXJnaW46IDI1cHggMTVweCAwIDE1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG59XFxuXFxuLmNhcm91c2VsLWluZGljYXRvci5jdXJyZW50LXNsaWRle1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LCAxKTtcXG59XFxuXFxuLmlzSGlkZGVue1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4vKiBGb3JlY2FzdCBpdGVtcyBpbnNpZGUgdGhlIGNhcm91c2VsICovXFxuLmNhcm91c2VsLXBhbmVse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZm9yZWNhc3RDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYm9yZGVyOiAxcHggZ3Jvb3ZlIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgXFxufVxcbi5mb3JlY2FzdEljb257XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQjtJQUN0QixrSkFBa0o7QUFDdEo7QUFDQTtJQUNJLGlGQUF3RTtJQUN4RSw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksWUFBWTs7QUFFaEI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0FBQ2pCO0FBQ0E7Ozs7SUFJSSxpREFBaUQ7SUFDakQsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsZUFBZTtBQUNuQjtBQUNBLHdEQUF3RDtBQUN4RDtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLHFFQUFxRTtJQUNyRSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsVUFBVTtJQUNWLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCO0FBQ0EsYUFBYTtBQUNiO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixjQUFjO0lBQ2QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsaURBQWlEO0lBQ2pELHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG1DQUFtQztBQUN2QztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsV0FBVztBQUNmO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLDJCQUEyQjtJQUMzQixTQUFTO0lBQ1QsNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksU0FBUztJQUNULGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlDQUFpQztJQUNqQyx3QkFBd0I7SUFDeEIsZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0EsdUNBQXVDO0FBQ3ZDO0lBQ0ksYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsWUFBWTs7QUFFaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTpzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG59XFxuaHRtbHtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuL2Fzc2V0cy9iYWNrZ3JvdW5kLmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkOyBcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbm1haW57XFxuICAgIHBhZGRpbmc6IDElIDUlIDAgNSU7XFxufVxcbi5oZWFkaW5ne1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgbWFyZ2luOiAwIGF1dG8gMTBweCBhdXRvO1xcbn1cXG4udG9wLXNlY3Rpb257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLm1pZGRsZS1zZWN0aW9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jdG9kYXktaWNvbntcXG4gICAgaGVpZ2h0OiA4ZW07XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xcbiAgICBtYXJnaW46IDEwcHggMCAxMHB4IDA7XFxufVxcblxcbi50ZW1wZXJhdHVyZUNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLnRlbXBlcmF0dXJlQ29udGFpbmVyIGltZ3tcXG4gICAgd2lkdGg6IDFlbTtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XFxufVxcbiN0b2RheS1kZXNjcmlwdGlvbntcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbiNjaXR5LWlucHV0e1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IDEycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggZ3Jvb3ZlIHdoaXRlO1xcbn1cXG4jY2l0eS1pbnB1dDo6cGxhY2Vob2xkZXJ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgXFxufVxcbiNjaXR5LWlucHV0OmZvY3VzLCAjY2l0eS1pbnB1dDphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCxcXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMsXFxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDphY3RpdmUge1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDUwMDBzIGVhc2UtaW4tb3V0IDBzO1xcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xcbn1cXG5cXG4jc2VhcmNoLWJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3NlYXJjaC1idXR0b24gI3NlYXJjaEljb257XFxuICAgIGhlaWdodDogMTdweDtcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogNXB4O1xcbiAgICByaWdodDogMTVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4vKiBMZWZ0IGFuZCBSaWdodCBzZWN0aW9uIG9mIHRoZSB0b2RheSB3ZWF0aGVyIHNlY3Rpb24gKi9cXG4udG9wLWxlZnQtc2VjdGlvbiwgLnRvcC1yaWdodC1zZWN0aW9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtZXZlbmx5O1xcbiAgICAvKiBXZWlyZDogcGl4ZWxzIHdvbnQgb3ZlcmZsb3cgZGF0YSBvbiBzaHJpbmsgYnV0IHBlcmNlbnRhZ2UgZG9lcz8/ICovXFxuICAgIHdpZHRoOiAxNTBweDtcXG59XFxuLnRvcC1sZWZ0LXNlY3Rpb257XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnRvcFJpZ2h0SXRlbUNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmxlZnRJbWFnZUljb257XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG59XFxuLnRvZGF5SW5mb0xhYmVse1xcbiAgICBmb250LXNpemU6IC4zZW07XFxufVxcbi5kYXRhSW5mb0FuZFVuaXR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4vKiBDYXJvdXNlbCAqL1xcbi5mb3JlY2FzdC1jYXJvdXNlbHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG59XFxuXFxuLmNhcm91c2VsLWltYWdle1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAvKiBWZXJ5IHVzZWZ1bCBmb3IgZHluYW1pYyBjb3ZlcmluZyB3aXRoIGltYWdlcyAqL1xcbiAgICAvKiBvYmplY3QtZml0OiBjb3ZlcjsgKi9cXG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XFxufVxcblxcbi5jYXJvdXNlbC10cmFjay1jb250YWluZXJ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uY2Fyb3VzZWwtdHJhY2t7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gODgwbXMgZWFzZS1pbjtcXG59XFxuLmNhcm91c2VsLXNsaWRle1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwOyBcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5jYXJvdXNlbC1idXR0b257XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXFxuICAgIHRvcDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jYXJvdXNlbC1idXR0b24tLWxlZnR7XFxuICAgIGxlZnQ6IC00MHB4O1xcbn1cXG5cXG4uY2Fyb3VzZWwtYnV0dG9uLS1yaWdodHtcXG4gICAgcmlnaHQ6IC00MHB4O1xcbn1cXG5cXG4uY2Fyb3VzZWwtYnV0dG9uIGltZyB7XFxuICAgIHdpZHRoOiAzNXB4O1xcbn1cXG4uY2Fyb3VzZWwtbmF2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweCAwO1xcbn1cXG5cXG4uY2Fyb3VzZWwtaW5kaWNhdG9ye1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgd2lkdGg6IDEycHg7XFxuICAgIGhlaWdodDogMTJweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwgLjYpO1xcbiAgICBtYXJnaW46IDI1cHggMTVweCAwIDE1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG59XFxuXFxuLmNhcm91c2VsLWluZGljYXRvci5jdXJyZW50LXNsaWRle1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LCAxKTtcXG59XFxuXFxuLmlzSGlkZGVue1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4vKiBGb3JlY2FzdCBpdGVtcyBpbnNpZGUgdGhlIGNhcm91c2VsICovXFxuLmNhcm91c2VsLXBhbmVse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZm9yZWNhc3RDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYm9yZGVyOiAxcHggZ3Jvb3ZlIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgXFxufVxcbi5mb3JlY2FzdEljb257XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRDaXR5RnJvbUxhdExvbihsYXQsIGxvbikge1xuICAvLyBHb29nbGUgTWFwcyBBUEkgS2V5XG4gIGNvbnN0IGFwaUtleSA9ICdBSXphU3lBRklZRmUzMmhwOTdkSUc1OFNYTGN6cEJVcUM4ZkM5NVUnO1xuICAvLyBGZXRjaFxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2xhdGxuZz0ke2xhdH0sJHtsb259JmtleT0ke2FwaUtleX1gLCB7IG1vZGU6ICdjb3JzJyB9KTtcblxuICAvLyBNYWtlIHVzYWJsZVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBjb25zdCBjaXR5TmFtZSA9IGRhdGEucmVzdWx0c1swXS5hZGRyZXNzX2NvbXBvbmVudHNbM10ubG9uZ19uYW1lO1xuXG4gIHJldHVybiBjaXR5TmFtZTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldExvY2FsVGltZShsYXQsIGxvbikge1xuICAvLyBHb29nbGUgTWFwcyBBUEkgS2V5XG4gIGNvbnN0IGFwaUtleSA9ICdBSXphU3lBRklZRmUzMmhwOTdkSUc1OFNYTGN6cEJVcUM4ZkM5NVUnO1xuICAvLyBGZXRjaFxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvdGltZXpvbmUvanNvbj9sb2NhdGlvbj0ke2xhdH0sJHtsb259JnRpbWVzdGFtcD0xMzMxMTYxMjAwJmtleT0ke2FwaUtleX1gLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgLy8gTWFrZSB1c2FibGVcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgLy8gR2V0IHRoZSBsb2NhbCB0aW1lIGZyb20gdGhlIHRpbWV6b25lIHVzZWQgYnkgdGhlIGxhdCBhbmQgbG9uIGZldGNoXG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywgeyB0aW1lWm9uZTogZGF0YS50aW1lWm9uZUlkIH0pO1xuICAvLyByZXR1cm4gdGhlIGxvY2FsIHRpbWVcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsImltcG9ydCB7IHdlYXRoZXJCcmFpbiB9IGZyb20gJy4vd2VhdGhlckJyYWluJztcblxuZnVuY3Rpb24gbG9hZFBvc2l0aW9uKCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKGFjY2VwdCwgcmVqZWN0KSA9PiB7XG4gICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihhY2NlcHQsIHJlamVjdCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRQb3NpdGlvbigpIHtcbiAgY29uc3QgcG9zaXRpb24gPSBhd2FpdCBsb2FkUG9zaXRpb24oKTtcbiAgY29uc3QgbGF0ID0gcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlO1xuICBjb25zdCBsb24gPSBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlO1xuICB3ZWF0aGVyQnJhaW4uY3VycmVudExvY2F0aW9uLmxhdCA9IGxhdDtcbiAgd2VhdGhlckJyYWluLmN1cnJlbnRMb2NhdGlvbi5sb24gPSBsb247XG4gIHJldHVybiB7IGxhdCwgbG9uIH07XG59XG4iLCJpbXBvcnQgU2VhcmNoIGZyb20gJy4vYXNzZXRzL3NlYXJjaC5zdmcnO1xuaW1wb3J0IFRodW5kZXJTdG9ybSBmcm9tICcuL2Fzc2V0cy9jb25kaXRpb25zL3RodW5kZXJzdG9ybS5zdmcnO1xuaW1wb3J0IFN1biBmcm9tICcuL2Fzc2V0cy9jb25kaXRpb25zL3N1bi5zdmcnO1xuaW1wb3J0IExpZ2h0UmFpbiBmcm9tICcuL2Fzc2V0cy9jb25kaXRpb25zL2xpZ2h0LXJhaW4uc3ZnJztcbmltcG9ydCBNb2RlcmF0ZVJhaW4gZnJvbSAnLi9hc3NldHMvY29uZGl0aW9ucy9tb2RlcmF0ZS1yYWluLnN2Zyc7XG5pbXBvcnQgSGVhdnlSYWluIGZyb20gJy4vYXNzZXRzL2NvbmRpdGlvbnMvaGVhdnktcmFpbi5zdmcnO1xuaW1wb3J0IERyaXp6bGUgZnJvbSAnLi9hc3NldHMvY29uZGl0aW9ucy9kcml6emxlLnN2Zyc7XG5pbXBvcnQgTGlnaHRTbm93IGZyb20gJy4vYXNzZXRzL2NvbmRpdGlvbnMvbGlnaHQtc25vdy5zdmcnO1xuaW1wb3J0IFNub3dSYWluIGZyb20gJy4vYXNzZXRzL2NvbmRpdGlvbnMvc25vdy1hbmQtcmFpbi5zdmcnO1xuaW1wb3J0IEhlYXZ5U25vdyBmcm9tICcuL2Fzc2V0cy9jb25kaXRpb25zL2hlYXZ5LXNub3cuc3ZnJztcbmltcG9ydCBTbW9rZSBmcm9tICcuL2Fzc2V0cy9jb25kaXRpb25zL3Ntb2tlLnN2Zyc7XG5pbXBvcnQgSGF6ZSBmcm9tICcuL2Fzc2V0cy9jb25kaXRpb25zL2hhemUuc3ZnJztcbmltcG9ydCBGb2cgZnJvbSAnLi9hc3NldHMvY29uZGl0aW9ucy9mb2cuc3ZnJztcbmltcG9ydCBUb3JuYWRvIGZyb20gJy4vYXNzZXRzL2NvbmRpdGlvbnMvdG9ybmFkby5zdmcnO1xuaW1wb3J0IE1pc3QgZnJvbSAnLi9hc3NldHMvY29uZGl0aW9ucy9taXN0LnN2Zyc7XG5pbXBvcnQgRmV3Q2xvdWRzIGZyb20gJy4vYXNzZXRzL2NvbmRpdGlvbnMvZmV3LWNsb3Vkcy5zdmcnO1xuaW1wb3J0IFNjYXR0ZXJlZENsb3VkcyBmcm9tICcuL2Fzc2V0cy9jb25kaXRpb25zL3NjYXR0ZXJlZC1jbG91ZHMuc3ZnJztcbmltcG9ydCBCcm9rZW5DbG91ZHMgZnJvbSAnLi9hc3NldHMvY29uZGl0aW9ucy9icm9rZW4tY2xvdWRzLnN2Zyc7XG5pbXBvcnQgT3ZlcmNhc3RDbG91ZHMgZnJvbSAnLi9hc3NldHMvY29uZGl0aW9ucy9vdmVyY2FzdC1jbG91ZHMuc3ZnJztcbmltcG9ydCBDYXQgZnJvbSAnLi9hc3NldHMvY29uZGl0aW9ucy9jYXQuc3ZnJztcblxuZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XG4gIC8vIElucHV0OiAyMDIyLTA5LTE5XG4gIC8vIE91dHB1dDogOS8xOS8yMDIyXG4gIGNvbnN0IHN0cmluZyA9IFN0cmluZyhkYXRlKTtcbiAgY29uc3QgeWVhciA9IHN0cmluZy5zbGljZSgwLCA0KTtcbiAgY29uc3QgbW9udGggPSBzdHJpbmcuc2xpY2UoNiwgNyk7XG4gIGNvbnN0IGRheSA9IHN0cmluZy5zbGljZSg4LCAxMCk7XG4gIGNvbnN0IHJlc3VsdCA9IGAke21vbnRofS8ke2RheX0vJHt5ZWFyfWA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdEZvcmVjYXN0VGltZShzdHJpbmcpIHtcbiAgLy8gSW5wdXQ6IDIwMjItMDktMTggMDA6MDA6MDBcbiAgLy8gT3V0cHV0OnsgMDA6MDA6MDAsIDkvMTgvMjAyMiB9XG4gIGNvbnN0IHRpbWUgPSBzdHJpbmcuc3Vic3RyKDEwKTtcbiAgY29uc3QgdGVtcCA9IHN0cmluZy5zbGljZSgwLCAxMCk7XG4gIGNvbnN0IGRhdGUgPSBmb3JtYXREYXRlKHRlbXApO1xuICByZXR1cm4geyB0aW1lLCBkYXRlIH07XG59XG5cbmZ1bmN0aW9uIHRvZGF5V2VhdGhlckljb24odmFsKSB7XG4gIGNvbnN0IHZhbHVlID0gTnVtYmVyKHZhbCk7XG4gIGlmICh2YWx1ZSA+PSAyMDAgJiYgdmFsdWUgPD0gMjMyKSB7XG4gICAgcmV0dXJuIFRodW5kZXJTdG9ybTtcbiAgfVxuICAvLyBSYWluIHZhbHVlc1xuICBpZiAodmFsdWUgPj0gMzAwICYmIHZhbHVlIDw9IDMyMSkge1xuICAgIHJldHVybiBEcml6emxlO1xuICB9XG4gIGlmICh2YWx1ZSA9PT0gNTAwKSB7XG4gICAgcmV0dXJuIExpZ2h0UmFpbjtcbiAgfVxuICBpZiAodmFsdWUgPT09IDUwMSkge1xuICAgIHJldHVybiBNb2RlcmF0ZVJhaW47XG4gIH1cbiAgaWYgKHZhbHVlID49IDUwMyAmJiB2YWx1ZSA8PSA1MzEpIHtcbiAgICByZXR1cm4gSGVhdnlSYWluO1xuICB9XG4gIC8vIFNub3cgdmFsdWVzXG4gIGlmICh2YWx1ZSA9PT0gNjAwIHx8IHZhbHVlID09PSA2MDEpIHtcbiAgICByZXR1cm4gTGlnaHRTbm93O1xuICB9XG4gIGlmICh2YWx1ZSA9PT0gNjE1IHx8IHZhbHVlID09PSA2MTYpIHtcbiAgICByZXR1cm4gU25vd1JhaW47XG4gIH1cbiAgaWYgKHZhbHVlID49IDYwMCAmJiB2YWx1ZSA8PSA2MjIpIHtcbiAgICByZXR1cm4gSGVhdnlTbm93O1xuICB9XG4gIC8vIEF0bW9zcGhlcmUgdmFsdWVzXG4gIGlmICh2YWx1ZSA9PT0gNzExKSB7XG4gICAgcmV0dXJuIFNtb2tlO1xuICB9XG4gIGlmICh2YWx1ZSA9PT0gNzIxKSB7XG4gICAgcmV0dXJuIEhhemU7XG4gIH1cbiAgaWYgKHZhbHVlID09PSA3NDEpIHtcbiAgICByZXR1cm4gRm9nO1xuICB9XG4gIGlmICh2YWx1ZSA9PT0gNzgxKSB7XG4gICAgcmV0dXJuIFRvcm5hZG87XG4gIH1cbiAgaWYgKHZhbHVlID49IDcwMSAmJiB2YWx1ZSA8PSA3ODEpIHtcbiAgICByZXR1cm4gTWlzdDtcbiAgfVxuICAvLyBDbG91ZCBjb25kaXRpb25zXG4gIGlmICh2YWx1ZSA9PT0gODAxKSB7XG4gICAgcmV0dXJuIEZld0Nsb3VkcztcbiAgfVxuICBpZiAodmFsdWUgPT09IDgwMikge1xuICAgIHJldHVybiBTY2F0dGVyZWRDbG91ZHM7XG4gIH1cbiAgaWYgKHZhbHVlID09PSA4MDMpIHtcbiAgICByZXR1cm4gQnJva2VuQ2xvdWRzO1xuICB9XG4gIGlmICh2YWx1ZSA9PT0gODA0KSB7XG4gICAgcmV0dXJuIE92ZXJjYXN0Q2xvdWRzO1xuICB9XG4gIGlmICh2YWx1ZSA9PT0gODAwKSB7XG4gICAgcmV0dXJuIFN1bjtcbiAgfVxuICAvLyBMYXp5IGNvZGVyLCByZXR1cm4gY2F0XG4gIHJldHVybiBDYXQ7XG59XG5cbmZ1bmN0aW9uIGFkZFNlYXJjaEljb24oKSB7XG4gIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hJY29uJyk7XG4gIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgaW1nID0gU2VhcmNoO1xuICBzZWFyY2guc3JjID0gaW1nO1xuICBzZWFyY2guYWx0ID0gJ0ltYWdlIG9mIHNlYXJjaCBpY29uJztcbn1cbmZ1bmN0aW9uIGZpcnN0Q2hhclNlbnRlbmNlVXBwZXIoc3RyaW5nKSB7XG4gIC8vIElucHV0Oid0aGlzIGlzIGEgc3RyaW5nJ1xuICAvLyBPdXRwdXQ6ICdUaGlzIElzIEEgU3RyaW5nJ1xuICBjb25zdCB3b3JkcyA9IHN0cmluZy5zcGxpdCgnICcpO1xuICBsZXQgcmVzdWx0ID0gJyc7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wbHVzcGx1c1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgcmVzdWx0ICs9IHdvcmRzW2ldWzBdLnRvVXBwZXJDYXNlKCk7XG4gICAgcmVzdWx0ICs9IHdvcmRzW2ldLnN1YnN0cigxKTtcbiAgICByZXN1bHQgKz0gJyAnO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCB7XG4gIGFkZFNlYXJjaEljb24sXG4gIGZpcnN0Q2hhclNlbnRlbmNlVXBwZXIsXG4gIHRvZGF5V2VhdGhlckljb24sXG4gIGZvcm1hdEZvcmVjYXN0VGltZSxcbn07XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBpbml0V2Vic2l0ZSBmcm9tICcuL2luaXRXZWJzaXRlJztcbmltcG9ydCB7IGdldFRvZGF5TWFpbldlYXRoZXJEYXRhLCBnZXRUb2RheUhvdXJseURhdGEgfSBmcm9tICcuL3dlYXRoZXJBUEknO1xuaW1wb3J0IHsgd2VhdGhlckJyYWluIH0gZnJvbSAnLi93ZWF0aGVyQnJhaW4nO1xuaW1wb3J0IHBvcHVsYXRlRm9yZWNhc3RXZWF0aGVyRGF0YSBmcm9tICcuL3BvcHVsYXRlRm9yZWNhc3QnO1xuaW1wb3J0IHBvcHVsYXRlVG9kYXlXZWF0aGVyRGF0YSBmcm9tICcuL3BvcHVsYXRlVG9kYXlXZWF0aGVyJztcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgaW5pdFdlYnNpdGUoKTtcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoKSB7XG4gIGNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHktaW5wdXQnKS52YWx1ZTtcbiAgbGV0IG1haW5XZWF0aGVyRGF0YTtcbiAgbGV0IHRvZGF5SG91cmx5RGF0YTtcbiAgdHJ5IHtcbiAgICBtYWluV2VhdGhlckRhdGEgPSBhd2FpdCBnZXRUb2RheU1haW5XZWF0aGVyRGF0YShjaXR5TmFtZSk7XG4gICAgdG9kYXlIb3VybHlEYXRhID0gYXdhaXQgZ2V0VG9kYXlIb3VybHlEYXRhKGNpdHlOYW1lKTtcbiAgfSBjYXRjaCB7XG4gICAgYWxlcnQoJ0Vycm9yIHNlYXJjaGluZyBmb3IgY2l0eSwgcGxlYXNlIHJldHJ5LicpO1xuICB9XG5cbiAgd2VhdGhlckJyYWluLmhvdXJseUZvcmVjYXN0RGF0YSA9IHRvZGF5SG91cmx5RGF0YTtcbiAgd2VhdGhlckJyYWluLnRvZGF5Rm9yZWNhc3REYXRhID0gbWFpbldlYXRoZXJEYXRhO1xuICBwb3B1bGF0ZVRvZGF5V2VhdGhlckRhdGEobWFpbldlYXRoZXJEYXRhKTtcbiAgcG9wdWxhdGVGb3JlY2FzdFdlYXRoZXJEYXRhKHRvZGF5SG91cmx5RGF0YSk7XG59XG5cbmNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYnV0dG9uJyk7XG5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnZXRXZWF0aGVyKTtcbiIsImltcG9ydCB7IGdldFRvZGF5TWFpbldlYXRoZXJEYXRhLCBnZXRUb2RheUhvdXJseURhdGEgfSBmcm9tICcuL3dlYXRoZXJBUEknO1xuaW1wb3J0IGdldENpdHlGcm9tTGF0TG9uIGZyb20gJy4vZ2V0Q2l0eUZyb21MYXRMb24nO1xuaW1wb3J0IGdldFBvc2l0aW9uIGZyb20gJy4vZ2V0VXNlckxvY2F0aW9uJztcbmltcG9ydCB7IHdlYXRoZXJCcmFpbiB9IGZyb20gJy4vd2VhdGhlckJyYWluJztcbmltcG9ydCBwb3B1bGF0ZUZvcmVjYXN0V2VhdGhlckRhdGEgZnJvbSAnLi9wb3B1bGF0ZUZvcmVjYXN0JztcbmltcG9ydCBwb3B1bGF0ZVRvZGF5V2VhdGhlckRhdGEgZnJvbSAnLi9wb3B1bGF0ZVRvZGF5V2VhdGhlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGluaXRXZWJzaXRlKCkge1xuICAvLyBHZXQgbG9jYXRpb24gb2YgdXNlclxuICB0cnkge1xuICAgIGNvbnN0IGxhdExvbiA9IGF3YWl0IGdldFBvc2l0aW9uKCk7XG4gICAgY29uc3QgY2l0eU5hbWUgPSBhd2FpdCBnZXRDaXR5RnJvbUxhdExvbihsYXRMb24ubGF0LCBsYXRMb24ubG9uKTtcbiAgICB3ZWF0aGVyQnJhaW4uY3VycmVudExvY2F0aW9uLmNpdHlOYW1lID0gY2l0eU5hbWU7XG4gIH0gY2F0Y2gge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hbGVydFxuICAgIGFsZXJ0KCdMb2NhdGlvbiBzZXJ2aWNlcyBkZW5pZWQuLi5sb2FkaW5nIGRlZmF1bHQgY2l0eS4nKTtcbiAgfVxuXG4gIGxldCBtYWluV2VhdGhlckRhdGE7XG4gIGxldCB0b2RheUhvdXJseURhdGE7XG4gIGlmICh3ZWF0aGVyQnJhaW4uY3VycmVudExvY2F0aW9uLmNpdHlOYW1lICE9PSAnJykge1xuICAgIG1haW5XZWF0aGVyRGF0YSA9IGF3YWl0IGdldFRvZGF5TWFpbldlYXRoZXJEYXRhKHdlYXRoZXJCcmFpbi5jdXJyZW50TG9jYXRpb24uY2l0eU5hbWUpO1xuICAgIHRvZGF5SG91cmx5RGF0YSA9IGF3YWl0IGdldFRvZGF5SG91cmx5RGF0YSh3ZWF0aGVyQnJhaW4uY3VycmVudExvY2F0aW9uLmNpdHlOYW1lKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBkZWZhdWx0Q2l0eSA9ICdOZXcgWW9yayc7XG4gICAgbWFpbldlYXRoZXJEYXRhID0gYXdhaXQgZ2V0VG9kYXlNYWluV2VhdGhlckRhdGEoZGVmYXVsdENpdHkpO1xuICAgIHRvZGF5SG91cmx5RGF0YSA9IGF3YWl0IGdldFRvZGF5SG91cmx5RGF0YShkZWZhdWx0Q2l0eSk7XG4gIH1cblxuICB3ZWF0aGVyQnJhaW4uaG91cmx5Rm9yZWNhc3REYXRhID0gdG9kYXlIb3VybHlEYXRhO1xuICB3ZWF0aGVyQnJhaW4udG9kYXlGb3JlY2FzdERhdGEgPSBtYWluV2VhdGhlckRhdGE7XG4gIHBvcHVsYXRlVG9kYXlXZWF0aGVyRGF0YShtYWluV2VhdGhlckRhdGEpO1xuICBwb3B1bGF0ZUZvcmVjYXN0V2VhdGhlckRhdGEodG9kYXlIb3VybHlEYXRhKTtcbn1cbiIsImltcG9ydCB7IHRvZGF5V2VhdGhlckljb24sIGZpcnN0Q2hhclNlbnRlbmNlVXBwZXIsIGZvcm1hdEZvcmVjYXN0VGltZSB9IGZyb20gJy4vaGVscGVyRnVuY3Rpb25zJztcblxuZnVuY3Rpb24gY2xlYXJDYXJvdXNlbCgpIHtcbiAgY29uc3QgcGFuZWxPbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2Fyb3VzZWwtcGFuZWwtb25lJyk7XG4gIGNvbnN0IHBhbmVsVHdvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nhcm91c2VsLXBhbmVsLXR3bycpO1xuICBjb25zdCBwYW5lbFRocmVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nhcm91c2VsLXBhbmVsLXRocmVlJyk7XG4gIHBhbmVsT25lLmlubmVySFRNTCA9ICcnO1xuICBwYW5lbFR3by5pbm5lckhUTUwgPSAnJztcbiAgcGFuZWxUaHJlZS5pbm5lckhUTUwgPSAnJztcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9yZWNhc3RDYXJkKGRhdGEpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdENvbnRhaW5lcicpO1xuICAvLyBJbWFnZVxuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nLmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0SWNvbicpO1xuICBpbWcuc3JjID0gdG9kYXlXZWF0aGVySWNvbihkYXRhLmlkLCBkYXRhLmxhdCwgZGF0YS5sb24pO1xuICAvLyBUZW1wZXJhdHVyZVxuICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgdGVtcC5pbm5lckhUTUwgPSBkYXRhLnRlbXA7XG4gIC8vIERlc2NyaXB0aW9uXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gZmlyc3RDaGFyU2VudGVuY2VVcHBlcihkYXRhLmRlc2NyaXB0aW9uKTtcbiAgZGVzY3JpcHRpb24uc3R5bGUuZm9udFN0eWxlID0gJ2l0YWxpYyc7XG4gIC8vIEdldCBwYXJzZWQgZm9ybWF0dGVkIGRhdGUgYW5kIHRpbWUgb2JqZWN0IGZyb20gZm9ybWF0ZUZvcmVjYXN0VGltZVxuICBjb25zdCBkYXRlVGltZSA9IGZvcm1hdEZvcmVjYXN0VGltZShkYXRhLnRpbWUpO1xuICBjb25zdCB0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgdGltZS5pbm5lckhUTUwgPSBkYXRlVGltZS50aW1lO1xuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgZGF0ZS5pbm5lckhUTUwgPSBkYXRlVGltZS5kYXRlO1xuICBjb250YWluZXIuYXBwZW5kKGltZyk7XG4gIGNvbnRhaW5lci5hcHBlbmQodGVtcCk7XG4gIGNvbnRhaW5lci5hcHBlbmQoZGVzY3JpcHRpb24pO1xuICBjb250YWluZXIuYXBwZW5kKHRpbWUpO1xuICBjb250YWluZXIuYXBwZW5kKGRhdGUpO1xuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwb3B1bGF0ZUZvcmVjYXN0V2VhdGhlckRhdGEoZGF0YSkge1xuICBjbGVhckNhcm91c2VsKCk7XG4gIGRhdGEuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPCA0KSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2Fyb3VzZWwtcGFuZWwtb25lJykuYXBwZW5kKGNyZWF0ZUZvcmVjYXN0Q2FyZChpdGVtKSk7XG4gICAgfSBlbHNlIGlmIChpbmRleCA+PSA0ICYmIGluZGV4IDwgOCkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nhcm91c2VsLXBhbmVsLXR3bycpLmFwcGVuZChjcmVhdGVGb3JlY2FzdENhcmQoaXRlbSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2Fyb3VzZWwtcGFuZWwtdGhyZWUnKS5hcHBlbmQoY3JlYXRlRm9yZWNhc3RDYXJkKGl0ZW0pKTtcbiAgICB9XG4gIH0pO1xufVxuIiwiLy8gTWV0aG9kc1xuaW1wb3J0IHsgZmlyc3RDaGFyU2VudGVuY2VVcHBlciwgdG9kYXlXZWF0aGVySWNvbiwgYWRkU2VhcmNoSWNvbiB9IGZyb20gJy4vaGVscGVyRnVuY3Rpb25zJztcbi8vIEltYWdlc1xuaW1wb3J0IEZhaHJlbmhlaXQgZnJvbSAnLi9hc3NldHMvZmFocmVuaGVpdC5zdmcnO1xuaW1wb3J0IENlbHNpdXMgZnJvbSAnLi9hc3NldHMvY2Vsc2l1cy5zdmcnO1xuaW1wb3J0IENpdHkgZnJvbSAnLi9hc3NldHMvY2l0eS5zdmcnO1xuaW1wb3J0IExvY2F0aW9uIGZyb20gJy4vYXNzZXRzL2xvY2F0aW9uLnN2Zyc7XG5pbXBvcnQgVGhlcm1vc3RhdCBmcm9tICcuL2Fzc2V0cy90aGVybW9zdGF0LnN2Zyc7XG5pbXBvcnQgV2luZCBmcm9tICcuL2Fzc2V0cy9jb25kaXRpb25zL3dpbmQuc3ZnJztcbmltcG9ydCBTcGVlZCBmcm9tICcuL2Fzc2V0cy9zcGVlZC5zdmcnO1xuaW1wb3J0IEh1bWlkaXR5IGZyb20gJy4vYXNzZXRzL2NvbmRpdGlvbnMvaHVtaWRpdHkuc3ZnJztcbmltcG9ydCBDbG9jayBmcm9tICcuL2Fzc2V0cy9jbG9jay5zdmcnO1xuXG5mdW5jdGlvbiBjcmVhdGVXZWF0aGVyV2lkZ2V0KGltZywgaGVhZGluZywgZGF0YSwgdW5pdEltZykge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvcFJpZ2h0SXRlbUNvbnRhaW5lcicpO1xuICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBpbWFnZS5zcmMgPSBpbWc7XG4gIGltYWdlLmNsYXNzTGlzdC5hZGQoJ2xlZnRJbWFnZUljb24nKTtcbiAgY29uc3QgaW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpZiAoaGVhZGluZyAhPT0gJycpIHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0b2RheUluZm9MYWJlbCcpO1xuICAgIHRpdGxlLmlubmVySFRNTCA9IGhlYWRpbmc7XG4gICAgaW5mb0NvbnRhaW5lci5hcHBlbmQodGl0bGUpO1xuICB9XG4gIC8vIERhdGEgd2l0aCB1bml0IGltYWdlXG4gIGNvbnN0IGRhdGFVbml0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRhdGFVbml0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2RhdGFJbmZvQW5kVW5pdCcpO1xuICAvLyBUaGUgdGV4dFxuICBjb25zdCBkYXRhSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gIGRhdGFJbmZvLmlubmVySFRNTCA9IGRhdGE7XG4gIGRhdGFVbml0Q29udGFpbmVyLmFwcGVuZChkYXRhSW5mbyk7XG4gIC8vIFRoZSBpbWFnZVxuICBpZiAodW5pdEltZyAhPT0gJycpIHtcbiAgICBjb25zdCB1bml0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdW5pdC5zdHlsZS5maWx0ZXIgPSAnaW52ZXJ0KDEpJztcbiAgICBjb25zdCB1bml0SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB1bml0SW1hZ2Uuc3JjID0gdW5pdEltZztcbiAgICAvLyBBcHBlbmRzXG4gICAgdW5pdC5hcHBlbmQodW5pdEltYWdlKTtcbiAgICBkYXRhVW5pdENvbnRhaW5lci5hcHBlbmQodW5pdCk7XG4gIH1cbiAgaW5mb0NvbnRhaW5lci5hcHBlbmQoZGF0YVVuaXRDb250YWluZXIpO1xuICBjb250YWluZXIuYXBwZW5kKGltYWdlKTtcbiAgY29udGFpbmVyLmFwcGVuZChpbmZvQ29udGFpbmVyKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDaXR5SXRlbShjaXR5TmFtZSkge1xuICAvLyBDb250YWluZXIgZm9yIGNpdHkgbmFtZSBhbmQgY2l0eSBpbWFnZVxuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAvLyBDcmVhdGUgaW1hZ2VcbiAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gIGltZy5zcmMgPSBDaXR5O1xuICBpbWcuYWx0ID0gJ0ljb24gcmVwcmVzZW50aW5nIGEgY2l0eSc7XG4gIGltZy5jbGFzc0xpc3QuYWRkKCdsZWZ0SW1hZ2VJY29uJyk7XG4gIGVsLmFwcGVuZChpbWcpO1xuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgbmFtZS5pbm5lckhUTUwgPSBjaXR5TmFtZTtcbiAgZWwuYXBwZW5kKG5hbWUpO1xuICByZXR1cm4gZWw7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxhdExvbkl0ZW0obGF0LCBsb24pIHtcbiAgLy8gQ3JlYXRlIGltYWdlXG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGVsLmNsYXNzTGlzdC5hZGQoJ3RvZGF5V2VhdGhlckl0ZW1Db250YWluZXInKTtcbiAgLy8gQ3JlYXRlIGltYWdlXG4gIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICBpbWcuc3JjID0gTG9jYXRpb247XG4gIGltZy5hbHQgPSAnSWNvbiByZXByZXNlbnRpbmcgYSBkcm9wIGxvY2F0aW9uJztcbiAgaW1nLmNsYXNzTGlzdC5hZGQoJ2xlZnRJbWFnZUljb24nKTtcbiAgZWwuYXBwZW5kKGltZyk7XG4gIGNvbnN0IGNvb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuICBjb29yLmlubmVySFRNTCA9IGAke2xhdH0sICR7bG9ufWA7XG4gIGVsLmFwcGVuZChjb29yKTtcbiAgcmV0dXJuIGVsO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRMb2NhbFRpbWUoc3RyaW5nKSB7XG4gIGNvbnN0IGRhdGUgPSBzdHJpbmcuc2xpY2UoMCwgOSk7XG4gIGNvbnN0IHRpbWUgPSBzdHJpbmcuc2xpY2UoMTEsIDIyKTtcbiAgcmV0dXJuIHsgZGF0ZSwgdGltZSB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMb2NhbFRpbWUodGltZSkge1xuICBjb25zdCBkYXRlVGltZU9iamVjdCA9IGZvcm1hdExvY2FsVGltZSh0aW1lKTtcbiAgLy8gQ29udGFpbmVyIGZvciB0aW1lIG5hbWUgYW5kIHRpbWUgaW1hZ2VcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgLy8gQ3JlYXRlIGltYWdlXG4gIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICBpbWcuc3JjID0gQ2xvY2s7XG4gIGltZy5hbHQgPSAnSWNvbiByZXByZXNlbnRpbmcgYSBjaXR5JztcbiAgaW1nLmNsYXNzTGlzdC5hZGQoJ2xlZnRJbWFnZUljb24nKTtcbiAgLy8gRGF0ZSAvIHRpbWUgc2VjdGlvblxuICBjb25zdCBkYXRlVGltZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0aW1lRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuICB0aW1lRWwuaW5uZXJIVE1MID0gZGF0ZVRpbWVPYmplY3QudGltZTtcbiAgY29uc3QgZGF0ZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgZGF0ZUVsLmlubmVySFRNTCA9IGRhdGVUaW1lT2JqZWN0LmRhdGU7XG4gIGRhdGVUaW1lQ29udGFpbmVyLmFwcGVuZCh0aW1lRWwpO1xuICBkYXRlVGltZUNvbnRhaW5lci5hcHBlbmQoZGF0ZUVsKTtcbiAgLy8gQXBwZW5kc1xuICBlbC5hcHBlbmQoaW1nKTtcbiAgZWwuYXBwZW5kKGRhdGVUaW1lQ29udGFpbmVyKTtcbiAgcmV0dXJuIGVsO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZUxlZnRTZWN0aW9uKGRhdGEpIHtcbiAgLy8gRE9NIGVsZW1lbnQgYW5jaG9yc1xuICBjb25zdCBjaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHknKTtcbiAgY29uc3QgbGF0aXR1ZGVMb25naXR1ZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGF0LWxvbicpO1xuICBjb25zdCBjdXJyZW50VGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXRpbWUnKTtcbiAgLy8gRE9NIGFwcGVuZHNcbiAgY2l0eS5hcHBlbmQoY3JlYXRlQ2l0eUl0ZW0oZGF0YS5jaXR5KSk7XG4gIGxhdGl0dWRlTG9uZ2l0dWRlLmFwcGVuZChjcmVhdGVMYXRMb25JdGVtKGRhdGEubGF0LCBkYXRhLmxvbikpO1xuICBjdXJyZW50VGltZS5hcHBlbmQoY3JlYXRlTG9jYWxUaW1lKGRhdGEuY3VycmVudFRpbWUpKTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVSaWdodFNlY3Rpb24oZGF0YSkge1xuICBjb25zdCB0b2RheUZlZWxzTGlrZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheS1mZWVscy1saWtlJyk7XG4gIGNvbnN0IHRvZGF5V2luZFNwZWVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5LXdpbmQtc3BlZWQnKTtcbiAgY29uc3QgdG9kYXlIdW1pZGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheS1odW1pZGl0eScpO1xuICB0b2RheUZlZWxzTGlrZS5hcHBlbmQoY3JlYXRlV2VhdGhlcldpZGdldChUaGVybW9zdGF0LCAnRmVlbHMgTGlrZScsIGRhdGEuZmVlbHNMaWtlLCBGYWhyZW5oZWl0KSk7XG4gIHRvZGF5V2luZFNwZWVkLmFwcGVuZChjcmVhdGVXZWF0aGVyV2lkZ2V0KFdpbmQsICdXaW5kIFNwZWVkJywgZGF0YS53aW5kU3BlZWQsIFNwZWVkKSk7XG4gIHRvZGF5SHVtaWRpdHkuYXBwZW5kKGNyZWF0ZVdlYXRoZXJXaWRnZXQoSHVtaWRpdHksICdIdW1pZGl0eScsIGRhdGEuaHVtaWRpdHksICcnKSk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlTWlkZGxlU2VjdGlvbihkYXRhKSB7XG4vLyBNaWRkbGUgc2VjdGlvblxuICBjb25zdCB0b2RheUljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXktaWNvbicpO1xuICBjb25zdCB0b2RheVRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXktdGVtcCcpO1xuICBjb25zdCB1bml0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuaXQnKTtcbiAgY29uc3QgdG9kYXlEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheS1kZXNjcmlwdGlvbicpO1xuICAvLyBJRCBkZXRlcm1pbmVzIHdlYXRoZXIgaWNvbiwgbGF0ICYgbG9uIGFyZSB1c2VkIHRvIGRldGVybWluZSBpZiBpdHMgZGF5IG9yIG5pZ2h0IGluIHRoZSBjaXR5XG4gIHRvZGF5SWNvbi5zcmMgPSB0b2RheVdlYXRoZXJJY29uKGRhdGEuaWQsIGRhdGEubGF0LCBkYXRhLmxvbik7XG4gIC8vIFNldCBjdXJyZW50IHRlbXBhdHVyZVxuICB0b2RheVRlbXAuaW5uZXJIVE1MID0gZGF0YS50ZW1wO1xuICAvLyBEaXNwbGF5IHRlbXAgd2l0aCBjdXJyZW50IHVuaXRcbiAgaWYgKGRhdGEudW5pdCA9PT0gJ2ltcGVyaWFsJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVuaXQuc3JjID0gRmFocmVuaGVpdDtcbiAgfSBlbHNlIHtcbiAgICB1bml0LnNyYyA9IENlbHNpdXM7XG4gIH1cbiAgdG9kYXlEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBmaXJzdENoYXJTZW50ZW5jZVVwcGVyKGRhdGEuZGVzY3JpcHRpb24pO1xufVxuXG5mdW5jdGlvbiBjbGVhclByZXZpb3VzRGF0YSgpIHtcbiAgY29uc3QgdG9kYXlJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5LWljb24nKTtcbiAgY29uc3QgdG9kYXlUZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5LXRlbXAnKTtcbiAgY29uc3QgdW5pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1bml0Jyk7XG4gIGNvbnN0IHRvZGF5RGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXktZGVzY3JpcHRpb24nKTtcbiAgY29uc3QgdG9kYXlGZWVsc0xpa2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXktZmVlbHMtbGlrZScpO1xuICBjb25zdCB0b2RheVdpbmRTcGVlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheS13aW5kLXNwZWVkJyk7XG4gIGNvbnN0IHRvZGF5SHVtaWRpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXktaHVtaWRpdHknKTtcbiAgY29uc3QgY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5Jyk7XG4gIGNvbnN0IGxhdGl0dWRlTG9uZ2l0dWRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhdC1sb24nKTtcbiAgY29uc3QgY3VycmVudFRpbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC10aW1lJyk7XG5cbiAgY29uc3QgYXJyYXkgPSBbXTtcbiAgYXJyYXkucHVzaCh0b2RheUljb24pO1xuICBhcnJheS5wdXNoKHRvZGF5VGVtcCk7XG4gIGFycmF5LnB1c2godW5pdCk7XG4gIGFycmF5LnB1c2godG9kYXlEZXNjcmlwdGlvbik7XG4gIGFycmF5LnB1c2godG9kYXlGZWVsc0xpa2UpO1xuICBhcnJheS5wdXNoKHRvZGF5RmVlbHNMaWtlKTtcbiAgYXJyYXkucHVzaCh0b2RheVdpbmRTcGVlZCk7XG4gIGFycmF5LnB1c2godG9kYXlIdW1pZGl0eSk7XG4gIGFycmF5LnB1c2goY2l0eSk7XG4gIGFycmF5LnB1c2gobGF0aXR1ZGVMb25naXR1ZGUpO1xuICBhcnJheS5wdXNoKGN1cnJlbnRUaW1lKTtcblxuICBhcnJheS5mb3JFYWNoKChlbCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIGVsLmlubmVySFRNTCA9ICcnO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcG9wdWxhdGVUb2RheVdlYXRoZXJEYXRhKGRhdGEpIHtcbiAgYWRkU2VhcmNoSWNvbigpO1xuICBjbGVhclByZXZpb3VzRGF0YSgpO1xuICBwb3B1bGF0ZUxlZnRTZWN0aW9uKGRhdGEpO1xuICBwb3B1bGF0ZVJpZ2h0U2VjdGlvbihkYXRhKTtcbiAgcG9wdWxhdGVNaWRkbGVTZWN0aW9uKGRhdGEpO1xufVxuIiwiaW1wb3J0IGdldExvY2FsZVRpbWUgZnJvbSAnLi9nZXRMb2NhbFRpbWUnO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cbmNsYXNzIEZvcmVjYXN0IHtcbiAgY29uc3RydWN0b3IoaWQsIHRlbXAsIGRlc2NyaXB0aW9uLCB0aW1lLCBsYXQsIGxvbikge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLnRlbXAgPSB0ZW1wO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLnRpbWUgPSB0aW1lO1xuICAgIHRoaXMubGF0ID0gbGF0O1xuICAgIHRoaXMubG9uID0gbG9uO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFRvZGF5TWFpbldlYXRoZXJEYXRhKGNpdHlOYW1lLCB1bml0cykge1xuICAvLyBDcmVhdGUgb2JqZWN0IGZvciBzdG9yaW5nIHJlbGV2YW50IHdlYXRoZXIgZGF0YVxuICBjb25zdCBkYXRhID0ge1xuICAgIGlkOiAnJyxcbiAgICBtYWluV2VhdGhlcjogJycsXG4gICAgY2l0eTogJycsXG4gICAgdGVtcDogJycsXG4gICAgZGVzY3JpcHRpb246ICcnLFxuICAgIGh1bWlkaXR5OiAnJyxcbiAgICB3aW5kU3BlZWQ6ICcnLFxuICAgIGZlZWxzTGlrZTogJycsXG4gICAgbGF0OiAnJyxcbiAgICBsb246ICcnLFxuICAgIHVuaXQ6ICcnLFxuICAgIGN1cnJlbnRUaW1lOiAndScsXG4gIH07XG4gIC8vIERldGVybWluZSB0aGUgdW5pdHMgb2YgbWVhc3VyZVxuICBsZXQgdW5pdCA9IHVuaXRzO1xuICBpZiAodW5pdCA9PT0gJycgfHwgdHlwZW9mIHVuaXQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdW5pdCA9ICdpbXBlcmlhbCc7XG4gIH1cbiAgLy8gU2F2ZSB0aGUgdW5pdHNcbiAgZGF0YS51bml0ID0gdW5pdDtcbiAgLy8gTWFrZSB0aGUgQVBJIGNhbGxcbiAgLy8gVGhlIGtleSBmb3IgdGhlIFdlYXRoZXIgQVBJXG4gIGNvbnN0IGFwaUtleSA9ICdmZDU1M2M5MzA2M2MzOTg3OTgyY2UxYTVjYzJjYzcxYic7XG4gIC8vIEdldCBhIHJlc3BvbnNlIChyZXR1cm5zIGEgcHJvbWlzZSkgZm9yIHRoZSByZXF1ZXN0ZWQgZGF0YSBmcm9tIE9wZW5XZWF0aGVyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5TmFtZX0mdW5pdHM9JHt1bml0fSZhcHBpZD0ke2FwaUtleX1gLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgLy8gR2V0IGRhdGEgb2JqZWN0IHdlJ3JlIGFyZSBpbnRlcmVzdGVkIGluXG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAvLyBzYXZlIGRhdGFcbiAgZGF0YS5pZCA9IHdlYXRoZXJEYXRhLndlYXRoZXJbMF0uaWQ7XG4gIGRhdGEubWFpbldlYXRoZXIgPSB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLm1haW47XG4gIGRhdGEuY2l0eSA9IHdlYXRoZXJEYXRhLm5hbWU7XG4gIGRhdGEudGVtcCA9IE1hdGgucm91bmQod2VhdGhlckRhdGEubWFpbi50ZW1wKTtcbiAgZGF0YS5kZXNjcmlwdGlvbiA9IHdlYXRoZXJEYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gIGRhdGEuaHVtaWRpdHkgPSBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLm1haW4uaHVtaWRpdHkpO1xuICBkYXRhLndpbmRTcGVlZCA9IE1hdGgucm91bmQod2VhdGhlckRhdGEud2luZC5zcGVlZCk7XG4gIGRhdGEuZmVlbHNMaWtlID0gTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5tYWluLmZlZWxzX2xpa2UpO1xuICBkYXRhLmxhdCA9IHdlYXRoZXJEYXRhLmNvb3JkLmxhdDtcbiAgZGF0YS5sb24gPSB3ZWF0aGVyRGF0YS5jb29yZC5sb247XG4gIC8vIEdldCBsb2NhbCB0aW1lIG9mIGNpdHlcbiAgY29uc3QgdGltZSA9IGF3YWl0IGdldExvY2FsZVRpbWUoZGF0YS5sYXQsIGRhdGEubG9uKTtcbiAgZGF0YS5jdXJyZW50VGltZSA9IHRpbWU7XG4gIC8vIFJldHVybiB3ZWF0aGVyIGRhdGEgb2JqZWN0XG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBwYXJzZUhvdXJseUZvcmVjYXN0RGF0YShkYXRhKSB7XG4gIGNvbnN0IGFycmF5ID0gW107XG4gIC8vIDEyIGJlY2F1c2Ugb25seSBuZWVkIDEyIGZvcmVjYXN0IGNhcmRzIGZvciB0aGUgY2Fyb3VzZWxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBsdXNwbHVzXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgIGNvbnN0IGljb25JZCA9IGRhdGEubGlzdFtpXS53ZWF0aGVyWzBdLmlkO1xuICAgIGNvbnN0IHsgdGVtcCB9ID0gZGF0YS5saXN0W2ldLm1haW47XG4gICAgY29uc3QgeyBkZXNjcmlwdGlvbiB9ID0gZGF0YS5saXN0W2ldLndlYXRoZXJbMF07XG4gICAgY29uc3QgdGltZSA9IGRhdGEubGlzdFtpXS5kdF90eHQ7IC8vIHRpbWVcbiAgICBjb25zdCB7IGxhdCB9ID0gZGF0YS5jaXR5LmNvb3JkO1xuICAgIGNvbnN0IHsgbG9uIH0gPSBkYXRhLmNpdHkuY29vcmQ7XG4gICAgYXJyYXkucHVzaChuZXcgRm9yZWNhc3QoaWNvbklkLCB0ZW1wLCBkZXNjcmlwdGlvbiwgdGltZSwgbGF0LCBsb24pKTtcbiAgfVxuICAvLyBTYXZlIHRoZSBhcnJheSBpbiB0aGUgYnJhaW5cbiAgcmV0dXJuIGFycmF5O1xufVxuYXN5bmMgZnVuY3Rpb24gZ2V0VG9kYXlIb3VybHlEYXRhKGNpdHksIHVuaXRzKSB7XG4gIC8vIERldGVybWluZSB0aGUgdW5pdHMgb2YgbWVhc3VyZVxuICBsZXQgdW5pdCA9IHVuaXRzO1xuICBpZiAodW5pdCA9PT0gJycgfHwgdHlwZW9mIHVuaXQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdW5pdCA9ICdpbXBlcmlhbCc7XG4gIH1cbiAgLy8gVGhlIGtleSBmb3IgdGhlIFdlYXRoZXIgQVBJXG4gIGNvbnN0IGFwaUtleSA9ICc2YWZlZmQwYWNjMDIwMTU3NTkzNDBkODBkYzU2ODZlMic7XG4gIC8vIEdldCBhIHJlc3BvbnNlIChyZXR1cm5zIGEgcHJvbWlzZSkgZm9yIHRoZSByZXF1ZXN0ZWQgZGF0YSBmcm9tIE9wZW5XZWF0aGVyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9xPSR7Y2l0eX0mdW5pdHM9JHt1bml0fSZhcHBpZD0ke2FwaUtleX1gLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgLy8gR2V0IGRhdGEgb2JqZWN0IHdlJ3JlIGFyZSBpbnRlcmVzdGVkIGluXG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAvLyBQYXNzIHRoZSB3ZWF0aGVyIG9iamVjdCwgcmV0dXJuIGFuIGFycmF5IG9mIGZvcmVjYXN0IG9iamVjdHNcbiAgcmV0dXJuIHBhcnNlSG91cmx5Rm9yZWNhc3REYXRhKHdlYXRoZXJEYXRhKTtcbn1cblxuZXhwb3J0IHtcbiAgZ2V0VG9kYXlNYWluV2VhdGhlckRhdGEsXG4gIGdldFRvZGF5SG91cmx5RGF0YSxcbn07XG4iLCJjbGFzcyBCcmFpbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudG9kYXlGb3JlY2FzdERhdGEgPSAnJztcbiAgICB0aGlzLmhvdXJseUZvcmVjYXN0RGF0YSA9ICcnO1xuICAgIHRoaXMuY3VycmVudExvY2F0aW9uID0ge1xuICAgICAgbGF0OiAnJyxcbiAgICAgIGxvbjogJycsXG4gICAgICBjaXR5TmFtZTogJycsXG4gICAgfTtcbiAgfVxufVxuXG5jb25zdCB3ZWF0aGVyQnJhaW4gPSBuZXcgQnJhaW4oKTtcblxuZXhwb3J0IHsgd2VhdGhlckJyYWluIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=