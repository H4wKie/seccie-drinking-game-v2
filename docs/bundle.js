/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/loadgame.scss":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/loadgame.scss ***!
  \***************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.switch {
  padding-block: 20px;
  padding-inline: 20px;
  margin-block: 5px;
  width: 500px;
  text-align: left;
  outline: 2px solid white;
  cursor: pointer;
}

.not-sel {
  background-color: transparent;
  color: white;
}

.sel {
  background-color: white;
  color: #E53228;
}

.start-btn {
  all: unset;
  padding-block: 10px;
  padding-inline: 20px;
  margin-block-start: 20px;
  font-weight: 900;
  font-size: 1.125em;
  border: 2px solid white;
  border-radius: 40px;
  cursor: pointer;
  transition: 200ms ease;
}

.start-btn:hover {
  background-color: white;
  color: #E53228;
  transition: 200ms ease;
}`, "",{"version":3,"sources":["webpack://./src/styles/loadgame.scss"],"names":[],"mappings":"AAAA;EACE,mBAAA;EACA,oBAAA;EACA,iBAAA;EACA,YAAA;EACA,gBAAA;EACA,wBAAA;EACA,eAAA;AACF;;AAEA;EACE,6BAAA;EACA,YAAA;AACF;;AAEA;EACE,uBAAA;EACA,cAAA;AACF;;AAEA;EACE,UAAA;EAEA,mBAAA;EACA,oBAAA;EACA,wBAAA;EACA,gBAAA;EACA,kBAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,sBAAA;AAAF;;AAGA;EACE,uBAAA;EACA,cAAA;EACA,sBAAA;AAAF","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  height: 100dvh;
  width: 100%;
  font-family: "Avenir Next", sans-serif;
  color: white;
  background-color: #E53228;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.background-text {
  z-index: -1;
  user-select: none;
  position: absolute;
  width: 100vw;
  height: 100dvh;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  justify-content: center;
  overflow: hidden;
  color: rgb(195, 42, 34);
}

.background-text > h6:nth-child(odd) {
  align-self: center;
  justify-self: center;
}

.background-text > h6:nth-child(even) {
  align-self: start;
  justify-self: center;
}

.header {
  width: 100%;
  height: 35px;
  color: #E53228;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header h3 {
  font-weight: 900;
}

.main {
  height: calc(100dvh - 35px);
  width: 100%;
  border-bottom-right-radius: 200px;
  text-align: center;
  padding-inline: 20px;
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.main h1 {
  padding-bottom: 15px;
}`, "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"AAAA;EACE,sBAAA;EACA,SAAA;EACA,UAAA;AACF;;AAEA;EACE,cAAA;EACA,WAAA;EAEA,sCAAA;EACA,YAAA;EACA,yBAAA;EAEA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;AADF;;AAIA;EACE,WAAA;EACA,iBAAA;EACA,kBAAA;EACA,YAAA;EACA,cAAA;EACA,aAAA;EACA,qCAAA;EACA,kCAAA;EACA,uBAAA;EACA,gBAAA;EACA,uBAAA;AADF;;AAIA;EACE,kBAAA;EACA,oBAAA;AADF;;AAIA;EACE,iBAAA;EACA,oBAAA;AADF;;AAIA;EACE,WAAA;EACA,YAAA;EACA,cAAA;EACA,uBAAA;EAEA,aAAA;EACA,uBAAA;EACA,mBAAA;AAFF;AAIE;EACE,gBAAA;AAFJ;;AAMA;EACE,2BAAA;EACA,WAAA;EACA,iCAAA;EACA,kBAAA;EACA,oBAAA;EACA,iBAAA;EAEA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AAJF;AAME;EACE,oBAAA;AAJJ","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/responsive.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/responsive.scss ***!
  \*****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@media only screen and (max-width: 600px) {
  .switch {
    width: 100%;
  }
  .main h1 {
    font-size: 1.75em;
  }
  .main h2 {
    font-size: 1.25em;
  }
}
@media only screen and (max-width: 330px) {
  .switch h2 {
    font-size: 1.25em;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/responsive.scss"],"names":[],"mappings":"AAAA;EACE;IACE,WAAA;EACF;EAEE;IACE,iBAAA;EAAJ;EAEE;IACE,iBAAA;EAAJ;AACF;AAIA;EAEI;IACE,iBAAA;EAHJ;AACF","sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/loadgame.scss":
/*!**********************************!*\
  !*** ./src/styles/loadgame.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_loadgame_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./loadgame.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/loadgame.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_loadgame_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_loadgame_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_loadgame_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_loadgame_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/responsive.scss":
/*!************************************!*\
  !*** ./src/styles/responsive.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_responsive_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./responsive.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/responsive.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_responsive_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_responsive_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_responsive_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_responsive_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/scripts/back/prompts.js":
/*!*************************************!*\
  !*** ./src/scripts/back/prompts.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   promptDrinkIf: () => (/* binding */ promptDrinkIf),
/* harmony export */   promptMostLikely: () => (/* binding */ promptMostLikely),
/* harmony export */   promptTask: () => (/* binding */ promptTask)
/* harmony export */ });
const promptOne = [
    [`Who's most likely to`, `embarrass themselves in front of a crush?`],
    [`Who's most likely to`, `end up on a realtiy TV show?`],
    [`Who's most likely to`, `forget someone's birthday?`],
    [`Who's most likely to`, `get a tattoo on a whim?`],
    [`Who's most likely to`, `fall asleep in the middle of a conversation?`],
    [`Drink if you've`, `sent a text to the wrong person`],
    [`Drink if you've`, `been kicked out of a bar or club`],
    [`Drink if you've`, `drunk dailed someone`],
    [`Drink if you've`, `had a crush on someone in this room`],
    [`Drink if you've`, `kissed someone in this room`],
    [`Drink if you've`, `sent a risque text message`],
    [`Drink if you've`, `had a one-night stand`],
    [`Drink if you've`, `lied about your relationship status`],
    [`Drink if you've`, `hooked up in a public place`]
]; //bell's prompts

const promptTwo = [
    [`Who's most likely to`, `text their ex "I miss you" after one drink?`],
    [`Who's most likely to`, `laugh at a joke they don't understand?`],
    [`Who's most likely to`, `send a screenshot back to the person they were gossiping about?`],
    [`Who's most likely to`, `flirt their way out of a parking ticket?`],
    [`Who's most likely to`, `fake an accent to impress someone?`],
    [`Who's most likely to`, `show up to a house party an hour early by mistake?`],
    [`Who's most likely to`, `forget where they parked and have a full-on meltdown?`],
    [`Drink if you've`, `pretended to know something just to sound smart`],
    [`Drink if you've`, `been caught stalking someones profile`],
    [`Drink if you've`, `had a dream about someone in this room and didn't tell them`]
]; //isa's prompts

const promptThree = [
    [`Who's most likely to`, `be single the longest`],
    [`Who's most likely to`, `be the best kisser`],
    [`Who's most likely to`, `fall in love with someone they don't know`],
    [`Drink if you've`, `trown up in a taxi`],
    [`Drink if you've`, `send a nude in the last two weeks `],
    [`Drink if you've`, `been fined`],
    [`Drink if you've`, `been fired`],
    [`Drink if you've`, `kissed a colleague`],
    [`Drink if you've`, `had a completely free date`],
    [`Drink if you've`, `spent the most money on ordering food in the last month`],
    [`Drink if you've`, `been caught lying about your age or have caugt someone lying about their age`],
    [`Drink if you've`, `formerly played a stupid instrument, especially the flute`],
    [`Drink if you've`, `got your driverslicense`],
    [`Task`, `take a bodyshot from the person to your right`],
    [`Task`, `search a word of your choice in the WhatsApp of the person to your right`],
    [`Task`, `give everybody a shot, one of the shots is water. guess who has the shot of water. if you guessed wrong, take a drink`],
    [`Task`, `mix the drink of the person to your left and right and drink it`],
    [`Task`, `everybody passes their shirt/top/blouse to the person to their right`]
]; //lous' prompts

const promptFour = [
    [`Who's most likely to`, `find their true love on a dating app`],
    [`Who's most likely to`, `to become a celebrity (for what?)`],
    [`Who's most likely to`, `be the fastest at building IKEA furniture`],
    [`Who's most likely to`, `not survive if they had to switch to a flip phone`],
    [`Who's most likely to`, `go home first because they are mentally a grandma/grandpa`],
    [`Who's most likely to`, `be the best host`],
    [`Drink if you've`, `sent a text to the wrong person (tell the story)`],
    [`Drink if you've`, `went on a date because you felt bad`],
    [`Drink if you've`, `ghosted someone`],
    [`Drink if you've`, `had to escape a bad date`]
]; //gesa's prompts

const promptFive = [
    [`Who's most likely to`, `start a family first`],
    [`Who's most likely to`, `be the mom/dad of the group`],
    [`Who's most likely to`, `get lost on a trip`],
    [`Who's most likely to`, `lose their student card`],
    [`Who's most likely to`, `need therapy after studying`],
    [`Who's most likely to`, `camp out for concert tickets`],
    [`Who's most likely to`, `have the messiest room`],
    [`Drink if you've`, `got dying plants`],
    [`Drink if you've`, `had a curfew living at home`],
    [`Drink if you've`, `saved someone with a nickname in your phone`],
    [`Drink if you're`, `still on your first drink`],
    [`Drink if you've`, `stayed up all night reading`],
    [`Drink if you've`, `had a memorable encounter with a fortune teller/psychic`]
]; //ilvy's prompts

const promptSeven = [
    [`Drink if you've`, `gone on a date just for a free meal`],
    [`Drink if you've`, `said "I love you" by accident`],
    [`Drink if you've`, `forgotten someone's name after a date`],
    [`Drink if you've`, `written a love letter`],
    [`Task`, `tell your worst date story`],
    [`Task`, `for the three questions hold hands with the person to your left`],
    [`Task`, `make a shot for the person to your right`],
    [`Task`, `name your current crush or take 4 sips`],
    [`Task`, `name your celebrity crush`],
    [`Task`, `switch seats with the person opposite of you`]
]

const promptSix = [
    [`Drink if you've`, `gone skinny dipping`],
    [`Drink if you're`, `single`],
    [`Drink if you've`, `met up with someone from a dating app`],
    [`Drink if you've`, `been dumped over the phone`],
    [`Drink if you've`, `had a blind date`],
    [`Drink if you`, `believe in love at first sight`],
    [`Drink if you're`, `wearing black underwear`],
    [`Drink if you've`, `successfully used a pick-up line`],
    [`Drink if you've`, `recieved a handwritten love letter`],
    [`Drink if you've`, `had romantic feelings for someone of the same sex`],
    [`Drink if you've`, `hooked up with more than one person in the same night`],
    [`Who's most likely to`, `be the biggest romantic`],
    [`Who's most likely to`, `read erotica`],
    [`Who's most likely to`, `get married first`],
    [`Who's most likely to`, `have attachment issues`]
]

const promptMostLikely = [
    [`Who's most likely to`, `be the biggest romantic`],
    [`Who's most likely to`, `read erotica`],
    [`Who's most likely to`, `get married first`],
    [`Who's most likely to`, `have attachment issues`],
    [`Who's most likely to`, `start a family first`],
    [`Who's most likely to`, `be the mom/dad of the group`],
    [`Who's most likely to`, `get lost on a trip`],
    [`Who's most likely to`, `lose their student card`],
    [`Who's most likely to`, `need therapy after studying`],
    [`Who's most likely to`, `camp out for concert tickets`],
    [`Who's most likely to`, `have the messiest room`],
    [`Who's most likely to`, `find their true love on a dating app`],
    [`Who's most likely to`, `to become a celebrity (for what?)`],
    [`Who's most likely to`, `be the fastest at building IKEA furniture`],
    [`Who's most likely to`, `not survive if they had to switch to a flip phone`],
    [`Who's most likely to`, `go home first because they are mentally a grandma/grandpa`],
    [`Who's most likely to`, `be the best host`],
    [`Drink if you've`, `sent a text to the wrong person (tell the story)`],
    [`Who's most likely to`, `text their ex "I miss you" after one drink?`],
    [`Who's most likely to`, `laugh at a joke they don't understand?`],
    [`Who's most likely to`, `send a screenshot back to the person they were gossiping about?`],
    [`Who's most likely to`, `flirt their way out of a parking ticket?`],
    [`Who's most likely to`, `fake an accent to impress someone?`],
    [`Who's most likely to`, `show up to a house party an hour early by mistake?`],
    [`Who's most likely to`, `forget where they parked and have a full-on meltdown?`],
    [`Who's most likely to`, `embarrass themselves in front of a crush?`],
    [`Who's most likely to`, `end up on a realtiy TV show?`],
    [`Who's most likely to`, `forget someone's birthday?`],
    [`Who's most likely to`, `get a tattoo on a whim?`],
    [`Who's most likely to`, `fall asleep in the middle of a conversation?`],
    [`Who's most likely to`, `eat somethinig of the ground?`],
    [`Who's most likely to`, `have a foot fetish?`],
    [`Who's most likely to`, `lock themselves out the house?`],
    [`Who's most likely to`, `embarrass themselves on a first date?`],
    [`Who's most likely to`, `pull an irish-goodbye?`],
    [`Who's most likely to`, `date two people at once?`],
    [`Who's most likely to`, `hook up with their boss?`],
    [`Who's most likely to`, `build a sex dungeon?`],
    [`Who's most likely to`, `make the first move?`],
    [`Who's most likely to`, `sleep with a colleague?`],
    [`Who's most likely to`, `cheat on their parnet?`],
    [`Who's most likely to`, `be the loadest during sex?`],
    [`Who's most likely to`, `end up in jail?`],
    [`Who's most likely to`, `win in a sprinting race?`],
    [`Who's most likely to`, `marry someone for the money?`],
    [`Who's most likely to`, `get married within a month of meeting someone?`],
    [`Who's most likely to`, `flirt with someone to get free drinks?`],
    [`Who's most likely to`, `dance on a table or podium?`],
    [`Who's most likely to`, `go on a sidequest on a night out?`],
    [`Who's most likely to`, ``]



    // [`Who's most likely to`, ``],
]

const promptDrinkIf = [
    [`Drink if you've`, `gone skinny dipping`],
    [`Drink if you're`, `single`],
    [`Drink if you've`, `met up with someone from a dating app`],
    [`Drink if you've`, `been dumped over the phone`],
    [`Drink if you've`, `had a blind date`],
    [`Drink if you`, `believe in love at first sight`],
    [`Drink if you're`, `wearing black underwear`],
    [`Drink if you've`, `successfully used a pick-up line`],
    [`Drink if you've`, `recieved a handwritten love letter`],
    [`Drink if you've`, `had romantic feelings for someone of the same sex`],
    [`Drink if you've`, `hooked up with more than one person in the same night`],
    [`Drink if you've`, `gone on a date just for a free meal`],
    [`Drink if you've`, `said "I love you" by accident`],
    [`Drink if you've`, `forgotten someone's name after a date`],
    [`Drink if you've`, `written a love letter`],
    [`Drink if you've`, `got dying plants`],
    [`Drink if you've`, `had a curfew living at home`],
    [`Drink if you've`, `saved someone with a nickname in your phone`],
    [`Drink if you're`, `still on your first drink`],
    [`Drink if you've`, `stayed up all night reading`],
    [`Drink if you've`, `had a memorable encounter with a fortune teller/psychic`],
    [`Drink if you've`, `sent a text to the wrong person (tell the story)`],
    [`Drink if you've`, `went on a date because you felt bad`],
    [`Drink if you've`, `ghosted someone`],
    [`Drink if you've`, `had to escape a bad date`],
    [`Drink if you've`, `trown up in a taxi`],
    [`Drink if you've`, `send a nude in the last two weeks `],
    [`Drink if you've`, `been fined`],
    [`Drink if you've`, `been fired`],
    [`Drink if you've`, `kissed a colleague`],
    [`Drink if you've`, `had a completely free date`],
    [`Drink if you've`, `spent the most money on ordering food in the last month`],
    [`Drink if you've`, `been caught lying about your age or have caugt someone lying about their age`],
    [`Drink if you've`, `formerly played a stupid instrument, especially the flute`],
    [`Drink if you've`, `got your driverslicense`],
    [`Drink if you've`, `sent a text to the wrong person`],
    [`Drink if you've`, `been kicked out of a bar or club`],
    [`Drink if you've`, `drunk dailed someone`],
    [`Drink if you've`, `had a crush on someone in this room`],
    [`Drink if you've`, `kissed someone in this room`],
    [`Drink if you've`, `sent a risque text message`],
    [`Drink if you've`, `had a one-night stand`],
    [`Drink if you've`, `lied about your relationship status`],
    [`Drink if you've`, `hooked up in a public place`],
    [`Drink if you've`, `most recently kissed someone`],
    [`Drink if you've`, `blond hair`],
    [`Drink if you've`, `brown hair`],
    [`Drink if you've`, `red hair`],
    [`Drink if you've`, `never gotten flowers`],
    [`Drink if you've`, `gone back to an ex`],
    [`Drink if you've`, `intentionally forgotten something as a reason to come back`],
    [`Drink if you've`, `lied about your age or hight`],
    [`Drink if you've`, `flirted with someone while knowing they were taken`],
    [`Drink if you've`, `been denied a taxi`],
    [`Drink if you've`, `driven drunk`],
    [`Drink if you've`, `drunk an inappropriate amount at a company event`],
    [`Drink if you've`, `gotten drunk alone`],
    [`Drink if you've`, `drunk in the morning`],
    [`Drink if you've`, `the worst alcohol tolerance here`],
    [`Drink if you've`, `sent a text you later regretted`],
    [`Drink if you've`, `failed a driving test`]

    // [`Drink if you've`, ``],
]

const promptTask = [
    [`Task`, `take a bodyshot from the person to your right`],
    [`Task`, `search a word of your choice in the WhatsApp of the person to your right`],
    [`Task`, `give everybody a shot, one of the shots is water. guess who has the shot of water. if you guessed wrong, take a drink`],
    [`Task`, `mix the drink of the person to your left and right and drink it`],
    [`Task`, `everybody passes their shirt/top/blouse to the person to their right`],
    [`Task`, `make a drink for the person to your right`],
    [`Task`, `name your current crush or take 4 sips`],
    [`Task`, `name your celebrity crush`],
    [`Task`, `switch seats with the person opposite of you`],
    [`Task`, `go on a date with <a href="https://www.instagram.com/wyncko_roozeboom">@Wyncko</a>`],
    [`Task`, `chug a beer if Gesa is in the room`],
    [`Task`, `everybody who is on their phone has to chug a beer (this phone not included)`],
    [`Task`, `start a waterfall`],
    [`Task`, `hold a beer in your right hand, you cannot talk or let go until it's empty`],
    [`Task`, `microwave your drink`],
    [`Task`, `the group can decide a dare for you (including a punishment for not completing the dare)`],
    [`Task`, `roll a dice, drink that number of sips`],
    [`Task`, `compliment the person to your right`]

    // [`Task`, ``],
]



/***/ }),

/***/ "./src/scripts/choose-prompts.js":
/*!***************************************!*\
  !*** ./src/scripts/choose-prompts.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   choosePrompt: () => (/* binding */ choosePrompt),
/* harmony export */   gameArr: () => (/* binding */ gameArr)
/* harmony export */ });
/* harmony import */ var _scripts_back_prompts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/back/prompts */ "./src/scripts/back/prompts.js");


let gameArr = []

function choosePrompt(arr) {
  gameArr = [];
  const allArr = [_scripts_back_prompts__WEBPACK_IMPORTED_MODULE_0__.promptMostLikely, _scripts_back_prompts__WEBPACK_IMPORTED_MODULE_0__.promptDrinkIf, _scripts_back_prompts__WEBPACK_IMPORTED_MODULE_0__.promptTask];

  if(arr.includes(true)){
    arr.forEach((element, index) => {
      element ? gameArr = gameArr.concat(allArr[index]) : '';
    });
    return gameArr;
  }else {
    return false;
  }
}



/***/ }),

/***/ "./src/scripts/display-prompt.js":
/*!***************************************!*\
  !*** ./src/scripts/display-prompt.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayPrompt: () => (/* binding */ displayPrompt)
/* harmony export */ });
function displayPrompt(prompt) {
  const mainElem = document.querySelector('.main');

  mainElem.innerHTML = `
    <h1>${prompt[0]}</h1>
    <h2>${prompt[1]}</h2>
  `;
}



/***/ }),

/***/ "./src/scripts/eventlistener.js":
/*!**************************************!*\
  !*** ./src/scripts/eventlistener.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addBtnEventListener: () => (/* binding */ addBtnEventListener),
/* harmony export */   addMainEventListner: () => (/* binding */ addMainEventListner),
/* harmony export */   addSwtichEventListener: () => (/* binding */ addSwtichEventListener),
/* harmony export */   removeMainEventListener: () => (/* binding */ removeMainEventListener)
/* harmony export */ });
/* harmony import */ var _choose_prompts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./choose-prompts */ "./src/scripts/choose-prompts.js");
/* harmony import */ var _load_prompt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-prompt */ "./src/scripts/load-prompt.js");
/* harmony import */ var _select_game_elem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select-game-elem */ "./src/scripts/select-game-elem.js");





const mainEvent = ()=> {
  (0,_load_prompt__WEBPACK_IMPORTED_MODULE_1__.loadPrompt)(_choose_prompts__WEBPACK_IMPORTED_MODULE_0__.gameArr);
}

function addMainEventListner() {
  const mainElem = document.querySelector('.main');
  mainElem.addEventListener('click', mainEvent);
}

function removeMainEventListener() {
  const mainElem = document.querySelector('.main');
  mainElem.removeEventListener('click', mainEvent);
}

const switchEvent = (event)=> {
  const elemClasslist = event.currentTarget.getAttribute('class');

  if(elemClasslist.includes('not-sel')) {
    event.currentTarget.setAttribute('class' ,elemClasslist.replace('not-sel', 'sel'));
  }else {
    event.currentTarget.setAttribute('class' ,elemClasslist.replace('sel', 'not-sel'));
  }
}

function addSwtichEventListener() {
  const switchELem = document.querySelectorAll('.switch');

  switchELem.forEach(elem => {
    elem.addEventListener('click', switchEvent);
  })
}

const btnEvent = () => {
  const gameTrue = (0,_select_game_elem__WEBPACK_IMPORTED_MODULE_2__.selGameElem)();

  if((0,_choose_prompts__WEBPACK_IMPORTED_MODULE_0__.choosePrompt)(gameTrue)) {
    addMainEventListner();
  }else {
  }
}

function addBtnEventListener() {
  const btnElem = document.querySelector('.start-btn');

  btnElem.addEventListener('click', btnEvent);
}



/***/ }),

/***/ "./src/scripts/gen-nr.js":
/*!*******************************!*\
  !*** ./src/scripts/gen-nr.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   genNr: () => (/* binding */ genNr)
/* harmony export */ });
function genNr(nr) {
  return Math.floor(Math.random() * nr);
}



/***/ }),

/***/ "./src/scripts/load-background.js":
/*!****************************************!*\
  !*** ./src/scripts/load-background.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadBackground: () => (/* binding */ loadBackground)
/* harmony export */ });
function loadBackground() {
  const backgroundElem = document.querySelector('.background-text');

  for(let i = 0; i < 64; i++) {
    const elem = document.createElement('h6');
    let nr = Math.round(Math.random());

    if(nr === 0) {
      elem.innerHTML = `VIP`;
    }else {
      elem.innerHTML = `SECCIE`;
    }

    backgroundElem.appendChild(elem);
  }

}



/***/ }),

/***/ "./src/scripts/load-game.js":
/*!**********************************!*\
  !*** ./src/scripts/load-game.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadGame: () => (/* binding */ loadGame)
/* harmony export */ });
/* harmony import */ var _eventlistener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventlistener */ "./src/scripts/eventlistener.js");


function loadGame() {
  const mainElem = document.querySelector('.main');

  mainElem.innerHTML = `
    <div class="switch not-sel most-likely"><h2>who's most likely to</h2></div>
    <div class="switch not-sel drink-if"><h2>drink if</h2></div>
    <div class="switch not-sel tasks"><h2>tasks</h2></div>
    <button class="start-btn">start game</button>
  `;

  (0,_eventlistener__WEBPACK_IMPORTED_MODULE_0__.addSwtichEventListener)();
  (0,_eventlistener__WEBPACK_IMPORTED_MODULE_0__.addBtnEventListener)();
}



/***/ }),

/***/ "./src/scripts/load-header.js":
/*!************************************!*\
  !*** ./src/scripts/load-header.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadHeader: () => (/* binding */ loadHeader)
/* harmony export */ });
function loadHeader() {
  const headerElem = document.querySelector('.header');

  headerElem.innerHTML = `
    <h3>drink met mate(n)</h3>
  `;
}



/***/ }),

/***/ "./src/scripts/load-prompt.js":
/*!************************************!*\
  !*** ./src/scripts/load-prompt.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadPrompt: () => (/* binding */ loadPrompt)
/* harmony export */ });
/* harmony import */ var _display_prompt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display-prompt */ "./src/scripts/display-prompt.js");
/* harmony import */ var _gen_nr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gen-nr */ "./src/scripts/gen-nr.js");
/* harmony import */ var _load_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./load-game */ "./src/scripts/load-game.js");
/* harmony import */ var _eventlistener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventlistener */ "./src/scripts/eventlistener.js");






let pastPrompts = []

function loadPrompt(arr) {
  if(pastPrompts.length < arr.length) {
      let nr;
  do{
    nr = (0,_gen_nr__WEBPACK_IMPORTED_MODULE_1__.genNr)(arr.length);
  }while(pastPrompts.includes(nr));
  
  pastPrompts.push(nr);

  (0,_display_prompt__WEBPACK_IMPORTED_MODULE_0__.displayPrompt)(arr[nr]);
  }else {
    pastPrompts = [];
    (0,_eventlistener__WEBPACK_IMPORTED_MODULE_3__.removeMainEventListener)();
    (0,_load_game__WEBPACK_IMPORTED_MODULE_2__.loadGame)();
  }
}



/***/ }),

/***/ "./src/scripts/select-game-elem.js":
/*!*****************************************!*\
  !*** ./src/scripts/select-game-elem.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selGameElem: () => (/* binding */ selGameElem)
/* harmony export */ });
function selGameElem() {
  const gameElem = document.querySelectorAll('.switch');
  let gameCompArr = []

  gameElem.forEach(elem => {
    elem.classList.contains('not-sel') ? gameCompArr.push(false) : gameCompArr.push(true);
  });

  return gameCompArr;
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _styles_loadgame_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/loadgame.scss */ "./src/styles/loadgame.scss");
/* harmony import */ var _styles_responsive_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/responsive.scss */ "./src/styles/responsive.scss");
/* harmony import */ var _scripts_load_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/load-game */ "./src/scripts/load-game.js");
/* harmony import */ var _scripts_load_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/load-header */ "./src/scripts/load-header.js");
/* harmony import */ var _scripts_load_background__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/load-background */ "./src/scripts/load-background.js");








(0,_scripts_load_header__WEBPACK_IMPORTED_MODULE_4__.loadHeader)();
(0,_scripts_load_game__WEBPACK_IMPORTED_MODULE_3__.loadGame)();
(0,_scripts_load_background__WEBPACK_IMPORTED_MODULE_5__.loadBackground)();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map