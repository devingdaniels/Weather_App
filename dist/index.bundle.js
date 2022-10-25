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
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\nhtml{\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center center fixed; \n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    overflow: hidden;\n}\nmain{\n    padding: 1% 5% 0 5%;\n}\n.heading{\n    color: white;\n    width: max-content;\n    margin: 0 auto 10px auto;\n}\n.top-section{\n    display: flex;\n    color: white;\n    margin-bottom: 15px;\n    justify-content:space-evenly;\n}\n\n.middle-section{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    text-align: center;\n}\n\n#today-icon{\n    height: 8em;\n    filter: invert(1);\n    margin: 10px 0 10px 0;\n}\n\n.temperatureContainer{\n    display: flex;\n    font-size: 3rem;\n    justify-content: center;\n    margin-bottom: 10px;\n}\n.temperatureContainer img{\n    width: 1em;\n    filter: invert(1);\n}\n#today-description{\n    font-style: italic;\n    margin-bottom: 10px;\n    font-size: 1rem;\n}\n\n#cityInput{\n    position: relative;\n    left: 12px;\n    background-color: transparent;\n    border: none;\n    color: white;\n    height: 30px;\n    border-bottom: 1px groove white;\n}\n#cityInput::placeholder{\n    color: white;\n    \n}\n#cityInput:focus, #cityInput:active {\n    background: transparent;\n    outline: none;\n}\ninput:-webkit-autofill,\ninput:-webkit-autofill:hover,\ninput:-webkit-autofill:focus,\ninput:-webkit-autofill:active {\n    transition: background-color 5000s ease-in-out 0s;\n    -webkit-text-fill-color: #fff !important;\n}\n\n#searchForm{\n    background-color: transparent;\n    border: none;\n    filter: invert(1);\n    cursor: pointer;\n}\n\n#searchForm #searchIcon{\n    height: 17px;\n    font-size: 17px;\n    position: relative;\n    top: 5px;\n    right: 15px;\n    cursor: pointer;\n}\n/* Left and Right section of the today weather section */\n.top-left-section, .top-right-section{\n    display: flex;\n    flex-direction: column;\n    justify-content:space-evenly;\n    /* Weird: pixels wont overflow data on shrink but percentage does?? */\n    width: 150px;\n}\n.top-left-section{\n    text-align: center;\n}\n.topRightItemContainer{\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    width: 80%;\n    align-items: center;\n}\n.leftImageIcon{\n    filter: invert(1);\n    height: 2.5rem;\n}\n.todayInfoLabel{\n    font-size: .3em;\n}\n.dataInfoAndUnit{\n    display: flex;\n    font-size: 2em;\n    align-items: center;\n}\n/* Carousel */\n.forecast-carousel{\n    position: relative;\n    width: 80%;\n    margin: 0 auto;\n    height: 150px;\n}\n\n.carousel-image{\n    height: 100%;\n    width: 100%;\n    /* Very useful for dynamic covering with images */\n    /* object-fit: cover; */\n    filter: invert(1);\n}\n\n.carousel-track-container{\n    position: relative;\n    height: 100%;\n    overflow: hidden;\n}\n\n.carousel-track{\n    list-style: none;\n    position: relative;\n    height: 100%;\n    transition: transform 880ms ease-in;\n}\n.carousel-slide{\n    position: absolute;\n    top: 0;\n    bottom: 0; \n    width: 100%;\n}\n.carousel-button{\n    position: absolute; \n    top: 50%;\n    transform: translateY(-50%);\n    border: 0;\n    background-color: transparent;\n    filter: invert(1);\n    cursor: pointer;\n}\n\n.carousel-button--left{\n    left: -40px;\n}\n\n.carousel-button--right{\n    right: -40px;\n}\n\n.carousel-button img {\n    width: 35px;\n}\n.carousel-nav{\n    display: flex;\n    justify-content: center;\n    padding: 10px 0;\n}\n\n.carousel-indicator{\n    border: 0;\n    border-radius: 50%;\n    width: 12px;\n    height: 12px;\n    background: rgba(255,255,255, .6);\n    margin: 25px 15px 0 15px;\n    cursor: pointer;\n\n}\n\n.carousel-indicator.current-slide{\n    background: rgba(255,255,255, 1);\n}\n\n.isHidden{\n    display: none;\n}\n/* Forecast items inside the carousel */\n.carousel-panel{\n    display: flex;\n    justify-content:space-evenly;\n    align-items: center;\n}\n.forecastContainer{\n    display: flex;\n    flex-direction: column;\n    color: white;\n    text-align: center;\n    height: 150px;\n    justify-content: space-evenly;\n    border: 1px groove white;\n    border-radius: 10%;\n    width: 100px;\n    \n}\n.forecastIcon{\n    height: 40px;\n    filter: invert(1);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;IACtB,kJAAkJ;AACtJ;AACA;IACI,iFAAwE;IACxE,8BAA8B;IAC9B,2BAA2B;IAC3B,yBAAyB;IACzB,sBAAsB;IACtB,gBAAgB;AACpB;AACA;IACI,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,kBAAkB;IAClB,wBAAwB;AAC5B;AACA;IACI,aAAa;IACb,YAAY;IACZ,mBAAmB;IACnB,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;IAC7B,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,iBAAiB;IACjB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,UAAU;IACV,iBAAiB;AACrB;AACA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,6BAA6B;IAC7B,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,+BAA+B;AACnC;AACA;IACI,YAAY;;AAEhB;AACA;IACI,uBAAuB;IACvB,aAAa;AACjB;AACA;;;;IAII,iDAAiD;IACjD,wCAAwC;AAC5C;;AAEA;IACI,6BAA6B;IAC7B,YAAY;IACZ,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,QAAQ;IACR,WAAW;IACX,eAAe;AACnB;AACA,wDAAwD;AACxD;IACI,aAAa;IACb,sBAAsB;IACtB,4BAA4B;IAC5B,qEAAqE;IACrE,YAAY;AAChB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,qCAAqC;IACrC,UAAU;IACV,mBAAmB;AACvB;AACA;IACI,iBAAiB;IACjB,cAAc;AAClB;AACA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,cAAc;IACd,mBAAmB;AACvB;AACA,aAAa;AACb;IACI,kBAAkB;IAClB,UAAU;IACV,cAAc;IACd,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,iDAAiD;IACjD,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,YAAY;IACZ,mCAAmC;AACvC;AACA;IACI,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,WAAW;AACf;AACA;IACI,kBAAkB;IAClB,QAAQ;IACR,2BAA2B;IAC3B,SAAS;IACT,6BAA6B;IAC7B,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,SAAS;IACT,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,iCAAiC;IACjC,wBAAwB;IACxB,eAAe;;AAEnB;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,aAAa;AACjB;AACA,uCAAuC;AACvC;IACI,aAAa;IACb,4BAA4B;IAC5B,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,6BAA6B;IAC7B,wBAAwB;IACxB,kBAAkB;IAClB,YAAY;;AAEhB;AACA;IACI,YAAY;IACZ,iBAAiB;AACrB","sourcesContent":["*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\nhtml{\n    background: url('./assets/background.jpg') no-repeat center center fixed; \n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    overflow: hidden;\n}\nmain{\n    padding: 1% 5% 0 5%;\n}\n.heading{\n    color: white;\n    width: max-content;\n    margin: 0 auto 10px auto;\n}\n.top-section{\n    display: flex;\n    color: white;\n    margin-bottom: 15px;\n    justify-content:space-evenly;\n}\n\n.middle-section{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    text-align: center;\n}\n\n#today-icon{\n    height: 8em;\n    filter: invert(1);\n    margin: 10px 0 10px 0;\n}\n\n.temperatureContainer{\n    display: flex;\n    font-size: 3rem;\n    justify-content: center;\n    margin-bottom: 10px;\n}\n.temperatureContainer img{\n    width: 1em;\n    filter: invert(1);\n}\n#today-description{\n    font-style: italic;\n    margin-bottom: 10px;\n    font-size: 1rem;\n}\n\n#cityInput{\n    position: relative;\n    left: 12px;\n    background-color: transparent;\n    border: none;\n    color: white;\n    height: 30px;\n    border-bottom: 1px groove white;\n}\n#cityInput::placeholder{\n    color: white;\n    \n}\n#cityInput:focus, #cityInput:active {\n    background: transparent;\n    outline: none;\n}\ninput:-webkit-autofill,\ninput:-webkit-autofill:hover,\ninput:-webkit-autofill:focus,\ninput:-webkit-autofill:active {\n    transition: background-color 5000s ease-in-out 0s;\n    -webkit-text-fill-color: #fff !important;\n}\n\n#searchForm{\n    background-color: transparent;\n    border: none;\n    filter: invert(1);\n    cursor: pointer;\n}\n\n#searchForm #searchIcon{\n    height: 17px;\n    font-size: 17px;\n    position: relative;\n    top: 5px;\n    right: 15px;\n    cursor: pointer;\n}\n/* Left and Right section of the today weather section */\n.top-left-section, .top-right-section{\n    display: flex;\n    flex-direction: column;\n    justify-content:space-evenly;\n    /* Weird: pixels wont overflow data on shrink but percentage does?? */\n    width: 150px;\n}\n.top-left-section{\n    text-align: center;\n}\n.topRightItemContainer{\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    width: 80%;\n    align-items: center;\n}\n.leftImageIcon{\n    filter: invert(1);\n    height: 2.5rem;\n}\n.todayInfoLabel{\n    font-size: .3em;\n}\n.dataInfoAndUnit{\n    display: flex;\n    font-size: 2em;\n    align-items: center;\n}\n/* Carousel */\n.forecast-carousel{\n    position: relative;\n    width: 80%;\n    margin: 0 auto;\n    height: 150px;\n}\n\n.carousel-image{\n    height: 100%;\n    width: 100%;\n    /* Very useful for dynamic covering with images */\n    /* object-fit: cover; */\n    filter: invert(1);\n}\n\n.carousel-track-container{\n    position: relative;\n    height: 100%;\n    overflow: hidden;\n}\n\n.carousel-track{\n    list-style: none;\n    position: relative;\n    height: 100%;\n    transition: transform 880ms ease-in;\n}\n.carousel-slide{\n    position: absolute;\n    top: 0;\n    bottom: 0; \n    width: 100%;\n}\n.carousel-button{\n    position: absolute; \n    top: 50%;\n    transform: translateY(-50%);\n    border: 0;\n    background-color: transparent;\n    filter: invert(1);\n    cursor: pointer;\n}\n\n.carousel-button--left{\n    left: -40px;\n}\n\n.carousel-button--right{\n    right: -40px;\n}\n\n.carousel-button img {\n    width: 35px;\n}\n.carousel-nav{\n    display: flex;\n    justify-content: center;\n    padding: 10px 0;\n}\n\n.carousel-indicator{\n    border: 0;\n    border-radius: 50%;\n    width: 12px;\n    height: 12px;\n    background: rgba(255,255,255, .6);\n    margin: 25px 15px 0 15px;\n    cursor: pointer;\n\n}\n\n.carousel-indicator.current-slide{\n    background: rgba(255,255,255, 1);\n}\n\n.isHidden{\n    display: none;\n}\n/* Forecast items inside the carousel */\n.carousel-panel{\n    display: flex;\n    justify-content:space-evenly;\n    align-items: center;\n}\n.forecastContainer{\n    display: flex;\n    flex-direction: column;\n    color: white;\n    text-align: center;\n    height: 150px;\n    justify-content: space-evenly;\n    border: 1px groove white;\n    border-radius: 10%;\n    width: 100px;\n    \n}\n.forecastIcon{\n    height: 40px;\n    filter: invert(1);\n}"],"sourceRoot":""}]);
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

/***/ "./src/getLocalTime.js":
/*!*****************************!*\
  !*** ./src/getLocalTime.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getLocaleTime)
/* harmony export */ });
async function getLocaleTime(lat, lon) {
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
/* harmony export */   "default": () => (/* binding */ getLocation)
/* harmony export */ });
/*
position.coords.latitude;
position.coords.longitude;
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
*/
class UserLocation {
  constructor(lat, lon, isValid) {
    this.lat = lat;
    this.lon = lon;
    this.isValid = isValid;
  }
}
const userLocation = new UserLocation();

async function showPosition(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  userLocation.lat = lat;
  userLocation.lon = lon;
  userLocation.isValid = true;
}

async function determineCoordinates() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      resolve();
      navigator.geolocation.getCurrentPosition(showPosition);
    }
    reject();
  });
}

async function getLocation() {
  await determineCoordinates();
  return userLocation;
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
/* harmony export */   "createForecastCard": () => (/* binding */ createForecastCard),
/* harmony export */   "firstCharSentenceUpper": () => (/* binding */ firstCharSentenceUpper),
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
/* harmony import */ var _assets_fahrenheit_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/fahrenheit.svg */ "./src/assets/fahrenheit.svg");
/* harmony import */ var _assets_conditions_few_clouds_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/conditions/few-clouds.svg */ "./src/assets/conditions/few-clouds.svg");
/* harmony import */ var _assets_conditions_scattered_clouds_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/conditions/scattered-clouds.svg */ "./src/assets/conditions/scattered-clouds.svg");
/* harmony import */ var _assets_conditions_broken_clouds_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/conditions/broken-clouds.svg */ "./src/assets/conditions/broken-clouds.svg");
/* harmony import */ var _assets_conditions_overcast_clouds_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assets/conditions/overcast-clouds.svg */ "./src/assets/conditions/overcast-clouds.svg");
/* harmony import */ var _assets_conditions_moon_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./assets/conditions/moon.svg */ "./src/assets/conditions/moon.svg");
/* harmony import */ var _assets_conditions_cat_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./assets/conditions/cat.svg */ "./src/assets/conditions/cat.svg");
/* harmony import */ var _getLocalTime__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./getLocalTime */ "./src/getLocalTime.js");
























function getTwentyFourHourTime(amPmString) {
  const d = new Date(`1/1/2013 ${amPmString}`);
  return `${d.getHours()}:${d.getMinutes()}`;
}

async function determineDayOrNight(lat, lon) {
  // Get the local time
  const response = await (0,_getLocalTime__WEBPACK_IMPORTED_MODULE_22__["default"])(lat, lon);
  const parse = formateForecastTime(response);
  // eslint-disable-next-line prefer-destructuring
  let time = getTwentyFourHourTime(parse.time);
  const round = time.slice(0, 2);
  time = Number(round);
  console.log(time);
  if (time < 7 || time > 19) {
    return _assets_conditions_moon_svg__WEBPACK_IMPORTED_MODULE_20__;
  }
  return _assets_conditions_sun_svg__WEBPACK_IMPORTED_MODULE_2__;
}

function todayWeatherIcon(val, lat, lon) {
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
    return _assets_conditions_few_clouds_svg__WEBPACK_IMPORTED_MODULE_16__;
  }
  if (value === 802) {
    return _assets_conditions_scattered_clouds_svg__WEBPACK_IMPORTED_MODULE_17__;
  }
  if (value === 803) {
    return _assets_conditions_broken_clouds_svg__WEBPACK_IMPORTED_MODULE_18__;
  }
  if (value === 804) {
    return _assets_conditions_overcast_clouds_svg__WEBPACK_IMPORTED_MODULE_19__;
  }
  if (value === 800) {
    console.log(determineDayOrNight(lat, lon));
    return _assets_conditions_cat_svg__WEBPACK_IMPORTED_MODULE_21__;
  }
  // Got lazy, return cat
  return _assets_conditions_cat_svg__WEBPACK_IMPORTED_MODULE_21__;
}

function addSearchIcon() {
  const search = document.getElementById('searchIcon');
  let img = new Image();
  img = _assets_search_svg__WEBPACK_IMPORTED_MODULE_0__;
  search.src = img;
  search.alt = 'Image of search icon';
}
function firstCharSentenceUpper(string) {
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

function formatDate(date) {
  const string = String(date);
  const year = string.slice(0, 4);
  const month = string.slice(6, 7);
  const day = string.slice(8, 10);
  const result = `${month}/${day}/${year}`;
  return result;
}

function formateForecastTime(string) {
  // Break up the data from the time
  // Format the date
  // Return an object with date and the time
  // Save the time
  const time = string.substr(10);
  const date = string.slice(0, 10);
  const prettyDate = formatDate(date);
  return { time, prettyDate };
}
function createForecastCard(data) {
  const container = document.createElement('div');
  container.classList.add('forecastContainer');
  // Image
  const img = document.createElement('img');
  img.classList.add('forecastIcon');
  img.src = todayWeatherIcon(data.id, data.lat, data.lon);
  // Temperature
  const temp = document.createElement('h5');
  temp.innerHTML = data.temp;
  // Description
  const description = document.createElement('h5');
  description.innerHTML = firstCharSentenceUpper(data.description);
  description.style.fontStyle = 'italic';
  // Get formated date and time
  const dateTime = formateForecastTime(data.time);
  const time = document.createElement('h5');
  time.innerHTML = dateTime.time;
  const date = document.createElement('h5');
  date.innerHTML = dateTime.prettyDate;
  container.append(img);
  container.append(temp);
  container.append(description);
  container.append(time);
  container.append(date);
  return container;
}




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _weatherAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherAPI */ "./src/weatherAPI.js");
/* harmony import */ var _populateForecastWeather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./populateForecastWeather */ "./src/populateForecastWeather.js");
/* harmony import */ var _getUserLocation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getUserLocation */ "./src/getUserLocation.js");
/* eslint-disable no-multiple-empty-lines */


// import populateTodayWeatherData from './populateTodayWeather';






function initWebSite() {
  // getTodayMainWeatherData('Medellin')
  //   .then((data) => {
  //     populateTodayWeatherData(data);
  //   });
  // Call API, get forecast data, pass data and populate forecast view
  (0,_weatherAPI__WEBPACK_IMPORTED_MODULE_1__.getTodayHourlyData)('Medellin', 'imperial')
    .then((data) => (0,_weatherAPI__WEBPACK_IMPORTED_MODULE_1__.parseForecastData)(data))
    .then((data) => {
      (0,_populateForecastWeather__WEBPACK_IMPORTED_MODULE_2__["default"])(data);
    });
}

initWebSite();


// window.onload = () => {
// // Try to get location of user to init populate the app
//   const city = 'New York';
//   const userLocation = getLocation();


// // if (userLocation.isGood) {
// //   // call weather api's with user coordinates
// // } else {
// //   // If they deny location services, load default
// // }
// };


/***/ }),

/***/ "./src/populateForecastWeather.js":
/*!****************************************!*\
  !*** ./src/populateForecastWeather.js ***!
  \****************************************/
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

function populateForecastWeatherData(data) {
  clearCarousel();
  data.forEach((item, index) => {
    if (index < 4) {
      document.getElementById('carousel-panel-one').append((0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.createForecastCard)(item));
    } else if (index >= 4 && index < 8) {
      document.getElementById('carousel-panel-two').append((0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.createForecastCard)(item));
    } else {
      document.getElementById('carousel-panel-three').append((0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.createForecastCard)(item));
    }
  });
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
/* harmony export */   "getTodayMainWeatherData": () => (/* binding */ getTodayMainWeatherData),
/* harmony export */   "parseForecastData": () => (/* binding */ parseForecastData)
/* harmony export */ });
/* harmony import */ var _getLocalTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLocalTime */ "./src/getLocalTime.js");


/* eslint-disable no-unused-expressions */
class Forecast {
  constructor(id, temp, description, seaLevel, time, lat, lon) {
    this.id = id;
    this.temp = temp;
    this.description = description;
    this.seaLevel = seaLevel;
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

  return weatherData;
}

async function parseForecastData(data) {
  const array = [];
  // 12 because only need 12 3 hour increments
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 12; i++) {
    const iconId = data.list[i].weather[0].id;
    const { temp } = data.list[i].main;
    const { description } = data.list[i].weather[0];
    const seaLevel = data.list[i].main.sea_level;
    const time = data.list[i].dt_txt; // time
    const { lat } = data.city.coord;
    const { lon } = data.city.coord;
    array.push(new Forecast(iconId, temp, description, seaLevel, time, lat, lon));
  }
  return array;
}




/***/ }),

/***/ "./src/assets/background.jpg":
/*!***********************************!*\
  !*** ./src/assets/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a7abdbc241892bff0227.jpg";

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

/***/ "./src/assets/conditions/moon.svg":
/*!****************************************!*\
  !*** ./src/assets/conditions/moon.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bae47c58a7eb7ff102e1.svg";

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

/***/ "./src/assets/fahrenheit.svg":
/*!***********************************!*\
  !*** ./src/assets/fahrenheit.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4a1df6c5e3f1cc9850b9.svg";

/***/ }),

/***/ "./src/assets/search.svg":
/*!*******************************!*\
  !*** ./src/assets/search.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f7a26ab2c1e6ae877b07.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvZ2V0TG9jYWxUaW1lLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2dldFVzZXJMb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9oZWxwZXJGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvcG9wdWxhdGVGb3JlY2FzdFdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvd2VhdGhlckFQSS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OnN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbn1cXG5odG1se1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkOyBcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbm1haW57XFxuICAgIHBhZGRpbmc6IDElIDUlIDAgNSU7XFxufVxcbi5oZWFkaW5ne1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgbWFyZ2luOiAwIGF1dG8gMTBweCBhdXRvO1xcbn1cXG4udG9wLXNlY3Rpb257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLm1pZGRsZS1zZWN0aW9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jdG9kYXktaWNvbntcXG4gICAgaGVpZ2h0OiA4ZW07XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xcbiAgICBtYXJnaW46IDEwcHggMCAxMHB4IDA7XFxufVxcblxcbi50ZW1wZXJhdHVyZUNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLnRlbXBlcmF0dXJlQ29udGFpbmVyIGltZ3tcXG4gICAgd2lkdGg6IDFlbTtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XFxufVxcbiN0b2RheS1kZXNjcmlwdGlvbntcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbiNjaXR5SW5wdXR7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogMTJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBncm9vdmUgd2hpdGU7XFxufVxcbiNjaXR5SW5wdXQ6OnBsYWNlaG9sZGVye1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIFxcbn1cXG4jY2l0eUlucHV0OmZvY3VzLCAjY2l0eUlucHV0OmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5pbnB1dDotd2Via2l0LWF1dG9maWxsLFxcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXFxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpmb2N1cyxcXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmFjdGl2ZSB7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNTAwMHMgZWFzZS1pbi1vdXQgMHM7XFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XFxufVxcblxcbiNzZWFyY2hGb3Jte1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jc2VhcmNoRm9ybSAjc2VhcmNoSWNvbntcXG4gICAgaGVpZ2h0OiAxN3B4O1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiA1cHg7XFxuICAgIHJpZ2h0OiAxNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi8qIExlZnQgYW5kIFJpZ2h0IHNlY3Rpb24gb2YgdGhlIHRvZGF5IHdlYXRoZXIgc2VjdGlvbiAqL1xcbi50b3AtbGVmdC1zZWN0aW9uLCAudG9wLXJpZ2h0LXNlY3Rpb257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1ldmVubHk7XFxuICAgIC8qIFdlaXJkOiBwaXhlbHMgd29udCBvdmVyZmxvdyBkYXRhIG9uIHNocmluayBidXQgcGVyY2VudGFnZSBkb2VzPz8gKi9cXG4gICAgd2lkdGg6IDE1MHB4O1xcbn1cXG4udG9wLWxlZnQtc2VjdGlvbntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4udG9wUmlnaHRJdGVtQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubGVmdEltYWdlSWNvbntcXG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XFxuICAgIGhlaWdodDogMi41cmVtO1xcbn1cXG4udG9kYXlJbmZvTGFiZWx7XFxuICAgIGZvbnQtc2l6ZTogLjNlbTtcXG59XFxuLmRhdGFJbmZvQW5kVW5pdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi8qIENhcm91c2VsICovXFxuLmZvcmVjYXN0LWNhcm91c2Vse1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbn1cXG5cXG4uY2Fyb3VzZWwtaW1hZ2V7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIC8qIFZlcnkgdXNlZnVsIGZvciBkeW5hbWljIGNvdmVyaW5nIHdpdGggaW1hZ2VzICovXFxuICAgIC8qIG9iamVjdC1maXQ6IGNvdmVyOyAqL1xcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcXG59XFxuXFxuLmNhcm91c2VsLXRyYWNrLWNvbnRhaW5lcntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5jYXJvdXNlbC10cmFja3tcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA4ODBtcyBlYXNlLWluO1xcbn1cXG4uY2Fyb3VzZWwtc2xpZGV7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7IFxcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLmNhcm91c2VsLWJ1dHRvbntcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcXG4gICAgdG9wOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNhcm91c2VsLWJ1dHRvbi0tbGVmdHtcXG4gICAgbGVmdDogLTQwcHg7XFxufVxcblxcbi5jYXJvdXNlbC1idXR0b24tLXJpZ2h0e1xcbiAgICByaWdodDogLTQwcHg7XFxufVxcblxcbi5jYXJvdXNlbC1idXR0b24gaW1nIHtcXG4gICAgd2lkdGg6IDM1cHg7XFxufVxcbi5jYXJvdXNlbC1uYXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxufVxcblxcbi5jYXJvdXNlbC1pbmRpY2F0b3J7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB3aWR0aDogMTJweDtcXG4gICAgaGVpZ2h0OiAxMnB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LCAuNik7XFxuICAgIG1hcmdpbjogMjVweCAxNXB4IDAgMTVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbn1cXG5cXG4uY2Fyb3VzZWwtaW5kaWNhdG9yLmN1cnJlbnQtc2xpZGV7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsIDEpO1xcbn1cXG5cXG4uaXNIaWRkZW57XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi8qIEZvcmVjYXN0IGl0ZW1zIGluc2lkZSB0aGUgY2Fyb3VzZWwgKi9cXG4uY2Fyb3VzZWwtcGFuZWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5mb3JlY2FzdENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBib3JkZXI6IDFweCBncm9vdmUgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBcXG59XFxuLmZvcmVjYXN0SWNvbntcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLGtKQUFrSjtBQUN0SjtBQUNBO0lBQ0ksaUZBQXdFO0lBQ3hFLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDViw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxZQUFZOztBQUVoQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7QUFDakI7QUFDQTs7OztJQUlJLGlEQUFpRDtJQUNqRCx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFdBQVc7SUFDWCxlQUFlO0FBQ25CO0FBQ0Esd0RBQXdEO0FBQ3hEO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIscUVBQXFFO0lBQ3JFLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7QUFDQSxhQUFhO0FBQ2I7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGNBQWM7SUFDZCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxpREFBaUQ7SUFDakQsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osbUNBQW1DO0FBQ3ZDO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFNBQVM7SUFDVCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsMkJBQTJCO0lBQzNCLFNBQVM7SUFDVCw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUNBQWlDO0lBQ2pDLHdCQUF3QjtJQUN4QixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFDQSx1Q0FBdUM7QUFDdkM7SUFDSSxhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixZQUFZOztBQUVoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OnN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbn1cXG5odG1se1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4vYXNzZXRzL2JhY2tncm91bmQuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7IFxcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxubWFpbntcXG4gICAgcGFkZGluZzogMSUgNSUgMCA1JTtcXG59XFxuLmhlYWRpbmd7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBtYXJnaW46IDAgYXV0byAxMHB4IGF1dG87XFxufVxcbi50b3Atc2VjdGlvbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4ubWlkZGxlLXNlY3Rpb257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiN0b2RheS1pY29ue1xcbiAgICBoZWlnaHQ6IDhlbTtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XFxuICAgIG1hcmdpbjogMTBweCAwIDEwcHggMDtcXG59XFxuXFxuLnRlbXBlcmF0dXJlQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4udGVtcGVyYXR1cmVDb250YWluZXIgaW1ne1xcbiAgICB3aWR0aDogMWVtO1xcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcXG59XFxuI3RvZGF5LWRlc2NyaXB0aW9ue1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuI2NpdHlJbnB1dHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiAxMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGdyb292ZSB3aGl0ZTtcXG59XFxuI2NpdHlJbnB1dDo6cGxhY2Vob2xkZXJ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgXFxufVxcbiNjaXR5SW5wdXQ6Zm9jdXMsICNjaXR5SW5wdXQ6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGwsXFxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmZvY3VzLFxcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6YWN0aXZlIHtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA1MDAwcyBlYXNlLWluLW91dCAwcztcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcXG59XFxuXFxuI3NlYXJjaEZvcm17XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNzZWFyY2hGb3JtICNzZWFyY2hJY29ue1xcbiAgICBoZWlnaHQ6IDE3cHg7XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDVweDtcXG4gICAgcmlnaHQ6IDE1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLyogTGVmdCBhbmQgUmlnaHQgc2VjdGlvbiBvZiB0aGUgdG9kYXkgd2VhdGhlciBzZWN0aW9uICovXFxuLnRvcC1sZWZ0LXNlY3Rpb24sIC50b3AtcmlnaHQtc2VjdGlvbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWV2ZW5seTtcXG4gICAgLyogV2VpcmQ6IHBpeGVscyB3b250IG92ZXJmbG93IGRhdGEgb24gc2hyaW5rIGJ1dCBwZXJjZW50YWdlIGRvZXM/PyAqL1xcbiAgICB3aWR0aDogMTUwcHg7XFxufVxcbi50b3AtbGVmdC1zZWN0aW9ue1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi50b3BSaWdodEl0ZW1Db250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5sZWZ0SW1hZ2VJY29ue1xcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxufVxcbi50b2RheUluZm9MYWJlbHtcXG4gICAgZm9udC1zaXplOiAuM2VtO1xcbn1cXG4uZGF0YUluZm9BbmRVbml0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLyogQ2Fyb3VzZWwgKi9cXG4uZm9yZWNhc3QtY2Fyb3VzZWx7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGhlaWdodDogMTUwcHg7XFxufVxcblxcbi5jYXJvdXNlbC1pbWFnZXtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLyogVmVyeSB1c2VmdWwgZm9yIGR5bmFtaWMgY292ZXJpbmcgd2l0aCBpbWFnZXMgKi9cXG4gICAgLyogb2JqZWN0LWZpdDogY292ZXI7ICovXFxuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xcbn1cXG5cXG4uY2Fyb3VzZWwtdHJhY2stY29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmNhcm91c2VsLXRyYWNre1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDg4MG1zIGVhc2UtaW47XFxufVxcbi5jYXJvdXNlbC1zbGlkZXtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDsgXFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4uY2Fyb3VzZWwtYnV0dG9ue1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxcbiAgICB0b3A6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2Fyb3VzZWwtYnV0dG9uLS1sZWZ0e1xcbiAgICBsZWZ0OiAtNDBweDtcXG59XFxuXFxuLmNhcm91c2VsLWJ1dHRvbi0tcmlnaHR7XFxuICAgIHJpZ2h0OiAtNDBweDtcXG59XFxuXFxuLmNhcm91c2VsLWJ1dHRvbiBpbWcge1xcbiAgICB3aWR0aDogMzVweDtcXG59XFxuLmNhcm91c2VsLW5hdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXG59XFxuXFxuLmNhcm91c2VsLWluZGljYXRvcntcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHdpZHRoOiAxMnB4O1xcbiAgICBoZWlnaHQ6IDEycHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsIC42KTtcXG4gICAgbWFyZ2luOiAyNXB4IDE1cHggMCAxNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxufVxcblxcbi5jYXJvdXNlbC1pbmRpY2F0b3IuY3VycmVudC1zbGlkZXtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwgMSk7XFxufVxcblxcbi5pc0hpZGRlbntcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLyogRm9yZWNhc3QgaXRlbXMgaW5zaWRlIHRoZSBjYXJvdXNlbCAqL1xcbi5jYXJvdXNlbC1wYW5lbHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmZvcmVjYXN0Q29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGJvcmRlcjogMXB4IGdyb292ZSB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIFxcbn1cXG4uZm9yZWNhc3RJY29ue1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0TG9jYWxlVGltZShsYXQsIGxvbikge1xuICAvLyBHb29nbGUgTWFwcyBBUEkgS2V5XG4gIGNvbnN0IGFwaUtleSA9ICdBSXphU3lBRklZRmUzMmhwOTdkSUc1OFNYTGN6cEJVcUM4ZkM5NVUnO1xuICAvLyBGZXRjaFxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvdGltZXpvbmUvanNvbj9sb2NhdGlvbj0ke2xhdH0sJHtsb259JnRpbWVzdGFtcD0xMzMxMTYxMjAwJmtleT0ke2FwaUtleX1gLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgLy8gTWFrZSB1c2FibGVcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgLy8gR2V0IHRoZSBsb2NhbCB0aW1lIGZyb20gdGhlIHRpbWV6b25lIHVzZWQgYnkgdGhlIGxhdCBhbmQgbG9uIGZldGNoXG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywgeyB0aW1lWm9uZTogZGF0YS50aW1lWm9uZUlkIH0pO1xuICAvLyByZXR1cm4gdGhlIGxvY2FsIHRpbWVcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsIi8qXG5wb3NpdGlvbi5jb29yZHMubGF0aXR1ZGU7XG5wb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlO1xuaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oc2hvd1Bvc2l0aW9uKTtcbiovXG5jbGFzcyBVc2VyTG9jYXRpb24ge1xuICBjb25zdHJ1Y3RvcihsYXQsIGxvbiwgaXNWYWxpZCkge1xuICAgIHRoaXMubGF0ID0gbGF0O1xuICAgIHRoaXMubG9uID0gbG9uO1xuICAgIHRoaXMuaXNWYWxpZCA9IGlzVmFsaWQ7XG4gIH1cbn1cbmNvbnN0IHVzZXJMb2NhdGlvbiA9IG5ldyBVc2VyTG9jYXRpb24oKTtcblxuYXN5bmMgZnVuY3Rpb24gc2hvd1Bvc2l0aW9uKHBvc2l0aW9uKSB7XG4gIGNvbnN0IGxhdCA9IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZTtcbiAgY29uc3QgbG9uID0gcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZTtcbiAgdXNlckxvY2F0aW9uLmxhdCA9IGxhdDtcbiAgdXNlckxvY2F0aW9uLmxvbiA9IGxvbjtcbiAgdXNlckxvY2F0aW9uLmlzVmFsaWQgPSB0cnVlO1xufVxuXG5hc3luYyBmdW5jdGlvbiBkZXRlcm1pbmVDb29yZGluYXRlcygpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XG4gICAgICByZXNvbHZlKCk7XG4gICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKHNob3dQb3NpdGlvbik7XG4gICAgfVxuICAgIHJlamVjdCgpO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0TG9jYXRpb24oKSB7XG4gIGF3YWl0IGRldGVybWluZUNvb3JkaW5hdGVzKCk7XG4gIHJldHVybiB1c2VyTG9jYXRpb247XG59XG4iLCJpbXBvcnQgU2VhcmNoIGZyb20gJy4vYXNzZXRzL3NlYXJjaC5zdmcnO1xuaW1wb3J0IFRodW5kZXJTdG9ybSBmcm9tICcuL2Fzc2V0cy9jb25kaXRpb25zL3RodW5kZXJzdG9ybS5zdmcnO1xuaW1wb3J0IFN1biBmcm9tICcuL2Fzc2V0cy9jb25kaXRpb25zL3N1bi5zdmcnO1xuaW1wb3J0IExpZ2h0UmFpbiBmcm9tICcuL2Fzc2V0cy9jb25kaXRpb25zL2xpZ2h0LXJhaW4uc3ZnJztcbmltcG9ydCBNb2RlcmF0ZVJhaW4gZnJvbSAnLi9hc3NldHMvY29uZGl0aW9ucy9tb2RlcmF0ZS1yYWluLnN2Zyc7XG5pbXBvcnQgSGVhdnlSYWluIGZyb20gJy4vYXNzZXRzL2NvbmRpdGlvbnMvaGVhdnktcmFpbi5zdmcnO1xuaW1wb3J0IERyaXp6bGUgZnJvbSAnLi9hc3NldHMvY29uZGl0aW9ucy9kcml6emxlLnN2Zyc7XG5pbXBvcnQgTGlnaHRTbm93IGZyb20gJy4vYXNzZXRzL2NvbmRpdGlvbnMvbGlnaHQtc25vdy5zdmcnO1xuaW1wb3J0IFNub3dSYWluIGZyb20gJy4vYXNzZXRzL2NvbmRpdGlvbnMvc25vdy1hbmQtcmFpbi5zdmcnO1xuaW1wb3J0IEhlYXZ5U25vdyBmcm9tICcuL2Fzc2V0cy9jb25kaXRpb25zL2hlYXZ5LXNub3cuc3ZnJztcbmltcG9ydCBTbW9rZSBmcm9tICcuL2Fzc2V0cy9jb25kaXRpb25zL3Ntb2tlLnN2Zyc7XG5pbXBvcnQgSGF6ZSBmcm9tICcuL2Fzc2V0cy9jb25kaXRpb25zL2hhemUuc3ZnJztcbmltcG9ydCBGb2cgZnJvbSAnLi9hc3NldHMvY29uZGl0aW9ucy9mb2cuc3ZnJztcbmltcG9ydCBUb3JuYWRvIGZyb20gJy4vYXNzZXRzL2NvbmRpdGlvbnMvdG9ybmFkby5zdmcnO1xuaW1wb3J0IE1pc3QgZnJvbSAnLi9hc3NldHMvY29uZGl0aW9ucy9taXN0LnN2Zyc7XG5pbXBvcnQgRmFocmVuaGVpdCBmcm9tICcuL2Fzc2V0cy9mYWhyZW5oZWl0LnN2Zyc7XG5pbXBvcnQgRmV3Q2xvdWRzIGZyb20gJy4vYXNzZXRzL2NvbmRpdGlvbnMvZmV3LWNsb3Vkcy5zdmcnO1xuaW1wb3J0IFNjYXR0ZXJlZENsb3VkcyBmcm9tICcuL2Fzc2V0cy9jb25kaXRpb25zL3NjYXR0ZXJlZC1jbG91ZHMuc3ZnJztcbmltcG9ydCBCcm9rZW5DbG91ZHMgZnJvbSAnLi9hc3NldHMvY29uZGl0aW9ucy9icm9rZW4tY2xvdWRzLnN2Zyc7XG5pbXBvcnQgT3ZlcmNhc3RDbG91ZHMgZnJvbSAnLi9hc3NldHMvY29uZGl0aW9ucy9vdmVyY2FzdC1jbG91ZHMuc3ZnJztcbmltcG9ydCBNb29uIGZyb20gJy4vYXNzZXRzL2NvbmRpdGlvbnMvbW9vbi5zdmcnO1xuaW1wb3J0IENhdCBmcm9tICcuL2Fzc2V0cy9jb25kaXRpb25zL2NhdC5zdmcnO1xuaW1wb3J0IGdldExvY2FsZVRpbWUgZnJvbSAnLi9nZXRMb2NhbFRpbWUnO1xuXG5mdW5jdGlvbiBnZXRUd2VudHlGb3VySG91clRpbWUoYW1QbVN0cmluZykge1xuICBjb25zdCBkID0gbmV3IERhdGUoYDEvMS8yMDEzICR7YW1QbVN0cmluZ31gKTtcbiAgcmV0dXJuIGAke2QuZ2V0SG91cnMoKX06JHtkLmdldE1pbnV0ZXMoKX1gO1xufVxuXG5hc3luYyBmdW5jdGlvbiBkZXRlcm1pbmVEYXlPck5pZ2h0KGxhdCwgbG9uKSB7XG4gIC8vIEdldCB0aGUgbG9jYWwgdGltZVxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldExvY2FsZVRpbWUobGF0LCBsb24pO1xuICBjb25zdCBwYXJzZSA9IGZvcm1hdGVGb3JlY2FzdFRpbWUocmVzcG9uc2UpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgbGV0IHRpbWUgPSBnZXRUd2VudHlGb3VySG91clRpbWUocGFyc2UudGltZSk7XG4gIGNvbnN0IHJvdW5kID0gdGltZS5zbGljZSgwLCAyKTtcbiAgdGltZSA9IE51bWJlcihyb3VuZCk7XG4gIGNvbnNvbGUubG9nKHRpbWUpO1xuICBpZiAodGltZSA8IDcgfHwgdGltZSA+IDE5KSB7XG4gICAgcmV0dXJuIE1vb247XG4gIH1cbiAgcmV0dXJuIFN1bjtcbn1cblxuZnVuY3Rpb24gdG9kYXlXZWF0aGVySWNvbih2YWwsIGxhdCwgbG9uKSB7XG4gIGNvbnN0IHZhbHVlID0gTnVtYmVyKHZhbCk7XG4gIGlmICh2YWx1ZSA+PSAyMDAgJiYgdmFsdWUgPD0gMjMyKSB7XG4gICAgcmV0dXJuIFRodW5kZXJTdG9ybTtcbiAgfVxuICAvLyBSYWluIHZhbHVlc1xuICBpZiAodmFsdWUgPj0gMzAwICYmIHZhbHVlIDw9IDMyMSkge1xuICAgIHJldHVybiBEcml6emxlO1xuICB9XG4gIGlmICh2YWx1ZSA9PT0gNTAwKSB7XG4gICAgcmV0dXJuIExpZ2h0UmFpbjtcbiAgfVxuICBpZiAodmFsdWUgPT09IDUwMSkge1xuICAgIHJldHVybiBNb2RlcmF0ZVJhaW47XG4gIH1cbiAgaWYgKHZhbHVlID49IDUwMyAmJiB2YWx1ZSA8PSA1MzEpIHtcbiAgICByZXR1cm4gSGVhdnlSYWluO1xuICB9XG4gIC8vIFNub3cgdmFsdWVzXG4gIGlmICh2YWx1ZSA9PT0gNjAwIHx8IHZhbHVlID09PSA2MDEpIHtcbiAgICByZXR1cm4gTGlnaHRTbm93O1xuICB9XG4gIGlmICh2YWx1ZSA9PT0gNjE1IHx8IHZhbHVlID09PSA2MTYpIHtcbiAgICByZXR1cm4gU25vd1JhaW47XG4gIH1cbiAgaWYgKHZhbHVlID49IDYwMCAmJiB2YWx1ZSA8PSA2MjIpIHtcbiAgICByZXR1cm4gSGVhdnlTbm93O1xuICB9XG4gIC8vIEF0bW9zcGhlcmUgdmFsdWVzXG4gIGlmICh2YWx1ZSA9PT0gNzExKSB7XG4gICAgcmV0dXJuIFNtb2tlO1xuICB9XG4gIGlmICh2YWx1ZSA9PT0gNzIxKSB7XG4gICAgcmV0dXJuIEhhemU7XG4gIH1cbiAgaWYgKHZhbHVlID09PSA3NDEpIHtcbiAgICByZXR1cm4gRm9nO1xuICB9XG4gIGlmICh2YWx1ZSA9PT0gNzgxKSB7XG4gICAgcmV0dXJuIFRvcm5hZG87XG4gIH1cbiAgaWYgKHZhbHVlID49IDcwMSAmJiB2YWx1ZSA8PSA3ODEpIHtcbiAgICByZXR1cm4gTWlzdDtcbiAgfVxuICAvLyBDbG91ZCBjb25kaXRpb25zXG4gIGlmICh2YWx1ZSA9PT0gODAxKSB7XG4gICAgcmV0dXJuIEZld0Nsb3VkcztcbiAgfVxuICBpZiAodmFsdWUgPT09IDgwMikge1xuICAgIHJldHVybiBTY2F0dGVyZWRDbG91ZHM7XG4gIH1cbiAgaWYgKHZhbHVlID09PSA4MDMpIHtcbiAgICByZXR1cm4gQnJva2VuQ2xvdWRzO1xuICB9XG4gIGlmICh2YWx1ZSA9PT0gODA0KSB7XG4gICAgcmV0dXJuIE92ZXJjYXN0Q2xvdWRzO1xuICB9XG4gIGlmICh2YWx1ZSA9PT0gODAwKSB7XG4gICAgY29uc29sZS5sb2coZGV0ZXJtaW5lRGF5T3JOaWdodChsYXQsIGxvbikpO1xuICAgIHJldHVybiBDYXQ7XG4gIH1cbiAgLy8gR290IGxhenksIHJldHVybiBjYXRcbiAgcmV0dXJuIENhdDtcbn1cblxuZnVuY3Rpb24gYWRkU2VhcmNoSWNvbigpIHtcbiAgY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaEljb24nKTtcbiAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuICBpbWcgPSBTZWFyY2g7XG4gIHNlYXJjaC5zcmMgPSBpbWc7XG4gIHNlYXJjaC5hbHQgPSAnSW1hZ2Ugb2Ygc2VhcmNoIGljb24nO1xufVxuZnVuY3Rpb24gZmlyc3RDaGFyU2VudGVuY2VVcHBlcihzdHJpbmcpIHtcbiAgY29uc3Qgd29yZHMgPSBzdHJpbmcuc3BsaXQoJyAnKTtcblxuICBsZXQgcmVzdWx0ID0gJyc7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wbHVzcGx1c1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgcmVzdWx0ICs9IHdvcmRzW2ldWzBdLnRvVXBwZXJDYXNlKCk7XG4gICAgcmVzdWx0ICs9IHdvcmRzW2ldLnN1YnN0cigxKTtcbiAgICByZXN1bHQgKz0gJyAnO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSkge1xuICBjb25zdCBzdHJpbmcgPSBTdHJpbmcoZGF0ZSk7XG4gIGNvbnN0IHllYXIgPSBzdHJpbmcuc2xpY2UoMCwgNCk7XG4gIGNvbnN0IG1vbnRoID0gc3RyaW5nLnNsaWNlKDYsIDcpO1xuICBjb25zdCBkYXkgPSBzdHJpbmcuc2xpY2UoOCwgMTApO1xuICBjb25zdCByZXN1bHQgPSBgJHttb250aH0vJHtkYXl9LyR7eWVhcn1gO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBmb3JtYXRlRm9yZWNhc3RUaW1lKHN0cmluZykge1xuICAvLyBCcmVhayB1cCB0aGUgZGF0YSBmcm9tIHRoZSB0aW1lXG4gIC8vIEZvcm1hdCB0aGUgZGF0ZVxuICAvLyBSZXR1cm4gYW4gb2JqZWN0IHdpdGggZGF0ZSBhbmQgdGhlIHRpbWVcbiAgLy8gU2F2ZSB0aGUgdGltZVxuICBjb25zdCB0aW1lID0gc3RyaW5nLnN1YnN0cigxMCk7XG4gIGNvbnN0IGRhdGUgPSBzdHJpbmcuc2xpY2UoMCwgMTApO1xuICBjb25zdCBwcmV0dHlEYXRlID0gZm9ybWF0RGF0ZShkYXRlKTtcbiAgcmV0dXJuIHsgdGltZSwgcHJldHR5RGF0ZSB9O1xufVxuZnVuY3Rpb24gY3JlYXRlRm9yZWNhc3RDYXJkKGRhdGEpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdENvbnRhaW5lcicpO1xuICAvLyBJbWFnZVxuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nLmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0SWNvbicpO1xuICBpbWcuc3JjID0gdG9kYXlXZWF0aGVySWNvbihkYXRhLmlkLCBkYXRhLmxhdCwgZGF0YS5sb24pO1xuICAvLyBUZW1wZXJhdHVyZVxuICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgdGVtcC5pbm5lckhUTUwgPSBkYXRhLnRlbXA7XG4gIC8vIERlc2NyaXB0aW9uXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gZmlyc3RDaGFyU2VudGVuY2VVcHBlcihkYXRhLmRlc2NyaXB0aW9uKTtcbiAgZGVzY3JpcHRpb24uc3R5bGUuZm9udFN0eWxlID0gJ2l0YWxpYyc7XG4gIC8vIEdldCBmb3JtYXRlZCBkYXRlIGFuZCB0aW1lXG4gIGNvbnN0IGRhdGVUaW1lID0gZm9ybWF0ZUZvcmVjYXN0VGltZShkYXRhLnRpbWUpO1xuICBjb25zdCB0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgdGltZS5pbm5lckhUTUwgPSBkYXRlVGltZS50aW1lO1xuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgZGF0ZS5pbm5lckhUTUwgPSBkYXRlVGltZS5wcmV0dHlEYXRlO1xuICBjb250YWluZXIuYXBwZW5kKGltZyk7XG4gIGNvbnRhaW5lci5hcHBlbmQodGVtcCk7XG4gIGNvbnRhaW5lci5hcHBlbmQoZGVzY3JpcHRpb24pO1xuICBjb250YWluZXIuYXBwZW5kKHRpbWUpO1xuICBjb250YWluZXIuYXBwZW5kKGRhdGUpO1xuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5leHBvcnQge1xuICBhZGRTZWFyY2hJY29uLFxuICBmaXJzdENoYXJTZW50ZW5jZVVwcGVyLFxuICBjcmVhdGVGb3JlY2FzdENhcmQsXG4gIHRvZGF5V2VhdGhlckljb24sXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tbXVsdGlwbGUtZW1wdHktbGluZXMgKi9cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgZ2V0VG9kYXlNYWluV2VhdGhlckRhdGEsIGdldFRvZGF5SG91cmx5RGF0YSwgcGFyc2VGb3JlY2FzdERhdGEgfSBmcm9tICcuL3dlYXRoZXJBUEknO1xuLy8gaW1wb3J0IHBvcHVsYXRlVG9kYXlXZWF0aGVyRGF0YSBmcm9tICcuL3BvcHVsYXRlVG9kYXlXZWF0aGVyJztcbmltcG9ydCBwb3B1bGF0ZUZvcmVjYXN0V2VhdGhlckRhdGEgZnJvbSAnLi9wb3B1bGF0ZUZvcmVjYXN0V2VhdGhlcic7XG5pbXBvcnQgZ2V0TG9jYXRpb24gZnJvbSAnLi9nZXRVc2VyTG9jYXRpb24nO1xuXG5cblxuXG5mdW5jdGlvbiBpbml0V2ViU2l0ZSgpIHtcbiAgLy8gZ2V0VG9kYXlNYWluV2VhdGhlckRhdGEoJ01lZGVsbGluJylcbiAgLy8gICAudGhlbigoZGF0YSkgPT4ge1xuICAvLyAgICAgcG9wdWxhdGVUb2RheVdlYXRoZXJEYXRhKGRhdGEpO1xuICAvLyAgIH0pO1xuICAvLyBDYWxsIEFQSSwgZ2V0IGZvcmVjYXN0IGRhdGEsIHBhc3MgZGF0YSBhbmQgcG9wdWxhdGUgZm9yZWNhc3Qgdmlld1xuICBnZXRUb2RheUhvdXJseURhdGEoJ01lZGVsbGluJywgJ2ltcGVyaWFsJylcbiAgICAudGhlbigoZGF0YSkgPT4gcGFyc2VGb3JlY2FzdERhdGEoZGF0YSkpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHBvcHVsYXRlRm9yZWNhc3RXZWF0aGVyRGF0YShkYXRhKTtcbiAgICB9KTtcbn1cblxuaW5pdFdlYlNpdGUoKTtcblxuXG4vLyB3aW5kb3cub25sb2FkID0gKCkgPT4ge1xuLy8gLy8gVHJ5IHRvIGdldCBsb2NhdGlvbiBvZiB1c2VyIHRvIGluaXQgcG9wdWxhdGUgdGhlIGFwcFxuLy8gICBjb25zdCBjaXR5ID0gJ05ldyBZb3JrJztcbi8vICAgY29uc3QgdXNlckxvY2F0aW9uID0gZ2V0TG9jYXRpb24oKTtcblxuXG4vLyAvLyBpZiAodXNlckxvY2F0aW9uLmlzR29vZCkge1xuLy8gLy8gICAvLyBjYWxsIHdlYXRoZXIgYXBpJ3Mgd2l0aCB1c2VyIGNvb3JkaW5hdGVzXG4vLyAvLyB9IGVsc2Uge1xuLy8gLy8gICAvLyBJZiB0aGV5IGRlbnkgbG9jYXRpb24gc2VydmljZXMsIGxvYWQgZGVmYXVsdFxuLy8gLy8gfVxuLy8gfTtcbiIsImltcG9ydCB7IGNyZWF0ZUZvcmVjYXN0Q2FyZCB9IGZyb20gJy4vaGVscGVyRnVuY3Rpb25zJztcblxuZnVuY3Rpb24gY2xlYXJDYXJvdXNlbCgpIHtcbiAgY29uc3QgcGFuZWxPbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2Fyb3VzZWwtcGFuZWwtb25lJyk7XG4gIGNvbnN0IHBhbmVsVHdvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nhcm91c2VsLXBhbmVsLXR3bycpO1xuICBjb25zdCBwYW5lbFRocmVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nhcm91c2VsLXBhbmVsLXRocmVlJyk7XG4gIHBhbmVsT25lLmlubmVySFRNTCA9ICcnO1xuICBwYW5lbFR3by5pbm5lckhUTUwgPSAnJztcbiAgcGFuZWxUaHJlZS5pbm5lckhUTUwgPSAnJztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcG9wdWxhdGVGb3JlY2FzdFdlYXRoZXJEYXRhKGRhdGEpIHtcbiAgY2xlYXJDYXJvdXNlbCgpO1xuICBkYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgaWYgKGluZGV4IDwgNCkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nhcm91c2VsLXBhbmVsLW9uZScpLmFwcGVuZChjcmVhdGVGb3JlY2FzdENhcmQoaXRlbSkpO1xuICAgIH0gZWxzZSBpZiAoaW5kZXggPj0gNCAmJiBpbmRleCA8IDgpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJvdXNlbC1wYW5lbC10d28nKS5hcHBlbmQoY3JlYXRlRm9yZWNhc3RDYXJkKGl0ZW0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nhcm91c2VsLXBhbmVsLXRocmVlJykuYXBwZW5kKGNyZWF0ZUZvcmVjYXN0Q2FyZChpdGVtKSk7XG4gICAgfVxuICB9KTtcbn1cbiIsImltcG9ydCBnZXRMb2NhbGVUaW1lIGZyb20gJy4vZ2V0TG9jYWxUaW1lJztcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG5jbGFzcyBGb3JlY2FzdCB7XG4gIGNvbnN0cnVjdG9yKGlkLCB0ZW1wLCBkZXNjcmlwdGlvbiwgc2VhTGV2ZWwsIHRpbWUsIGxhdCwgbG9uKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMudGVtcCA9IHRlbXA7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuc2VhTGV2ZWwgPSBzZWFMZXZlbDtcbiAgICB0aGlzLnRpbWUgPSB0aW1lO1xuICAgIHRoaXMubGF0ID0gbGF0O1xuICAgIHRoaXMubG9uID0gbG9uO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFRvZGF5TWFpbldlYXRoZXJEYXRhKGNpdHlOYW1lLCB1bml0cykge1xuICAvLyBDcmVhdGUgb2JqZWN0IGZvciBzdG9yaW5nIHJlbGV2YW50IHdlYXRoZXIgZGF0YVxuICBjb25zdCBkYXRhID0ge1xuICAgIGlkOiAnJyxcbiAgICBtYWluV2VhdGhlcjogJycsXG4gICAgY2l0eTogJycsXG4gICAgdGVtcDogJycsXG4gICAgZGVzY3JpcHRpb246ICcnLFxuICAgIGh1bWlkaXR5OiAnJyxcbiAgICB3aW5kU3BlZWQ6ICcnLFxuICAgIGZlZWxzTGlrZTogJycsXG4gICAgbGF0OiAnJyxcbiAgICBsb246ICcnLFxuICAgIHVuaXQ6ICcnLFxuICAgIGN1cnJlbnRUaW1lOiAndScsXG4gIH07XG4gIC8vIERldGVybWluZSB0aGUgdW5pdHMgb2YgbWVhc3VyZVxuICBsZXQgdW5pdCA9IHVuaXRzO1xuICBpZiAodW5pdCA9PT0gJycgfHwgdHlwZW9mIHVuaXQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdW5pdCA9ICdpbXBlcmlhbCc7XG4gIH1cbiAgLy8gU2F2ZSB0aGUgdW5pdHNcbiAgZGF0YS51bml0ID0gdW5pdDtcbiAgLy8gTWFrZSB0aGUgQVBJIGNhbGxcbiAgLy8gVGhlIGtleSBmb3IgdGhlIFdlYXRoZXIgQVBJXG4gIGNvbnN0IGFwaUtleSA9ICdmZDU1M2M5MzA2M2MzOTg3OTgyY2UxYTVjYzJjYzcxYic7XG4gIC8vIEdldCBhIHJlc3BvbnNlIChyZXR1cm5zIGEgcHJvbWlzZSkgZm9yIHRoZSByZXF1ZXN0ZWQgZGF0YSBmcm9tIE9wZW5XZWF0aGVyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5TmFtZX0mdW5pdHM9JHt1bml0fSZhcHBpZD0ke2FwaUtleX1gLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgLy8gR2V0IGRhdGEgb2JqZWN0IHdlJ3JlIGFyZSBpbnRlcmVzdGVkIGluXG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAvLyBzYXZlIGRhdGFcbiAgZGF0YS5pZCA9IHdlYXRoZXJEYXRhLndlYXRoZXJbMF0uaWQ7XG4gIGRhdGEubWFpbldlYXRoZXIgPSB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLm1haW47XG4gIGRhdGEuY2l0eSA9IHdlYXRoZXJEYXRhLm5hbWU7XG4gIGRhdGEudGVtcCA9IE1hdGgucm91bmQod2VhdGhlckRhdGEubWFpbi50ZW1wKTtcbiAgZGF0YS5kZXNjcmlwdGlvbiA9IHdlYXRoZXJEYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gIGRhdGEuaHVtaWRpdHkgPSBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLm1haW4uaHVtaWRpdHkpO1xuICBkYXRhLndpbmRTcGVlZCA9IE1hdGgucm91bmQod2VhdGhlckRhdGEud2luZC5zcGVlZCk7XG4gIGRhdGEuZmVlbHNMaWtlID0gTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5tYWluLmZlZWxzX2xpa2UpO1xuICBkYXRhLmxhdCA9IHdlYXRoZXJEYXRhLmNvb3JkLmxhdDtcbiAgZGF0YS5sb24gPSB3ZWF0aGVyRGF0YS5jb29yZC5sb247XG4gIC8vIEdldCBsb2NhbCB0aW1lIG9mIGNpdHlcbiAgY29uc3QgdGltZSA9IGF3YWl0IGdldExvY2FsZVRpbWUoZGF0YS5sYXQsIGRhdGEubG9uKTtcbiAgZGF0YS5jdXJyZW50VGltZSA9IHRpbWU7XG4gIC8vIFJldHVybiB3ZWF0aGVyIGRhdGEgb2JqZWN0XG4gIHJldHVybiBkYXRhO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRUb2RheUhvdXJseURhdGEoY2l0eSwgdW5pdHMpIHtcbiAgLy8gRGV0ZXJtaW5lIHRoZSB1bml0cyBvZiBtZWFzdXJlXG4gIGxldCB1bml0ID0gdW5pdHM7XG4gIGlmICh1bml0ID09PSAnJyB8fCB0eXBlb2YgdW5pdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB1bml0ID0gJ2ltcGVyaWFsJztcbiAgfVxuICAvLyBUaGUga2V5IGZvciB0aGUgV2VhdGhlciBBUElcbiAgY29uc3QgYXBpS2V5ID0gJzZhZmVmZDBhY2MwMjAxNTc1OTM0MGQ4MGRjNTY4NmUyJztcbiAgLy8gR2V0IGEgcmVzcG9uc2UgKHJldHVybnMgYSBwcm9taXNlKSBmb3IgdGhlIHJlcXVlc3RlZCBkYXRhIGZyb20gT3BlbldlYXRoZXJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3E9JHtjaXR5fSZ1bml0cz0ke3VuaXR9JmFwcGlkPSR7YXBpS2V5fWAsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAvLyBHZXQgZGF0YSBvYmplY3Qgd2UncmUgYXJlIGludGVyZXN0ZWQgaW5cbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIHdlYXRoZXJEYXRhO1xufVxuXG5hc3luYyBmdW5jdGlvbiBwYXJzZUZvcmVjYXN0RGF0YShkYXRhKSB7XG4gIGNvbnN0IGFycmF5ID0gW107XG4gIC8vIDEyIGJlY2F1c2Ugb25seSBuZWVkIDEyIDMgaG91ciBpbmNyZW1lbnRzXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wbHVzcGx1c1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICBjb25zdCBpY29uSWQgPSBkYXRhLmxpc3RbaV0ud2VhdGhlclswXS5pZDtcbiAgICBjb25zdCB7IHRlbXAgfSA9IGRhdGEubGlzdFtpXS5tYWluO1xuICAgIGNvbnN0IHsgZGVzY3JpcHRpb24gfSA9IGRhdGEubGlzdFtpXS53ZWF0aGVyWzBdO1xuICAgIGNvbnN0IHNlYUxldmVsID0gZGF0YS5saXN0W2ldLm1haW4uc2VhX2xldmVsO1xuICAgIGNvbnN0IHRpbWUgPSBkYXRhLmxpc3RbaV0uZHRfdHh0OyAvLyB0aW1lXG4gICAgY29uc3QgeyBsYXQgfSA9IGRhdGEuY2l0eS5jb29yZDtcbiAgICBjb25zdCB7IGxvbiB9ID0gZGF0YS5jaXR5LmNvb3JkO1xuICAgIGFycmF5LnB1c2gobmV3IEZvcmVjYXN0KGljb25JZCwgdGVtcCwgZGVzY3JpcHRpb24sIHNlYUxldmVsLCB0aW1lLCBsYXQsIGxvbikpO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IHtcbiAgZ2V0VG9kYXlNYWluV2VhdGhlckRhdGEsXG4gIGdldFRvZGF5SG91cmx5RGF0YSxcbiAgcGFyc2VGb3JlY2FzdERhdGEsXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9