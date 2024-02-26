(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["lib"] = factory();
	else
		root["lib"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ a),
/* harmony export */   "b": () => (/* binding */ b),
/* harmony export */   "createHead": () => (/* binding */ createHead),
/* harmony export */   "removeHead": () => (/* binding */ removeHead)
/* harmony export */ });
/* harmony import */ var _article_md__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


function createHead() {
  const h2 = document.createElement('h2');
  h2.innerHTML = _article_md__WEBPACK_IMPORTED_MODULE_0__["default"];
  h2.onclick = () => h2.innerHTML = 'clicked';
  window.root.innerHTML = h2;
}

function removeHead() {
  const h2 = document.createElement('h2');
  h2.innerHTML = _article_md__WEBPACK_IMPORTED_MODULE_0__["default"];
  h2.onclick = () => h2.innerHTML = 'clicked';
  window.root.innerHTML = h2;
}

const a = {
  a: 1,
  b: 2
}

const b = {
  a: 1,
  b: 2
}

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("# webpack 的 loader 是什么\n\nloader 可以处理任何资源模块的加载和转换，是 webpack 模块化的核心功能\n\n\n");

/***/ })
/******/ 	]);
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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mount": () => (/* binding */ mount),
/* harmony export */   "unmount": () => (/* binding */ unmount)
/* harmony export */ });
/* harmony import */ var _head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


const mount = () => {
  (0,_head__WEBPACK_IMPORTED_MODULE_0__.createHead)();
}

const unmount = () => {
  ;(0,_head__WEBPACK_IMPORTED_MODULE_0__.removeHead)();
}
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});