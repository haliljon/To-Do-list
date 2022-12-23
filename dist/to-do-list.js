/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background-color: #f6f6f6;\\n  font-family: sans-serif;\\n}\\n\\n#to-do-list {\\n  margin: 10%;\\n}\\n\\n.to-do-list {\\n  list-style: none;\\n}\\n\\n.to-do-list li {\\n  font-size: 35px;\\n  line-height: 70px;\\n  background-color: white;\\n  border: solid 3px #f0f0f0;\\n  box-shadow: 0 8px 10px gray;\\n  padding: 0 15px;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n\\n#input {\\n  font-size: 35px;\\n  line-height: 70px;\\n  border: none;\\n  font-style: italic;\\n  width: 90%;\\n}\\n\\n.clear {\\n  color: #adadad;\\n  background-color: #f6f6f6 !important;\\n  justify-content: center !important;\\n  width: 100%;\\n  font-size: 35px;\\n  line-height: 70px;\\n  border: none;\\n}\\n\\n.to-do-list li:last-child {\\n  background-color: #f6f6f6;\\n}\\n\\n.list-icon {\\n  color: #adadad;\\n  grid-area: d;\\n}\\n\\n.list-item {\\n  display: grid !important;\\n  grid-template-rows: 1fr;\\n  grid-template-columns: auto 1fr 3.5%;\\n  grid-template-areas: 'a b c d';\\n  justify-content: left;\\n  gap: 10px;\\n}\\n\\n.input-btn,\\n.edit-btn,\\n.delete-btn {\\n  background-color: white;\\n  border: none;\\n  color: #adadad;\\n  cursor: pointer;\\n  font-size: 35px;\\n}\\n\\n.square {\\n  transform: scale(1.75);\\n}\\n\\n.list-item p {\\n  margin: 0;\\n}\\n\\n.delete-btn {\\n  display: none;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules.js */ \"./src/modules.js\");\n/* harmony import */ var _modules_add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/add */ \"./src/modules/add.js\");\n/* harmony import */ var _modules_add__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_add__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_delete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/delete */ \"./src/modules/delete.js\");\n/* harmony import */ var _modules_delete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_delete__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _modules_edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/edit */ \"./src/modules/edit.js\");\n/* harmony import */ var _modules_edit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_edit__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _modules_clearAll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/clearAll */ \"./src/modules/clearAll.js\");\n/* harmony import */ var _modules_clearAll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_clearAll__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nconst information = JSON.parse(localStorage.getItem('lists')) || [];\nconst liList = document.createElement('li');\nliList.className = 'list-item';\nconst ulList = document.querySelector('.to-do-list');\nconst clearBtn = document.querySelector('.clear');\nconst clearParent = clearBtn.parentElement;\nconst input = document.querySelector('#input');\nconst inputBtn = document.querySelector('.input-btn');\n\nclass ToDoList {\n  editBtn = document.querySelectorAll('.edit-btn');\n  displayList(information) {\n    for (let i = 0; i < information.length; i += 1) {\n      const liList = document.createElement('li');\n      liList.className = 'list-item';\n\n      liList.innerHTML = `<input type=\"checkbox\" class=\"square\"/><p>${information[i].description}</p><button type=\"button\"\n      name=\"edit\" class=\"edit-btn\"><ion-icon class=\"list-icon\" name=\"ellipsis-vertical\"> </ion-icon></button><button type=\"button\" name=\"delete\" class=\"delete-btn\"><ion-icon class=\"list-icon\" name=\"trash-outline\"></ion-icon></button>`;\n\n      ulList.insertBefore(liList, clearParent);\n      const pElement = document.querySelectorAll('.to-do-list p');\n      const checkBox = document.querySelectorAll('.square');\n      if (information[i].completed) {\n        pElement[i].style.textDecoration = 'line-through';\n        checkBox[i].setAttribute('checked', true);\n      }\n    }\n  }\n\n  addList() {\n    const newList = {\n      description: input.value,\n      completed: false,\n    };\n    _modules_add__WEBPACK_IMPORTED_MODULE_2___default()(information, newList);\n    localStorage.setItem('lists', JSON.stringify(information));\n    const liList = document.createElement('li');\n    liList.className = 'list-item';\n    liList.innerHTML = `<input type=\"checkbox\" class=\"square\"/><p>${\n      information[information.length - 1].description\n    }</p><button type=\"button\"\n    name=\"edit\" class=\"edit-btn\"><ion-icon class=\"list-icon\" name=\"ellipsis-vertical\"> </ion-icon></button><button type=\"button\" name=\"delete\" class=\"delete-btn\"><ion-icon class=\"list-icon\" name=\"trash-outline\"></ion-icon></button>`;\n    ulList.insertBefore(liList, clearParent);\n  }\n  editList(edit) {\n    const chosenItem = edit.previousSibling;\n    chosenItem.setAttribute('contentEditable', true);\n    chosenItem.focus();\n    return chosenItem;\n  }\n}\n\nconst listCollection = new ToDoList();\nlistCollection.displayList(information);\n\ninputBtn.addEventListener('click', (e) => {\n  if (input.value !== '') {\n    listCollection.addList();\n    input.value = '';\n  } else {\n    e.preventDefault();\n    alert('Please fill ot the field');\n  }\n  const editBtn = editBtnFun();\n  const deleteBtn = document.querySelectorAll('.delete-btn');\n  editBtn.forEach((btn, index) => {\n    btn.addEventListener('click', () => {\n      listCollection.editList(btn);\n\n      editBtn[index].style.display = 'none';\n      deleteBtn[index].style.display = 'block';\n      const chosenItem = btn.previousSibling;\n      const data = JSON.parse(localStorage.getItem('lists'));\n      const listItem = document.querySelectorAll('.list-item');\n      listItem[index].addEventListener('keypress', (e) => {\n        if (e.key === 'Enter') {\n          chosenItem.setAttribute('contentEditable', false);\n          const newText = chosenItem.textContent;\n          _modules_edit__WEBPACK_IMPORTED_MODULE_4___default()(data, index, newText);\n          localStorage.setItem('lists', JSON.stringify(data));\n        }\n      });\n    });\n  });\n  deleteBtn.forEach((element, index) => {\n    element.addEventListener('click', () => {\n      ulList.removeChild(element.parentElement);\n      _modules_delete__WEBPACK_IMPORTED_MODULE_3___default()(index, information);\n      localStorage.setItem('lists', JSON.stringify(information));\n    });\n  });\n  const checkBox = document.querySelectorAll('.square');\n  checkBox.forEach((element, index) => {\n    element.addEventListener('click', () => {\n      if (element.checked) {\n        console.log('1');\n        (0,_modules_js__WEBPACK_IMPORTED_MODULE_1__.boxCheck)(index, true);\n        const lineThrough = element.nextSibling;\n        lineThrough.style.textDecoration = 'line-through';\n      } else {\n        console.log('2');\n        const lineThrough = element.nextSibling;\n        lineThrough.style.textDecoration = 'none';\n        (0,_modules_js__WEBPACK_IMPORTED_MODULE_1__.boxCheck)(index, false);\n      }\n    });\n  });\n});\nfunction editBtnFun() {\n  return document.querySelectorAll('.edit-btn');\n}\nconst editBtn = editBtnFun();\n\nconst deleteBtn = document.querySelectorAll('.delete-btn');\neditBtn.forEach((btn, index) => {\n  btn.addEventListener('click', () => {\n    listCollection.editList(btn);\n\n    editBtn[index].style.display = 'none';\n    deleteBtn[index].style.display = 'block';\n    const chosenItem = btn.previousSibling;\n    const data = JSON.parse(localStorage.getItem('lists'));\n    const listItem = document.querySelectorAll('.list-item');\n    listItem[index].addEventListener('keypress', function (e) {\n      if (e.key === 'Enter') {\n        chosenItem.setAttribute('contentEditable', false);\n        const newText = chosenItem.textContent;\n        data[index] = { description: newText, completed: false };\n        localStorage.setItem('lists', JSON.stringify(data));\n      }\n    });\n  });\n});\n\ndeleteBtn.forEach((element, index) => {\n  element.addEventListener('click', () => {\n    ulList.removeChild(element.parentElement);\n    _modules_delete__WEBPACK_IMPORTED_MODULE_3___default()(index, information);\n    localStorage.setItem('lists', JSON.stringify(information));\n  });\n});\n\n// completed\n\nconst checkBox = document.querySelectorAll('.square');\n\ncheckBox.forEach((element, index) => {\n  element.addEventListener('click', () => {\n    if (element.checked) {\n      console.log('1');\n      (0,_modules_js__WEBPACK_IMPORTED_MODULE_1__.boxCheck)(index, true);\n      const lineThrough = element.nextSibling;\n      lineThrough.style.textDecoration = 'line-through';\n    } else {\n      console.log('2');\n      const lineThrough = element.nextSibling;\n      lineThrough.style.textDecoration = 'none';\n      (0,_modules_js__WEBPACK_IMPORTED_MODULE_1__.boxCheck)(index, false);\n    }\n  });\n});\nclearBtn.addEventListener('click', (i) => {\n  const infos = JSON.parse(localStorage.getItem('lists')) || [];\n  const notCompleted = _modules_clearAll__WEBPACK_IMPORTED_MODULE_5___default()(infos);\n  localStorage.setItem('lists', JSON.stringify(notCompleted));\n  document.querySelectorAll('.list-item').forEach((e) => e.remove());\n  listCollection.displayList(notCompleted);\n  checkBox.forEach((element, index) => {\n    element.addEventListener('click', () => {\n      if (element.checked) {\n        console.log('1');\n        (0,_modules_js__WEBPACK_IMPORTED_MODULE_1__.boxCheck)(index, true);\n        const lineThrough = element.nextSibling;\n        lineThrough.style.textDecoration = 'line-through';\n      } else {\n        console.log('2');\n        const lineThrough = element.nextSibling;\n        lineThrough.style.textDecoration = 'none';\n        (0,_modules_js__WEBPACK_IMPORTED_MODULE_1__.boxCheck)(index, false);\n      }\n    });\n  });\n});\n\nconst reload = document.querySelector('#reload');\nreload.addEventListener('click', () => {\n  location.reload();\n});\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules.js":
/*!************************!*\
  !*** ./src/modules.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"boxCheck\": () => (/* binding */ boxCheck)\n/* harmony export */ });\n/* harmony import */ var _modules_updateStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/updateStatus */ \"./src/modules/updateStatus.js\");\n/* harmony import */ var _modules_updateStatus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_updateStatus__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction boxCheck(index, isTrue) {\n  const information = JSON.parse(localStorage.getItem('lists')) || [];\n  console.log(information);\n  _modules_updateStatus__WEBPACK_IMPORTED_MODULE_0___default()(index, isTrue, information);\n  localStorage.setItem('lists', JSON.stringify(information));\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/modules.js?");

/***/ }),

/***/ "./src/modules/add.js":
/*!****************************!*\
  !*** ./src/modules/add.js ***!
  \****************************/
/***/ ((module) => {

eval("function add(listArr, addedObj) {\n  listArr.push(addedObj);\n  return listArr;\n}\nmodule.exports = add;\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/add.js?");

/***/ }),

/***/ "./src/modules/clearAll.js":
/*!*********************************!*\
  !*** ./src/modules/clearAll.js ***!
  \*********************************/
/***/ ((module) => {

eval("function clearAll(listArr) {\n  const notCompletedList = listArr.filter(function (listItem) {\n    if (listItem.completed === false) {\n      return true;\n    }\n  });\n  return notCompletedList;\n}\n\nmodule.exports = clearAll;\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/clearAll.js?");

/***/ }),

/***/ "./src/modules/delete.js":
/*!*******************************!*\
  !*** ./src/modules/delete.js ***!
  \*******************************/
/***/ ((module) => {

eval("function deleteFunc(index, listArr) {\n  listArr.splice(index, 1);\n  return listArr;\n}\nmodule.exports = deleteFunc;\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/delete.js?");

/***/ }),

/***/ "./src/modules/edit.js":
/*!*****************************!*\
  !*** ./src/modules/edit.js ***!
  \*****************************/
/***/ ((module) => {

eval("function edit(listArr, index, change) {\n  listArr[index] = { description: change, completed: false };\n  return listArr;\n}\n\nmodule.exports = edit;\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/edit.js?");

/***/ }),

/***/ "./src/modules/updateStatus.js":
/*!*************************************!*\
  !*** ./src/modules/updateStatus.js ***!
  \*************************************/
/***/ ((module) => {

eval("function updateCompletedStatus(index, isTrue, listArr) {\n  listArr[index].completed = isTrue;\n  return listArr;\n}\n\nmodule.exports = updateCompletedStatus;\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/updateStatus.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;