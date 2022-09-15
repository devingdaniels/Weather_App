"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["main"],{

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
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\nhtml{\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center center fixed; \n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n}\nmain{\n    padding: 1% 10% 0 10%;\n}\n.heading{\n    color: white;\n    border-bottom: 1px solid white;\n    width: max-content;\n    margin: 0 auto 10px auto;\n}\n.top-section{\n    display: flex;\n    color: white;\n    margin-bottom: 15px;\n    justify-content:space-evenly;\n}\n.center-today-info{\n    display: flex;\n    flex-direction: column;\n    align-items: center;  \n    text-align: center;\n}\n#today-icon{\n    height: 8em;\n    filter: invert(1);\n}\n\n.temperatureContainer{\n    display: flex;\n    font-size: 3rem;\n    justify-content: center;\n}\n.temperatureContainer img{\n    width: 1em;\n    filter: invert(1);\n}\n#today-description{\n    font-style: italic;\n    margin-bottom: 10px;\n    font-size: 1.5rem;\n}\n\n#cityInput{\n    position: relative;\n    left: 12px;\n    background-color: transparent;\n    border: 1px solid white;\n    color: white;\n    height: 25px;\n}\n#cityInput::placeholder{\n    color: white;\n}\n#cityInput:focus, #cityInput:active {\n    background: transparent;\n}\ninput:-webkit-autofill,\ninput:-webkit-autofill:hover,\ninput:-webkit-autofill:focus,\ninput:-webkit-autofill:active {\n    transition: background-color 5000s ease-in-out 0s;\n    -webkit-text-fill-color: #fff !important;\n}\n\n#searchForm{\n    background-color: transparent;\n    border: none;\n    filter: invert(1);\n    cursor: pointer;\n}\n\n#searchForm #searchIcon{\n    height: 17px;\n    font-size: 17px;\n    position: relative;\n    top: 5px;\n    right: 15px;\n    cursor: pointer;\n}\n/* Left and Right section of the today weather section */\n.top-left-section, .top-right-section{\n    display: flex;\n    flex-direction: column;\n    justify-content:space-evenly;\n    /* Weird: pixels wont overflow data on shrink but percentage does?? */\n    width: 150px;\n}\n.top-left-section{\n    text-align: center;\n}\n.topRightItemContainer{\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    width: 80%;\n    align-items: center;\n}\n.todayWeatherItemImage{\n    filter: invert(1);\n    height: 3rem;\n}\n.todayInfoLabel{\n    font-size: .3em;\n}\n.dataInfoAndUnit{\n    display: flex;\n    font-size: 2em;\n    align-items: center;\n}\n/* Carousel */\n.forecast-carousel{\n    height: 200px;\n    width: 80%;\n    margin: 0 auto;\n}\n\n.carousel-image{\n    width: 100%;\n    height: 40px;\n    filter: invert(1);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;AACA;IACI,iFAAwE;IACxE,8BAA8B;IAC9B,2BAA2B;IAC3B,yBAAyB;IACzB,sBAAsB;AAC1B;AACA;IACI,qBAAqB;AACzB;AACA;IACI,YAAY;IACZ,8BAA8B;IAC9B,kBAAkB;IAClB,wBAAwB;AAC5B;AACA;IACI,aAAa;IACb,YAAY;IACZ,mBAAmB;IACnB,4BAA4B;AAChC;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,uBAAuB;AAC3B;AACA;IACI,UAAU;IACV,iBAAiB;AACrB;AACA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,6BAA6B;IAC7B,uBAAuB;IACvB,YAAY;IACZ,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,uBAAuB;AAC3B;AACA;;;;IAII,iDAAiD;IACjD,wCAAwC;AAC5C;;AAEA;IACI,6BAA6B;IAC7B,YAAY;IACZ,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,QAAQ;IACR,WAAW;IACX,eAAe;AACnB;AACA,wDAAwD;AACxD;IACI,aAAa;IACb,sBAAsB;IACtB,4BAA4B;IAC5B,qEAAqE;IACrE,YAAY;AAChB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,qCAAqC;IACrC,UAAU;IACV,mBAAmB;AACvB;AACA;IACI,iBAAiB;IACjB,YAAY;AAChB;AACA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,cAAc;IACd,mBAAmB;AACvB;AACA,aAAa;AACb;IACI,aAAa;IACb,UAAU;IACV,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;AACrB","sourcesContent":["*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\nhtml{\n    background: url('./assets/background.jpg') no-repeat center center fixed; \n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n}\nmain{\n    padding: 1% 10% 0 10%;\n}\n.heading{\n    color: white;\n    border-bottom: 1px solid white;\n    width: max-content;\n    margin: 0 auto 10px auto;\n}\n.top-section{\n    display: flex;\n    color: white;\n    margin-bottom: 15px;\n    justify-content:space-evenly;\n}\n.center-today-info{\n    display: flex;\n    flex-direction: column;\n    align-items: center;  \n    text-align: center;\n}\n#today-icon{\n    height: 8em;\n    filter: invert(1);\n}\n\n.temperatureContainer{\n    display: flex;\n    font-size: 3rem;\n    justify-content: center;\n}\n.temperatureContainer img{\n    width: 1em;\n    filter: invert(1);\n}\n#today-description{\n    font-style: italic;\n    margin-bottom: 10px;\n    font-size: 1.5rem;\n}\n\n#cityInput{\n    position: relative;\n    left: 12px;\n    background-color: transparent;\n    border: 1px solid white;\n    color: white;\n    height: 25px;\n}\n#cityInput::placeholder{\n    color: white;\n}\n#cityInput:focus, #cityInput:active {\n    background: transparent;\n}\ninput:-webkit-autofill,\ninput:-webkit-autofill:hover,\ninput:-webkit-autofill:focus,\ninput:-webkit-autofill:active {\n    transition: background-color 5000s ease-in-out 0s;\n    -webkit-text-fill-color: #fff !important;\n}\n\n#searchForm{\n    background-color: transparent;\n    border: none;\n    filter: invert(1);\n    cursor: pointer;\n}\n\n#searchForm #searchIcon{\n    height: 17px;\n    font-size: 17px;\n    position: relative;\n    top: 5px;\n    right: 15px;\n    cursor: pointer;\n}\n/* Left and Right section of the today weather section */\n.top-left-section, .top-right-section{\n    display: flex;\n    flex-direction: column;\n    justify-content:space-evenly;\n    /* Weird: pixels wont overflow data on shrink but percentage does?? */\n    width: 150px;\n}\n.top-left-section{\n    text-align: center;\n}\n.topRightItemContainer{\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    width: 80%;\n    align-items: center;\n}\n.todayWeatherItemImage{\n    filter: invert(1);\n    height: 3rem;\n}\n.todayInfoLabel{\n    font-size: .3em;\n}\n.dataInfoAndUnit{\n    display: flex;\n    font-size: 2em;\n    align-items: center;\n}\n/* Carousel */\n.forecast-carousel{\n    height: 200px;\n    width: 80%;\n    margin: 0 auto;\n}\n\n.carousel-image{\n    width: 100%;\n    height: 40px;\n    filter: invert(1);\n}"],"sourceRoot":""}]);
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

/***/ "./src/helperFunctions.js":
/*!********************************!*\
  !*** ./src/helperFunctions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addSearchIcon": () => (/* binding */ addSearchIcon),
/* harmony export */   "createForecastCard": () => (/* binding */ createForecastCard),
/* harmony export */   "firstCharSentenceUpper": () => (/* binding */ firstCharSentenceUpper)
/* harmony export */ });
/* harmony import */ var _assets_search_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/search.svg */ "./src/assets/search.svg");


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

function createForecastCard(data) {
  console.log(data);
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
/* harmony import */ var _populateTodayWeather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./populateTodayWeather */ "./src/populateTodayWeather.js");
/* harmony import */ var _populateForecastWeather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./populateForecastWeather */ "./src/populateForecastWeather.js");
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helperFunctions */ "./src/helperFunctions.js");






const searchButton = document.getElementById('searchForm');

searchButton.onclick = () => {
  // Add code here for switching units of measure
  // Hard code for now
  const unit = 'imperial';
  // Save the current city
  const city = document.getElementById('cityInput').value;
  // Call API, get current data, pass data and populate current view
  (0,_weatherAPI__WEBPACK_IMPORTED_MODULE_1__.getTodayMainWeatherData)(city, unit)
    .then((data) => {
      (0,_populateTodayWeather__WEBPACK_IMPORTED_MODULE_2__["default"])(data);
    });// add code here to catch errors
  // Call API, get forecast data, pass data and populate forecast view
  (0,_weatherAPI__WEBPACK_IMPORTED_MODULE_1__.getTodayHourlyData)(city, unit)
    .then((data) => {
      (0,_weatherAPI__WEBPACK_IMPORTED_MODULE_1__.parseForecastData)(data);
    });
};

function initWebSite() {
  (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_4__.addSearchIcon)();
  (0,_weatherAPI__WEBPACK_IMPORTED_MODULE_1__.getTodayMainWeatherData)('Medellin')
    .then((data) => {
      (0,_populateTodayWeather__WEBPACK_IMPORTED_MODULE_2__["default"])(data);
    });
  // Call API, get forecast data, pass data and populate forecast view
  (0,_weatherAPI__WEBPACK_IMPORTED_MODULE_1__.getTodayHourlyData)('Medellin', 'imperial')
    .then((data) => (0,_weatherAPI__WEBPACK_IMPORTED_MODULE_1__.parseForecastData)(data))
    .then((data) => {
      (0,_populateForecastWeather__WEBPACK_IMPORTED_MODULE_3__["default"])(data);
    });
}

initWebSite();


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


function populateForecastWeatherData(data) {
  data.forEach((item) => {
    (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.createForecastCard)(item);
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
/* harmony import */ var _assets_conditions_thunderstorm_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/conditions/thunderstorm.svg */ "./src/assets/conditions/thunderstorm.svg");
/* harmony import */ var _assets_conditions_drizzle_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/conditions/drizzle.svg */ "./src/assets/conditions/drizzle.svg");
/* harmony import */ var _assets_conditions_heavy_rain_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/conditions/heavy-rain.svg */ "./src/assets/conditions/heavy-rain.svg");
/* harmony import */ var _assets_conditions_snow_flake_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/conditions/snow-flake.svg */ "./src/assets/conditions/snow-flake.svg");
/* harmony import */ var _assets_conditions_sun_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/conditions/sun.svg */ "./src/assets/conditions/sun.svg");
/* harmony import */ var _assets_city_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/city.svg */ "./src/assets/city.svg");
/* harmony import */ var _assets_location_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/location.svg */ "./src/assets/location.svg");
/* harmony import */ var _assets_thermostat_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/thermostat.svg */ "./src/assets/thermostat.svg");
/* harmony import */ var _assets_conditions_wind_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/conditions/wind.svg */ "./src/assets/conditions/wind.svg");
/* harmony import */ var _assets_speed_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/speed.svg */ "./src/assets/speed.svg");
/* harmony import */ var _assets_conditions_humidity_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/conditions/humidity.svg */ "./src/assets/conditions/humidity.svg");
/* harmony import */ var _assets_clock_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/clock.svg */ "./src/assets/clock.svg");
// Methods

// Images















function todayWeatherIcon(val) {
  const value = Number(val);
  if (value >= 200 && value <= 232) {
    return _assets_conditions_thunderstorm_svg__WEBPACK_IMPORTED_MODULE_3__;
  }
  if (value >= 300 && value <= 321) {
    return _assets_conditions_drizzle_svg__WEBPACK_IMPORTED_MODULE_4__;
  }
  if (value >= 500 && value <= 531) {
    return _assets_conditions_heavy_rain_svg__WEBPACK_IMPORTED_MODULE_5__;
  }
  if (value >= 600 && value <= 622) {
    return _assets_conditions_snow_flake_svg__WEBPACK_IMPORTED_MODULE_6__;
  }
  if (value === 800) {
    // This is for clear sky
    // Add code here
    // If it is night, pass in moon
    // else pass in sun
    return _assets_conditions_sun_svg__WEBPACK_IMPORTED_MODULE_7__;
  }
  // default case
  return _assets_conditions_sun_svg__WEBPACK_IMPORTED_MODULE_7__;
}

function createWeatherWidget(img, heading, data, unitImg) {
  const container = document.createElement('div');
  container.classList.add('topRightItemContainer');
  const image = new Image();
  image.src = img;
  image.classList.add('todayWeatherItemImage');

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
  const dataInfo = document.createElement('h3');
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
  img.src = _assets_city_svg__WEBPACK_IMPORTED_MODULE_8__;
  img.alt = 'Icon representing a city';
  img.classList.add('todayWeatherItemImage');
  el.append(img);
  const name = document.createElement('h1');
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
  img.src = _assets_location_svg__WEBPACK_IMPORTED_MODULE_9__;
  img.alt = 'Icon representing a drop location';
  img.classList.add('todayWeatherItemImage');
  el.append(img);
  const coor = document.createElement('h3');
  coor.innerHTML = `${lat}, ${lon}`;
  el.append(coor);
  return el;
}
function createLocalTime(time) {
  // Container for time name and time image
  const el = document.createElement('div');
  // Create image
  const img = new Image();
  img.src = _assets_clock_svg__WEBPACK_IMPORTED_MODULE_14__;
  img.alt = 'Icon representing a city';
  img.classList.add('todayWeatherItemImage');
  el.append(img);
  const name = document.createElement('h3');
  name.innerHTML = time;
  el.append(name);
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
  todayFeelsLike.append(createWeatherWidget(_assets_thermostat_svg__WEBPACK_IMPORTED_MODULE_10__, 'Feels Like', data.feelsLike, _assets_fahrenheit_svg__WEBPACK_IMPORTED_MODULE_1__));
  todayWindSpeed.append(createWeatherWidget(_assets_conditions_wind_svg__WEBPACK_IMPORTED_MODULE_11__, 'Wind Speed', data.windSpeed, _assets_speed_svg__WEBPACK_IMPORTED_MODULE_12__));
  todayHumidity.append(createWeatherWidget(_assets_conditions_humidity_svg__WEBPACK_IMPORTED_MODULE_13__, 'Humidity', data.humidity, ''));
}

function populateMiddleSection(data) {
// Middle section
  const todayIcon = document.getElementById('today-icon');
  const todayTemp = document.getElementById('today-temp');
  const unit = document.getElementById('unit');
  const todayDescription = document.getElementById('today-description');
  todayIcon.src = todayWeatherIcon(data.id);
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
/* harmony export */   "getTodayMainWeatherData": () => (/* binding */ getTodayMainWeatherData),
/* harmony export */   "parseForecastData": () => (/* binding */ parseForecastData)
/* harmony export */ });
/* harmony import */ var _getLocalTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLocalTime */ "./src/getLocalTime.js");


/* eslint-disable no-unused-expressions */
class Forecast {
  constructor(id, temp, description, seaLevel, time) {
    this.id = id;
    this.temp = temp;
    this.description = description;
    this.seaLevel = seaLevel;
    this.time = time;
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
  };
  // Determine the units of measure
  let unit = units;
  if (unit === '' || typeof unit === 'undefined') {
    unit = 'imperial';
  }
  // Save the units
  data.unit = unit;
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
    array.push(new Forecast(iconId, temp, description, seaLevel, time));
  }
  return array;
}




/***/ }),

/***/ "./src/assets/background.jpg":
/*!***********************************!*\
  !*** ./src/assets/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bc458a32119bee39b33f.jpg";

/***/ }),

/***/ "./src/assets/celsius.svg":
/*!********************************!*\
  !*** ./src/assets/celsius.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "32925749afec7325382c.svg";

/***/ }),

/***/ "./src/assets/city.svg":
/*!*****************************!*\
  !*** ./src/assets/city.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "38862e998c774fd170be.svg";

/***/ }),

/***/ "./src/assets/clock.svg":
/*!******************************!*\
  !*** ./src/assets/clock.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "77c8af56495c546b133c.svg";

/***/ }),

/***/ "./src/assets/conditions/drizzle.svg":
/*!*******************************************!*\
  !*** ./src/assets/conditions/drizzle.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "81082523f9df25029b28.svg";

/***/ }),

/***/ "./src/assets/conditions/heavy-rain.svg":
/*!**********************************************!*\
  !*** ./src/assets/conditions/heavy-rain.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d0a854f9d7e39f755269.svg";

/***/ }),

/***/ "./src/assets/conditions/humidity.svg":
/*!********************************************!*\
  !*** ./src/assets/conditions/humidity.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a2c76596a79308f215a2.svg";

/***/ }),

/***/ "./src/assets/conditions/snow-flake.svg":
/*!**********************************************!*\
  !*** ./src/assets/conditions/snow-flake.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f9ee5aeb52f731857ad.svg";

/***/ }),

/***/ "./src/assets/conditions/sun.svg":
/*!***************************************!*\
  !*** ./src/assets/conditions/sun.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ab19632edd7ebcdf6c16.svg";

/***/ }),

/***/ "./src/assets/conditions/thunderstorm.svg":
/*!************************************************!*\
  !*** ./src/assets/conditions/thunderstorm.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1473208d04b529ee6ce2.svg";

/***/ }),

/***/ "./src/assets/conditions/wind.svg":
/*!****************************************!*\
  !*** ./src/assets/conditions/wind.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3467836ad88b7e554ac3.svg";

/***/ }),

/***/ "./src/assets/fahrenheit.svg":
/*!***********************************!*\
  !*** ./src/assets/fahrenheit.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d913e25561cfdaf17aa0.svg";

/***/ }),

/***/ "./src/assets/location.svg":
/*!*********************************!*\
  !*** ./src/assets/location.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "10531885b66df2e5a5d7.svg";

/***/ }),

/***/ "./src/assets/search.svg":
/*!*******************************!*\
  !*** ./src/assets/search.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "67459c06cd69e0168b9d.svg";

/***/ }),

/***/ "./src/assets/speed.svg":
/*!******************************!*\
  !*** ./src/assets/speed.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "63ec518e0984b8c91a0b.svg";

/***/ }),

/***/ "./src/assets/thermostat.svg":
/*!***********************************!*\
  !*** ./src/assets/thermostat.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cba391b8428f2e8d0765.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUZBQXFGLEtBQUssU0FBUyxLQUFLLFNBQVMsT0FBTyxLQUFLLGNBQWM7QUFDM0k7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUI7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWSxjQUFjO0FBQzFCO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBOztBQU1FIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2dldExvY2FsVGltZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9oZWxwZXJGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvcG9wdWxhdGVGb3JlY2FzdFdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvcG9wdWxhdGVUb2RheVdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvd2VhdGhlckFQSS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmh0bWx7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7IFxcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxubWFpbntcXG4gICAgcGFkZGluZzogMSUgMTAlIDAgMTAlO1xcbn1cXG4uaGVhZGluZ3tcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgbWFyZ2luOiAwIGF1dG8gMTBweCBhdXRvO1xcbn1cXG4udG9wLXNlY3Rpb257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWV2ZW5seTtcXG59XFxuLmNlbnRlci10b2RheS1pbmZve1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI3RvZGF5LWljb257XFxuICAgIGhlaWdodDogOGVtO1xcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcXG59XFxuXFxuLnRlbXBlcmF0dXJlQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4udGVtcGVyYXR1cmVDb250YWluZXIgaW1ne1xcbiAgICB3aWR0aDogMWVtO1xcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcXG59XFxuI3RvZGF5LWRlc2NyaXB0aW9ue1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4jY2l0eUlucHV0e1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IDEycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxufVxcbiNjaXR5SW5wdXQ6OnBsYWNlaG9sZGVye1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbiNjaXR5SW5wdXQ6Zm9jdXMsICNjaXR5SW5wdXQ6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGwsXFxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmZvY3VzLFxcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6YWN0aXZlIHtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA1MDAwcyBlYXNlLWluLW91dCAwcztcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcXG59XFxuXFxuI3NlYXJjaEZvcm17XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNzZWFyY2hGb3JtICNzZWFyY2hJY29ue1xcbiAgICBoZWlnaHQ6IDE3cHg7XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDVweDtcXG4gICAgcmlnaHQ6IDE1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLyogTGVmdCBhbmQgUmlnaHQgc2VjdGlvbiBvZiB0aGUgdG9kYXkgd2VhdGhlciBzZWN0aW9uICovXFxuLnRvcC1sZWZ0LXNlY3Rpb24sIC50b3AtcmlnaHQtc2VjdGlvbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWV2ZW5seTtcXG4gICAgLyogV2VpcmQ6IHBpeGVscyB3b250IG92ZXJmbG93IGRhdGEgb24gc2hyaW5rIGJ1dCBwZXJjZW50YWdlIGRvZXM/PyAqL1xcbiAgICB3aWR0aDogMTUwcHg7XFxufVxcbi50b3AtbGVmdC1zZWN0aW9ue1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi50b3BSaWdodEl0ZW1Db250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi50b2RheVdlYXRoZXJJdGVtSW1hZ2V7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xcbiAgICBoZWlnaHQ6IDNyZW07XFxufVxcbi50b2RheUluZm9MYWJlbHtcXG4gICAgZm9udC1zaXplOiAuM2VtO1xcbn1cXG4uZGF0YUluZm9BbmRVbml0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLyogQ2Fyb3VzZWwgKi9cXG4uZm9yZWNhc3QtY2Fyb3VzZWx7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uY2Fyb3VzZWwtaW1hZ2V7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGlGQUF3RTtJQUN4RSw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7Ozs7SUFJSSxpREFBaUQ7SUFDakQsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsZUFBZTtBQUNuQjtBQUNBLHdEQUF3RDtBQUN4RDtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLHFFQUFxRTtJQUNyRSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsVUFBVTtJQUNWLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCO0FBQ0EsYUFBYTtBQUNiO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5odG1se1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4vYXNzZXRzL2JhY2tncm91bmQuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7IFxcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxubWFpbntcXG4gICAgcGFkZGluZzogMSUgMTAlIDAgMTAlO1xcbn1cXG4uaGVhZGluZ3tcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgbWFyZ2luOiAwIGF1dG8gMTBweCBhdXRvO1xcbn1cXG4udG9wLXNlY3Rpb257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWV2ZW5seTtcXG59XFxuLmNlbnRlci10b2RheS1pbmZve1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI3RvZGF5LWljb257XFxuICAgIGhlaWdodDogOGVtO1xcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcXG59XFxuXFxuLnRlbXBlcmF0dXJlQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4udGVtcGVyYXR1cmVDb250YWluZXIgaW1ne1xcbiAgICB3aWR0aDogMWVtO1xcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcXG59XFxuI3RvZGF5LWRlc2NyaXB0aW9ue1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4jY2l0eUlucHV0e1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IDEycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxufVxcbiNjaXR5SW5wdXQ6OnBsYWNlaG9sZGVye1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbiNjaXR5SW5wdXQ6Zm9jdXMsICNjaXR5SW5wdXQ6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGwsXFxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmZvY3VzLFxcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6YWN0aXZlIHtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA1MDAwcyBlYXNlLWluLW91dCAwcztcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcXG59XFxuXFxuI3NlYXJjaEZvcm17XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNzZWFyY2hGb3JtICNzZWFyY2hJY29ue1xcbiAgICBoZWlnaHQ6IDE3cHg7XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDVweDtcXG4gICAgcmlnaHQ6IDE1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLyogTGVmdCBhbmQgUmlnaHQgc2VjdGlvbiBvZiB0aGUgdG9kYXkgd2VhdGhlciBzZWN0aW9uICovXFxuLnRvcC1sZWZ0LXNlY3Rpb24sIC50b3AtcmlnaHQtc2VjdGlvbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWV2ZW5seTtcXG4gICAgLyogV2VpcmQ6IHBpeGVscyB3b250IG92ZXJmbG93IGRhdGEgb24gc2hyaW5rIGJ1dCBwZXJjZW50YWdlIGRvZXM/PyAqL1xcbiAgICB3aWR0aDogMTUwcHg7XFxufVxcbi50b3AtbGVmdC1zZWN0aW9ue1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi50b3BSaWdodEl0ZW1Db250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi50b2RheVdlYXRoZXJJdGVtSW1hZ2V7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xcbiAgICBoZWlnaHQ6IDNyZW07XFxufVxcbi50b2RheUluZm9MYWJlbHtcXG4gICAgZm9udC1zaXplOiAuM2VtO1xcbn1cXG4uZGF0YUluZm9BbmRVbml0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLyogQ2Fyb3VzZWwgKi9cXG4uZm9yZWNhc3QtY2Fyb3VzZWx7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uY2Fyb3VzZWwtaW1hZ2V7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0TG9jYWxlVGltZShsYXQsIGxvbikge1xuICAvLyBHb29nbGUgTWFwcyBBUEkgS2V5XG4gIGNvbnN0IGFwaUtleSA9ICdBSXphU3lBRklZRmUzMmhwOTdkSUc1OFNYTGN6cEJVcUM4ZkM5NVUnO1xuICAvLyBGZXRjaFxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvdGltZXpvbmUvanNvbj9sb2NhdGlvbj0ke2xhdH0sJHtsb259JnRpbWVzdGFtcD0xMzMxMTYxMjAwJmtleT0ke2FwaUtleX1gLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgLy8gTWFrZSB1c2FibGVcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgLy8gR2V0IHRoZSBsb2NhbCB0aW1lIGZyb20gdGhlIHRpbWV6b25lIHVzZWQgYnkgdGhlIGxhdCBhbmQgbG9uIGZldGNoXG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywgeyB0aW1lWm9uZTogZGF0YS50aW1lWm9uZUlkIH0pO1xuICAvLyByZXR1cm4gdGhlIGxvY2FsIHRpbWVcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsImltcG9ydCBTZWFyY2ggZnJvbSAnLi9hc3NldHMvc2VhcmNoLnN2Zyc7XG5cbmZ1bmN0aW9uIGFkZFNlYXJjaEljb24oKSB7XG4gIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hJY29uJyk7XG4gIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgaW1nID0gU2VhcmNoO1xuICBzZWFyY2guc3JjID0gaW1nO1xuICBzZWFyY2guYWx0ID0gJ0ltYWdlIG9mIHNlYXJjaCBpY29uJztcbn1cblxuZnVuY3Rpb24gZmlyc3RDaGFyU2VudGVuY2VVcHBlcihzdHJpbmcpIHtcbiAgY29uc3Qgd29yZHMgPSBzdHJpbmcuc3BsaXQoJyAnKTtcblxuICBsZXQgcmVzdWx0ID0gJyc7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wbHVzcGx1c1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgcmVzdWx0ICs9IHdvcmRzW2ldWzBdLnRvVXBwZXJDYXNlKCk7XG4gICAgcmVzdWx0ICs9IHdvcmRzW2ldLnN1YnN0cigxKTtcbiAgICByZXN1bHQgKz0gJyAnO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvcmVjYXN0Q2FyZChkYXRhKSB7XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xufVxuXG5leHBvcnQge1xuICBhZGRTZWFyY2hJY29uLFxuICBmaXJzdENoYXJTZW50ZW5jZVVwcGVyLFxuICBjcmVhdGVGb3JlY2FzdENhcmQsXG59O1xuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBnZXRUb2RheU1haW5XZWF0aGVyRGF0YSwgZ2V0VG9kYXlIb3VybHlEYXRhLCBwYXJzZUZvcmVjYXN0RGF0YSB9IGZyb20gJy4vd2VhdGhlckFQSSc7XG5pbXBvcnQgcG9wdWxhdGVUb2RheVdlYXRoZXJEYXRhIGZyb20gJy4vcG9wdWxhdGVUb2RheVdlYXRoZXInO1xuaW1wb3J0IHBvcHVsYXRlRm9yZWNhc3RXZWF0aGVyRGF0YSBmcm9tICcuL3BvcHVsYXRlRm9yZWNhc3RXZWF0aGVyJztcbmltcG9ydCB7IGFkZFNlYXJjaEljb24gfSBmcm9tICcuL2hlbHBlckZ1bmN0aW9ucyc7XG5cbmNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hGb3JtJyk7XG5cbnNlYXJjaEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAvLyBBZGQgY29kZSBoZXJlIGZvciBzd2l0Y2hpbmcgdW5pdHMgb2YgbWVhc3VyZVxuICAvLyBIYXJkIGNvZGUgZm9yIG5vd1xuICBjb25zdCB1bml0ID0gJ2ltcGVyaWFsJztcbiAgLy8gU2F2ZSB0aGUgY3VycmVudCBjaXR5XG4gIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eUlucHV0JykudmFsdWU7XG4gIC8vIENhbGwgQVBJLCBnZXQgY3VycmVudCBkYXRhLCBwYXNzIGRhdGEgYW5kIHBvcHVsYXRlIGN1cnJlbnQgdmlld1xuICBnZXRUb2RheU1haW5XZWF0aGVyRGF0YShjaXR5LCB1bml0KVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBwb3B1bGF0ZVRvZGF5V2VhdGhlckRhdGEoZGF0YSk7XG4gICAgfSk7Ly8gYWRkIGNvZGUgaGVyZSB0byBjYXRjaCBlcnJvcnNcbiAgLy8gQ2FsbCBBUEksIGdldCBmb3JlY2FzdCBkYXRhLCBwYXNzIGRhdGEgYW5kIHBvcHVsYXRlIGZvcmVjYXN0IHZpZXdcbiAgZ2V0VG9kYXlIb3VybHlEYXRhKGNpdHksIHVuaXQpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHBhcnNlRm9yZWNhc3REYXRhKGRhdGEpO1xuICAgIH0pO1xufTtcblxuZnVuY3Rpb24gaW5pdFdlYlNpdGUoKSB7XG4gIGFkZFNlYXJjaEljb24oKTtcbiAgZ2V0VG9kYXlNYWluV2VhdGhlckRhdGEoJ01lZGVsbGluJylcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgcG9wdWxhdGVUb2RheVdlYXRoZXJEYXRhKGRhdGEpO1xuICAgIH0pO1xuICAvLyBDYWxsIEFQSSwgZ2V0IGZvcmVjYXN0IGRhdGEsIHBhc3MgZGF0YSBhbmQgcG9wdWxhdGUgZm9yZWNhc3Qgdmlld1xuICBnZXRUb2RheUhvdXJseURhdGEoJ01lZGVsbGluJywgJ2ltcGVyaWFsJylcbiAgICAudGhlbigoZGF0YSkgPT4gcGFyc2VGb3JlY2FzdERhdGEoZGF0YSkpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHBvcHVsYXRlRm9yZWNhc3RXZWF0aGVyRGF0YShkYXRhKTtcbiAgICB9KTtcbn1cblxuaW5pdFdlYlNpdGUoKTtcbiIsImltcG9ydCB7IGNyZWF0ZUZvcmVjYXN0Q2FyZCB9IGZyb20gJy4vaGVscGVyRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcG9wdWxhdGVGb3JlY2FzdFdlYXRoZXJEYXRhKGRhdGEpIHtcbiAgZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY3JlYXRlRm9yZWNhc3RDYXJkKGl0ZW0pO1xuICB9KTtcbn1cbiIsIi8vIE1ldGhvZHNcbmltcG9ydCB7IGZpcnN0Q2hhclNlbnRlbmNlVXBwZXIgfSBmcm9tICcuL2hlbHBlckZ1bmN0aW9ucyc7XG4vLyBJbWFnZXNcbmltcG9ydCBGYWhyZW5oZWl0IGZyb20gJy4vYXNzZXRzL2ZhaHJlbmhlaXQuc3ZnJztcbmltcG9ydCBDZWxzaXVzIGZyb20gJy4vYXNzZXRzL2NlbHNpdXMuc3ZnJztcbmltcG9ydCBUaHVuZGVyU3Rvcm0gZnJvbSAnLi9hc3NldHMvY29uZGl0aW9ucy90aHVuZGVyc3Rvcm0uc3ZnJztcbmltcG9ydCBEcml6emxlIGZyb20gJy4vYXNzZXRzL2NvbmRpdGlvbnMvZHJpenpsZS5zdmcnO1xuaW1wb3J0IEhlYXZ5UmFpbiBmcm9tICcuL2Fzc2V0cy9jb25kaXRpb25zL2hlYXZ5LXJhaW4uc3ZnJztcbmltcG9ydCBTbm93IGZyb20gJy4vYXNzZXRzL2NvbmRpdGlvbnMvc25vdy1mbGFrZS5zdmcnO1xuaW1wb3J0IFN1biBmcm9tICcuL2Fzc2V0cy9jb25kaXRpb25zL3N1bi5zdmcnO1xuaW1wb3J0IENpdHkgZnJvbSAnLi9hc3NldHMvY2l0eS5zdmcnO1xuaW1wb3J0IExvY2F0aW9uIGZyb20gJy4vYXNzZXRzL2xvY2F0aW9uLnN2Zyc7XG5pbXBvcnQgVGhlcm1vc3RhdCBmcm9tICcuL2Fzc2V0cy90aGVybW9zdGF0LnN2Zyc7XG5pbXBvcnQgV2luZCBmcm9tICcuL2Fzc2V0cy9jb25kaXRpb25zL3dpbmQuc3ZnJztcbmltcG9ydCBTcGVlZCBmcm9tICcuL2Fzc2V0cy9zcGVlZC5zdmcnO1xuaW1wb3J0IEh1bWlkaXR5IGZyb20gJy4vYXNzZXRzL2NvbmRpdGlvbnMvaHVtaWRpdHkuc3ZnJztcbmltcG9ydCBDbG9jayBmcm9tICcuL2Fzc2V0cy9jbG9jay5zdmcnO1xuXG5mdW5jdGlvbiB0b2RheVdlYXRoZXJJY29uKHZhbCkge1xuICBjb25zdCB2YWx1ZSA9IE51bWJlcih2YWwpO1xuICBpZiAodmFsdWUgPj0gMjAwICYmIHZhbHVlIDw9IDIzMikge1xuICAgIHJldHVybiBUaHVuZGVyU3Rvcm07XG4gIH1cbiAgaWYgKHZhbHVlID49IDMwMCAmJiB2YWx1ZSA8PSAzMjEpIHtcbiAgICByZXR1cm4gRHJpenpsZTtcbiAgfVxuICBpZiAodmFsdWUgPj0gNTAwICYmIHZhbHVlIDw9IDUzMSkge1xuICAgIHJldHVybiBIZWF2eVJhaW47XG4gIH1cbiAgaWYgKHZhbHVlID49IDYwMCAmJiB2YWx1ZSA8PSA2MjIpIHtcbiAgICByZXR1cm4gU25vdztcbiAgfVxuICBpZiAodmFsdWUgPT09IDgwMCkge1xuICAgIC8vIFRoaXMgaXMgZm9yIGNsZWFyIHNreVxuICAgIC8vIEFkZCBjb2RlIGhlcmVcbiAgICAvLyBJZiBpdCBpcyBuaWdodCwgcGFzcyBpbiBtb29uXG4gICAgLy8gZWxzZSBwYXNzIGluIHN1blxuICAgIHJldHVybiBTdW47XG4gIH1cbiAgLy8gZGVmYXVsdCBjYXNlXG4gIHJldHVybiBTdW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVdlYXRoZXJXaWRnZXQoaW1nLCBoZWFkaW5nLCBkYXRhLCB1bml0SW1nKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9wUmlnaHRJdGVtQ29udGFpbmVyJyk7XG4gIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gIGltYWdlLnNyYyA9IGltZztcbiAgaW1hZ2UuY2xhc3NMaXN0LmFkZCgndG9kYXlXZWF0aGVySXRlbUltYWdlJyk7XG5cbiAgY29uc3QgaW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpZiAoaGVhZGluZyAhPT0gJycpIHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0b2RheUluZm9MYWJlbCcpO1xuICAgIHRpdGxlLmlubmVySFRNTCA9IGhlYWRpbmc7XG4gICAgaW5mb0NvbnRhaW5lci5hcHBlbmQodGl0bGUpO1xuICB9XG5cbiAgLy8gRGF0YSB3aXRoIHVuaXQgaW1hZ2VcbiAgY29uc3QgZGF0YVVuaXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGF0YVVuaXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGF0YUluZm9BbmRVbml0Jyk7XG4gIC8vIFRoZSB0ZXh0XG4gIGNvbnN0IGRhdGFJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgZGF0YUluZm8uaW5uZXJIVE1MID0gZGF0YTtcbiAgZGF0YVVuaXRDb250YWluZXIuYXBwZW5kKGRhdGFJbmZvKTtcbiAgLy8gVGhlIGltYWdlXG4gIGlmICh1bml0SW1nICE9PSAnJykge1xuICAgIGNvbnN0IHVuaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB1bml0LnN0eWxlLmZpbHRlciA9ICdpbnZlcnQoMSknO1xuICAgIGNvbnN0IHVuaXRJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIHVuaXRJbWFnZS5zcmMgPSB1bml0SW1nO1xuICAgIC8vIEFwcGVuZHNcbiAgICB1bml0LmFwcGVuZCh1bml0SW1hZ2UpO1xuICAgIGRhdGFVbml0Q29udGFpbmVyLmFwcGVuZCh1bml0KTtcbiAgfVxuICBpbmZvQ29udGFpbmVyLmFwcGVuZChkYXRhVW5pdENvbnRhaW5lcik7XG4gIGNvbnRhaW5lci5hcHBlbmQoaW1hZ2UpO1xuICBjb250YWluZXIuYXBwZW5kKGluZm9Db250YWluZXIpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5mdW5jdGlvbiBjcmVhdGVDaXR5SXRlbShjaXR5TmFtZSkge1xuICAvLyBDb250YWluZXIgZm9yIGNpdHkgbmFtZSBhbmQgY2l0eSBpbWFnZVxuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAvLyBDcmVhdGUgaW1hZ2VcbiAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gIGltZy5zcmMgPSBDaXR5O1xuICBpbWcuYWx0ID0gJ0ljb24gcmVwcmVzZW50aW5nIGEgY2l0eSc7XG4gIGltZy5jbGFzc0xpc3QuYWRkKCd0b2RheVdlYXRoZXJJdGVtSW1hZ2UnKTtcbiAgZWwuYXBwZW5kKGltZyk7XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBuYW1lLmlubmVySFRNTCA9IGNpdHlOYW1lO1xuICBlbC5hcHBlbmQobmFtZSk7XG4gIHJldHVybiBlbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGF0TG9uSXRlbShsYXQsIGxvbikge1xuICAvLyBDcmVhdGUgaW1hZ2VcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZWwuY2xhc3NMaXN0LmFkZCgndG9kYXlXZWF0aGVySXRlbUNvbnRhaW5lcicpO1xuICAvLyBDcmVhdGUgaW1hZ2VcbiAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gIGltZy5zcmMgPSBMb2NhdGlvbjtcbiAgaW1nLmFsdCA9ICdJY29uIHJlcHJlc2VudGluZyBhIGRyb3AgbG9jYXRpb24nO1xuICBpbWcuY2xhc3NMaXN0LmFkZCgndG9kYXlXZWF0aGVySXRlbUltYWdlJyk7XG4gIGVsLmFwcGVuZChpbWcpO1xuICBjb25zdCBjb29yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgY29vci5pbm5lckhUTUwgPSBgJHtsYXR9LCAke2xvbn1gO1xuICBlbC5hcHBlbmQoY29vcik7XG4gIHJldHVybiBlbDtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUxvY2FsVGltZSh0aW1lKSB7XG4gIC8vIENvbnRhaW5lciBmb3IgdGltZSBuYW1lIGFuZCB0aW1lIGltYWdlXG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIC8vIENyZWF0ZSBpbWFnZVxuICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgaW1nLnNyYyA9IENsb2NrO1xuICBpbWcuYWx0ID0gJ0ljb24gcmVwcmVzZW50aW5nIGEgY2l0eSc7XG4gIGltZy5jbGFzc0xpc3QuYWRkKCd0b2RheVdlYXRoZXJJdGVtSW1hZ2UnKTtcbiAgZWwuYXBwZW5kKGltZyk7XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBuYW1lLmlubmVySFRNTCA9IHRpbWU7XG4gIGVsLmFwcGVuZChuYW1lKTtcbiAgcmV0dXJuIGVsO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZUxlZnRTZWN0aW9uKGRhdGEpIHtcbiAgLy8gRE9NIGVsZW1lbnQgYW5jaG9yc1xuICBjb25zdCBjaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHknKTtcbiAgY29uc3QgbGF0aXR1ZGVMb25naXR1ZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGF0LWxvbicpO1xuICBjb25zdCBjdXJyZW50VGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXRpbWUnKTtcbiAgLy8gRE9NIGFwcGVuZHNcbiAgY2l0eS5hcHBlbmQoY3JlYXRlQ2l0eUl0ZW0oZGF0YS5jaXR5KSk7XG4gIGxhdGl0dWRlTG9uZ2l0dWRlLmFwcGVuZChjcmVhdGVMYXRMb25JdGVtKGRhdGEubGF0LCBkYXRhLmxvbikpO1xuICBjdXJyZW50VGltZS5hcHBlbmQoY3JlYXRlTG9jYWxUaW1lKGRhdGEuY3VycmVudFRpbWUpKTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVSaWdodFNlY3Rpb24oZGF0YSkge1xuICBjb25zdCB0b2RheUZlZWxzTGlrZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheS1mZWVscy1saWtlJyk7XG4gIGNvbnN0IHRvZGF5V2luZFNwZWVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5LXdpbmQtc3BlZWQnKTtcbiAgY29uc3QgdG9kYXlIdW1pZGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheS1odW1pZGl0eScpO1xuICB0b2RheUZlZWxzTGlrZS5hcHBlbmQoY3JlYXRlV2VhdGhlcldpZGdldChUaGVybW9zdGF0LCAnRmVlbHMgTGlrZScsIGRhdGEuZmVlbHNMaWtlLCBGYWhyZW5oZWl0KSk7XG4gIHRvZGF5V2luZFNwZWVkLmFwcGVuZChjcmVhdGVXZWF0aGVyV2lkZ2V0KFdpbmQsICdXaW5kIFNwZWVkJywgZGF0YS53aW5kU3BlZWQsIFNwZWVkKSk7XG4gIHRvZGF5SHVtaWRpdHkuYXBwZW5kKGNyZWF0ZVdlYXRoZXJXaWRnZXQoSHVtaWRpdHksICdIdW1pZGl0eScsIGRhdGEuaHVtaWRpdHksICcnKSk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlTWlkZGxlU2VjdGlvbihkYXRhKSB7XG4vLyBNaWRkbGUgc2VjdGlvblxuICBjb25zdCB0b2RheUljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXktaWNvbicpO1xuICBjb25zdCB0b2RheVRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXktdGVtcCcpO1xuICBjb25zdCB1bml0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuaXQnKTtcbiAgY29uc3QgdG9kYXlEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheS1kZXNjcmlwdGlvbicpO1xuICB0b2RheUljb24uc3JjID0gdG9kYXlXZWF0aGVySWNvbihkYXRhLmlkKTtcbiAgLy8gU2V0IGN1cnJlbnQgdGVtcGF0dXJlXG4gIHRvZGF5VGVtcC5pbm5lckhUTUwgPSBkYXRhLnRlbXA7XG4gIC8vIERpc3BsYXkgdGVtcCB3aXRoIGN1cnJlbnQgdW5pdFxuICBpZiAoZGF0YS51bml0ID09PSAnaW1wZXJpYWwnKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdW5pdC5zcmMgPSBGYWhyZW5oZWl0O1xuICB9IGVsc2Uge1xuICAgIHVuaXQuc3JjID0gQ2Vsc2l1cztcbiAgfVxuICB0b2RheURlc2NyaXB0aW9uLmlubmVySFRNTCA9IGZpcnN0Q2hhclNlbnRlbmNlVXBwZXIoZGF0YS5kZXNjcmlwdGlvbik7XG59XG5cbmZ1bmN0aW9uIGNsZWFyUHJldmlvdXNEYXRhKCkge1xuICBjb25zdCB0b2RheUljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXktaWNvbicpO1xuICBjb25zdCB0b2RheVRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXktdGVtcCcpO1xuICBjb25zdCB1bml0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuaXQnKTtcbiAgY29uc3QgdG9kYXlEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheS1kZXNjcmlwdGlvbicpO1xuICBjb25zdCB0b2RheUZlZWxzTGlrZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheS1mZWVscy1saWtlJyk7XG4gIGNvbnN0IHRvZGF5V2luZFNwZWVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5LXdpbmQtc3BlZWQnKTtcbiAgY29uc3QgdG9kYXlIdW1pZGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheS1odW1pZGl0eScpO1xuICBjb25zdCBjaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHknKTtcbiAgY29uc3QgbGF0aXR1ZGVMb25naXR1ZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGF0LWxvbicpO1xuICBjb25zdCBjdXJyZW50VGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXRpbWUnKTtcblxuICBjb25zdCBhcnJheSA9IFtdO1xuICBhcnJheS5wdXNoKHRvZGF5SWNvbik7XG4gIGFycmF5LnB1c2godG9kYXlUZW1wKTtcbiAgYXJyYXkucHVzaCh1bml0KTtcbiAgYXJyYXkucHVzaCh0b2RheURlc2NyaXB0aW9uKTtcbiAgYXJyYXkucHVzaCh0b2RheUZlZWxzTGlrZSk7XG4gIGFycmF5LnB1c2godG9kYXlGZWVsc0xpa2UpO1xuICBhcnJheS5wdXNoKHRvZGF5V2luZFNwZWVkKTtcbiAgYXJyYXkucHVzaCh0b2RheUh1bWlkaXR5KTtcbiAgYXJyYXkucHVzaChjaXR5KTtcbiAgYXJyYXkucHVzaChsYXRpdHVkZUxvbmdpdHVkZSk7XG4gIGFycmF5LnB1c2goY3VycmVudFRpbWUpO1xuXG4gIGFycmF5LmZvckVhY2goKGVsKSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgZWwuaW5uZXJIVE1MID0gJyc7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwb3B1bGF0ZVRvZGF5V2VhdGhlckRhdGEoZGF0YSkge1xuICBjbGVhclByZXZpb3VzRGF0YSgpO1xuICBwb3B1bGF0ZUxlZnRTZWN0aW9uKGRhdGEpO1xuICBwb3B1bGF0ZVJpZ2h0U2VjdGlvbihkYXRhKTtcbiAgcG9wdWxhdGVNaWRkbGVTZWN0aW9uKGRhdGEpO1xufVxuIiwiaW1wb3J0IGdldExvY2FsZVRpbWUgZnJvbSAnLi9nZXRMb2NhbFRpbWUnO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cbmNsYXNzIEZvcmVjYXN0IHtcbiAgY29uc3RydWN0b3IoaWQsIHRlbXAsIGRlc2NyaXB0aW9uLCBzZWFMZXZlbCwgdGltZSkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLnRlbXAgPSB0ZW1wO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLnNlYUxldmVsID0gc2VhTGV2ZWw7XG4gICAgdGhpcy50aW1lID0gdGltZTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRUb2RheU1haW5XZWF0aGVyRGF0YShjaXR5TmFtZSwgdW5pdHMpIHtcbiAgLy8gQ3JlYXRlIG9iamVjdCBmb3Igc3RvcmluZyByZWxldmFudCB3ZWF0aGVyIGRhdGFcbiAgY29uc3QgZGF0YSA9IHtcbiAgICBpZDogJycsXG4gICAgbWFpbldlYXRoZXI6ICcnLFxuICAgIGNpdHk6ICcnLFxuICAgIHRlbXA6ICcnLFxuICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICBodW1pZGl0eTogJycsXG4gICAgd2luZFNwZWVkOiAnJyxcbiAgICBmZWVsc0xpa2U6ICcnLFxuICAgIGxhdDogJycsXG4gICAgbG9uOiAnJyxcbiAgICB1bml0OiAnJyxcbiAgICBjdXJyZW50VGltZTogJ3UnLFxuICB9O1xuICAvLyBEZXRlcm1pbmUgdGhlIHVuaXRzIG9mIG1lYXN1cmVcbiAgbGV0IHVuaXQgPSB1bml0cztcbiAgaWYgKHVuaXQgPT09ICcnIHx8IHR5cGVvZiB1bml0ID09PSAndW5kZWZpbmVkJykge1xuICAgIHVuaXQgPSAnaW1wZXJpYWwnO1xuICB9XG4gIC8vIFNhdmUgdGhlIHVuaXRzXG4gIGRhdGEudW5pdCA9IHVuaXQ7XG4gIC8vIE1ha2UgdGhlIEFQSSBjYWxsXG4gIC8vIFRoZSBrZXkgZm9yIHRoZSBXZWF0aGVyIEFQSVxuICBjb25zdCBhcGlLZXkgPSAnZmQ1NTNjOTMwNjNjMzk4Nzk4MmNlMWE1Y2MyY2M3MWInO1xuICAvLyBHZXQgYSByZXNwb25zZSAocmV0dXJucyBhIHByb21pc2UpIGZvciB0aGUgcmVxdWVzdGVkIGRhdGEgZnJvbSBPcGVuV2VhdGhlclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eU5hbWV9JnVuaXRzPSR7dW5pdH0mYXBwaWQ9JHthcGlLZXl9YCwgeyBtb2RlOiAnY29ycycgfSk7XG4gIC8vIEdldCBkYXRhIG9iamVjdCB3ZSdyZSBhcmUgaW50ZXJlc3RlZCBpblxuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgLy8gc2F2ZSBkYXRhXG4gIGRhdGEuaWQgPSB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmlkO1xuICBkYXRhLm1haW5XZWF0aGVyID0gd2VhdGhlckRhdGEud2VhdGhlclswXS5tYWluO1xuICBkYXRhLmNpdHkgPSB3ZWF0aGVyRGF0YS5uYW1lO1xuICBkYXRhLnRlbXAgPSBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLm1haW4udGVtcCk7XG4gIGRhdGEuZGVzY3JpcHRpb24gPSB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICBkYXRhLmh1bWlkaXR5ID0gTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5tYWluLmh1bWlkaXR5KTtcbiAgZGF0YS53aW5kU3BlZWQgPSBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLndpbmQuc3BlZWQpO1xuICBkYXRhLmZlZWxzTGlrZSA9IE1hdGgucm91bmQod2VhdGhlckRhdGEubWFpbi5mZWVsc19saWtlKTtcbiAgZGF0YS5sYXQgPSB3ZWF0aGVyRGF0YS5jb29yZC5sYXQ7XG4gIGRhdGEubG9uID0gd2VhdGhlckRhdGEuY29vcmQubG9uO1xuICAvLyBHZXQgbG9jYWwgdGltZSBvZiBjaXR5XG4gIGNvbnN0IHRpbWUgPSBhd2FpdCBnZXRMb2NhbGVUaW1lKGRhdGEubGF0LCBkYXRhLmxvbik7XG4gIGRhdGEuY3VycmVudFRpbWUgPSB0aW1lO1xuICAvLyBSZXR1cm4gd2VhdGhlciBkYXRhIG9iamVjdFxuICByZXR1cm4gZGF0YTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0VG9kYXlIb3VybHlEYXRhKGNpdHksIHVuaXRzKSB7XG4gIC8vIENyZWF0ZSBvYmplY3QgZm9yIHN0b3JpbmcgcmVsZXZhbnQgd2VhdGhlciBkYXRhXG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgaWQ6ICcnLFxuICAgIG1haW5XZWF0aGVyOiAnJyxcbiAgICBjaXR5OiAnJyxcbiAgICB0ZW1wOiAnJyxcbiAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgaHVtaWRpdHk6ICcnLFxuICAgIHdpbmRTcGVlZDogJycsXG4gICAgZmVlbHNMaWtlOiAnJyxcbiAgICBsYXQ6ICcnLFxuICAgIGxvbjogJycsXG4gICAgdW5pdDogJycsXG4gIH07XG4gIC8vIERldGVybWluZSB0aGUgdW5pdHMgb2YgbWVhc3VyZVxuICBsZXQgdW5pdCA9IHVuaXRzO1xuICBpZiAodW5pdCA9PT0gJycgfHwgdHlwZW9mIHVuaXQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdW5pdCA9ICdpbXBlcmlhbCc7XG4gIH1cbiAgLy8gU2F2ZSB0aGUgdW5pdHNcbiAgZGF0YS51bml0ID0gdW5pdDtcbiAgLy8gVGhlIGtleSBmb3IgdGhlIFdlYXRoZXIgQVBJXG4gIGNvbnN0IGFwaUtleSA9ICc2YWZlZmQwYWNjMDIwMTU3NTkzNDBkODBkYzU2ODZlMic7XG4gIC8vIEdldCBhIHJlc3BvbnNlIChyZXR1cm5zIGEgcHJvbWlzZSkgZm9yIHRoZSByZXF1ZXN0ZWQgZGF0YSBmcm9tIE9wZW5XZWF0aGVyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9xPSR7Y2l0eX0mdW5pdHM9JHt1bml0fSZhcHBpZD0ke2FwaUtleX1gLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgLy8gR2V0IGRhdGEgb2JqZWN0IHdlJ3JlIGFyZSBpbnRlcmVzdGVkIGluXG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIHJldHVybiB3ZWF0aGVyRGF0YTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcGFyc2VGb3JlY2FzdERhdGEoZGF0YSkge1xuICBjb25zdCBhcnJheSA9IFtdO1xuICAvLyAxMiBiZWNhdXNlIG9ubHkgbmVlZCAxMiAzIGhvdXIgaW5jcmVtZW50c1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGx1c3BsdXNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgY29uc3QgaWNvbklkID0gZGF0YS5saXN0W2ldLndlYXRoZXJbMF0uaWQ7XG4gICAgY29uc3QgeyB0ZW1wIH0gPSBkYXRhLmxpc3RbaV0ubWFpbjtcbiAgICBjb25zdCB7IGRlc2NyaXB0aW9uIH0gPSBkYXRhLmxpc3RbaV0ud2VhdGhlclswXTtcbiAgICBjb25zdCBzZWFMZXZlbCA9IGRhdGEubGlzdFtpXS5tYWluLnNlYV9sZXZlbDtcbiAgICBjb25zdCB0aW1lID0gZGF0YS5saXN0W2ldLmR0X3R4dDsgLy8gdGltZVxuICAgIGFycmF5LnB1c2gobmV3IEZvcmVjYXN0KGljb25JZCwgdGVtcCwgZGVzY3JpcHRpb24sIHNlYUxldmVsLCB0aW1lKSk7XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5leHBvcnQge1xuICBnZXRUb2RheU1haW5XZWF0aGVyRGF0YSxcbiAgZ2V0VG9kYXlIb3VybHlEYXRhLFxuICBwYXJzZUZvcmVjYXN0RGF0YSxcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=