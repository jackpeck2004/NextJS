module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Components/GitHubProjects/GitHubProjectItem.js":
/*!********************************************************!*\
  !*** ./Components/GitHubProjects/GitHubProjectItem.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\giaco\\Documents\\GitHub\\NextJS\\Components\\GitHubProjects\\GitHubProjectItem.js";



var GitHubProjectItem = function GitHubProjectItem(_ref) {
  var item = _ref.item;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1857146047" + " " + 'ghProject',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1857146047" + " " + 'projectHeader',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, item.name, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-1857146047",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "|"), " ", item.language), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1857146047" + " " + 'description',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1857146047",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, item.description)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1857146047",
    css: ".ghProject{background:transparent;height:100%;min-height:100%;color:black;font-family:sans-serif;width:150%;text-align:center;border:1px solid black;margin-bottom:10vh;padding-bottom:10vh;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;border-radius:12px;}strong{font-size:40px;font-weight:lighter;}.ghProject:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}.description{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.projectHeader{text-align:center;font-size:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZ2lhY29cXERvY3VtZW50c1xcR2l0SHViXFxOZXh0SlNcXENvbXBvbmVudHNcXEdpdEh1YlByb2plY3RzXFxHaXRIdWJQcm9qZWN0SXRlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVZ0IsQUFHNEMsQUFlUixBQUtNLEFBSVIsQUFNSyxlQWRFLEdBZUwsS0E5QkgsVUErQmhCLEVBOUJvQixBQWVwQixnQkFkZ0IsWUFDVyxXQXFCSixDQUp2QixXQWhCZSxXQUNPLGtCQUNLLHVCQUNKLG1CQUNDLFVBaUJHLFVBaEJRLHNFQUNaLG1CQUN2QixBQWVBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcZ2lhY29cXERvY3VtZW50c1xcR2l0SHViXFxOZXh0SlNcXENvbXBvbmVudHNcXEdpdEh1YlByb2plY3RzXFxHaXRIdWJQcm9qZWN0SXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEdpdEh1YlByb2plY3RJdGVtID0gKHsgaXRlbSB9KSA9PiB7XHJcbiAgICByZXR1cm4gKCBcclxuICAgIDxkaXYgY2xhc3NOYW1lID0gJ2doUHJvamVjdCcgPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT0ncHJvamVjdEhlYWRlcic+e2l0ZW0ubmFtZX0gPHN0cm9uZz58PC9zdHJvbmc+IHtpdGVtLmxhbmd1YWdlfTwvcD4gXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uJz5cclxuICAgICAgICA8cD57aXRlbS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWwgPiB7XHJcbiAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICAuZ2hQcm9qZWN0e1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUwJTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTB2aDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTB2aDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc3Ryb25ne1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZ2hQcm9qZWN0OmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmRlc2NyaXB0aW9ue1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAucHJvamVjdEhlYWRlcntcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIGBcclxuICAgICAgfSA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdpdEh1YlByb2plY3RJdGVtOyJdfQ== */\n/*@ sourceURL=C:\\Users\\giaco\\Documents\\GitHub\\NextJS\\Components\\GitHubProjects\\GitHubProjectItem.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (GitHubProjectItem);

/***/ }),

/***/ "./Components/GitHubProjects/Project.js":
/*!**********************************************!*\
  !*** ./Components/GitHubProjects/Project.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GitHubProjectItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GitHubProjectItem */ "./Components/GitHubProjects/GitHubProjectItem.js");
var _jsxFileName = "C:\\Users\\giaco\\Documents\\GitHub\\NextJS\\Components\\GitHubProjects\\Project.js";




var GitHubProject = function GitHubProject(props) {
  var items = props.news.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_GitHubProjectItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: item.id,
      item: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    });
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3070189300" + " " + 'div',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3070189300" + " " + 'project',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, props.children, items), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3070189300",
    css: ".div{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:15%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZ2lhY29cXERvY3VtZW50c1xcR2l0SHViXFxOZXh0SlNcXENvbXBvbmVudHNcXEdpdEh1YlByb2plY3RzXFxQcm9qZWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCWSxBQUc2QiwwRUFDQSxZQUNNLDZGQUNQLFlBQ2YiLCJmaWxlIjoiQzpcXFVzZXJzXFxnaWFjb1xcRG9jdW1lbnRzXFxHaXRIdWJcXE5leHRKU1xcQ29tcG9uZW50c1xcR2l0SHViUHJvamVjdHNcXFByb2plY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBHaXRIdWJQcm9qZWN0SXRlbSBmcm9tICcuL0dpdEh1YlByb2plY3RJdGVtJ1xyXG5cclxuY29uc3QgR2l0SHViUHJvamVjdCA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IGl0ZW1zID0gcHJvcHMubmV3cy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICByZXR1cm4gKCBcclxuICAgICAgICA8R2l0SHViUHJvamVjdEl0ZW0ga2V5PXtpdGVtLmlkfSBpdGVtPXtpdGVtfS8+XHJcbiAgICAgICAgKVxyXG4gICAgfSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rpdic+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2plY3QnPiBcclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufSBcclxuICAgICAgICAgICAge2l0ZW1zfSBcclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWwgPiB7XHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgLmRpdntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1JTtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgYFxyXG4gICAgICAgIH0gPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdpdEh1YlByb2plY3Q7Il19 */\n/*@ sourceURL=C:\\Users\\giaco\\Documents\\GitHub\\NextJS\\Components\\GitHubProjects\\Project.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (GitHubProject);

/***/ }),

/***/ "./Components/GitHubProjects/projectDB.json":
/*!**************************************************!*\
  !*** ./Components/GitHubProjects/projectDB.json ***!
  \**************************************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = [{"name":"Snake JS","description":"Snake is an 8bit game that I refusrbished and coded in JavaScript to understand how the language works","img":"","language":"JavaScript"},{"name":"Test"},{"name":"Test 2","description":"uisdgzvciuysdjgzuficjsgz"}];

/***/ }),

/***/ "./Components/Header.js":
/*!******************************!*\
  !*** ./Components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/Logo */ "./Components/Logo.js");
var _jsxFileName = "C:\\Users\\giaco\\Documents\\GitHub\\NextJS\\Components\\Header.js";





var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1234836504" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-1234836504",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-1234836504",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1234836504" + " " + "left-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    className: "left-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1234836504",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Home"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1234836504" + " " + "left-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/api",
    className: "left-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1234836504",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "api"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1234836504",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/software",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1234836504",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "software"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1234836504",
    css: ".container.jsx-1234836504{height:10vh;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:sans-serif;background-color:transparent;text-transform:uppercase;position:fixed;background-color:rgba(255,255,255,0.3);}ul.jsx-1234836504{padding:0;margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}li.jsx-1234836504{list-style:none;}a.jsx-1234836504{-webkit-text-decoration:none;text-decoration:none;color:#3d3d3d;font-size:22px;display:block;padding:10px 45px;position:relative;}a.jsx-1234836504:before{content:\"\";position:absolute;top:0;left:0;width:100%;height:2px;background-color:#3d3d3d;-webkit-transform:scaleX(0);-ms-transform:scaleX(0);transform:scaleX(0);-webkit-transition:all 0.5s;transition:all 0.5s;-webkit-transform-origin:left;-ms-transform-origin:left;transform-origin:left;}a.jsx-1234836504:hover.jsx-1234836504:before,a.jsx-1234836504:hover.jsx-1234836504:after{-webkit-transform:scalex(1);-ms-transform:scalex(1);transform:scalex(1);}a.jsx-1234836504:after{content:\"\";position:absolute;bottom:0;left:0;width:100%;height:2px;background-color:#3d3d3d;-webkit-transform:scaleX(0);-ms-transform:scaleX(0);transform:scaleX(0);-webkit-transition:all 0.5s;transition:all 0.5s;-webkit-transform-origin:right;-ms-transform-origin:right;transform-origin:right;}.Logo.jsx-1234836504{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZ2lhY29cXERvY3VtZW50c1xcR2l0SHViXFxOZXh0SlNcXENvbXBvbmVudHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QmdCLEFBR3FCLEFBWUYsQUFPTSxBQUlLLEFBU1YsQUFjUyxBQUlULEFBYWdCLFVBbERsQixDQW9CUyxBQWtCQSxDQWxEUixJQW1CWixHQU5lLElBWkEsTUFnQ1AsQUFrQkcsTUFqQkYsR0FrQkEsSUFqQkksR0FrQkEsS0E5QkcsR0FhSCxHQWtCQSxRQTlCSSxBQWFVLEdBa0JBLEtBVDNCLE9BckJnQixVQWFNLEdBa0JBLENBMUNMLEFBWUcsSUF4Qk8sUUE2RDNCLE1BcENvQixrQkFDcEIscUJBYkEsV0F3QnNCLEdBa0JBLDhCQXRERCxlQXFDRyxHQWtCQywyRUF0REEsQUFxQ3pCLE1Ba0JBLGlCQXREK0IsNkJBQ0oseUJBQ1gsZUFDeUIsdUNBQ3pDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcZ2lhY29cXERvY3VtZW50c1xcR2l0SHViXFxOZXh0SlNcXENvbXBvbmVudHNcXEhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQgTG9nbyBmcm9tICcuLi9Db21wb25lbnRzL0xvZ28nXHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgIDxuYXY+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGVmdC1jb250ZW50XCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImxlZnQtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8YT5Ib21lPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxlZnQtY29udGVudFwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9hcGlcIiBjbGFzc05hbWU9XCJsZWZ0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGE+YXBpPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9zb2Z0d2FyZVwiPlxyXG4gICAgICAgICAgICA8YT5zb2Z0d2FyZTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9uYXY+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIGhlaWdodDogMTB2aDtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjMpO1xyXG4gICAgICB9XHJcbiAgICAgIHVsIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGkge1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGEge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjogIzNkM2QzZDtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCA0NXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgYTpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzZDNkM2Q7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcclxuICAgICAgfVxyXG5cclxuICAgICAgYTpob3ZlcjpiZWZvcmUsXHJcbiAgICAgIGE6aG92ZXI6YWZ0ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGV4KDEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2QzZDNkO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuTG9nbyB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il19 */\n/*@ sourceURL=C:\\Users\\giaco\\Documents\\GitHub\\NextJS\\Components\\Header.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./Components/Layout.js":
/*!******************************!*\
  !*** ./Components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./Components/Header.js");
var _jsxFileName = "C:\\Users\\giaco\\Documents\\GitHub\\NextJS\\Components\\Layout.js";



var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./Components/Logo.js":
/*!****************************!*\
  !*** ./Components/Logo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\giaco\\Documents\\GitHub\\NextJS\\Components\\Logo.js";




var Logo = function Logo() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1427947701" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-1427947701",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-1427947701",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1427947701",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1427947701",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Giacomo Pasin"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1427947701",
    css: ".container.jsx-1427947701{height:10vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:sans-serif;}ul.jsx-1427947701{padding:0;margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}li.jsx-1427947701{list-style:none;}a.jsx-1427947701{-webkit-text-decoration:none;text-decoration:none;color:#3d3d3d;font-size:22px;display:block;padding:10px 45px;position:relative;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZ2lhY29cXERvY3VtZW50c1xcR2l0SHViXFxOZXh0SlNcXENvbXBvbmVudHNcXExvZ28uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYWdCLEFBR3FCLEFBT0YsQUFPTSxBQUlLLFVBVlosRUFQSSxJQWNmLEdBTmUsK0JBVUMsY0FDQyxlQUNELE9BbkJXLE9BUVYsQUFZRyxrQkFDQSxrQkFDcEIscUJBYkEsaUNBUnFCLDZGQUNJLHVCQUN6QiIsImZpbGUiOiJDOlxcVXNlcnNcXGdpYWNvXFxEb2N1bWVudHNcXEdpdEh1YlxcTmV4dEpTXFxDb21wb25lbnRzXFxMb2dvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IExvZ28gPSAoKSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgIDxuYXY+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8YT5HaWFjb21vIFBhc2luPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L25hdj5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMHZoO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICB9XHJcbiAgICAgIHVsIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGkge1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGEge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjogIzNkM2QzZDtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCA0NXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9nbzsiXX0= */\n/*@ sourceURL=C:\\Users\\giaco\\Documents\\GitHub\\NextJS\\Components\\Logo.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./pages/software.js":
/*!***************************!*\
  !*** ./pages/software.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Layout */ "./Components/Layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_GitHubProjects_projectDB_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/GitHubProjects/projectDB.json */ "./Components/GitHubProjects/projectDB.json");
var _Components_GitHubProjects_projectDB_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../Components/GitHubProjects/projectDB.json */ "./Components/GitHubProjects/projectDB.json", 1);
/* harmony import */ var _Components_GitHubProjects_Project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/GitHubProjects/Project */ "./Components/GitHubProjects/Project.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\giaco\\Documents\\GitHub\\NextJS\\pages\\software.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var Software =
/*#__PURE__*/
function (_Component) {
  _inherits(Software, _Component);

  function Software() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Software);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Software)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      projects: _Components_GitHubProjects_projectDB_json__WEBPACK_IMPORTED_MODULE_3__
    });

    return _this;
  }

  _createClass(Software, [{
    key: "render",
    value: function render() {}
  }, {
    key: "render",
    value: function render() {
      var scrollToElement = function scrollToElement(element) {
        react_scroll__WEBPACK_IMPORTED_MODULE_5__["scroller"].scrollTo(element, {
          duration: 1000,
          delay: 10,
          offset: 0,
          smooth: true
        });
      };

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-624428544",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-624428544",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
        className: "jsx-624428544",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-624428544" + " " + 'backgroundImg',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-624428544" + " " + 'pannel1',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        className: "jsx-624428544" + " " + 'header',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, " Software ")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-624428544" + " " + 'pannel1__readMore',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        onClick: function onClick() {
          return scrollToElement('github');
        },
        className: "jsx-624428544" + " " + "readMore",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, " Read More")))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_5__["Element"], {
        name: "github",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-624428544" + " " + 'pannel2',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-624428544" + " " + '',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_GitHubProjects_Project__WEBPACK_IMPORTED_MODULE_4__["default"], {
        news: this.state.projects,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      })))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "624428544",
        css: ".backgroundImg{background-image:url(https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60);background-size:cover;}.pannel1{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:85vh;margin:0;}.pannel1__readMore{text-transform:uppercase;font-size:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:15vh;padding-top:0;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:whitesmoke;-webkit-letter-spacing:20px;-moz-letter-spacing:20px;-ms-letter-spacing:20px;letter-spacing:20px;}.pannel2{width:100%;}.header{font-size:80px;font-family:arial;-webkit-letter-spacing:20px;-moz-letter-spacing:20px;-ms-letter-spacing:20px;letter-spacing:20px;text-transform:uppercase;color:white;}.pannel1__readMore{text-transform:uppercase;font-size:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:15vh;padding-top:0;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:whitesmoke;-webkit-letter-spacing:20px;-moz-letter-spacing:20px;-ms-letter-spacing:20px;letter-spacing:20px;}.readMore{-webkit-text-decoration:none;text-decoration:none;color:white;font-weight:lighter;font-family:arial;}.readMore:hover{cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZ2lhY29cXERvY3VtZW50c1xcR2l0SHViXFxOZXh0SlNcXHBhZ2VzXFxzb2Z0d2FyZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RFEsQUFJcUssQUFJL0ksQUFRWSxBQVlkLEFBR0ksQUFRVSxBQVdKLEFBT04sV0E1QmpCLElBR29CLEFBMEJwQixVQXpDaUIsQUF1QkEsUUFQSyxPQWZQLEFBdUJBLFVBVUQsWUFDUSxZQTNDRyxRQTRDTCxrQkFDcEIsY0FuQ2MsQUF1QkEsWUF0QkUsQUF1QkEsSUFUVyxVQWJOLEFBdUJBLGVBVFAsQ0E5QlUsV0ErQnhCLE1BMUJxQixLQUpyQix1REFnQnlCLEFBdUJBLGlDQWxDWCxZQUNILFNBQ1gsNkNBVW1CLEFBdUJBLGlCQXRCRyxBQXVCQSxpR0F0QnRCLEFBdUJBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcZ2lhY29cXERvY3VtZW50c1xcR2l0SHViXFxOZXh0SlNcXHBhZ2VzXFxzb2Z0d2FyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vQ29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IERBVEFCQVNFIGZyb20gJy4uL0NvbXBvbmVudHMvR2l0SHViUHJvamVjdHMvcHJvamVjdERCLmpzb24nXHJcbmltcG9ydCBHaXRIdWJQcm9qZWN0IGZyb20gJy4uL0NvbXBvbmVudHMvR2l0SHViUHJvamVjdHMvUHJvamVjdCdcclxuaW1wb3J0IHsgc2Nyb2xsZXIgfSBmcm9tICdyZWFjdC1zY3JvbGwnO1xyXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY2xhc3MgU29mdHdhcmUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICBzdGF0ZSA9IHtcclxuICAgIHByb2plY3RzOiBEQVRBQkFTRVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCl7XHJcblxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qgc2Nyb2xsVG9FbGVtZW50ID0gKGVsZW1lbnQpID0+IHtcclxuICAgICAgc2Nyb2xsZXIuc2Nyb2xsVG8oZWxlbWVudCx7XHJcbiAgICAgICAgZHVyYXRpb246IDEwMDAsXHJcbiAgICAgICAgZGVsYXk6IDEwLFxyXG4gICAgICAgIG9mZnNldDogMCxcclxuICAgICAgICBzbW9vdGg6IHRydWVcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JhY2tncm91bmRJbWcnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFubmVsMSc+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdoZWFkZXInPiBTb2Z0d2FyZSA8L3A+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Bhbm5lbDFfX3JlYWRNb3JlJz5cclxuICAgICAgICAgICA8TGluaz5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJyZWFkTW9yZVwiIG9uQ2xpY2s9eygpPT5zY3JvbGxUb0VsZW1lbnQoJ2dpdGh1YicpfT4gUmVhZCBNb3JlPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8RWxlbWVudCBuYW1lPSdnaXRodWInPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Bhbm5lbDInPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9Jyc+XHJcbiAgICAgICAgICAgIDxHaXRIdWJQcm9qZWN0IG5ld3M9e3RoaXMuc3RhdGUucHJvamVjdHN9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9FbGVtZW50PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbCA+IHtcclxuICAgICAgICBgXHJcblxyXG4gICAgICAuYmFja2dyb3VuZEltZ3tcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MDQ2Mzk3MjU1OTAtMzRkMDk4NDM4OGJkP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz05MDAmcT02MCk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgfVxyXG4gICAgICAucGFubmVsMSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogODV2aDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wYW5uZWwxX19yZWFkTW9yZSB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBoZWlnaHQ6IDE1dmg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMjBweDtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIC5wYW5uZWwyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgICAuaGVhZGVyIHtcclxuICAgICAgICBmb250LXNpemU6IDgwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGFyaWFsO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAyMHB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucGFubmVsMV9fcmVhZE1vcmUge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNXZoO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLnJlYWRNb3JlIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnJlYWRNb3JlOmhvdmVye1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gICAgICB9IDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU29mdHdhcmU7Il19 */\n/*@ sourceURL=C:\\Users\\giaco\\Documents\\GitHub\\NextJS\\pages\\software.js */",
        __self: this
      }));
    }
  }]);

  return Software;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Software);

/***/ }),

/***/ 5:
/*!*********************************!*\
  !*** multi ./pages/software.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/software.js */"./pages/software.js");


/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-scroll":
/*!*******************************!*\
  !*** external "react-scroll" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=software.js.map