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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
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
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\giaco\\Documents\\GitHub\\NextJS\\pages\\home.js";






var Home = function Home() {
  var scrollToElement = function scrollToElement(element) {
    react_scroll__WEBPACK_IMPORTED_MODULE_3__["scroller"].scrollTo(element, {
      duration: 1000,
      delay: 10,
      smooth: true,
      offset: 0
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1224270312",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1224270312" + " " + "pannel1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1224270312" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Giacomo Pasin")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1224270312" + " " + "pannel1__readMore",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    onClick: function onClick() {
      return scrollToElement('pannel2');
    },
    className: "jsx-1224270312" + " " + "readMore",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Read More"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_3__["Element"], {
    name: "pannel2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1224270312" + " " + "pannel2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1224270312",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "About me"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1224270312",
    css: ".pannel1{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:85vh;}.pannel2{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100vh;}.header{font-size:80px;font-family:arial;-webkit-letter-spacing:20px;-moz-letter-spacing:20px;-ms-letter-spacing:20px;letter-spacing:20px;text-transform:uppercase;color:black;}.pannel1__readMore{text-transform:uppercase;font-size:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:15vh;padding-top:0;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:whitesmoke;-webkit-letter-spacing:20px;-moz-letter-spacing:20px;-ms-letter-spacing:20px;letter-spacing:20px;}.readMore{-webkit-text-decoration:none;text-decoration:none;color:white;font-weight:lighter;}.readMore:hover{cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZ2lhY29cXERvY3VtZW50c1xcR2l0SHViXFxOZXh0SlNcXHBhZ2VzXFxob21lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1DdUIsQUFHc0IsQUFNQSxBQU1FLEFBUVUsQUFXSixBQU1OLGVBeEJHLEFBeUJwQixVQWpCaUIsUUFQSyxPQVFQLFVBVUQsWUFDUSxZQWhDRyxBQU1BLFFBMkJ6QixnQ0FYYyxZQUNFLElBVFcsVUFVTixlQVRQLFlBQ2QsTUFmcUIsQUFNQSw0REFrQkksaUNBdkJYLEFBTUMsWUFMZixDQU1BLHFEQWlCbUIsaUJBQ0csaUdBQ3RCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcZ2lhY29cXERvY3VtZW50c1xcR2l0SHViXFxOZXh0SlNcXHBhZ2VzXFxob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgc2Nyb2xsZXIgfSBmcm9tICdyZWFjdC1zY3JvbGwnO1xyXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7IFxyXG5cclxuICBjb25zdCBzY3JvbGxUb0VsZW1lbnQgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgc2Nyb2xsZXIuc2Nyb2xsVG8oZWxlbWVudCx7XHJcbiAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICBkZWxheToxMCxcclxuICAgICAgc21vb3RoOiB0cnVlLFxyXG4gICAgICBvZmZzZXQ6IDBcclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxuICByZXR1cm4oXHJcbiAgPGRpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFubmVsMVwiPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJoZWFkZXJcIj5HaWFjb21vIFBhc2luPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbm5lbDFfX3JlYWRNb3JlXCI+XHJcbiAgICAgIDxMaW5rID5cclxuICAgICAgICA8IGEgY2xhc3NOYW1lID0gXCJyZWFkTW9yZVwiXHJcbiAgICAgICAgb25DbGljayA9IHtcclxuICAgICAgICAgICgpID0+IHNjcm9sbFRvRWxlbWVudCgncGFubmVsMicpXHJcbiAgICAgICAgfSA+XHJcbiAgICAgICAgICBSZWFkIE1vcmVcclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvZGl2PlxyXG4gICAgPEVsZW1lbnQgbmFtZT0ncGFubmVsMic+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFubmVsMlwiID5cclxuICAgICAgICA8aDE+QWJvdXQgbWU8L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRWxlbWVudD5cclxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgIC5wYW5uZWwxIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiA4NXZoO1xyXG4gICAgICB9XHJcbiAgICAgIC5wYW5uZWwyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgfVxyXG4gICAgICAuaGVhZGVyIHtcclxuICAgICAgICBmb250LXNpemU6IDgwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGFyaWFsO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAyMHB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucGFubmVsMV9fcmVhZE1vcmUge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNXZoO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLnJlYWRNb3JlIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucmVhZE1vcmU6aG92ZXJ7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbik7fVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl19 */\n/*@ sourceURL=C:\\Users\\giaco\\Documents\\GitHub\\NextJS\\pages\\home.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Layout */ "./Components/Layout.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.js */ "./pages/home.js");
var _jsxFileName = "C:\\Users\\giaco\\Documents\\GitHub\\NextJS\\pages\\index.js";


//NextJS Component imports

 //Personal component imports

 //This is the page imports



var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3215091437",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3215091437" + " " + "pannel1index",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_home_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3215091437",
    css: "body{font-family:sans-serif;margin:0;padding:0;}.pannel1index{background-image:url(https://images.unsplash.com/photo-1536302829663-a460b9ec95b9?auto=format&fi\u2026aWQiOjEyMDd9&ixlib=rb-0.3.5&q=80&s=973ec41\u2026&w=3155);background-size:cover;height:100vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZ2lhY29cXERvY3VtZW50c1xcR2l0SHViXFxOZXh0SlNcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQnVCLEFBR2dDLEFBTThILHVCQUw1SSxTQUNDLFVBQ1osMkdBSXdCLHNCQUNULGFBQ2YiLCJmaWxlIjoiQzpcXFVzZXJzXFxnaWFjb1xcRG9jdW1lbnRzXFxHaXRIdWJcXE5leHRKU1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9OZXh0SlMgQ29tcG9uZW50IGltcG9ydHNcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG4vL1BlcnNvbmFsIGNvbXBvbmVudCBpbXBvcnRzXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vQ29tcG9uZW50cy9MYXlvdXQnO1xyXG5cclxuLy9UaGlzIGlzIHRoZSBwYWdlIGltcG9ydHNcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi9ob21lLmpzJztcclxuXHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IChcclxuICA8ZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYW5uZWwxaW5kZXhcIj5cclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8SG9tZSAvPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgIGJvZHkge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucGFubmVsMWluZGV4IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MzYzMDI4Mjk2NjMtYTQ2MGI5ZWM5NWI5P2F1dG89Zm9ybWF0JmZp4oCmYVdRaU9qRXlNRGQ5Jml4bGliPXJiLTAuMy41JnE9ODAmcz05NzNlYzQx4oCmJnc9MzE1NSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBcclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\giaco\\Documents\\GitHub\\NextJS\\pages\\index.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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
//# sourceMappingURL=index.js.map