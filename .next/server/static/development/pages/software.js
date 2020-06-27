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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/jackpeck/Documents/dev/GiacomoPasinWebsite/GiacomoPasinWebsite/NextJS/Components/GitHubProjects/GitHubProjectItem.js";




var GitHubProjectItem = function GitHubProjectItem(_ref) {
  var item = _ref.item;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: item.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3385059655" + " " + 'ghProject',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3385059655" + " " + 'projectHeader',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, item.name, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-3385059655",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "|"), " ", item.main_language), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3385059655" + " " + 'description',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3385059655",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, item.description)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3385059655" + " " + 'skills',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3385059655",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Develped Languages: ", item.main_language, ", ", item.other_languages)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3385059655",
    css: ".ghProject{background:transparent;color:black;font-family:sans-serif;width:200%;text-align:center;border:1px solid black;margin-bottom:10vh;padding-bottom:10vh;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;border-radius:12px;}.link{-webkit-text-decoration:none;text-decoration:none;}strong{font-size:40px;font-weight:lighter;}.ghProject:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}.description{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.projectHeader{text-align:center;font-size:30px;}@media only screen and (min-width:1350px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNrcGVjay9Eb2N1bWVudHMvZGV2L0dpYWNvbW9QYXNpbldlYnNpdGUvR2lhY29tb1Bhc2luV2Vic2l0ZS9OZXh0SlMvQ29tcG9uZW50cy9HaXRIdWJQcm9qZWN0cy9HaXRIdWJQcm9qZWN0SXRlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQmdCLEFBRzRDLEFBYUYsQUFLTixBQUtNLEFBSVIsQUFNSyxlQWRFLEdBZUwsS0FqQ0gsVUFrQ2hCLEVBakMyQixBQWtCM0IsZUFOQSxRQVhlLFdBQ08sS0F3QkMsQ0FKdkIsWUFuQjJCLHVCQUNKLG1CQUNDLG9CQUNXLGtCQXFCUixvREFwQkosbUJBQ3ZCLDRCQW9CQSIsImZpbGUiOiIvVXNlcnMvamFja3BlY2svRG9jdW1lbnRzL2Rldi9HaWFjb21vUGFzaW5XZWJzaXRlL0dpYWNvbW9QYXNpbldlYnNpdGUvTmV4dEpTL0NvbXBvbmVudHMvR2l0SHViUHJvamVjdHMvR2l0SHViUHJvamVjdEl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IEdpdEh1YlByb2plY3RJdGVtID0gKHsgaXRlbSB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExpbmsgaHJlZj17aXRlbS5saW5rfT5cbiAgICAgICAgPGEgY2xhc3NOYW1lPSdsaW5rJz5cbiAgICA8ZGl2IGNsYXNzTmFtZSA9ICdnaFByb2plY3QnID5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdwcm9qZWN0SGVhZGVyJz57aXRlbS5uYW1lfSA8c3Ryb25nPnw8L3N0cm9uZz4ge2l0ZW0ubWFpbl9sYW5ndWFnZX08L3A+IFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGVzY3JpcHRpb24nPlxuICAgICAgICAgICAgICAgIDxwPntpdGVtLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NraWxscyc+XG4gICAgICAgICAgICAgICAgPHA+RGV2ZWxwZWQgTGFuZ3VhZ2VzOiB7aXRlbS5tYWluX2xhbmd1YWdlfSwge2l0ZW0ub3RoZXJfbGFuZ3VhZ2VzfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbCA+IHtcbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgLmdoUHJvamVjdHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDAlO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHZoO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTB2aDtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubGlua3tcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgc3Ryb25ne1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5naFByb2plY3Q6aG92ZXJ7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLmRlc2NyaXB0aW9ue1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAucHJvamVjdEhlYWRlcntcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzUwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgLnBhbm5lbDJ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgYFxuICAgICAgfSA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICAgIDwvYT5cbiAgICA8L0xpbms+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBHaXRIdWJQcm9qZWN0SXRlbTsiXX0= */\n/*@ sourceURL=/Users/jackpeck/Documents/dev/GiacomoPasinWebsite/GiacomoPasinWebsite/NextJS/Components/GitHubProjects/GitHubProjectItem.js */",
    __self: this
  }))));
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
var _jsxFileName = "/Users/jackpeck/Documents/dev/GiacomoPasinWebsite/GiacomoPasinWebsite/NextJS/Components/GitHubProjects/Project.js";




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
    css: ".div{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:15%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNrcGVjay9Eb2N1bWVudHMvZGV2L0dpYWNvbW9QYXNpbldlYnNpdGUvR2lhY29tb1Bhc2luV2Vic2l0ZS9OZXh0SlMvQ29tcG9uZW50cy9HaXRIdWJQcm9qZWN0cy9Qcm9qZWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCWSxBQUc2QiwwRUFDQSxZQUNNLDZGQUNQLFlBQ2YiLCJmaWxlIjoiL1VzZXJzL2phY2twZWNrL0RvY3VtZW50cy9kZXYvR2lhY29tb1Bhc2luV2Vic2l0ZS9HaWFjb21vUGFzaW5XZWJzaXRlL05leHRKUy9Db21wb25lbnRzL0dpdEh1YlByb2plY3RzL1Byb2plY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgR2l0SHViUHJvamVjdEl0ZW0gZnJvbSAnLi9HaXRIdWJQcm9qZWN0SXRlbSdcblxuY29uc3QgR2l0SHViUHJvamVjdCA9IChwcm9wcykgPT4ge1xuXG4gICAgY29uc3QgaXRlbXMgPSBwcm9wcy5uZXdzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICByZXR1cm4gKCBcbiAgICAgICAgPEdpdEh1YlByb2plY3RJdGVtIGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0vPlxuICAgICAgICApXG4gICAgfSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2plY3QnPiBcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn0gXG4gICAgICAgICAgICB7aXRlbXN9IFxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbCA+IHtcbiAgICAgICAgICAgIGBcbiAgICAgICAgICAgIC5kaXZ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1JTtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIGBcbiAgICAgICAgfSA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2l0SHViUHJvamVjdDsiXX0= */\n/*@ sourceURL=/Users/jackpeck/Documents/dev/GiacomoPasinWebsite/GiacomoPasinWebsite/NextJS/Components/GitHubProjects/Project.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (GitHubProject);

/***/ }),

/***/ "./Components/GitHubProjects/projectDB.json":
/*!**************************************************!*\
  !*** ./Components/GitHubProjects/projectDB.json ***!
  \**************************************************/
/*! exports provided: 0, 1, 2, 3, default */
/***/ (function(module) {

module.exports = [{"name":"Snake JS","description":"Snake is an 8bit game that I refusrbished and coded in JavaScript to understand how the language works","img":"","main_language":"JavaScript","other_languages":"HTML5","link":"http://snakejs.giacomopasin.surge.sh"},{"name":"Hype Steal","description":"Hype Steal is the ultimate shopping method where to purchase products of extreme high-quality brands.","main_language":"ReactJS","other_languages":"JSON, JavaScript, HTML5, CSS3","link":"http://hypesteal.surge.sh"},{"name":"Restsaurant Manager","description":"A console way to manage all the sells of the restaurant - work in progress","main_language":"Python","other_languages":"Trying to switch to Java"},{"name":"Test","description":"none","main_language":"C++","other_languages":"","link":"http://google.com"}];

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
var _jsxFileName = "/Users/jackpeck/Documents/dev/GiacomoPasinWebsite/GiacomoPasinWebsite/NextJS/Components/Header.js";





var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3036104210" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-3036104210",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-3036104210",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3036104210" + " " + "left-content",
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
    className: "jsx-3036104210",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Home"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3036104210" + " " + "left-content",
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
    className: "jsx-3036104210",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "api"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3036104210",
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
    className: "jsx-3036104210",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "software"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3036104210",
    css: ".container.jsx-3036104210{height:10vh;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:sans-serif;background-color:transparent;text-transform:uppercase;position:fixed;background-color:rgba(255,255,255,0.01);}ul.jsx-3036104210{padding:0;margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}li.jsx-3036104210{list-style:none;}a.jsx-3036104210{-webkit-text-decoration:none;text-decoration:none;color:black;font-size:22px;display:block;padding:10px 45px;position:relative;}a.jsx-3036104210:before{content:\"\";position:absolute;top:0;left:0;width:100%;height:2px;background-color:#3d3d3d;-webkit-transform:scaleX(0);-ms-transform:scaleX(0);transform:scaleX(0);-webkit-transition:all 0.5s;transition:all 0.5s;-webkit-transform-origin:left;-ms-transform-origin:left;transform-origin:left;}a.jsx-3036104210:hover.jsx-3036104210:before,a.jsx-3036104210:hover.jsx-3036104210:after{-webkit-transform:scalex(1);-ms-transform:scalex(1);transform:scalex(1);}a.jsx-3036104210:after{content:\"\";position:absolute;bottom:0;left:0;width:100%;height:2px;background-color:#3d3d3d;-webkit-transform:scaleX(0);-ms-transform:scaleX(0);transform:scaleX(0);-webkit-transition:all 0.5s;transition:all 0.5s;-webkit-transform-origin:right;-ms-transform-origin:right;transform-origin:right;}.Logo.jsx-3036104210{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNrcGVjay9Eb2N1bWVudHMvZGV2L0dpYWNvbW9QYXNpbldlYnNpdGUvR2lhY29tb1Bhc2luV2Vic2l0ZS9OZXh0SlMvQ29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJnQixBQUdxQixBQVlGLEFBT00sQUFJSyxBQVNWLEFBY1MsQUFJVCxBQWFnQixVQWxEbEIsQ0FvQlMsQUFrQkEsQ0FsRFIsSUFtQlosR0FOZSxJQVpBLE1BZ0NQLEFBa0JHLE1BakJGLEdBa0JBLElBakJJLEdBa0JBLEtBOUJDLEdBYUQsR0FrQkEsTUE5QkksRUFhVSxHQWtCQSxLQVQzQixLQXJCZ0IsWUFhTSxFQVpGLENBOEJFLENBMUNMLElBWlUsUUE2RDNCLElBcENvQixrQkFDcEIsdUJBYkEsV0F3QnNCLEdBa0JBLDhCQXRERCxlQXFDRyxHQWtCQywyRUF0REEsQUFxQ3pCLE1Ba0JBLGlCQXREK0IsNkJBQ0oseUJBQ1gsZUFDMEIsd0NBQzFDIiwiZmlsZSI6Ii9Vc2Vycy9qYWNrcGVjay9Eb2N1bWVudHMvZGV2L0dpYWNvbW9QYXNpbldlYnNpdGUvR2lhY29tb1Bhc2luV2Vic2l0ZS9OZXh0SlMvQ29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQgTG9nbyBmcm9tICcuLi9Db21wb25lbnRzL0xvZ28nXG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICA8bmF2PlxuICAgICAgPHVsPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGVmdC1jb250ZW50XCI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJsZWZ0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxhPkhvbWU8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGVmdC1jb250ZW50XCI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9hcGlcIiBjbGFzc05hbWU9XCJsZWZ0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxhPmFwaTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3NvZnR3YXJlXCI+XG4gICAgICAgICAgICA8YT5zb2Z0d2FyZTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvbmF2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5jb250YWluZXIge1xuICAgICAgICBoZWlnaHQ6IDEwdmg7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4wMSk7XG4gICAgICB9XG4gICAgICB1bCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgfVxuXG4gICAgICBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZzogMTBweCA0NXB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIGE6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNkM2QzZDtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xuICAgICAgfVxuXG4gICAgICBhOmhvdmVyOmJlZm9yZSxcbiAgICAgIGE6aG92ZXI6YWZ0ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxleCgxKTtcbiAgICAgIH1cblxuICAgICAgYTphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzZDNkM2Q7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XG4gICAgICB9XG5cbiAgICAgIC5Mb2dvIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il19 */\n/*@ sourceURL=/Users/jackpeck/Documents/dev/GiacomoPasinWebsite/GiacomoPasinWebsite/NextJS/Components/Header.js */",
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
var _jsxFileName = "/Users/jackpeck/Documents/dev/GiacomoPasinWebsite/GiacomoPasinWebsite/NextJS/Components/Layout.js";



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
var _jsxFileName = "/Users/jackpeck/Documents/dev/GiacomoPasinWebsite/GiacomoPasinWebsite/NextJS/Components/Logo.js";




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
    css: ".container.jsx-1427947701{height:10vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:sans-serif;}ul.jsx-1427947701{padding:0;margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}li.jsx-1427947701{list-style:none;}a.jsx-1427947701{-webkit-text-decoration:none;text-decoration:none;color:#3d3d3d;font-size:22px;display:block;padding:10px 45px;position:relative;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNrcGVjay9Eb2N1bWVudHMvZGV2L0dpYWNvbW9QYXNpbldlYnNpdGUvR2lhY29tb1Bhc2luV2Vic2l0ZS9OZXh0SlMvQ29tcG9uZW50cy9Mb2dvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFnQixBQUdxQixBQU9GLEFBT00sQUFJSyxVQVZaLEVBUEksSUFjZixHQU5lLCtCQVVDLGNBQ0MsZUFDRCxPQW5CVyxPQVFWLEFBWUcsa0JBQ0Esa0JBQ3BCLHFCQWJBLGlDQVJxQiw2RkFDSSx1QkFDekIiLCJmaWxlIjoiL1VzZXJzL2phY2twZWNrL0RvY3VtZW50cy9kZXYvR2lhY29tb1Bhc2luV2Vic2l0ZS9HaWFjb21vUGFzaW5XZWJzaXRlL05leHRKUy9Db21wb25lbnRzL0xvZ28uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBMb2dvID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgIDxuYXY+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGE+R2lhY29tbyBQYXNpbjwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvbmF2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5jb250YWluZXIge1xuICAgICAgICBoZWlnaHQ6IDEwdmg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgfVxuICAgICAgdWwge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIH1cblxuICAgICAgbGkge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogIzNkM2QzZDtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZzogMTBweCA0NXB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExvZ287Il19 */\n/*@ sourceURL=/Users/jackpeck/Documents/dev/GiacomoPasinWebsite/GiacomoPasinWebsite/NextJS/Components/Logo.js */",
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
var _jsxFileName = "/Users/jackpeck/Documents/dev/GiacomoPasinWebsite/GiacomoPasinWebsite/NextJS/pages/software.js";


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
        className: "jsx-1945092138",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-1945092138" + " " + 'App',
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
        className: "jsx-1945092138",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-1945092138" + " " + 'backgroundImg',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-1945092138" + " " + 'pannel1',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        className: "jsx-1945092138" + " " + 'header',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, " Software ")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-1945092138" + " " + 'pannel1__readMore',
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
        className: "jsx-1945092138" + " " + "readMore",
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
        className: "jsx-1945092138" + " " + 'pannel2',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-1945092138" + " " + '',
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
        styleId: "1945092138",
        css: ".backgroundImg{background-image:url(https://images.pexels.com/photos/825258/pexels-photo-825258.jpeg?cs=srgb&dl=board-circuit-board-circuits-825258.jpg&fm=jpg);background-size:cover;margin:0;padding:0;}.pannel1{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:85vh;margin:0;padding:0;}.pannel1__readMore{text-transform:uppercase;font-size:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:15vh;padding-top:0;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:whitesmoke;-webkit-letter-spacing:20px;-moz-letter-spacing:20px;-ms-letter-spacing:20px;letter-spacing:20px;font-weight:lighter;}.pannel2{margin:0 auto;margin-left:12.5%;}.header{font-size:80px;font-family:arial;-webkit-letter-spacing:20px;-moz-letter-spacing:20px;-ms-letter-spacing:20px;letter-spacing:20px;text-transform:uppercase;color:white;}.pannel1__readMore{text-transform:uppercase;font-size:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:15vh;padding-top:0;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:whitesmoke;-webkit-letter-spacing:20px;-moz-letter-spacing:20px;-ms-letter-spacing:20px;letter-spacing:20px;font-weight:lighter;}.readMore{-webkit-text-decoration:none;text-decoration:none;color:white;font-weight:lighter;font-family:sans-serif;}.readMore:hover{cursor:pointer;}@media only screen and (min-width:2000px){.pannel2{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-right:12.5%;padding:0;}}@media only screen and (min-width:1000px){.pannel2{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justift-content:center;-ms-flex-pack:center;justift-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-right:12.5%;padding:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNrcGVjay9Eb2N1bWVudHMvZGV2L0dpYWNvbW9QYXNpbldlYnNpdGUvR2lhY29tb1Bhc2luV2Vic2l0ZS9OZXh0SlMvcGFnZXMvc29mdHdhcmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdURRLEFBSTBKLEFBTXBJLEFBU1ksQUFhWCxBQUtDLEFBUVUsQUFZSixBQU9OLEFBS0QsQUFTQyxjQTdDRyxDQUtBLEFBMkJwQixVQTdDaUIsQUEwQkEsT0FaakIsQ0FLc0IsT0FsQlAsQUEwQkEsVUFXRCxZQUNRLFlBaERHLEFBMkRFLEFBU0EsUUFuQkYsdUJBQ3pCLFNBdkNjLEFBMEJBLFlBekJFLEFBMEJBLElBVFcsVUFoQk4sQUEwQkEsS0E3Q0csVUFvQ1YsWUFuQ0gsQUFvQ1gsTUE5QnFCLEFBMkRFLEFBU0EsR0F6RVgsVUFDWiwrQ0FpQnlCLEFBMEJBLGlDQXRDWCxBQTJEUyxBQVNBLFlBbkVaLE9BMkRHLEFBU0EsRUFuRUYsUUEyRFYsQUFTQSxFQW5FRixtQ0FVbUIsQUEwQkEsaUJBekJHLEFBMEJBLGlHQXpCQSxBQTBCQSxvQkF6QnRCLEFBMEJBIiwiZmlsZSI6Ii9Vc2Vycy9qYWNrcGVjay9Eb2N1bWVudHMvZGV2L0dpYWNvbW9QYXNpbldlYnNpdGUvR2lhY29tb1Bhc2luV2Vic2l0ZS9OZXh0SlMvcGFnZXMvc29mdHdhcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL0NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEQVRBQkFTRSBmcm9tICcuLi9Db21wb25lbnRzL0dpdEh1YlByb2plY3RzL3Byb2plY3REQi5qc29uJ1xuaW1wb3J0IEdpdEh1YlByb2plY3QgZnJvbSAnLi4vQ29tcG9uZW50cy9HaXRIdWJQcm9qZWN0cy9Qcm9qZWN0J1xuaW1wb3J0IHsgc2Nyb2xsZXIgfSBmcm9tICdyZWFjdC1zY3JvbGwnO1xuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNsYXNzIFNvZnR3YXJlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0ZSA9IHtcbiAgICBwcm9qZWN0czogREFUQUJBU0VcbiAgfVxuXG4gIHJlbmRlcigpe1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2Nyb2xsVG9FbGVtZW50ID0gKGVsZW1lbnQpID0+IHtcbiAgICAgIHNjcm9sbGVyLnNjcm9sbFRvKGVsZW1lbnQse1xuICAgICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgICAgZGVsYXk6IDEwLFxuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIHNtb290aDogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J0FwcCc+XG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmFja2dyb3VuZEltZyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFubmVsMSc+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0naGVhZGVyJz4gU29mdHdhcmUgPC9wPlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Bhbm5lbDFfX3JlYWRNb3JlJz5cbiAgICAgICAgICAgPExpbms+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInJlYWRNb3JlXCIgb25DbGljaz17KCk9PnNjcm9sbFRvRWxlbWVudCgnZ2l0aHViJyl9PiBSZWFkIE1vcmU8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8RWxlbWVudCBuYW1lPSdnaXRodWInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYW5uZWwyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nJz5cbiAgICAgICAgICAgIDxHaXRIdWJQcm9qZWN0IG5ld3M9e3RoaXMuc3RhdGUucHJvamVjdHN9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9FbGVtZW50PlxuICAgICAgICA8L0xheW91dD5cbiAgICAgIDwvZGl2PlxuXG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsID4ge1xuICAgICAgICBgXG5cbiAgICAgIC5iYWNrZ3JvdW5kSW1ne1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvODI1MjU4L3BleGVscy1waG90by04MjUyNTguanBlZz9jcz1zcmdiJmRsPWJvYXJkLWNpcmN1aXQtYm9hcmQtY2lyY3VpdHMtODI1MjU4LmpwZyZmbT1qcGcpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG4gICAgICAucGFubmVsMSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDg1dmg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cblxuICAgICAgLnBhbm5lbDFfX3JlYWRNb3JlIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBoZWlnaHQ6IDE1dmg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICAgIH1cblxuICAgICAgLnBhbm5lbDJ7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTIuNSU7XG4gICAgICB9XG5cbiAgICAgIC5oZWFkZXIge1xuICAgICAgICBmb250LXNpemU6IDgwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDIwcHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cblxuICAgICAgLnBhbm5lbDFfX3JlYWRNb3JlIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBoZWlnaHQ6IDE1dmg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICAgIH1cbiAgICAgIC5yZWFkTW9yZSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICB9XG5cbiAgICAgIC5yZWFkTW9yZTpob3ZlcntcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMDBweCkge1xuICAgICAgICAucGFubmVsMiB7XG4gICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMi41JTtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xuICAgICAgICAucGFubmVsMiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ0LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTIuNSU7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG5cbiAgICBgXG4gICAgICB9IDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU29mdHdhcmU7XG4iXX0= */\n/*@ sourceURL=/Users/jackpeck/Documents/dev/GiacomoPasinWebsite/GiacomoPasinWebsite/NextJS/pages/software.js */",
        __self: this
      }));
    }
  }]);

  return Software;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Software);

/***/ }),

/***/ 4:
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