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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(2);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(1);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./Components/Logo.js




var Logo_Logo = function Logo() {
  return external_react_default.a.createElement("div", {
    className: "jsx-1427947701" + " " + "container"
  }, external_react_default.a.createElement("nav", {
    className: "jsx-1427947701"
  }, external_react_default.a.createElement("ul", {
    className: "jsx-1427947701"
  }, external_react_default.a.createElement("li", {
    className: "jsx-1427947701"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/"
  }, external_react_default.a.createElement("a", {
    className: "jsx-1427947701"
  }, "Giacomo Pasin"))))), external_react_default.a.createElement(style_default.a, {
    styleId: "1427947701",
    css: [".container.jsx-1427947701{height:10vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:sans-serif;}", "ul.jsx-1427947701{padding:0;margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}", "li.jsx-1427947701{list-style:none;}", "a.jsx-1427947701{-webkit-text-decoration:none;text-decoration:none;color:#3d3d3d;font-size:22px;display:block;padding:10px 45px;position:relative;}"]
  }));
};

/* harmony default export */ var Components_Logo = (Logo_Logo);
// CONCATENATED MODULE: ./Components/Header.js





var Header_Header = function Header() {
  return external_react_default.a.createElement("div", {
    className: "jsx-1234836504" + " " + "container"
  }, external_react_default.a.createElement("nav", {
    className: "jsx-1234836504"
  }, external_react_default.a.createElement("ul", {
    className: "jsx-1234836504"
  }, external_react_default.a.createElement("li", {
    className: "jsx-1234836504" + " " + "left-content"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/",
    className: "left-content"
  }, external_react_default.a.createElement("a", {
    className: "jsx-1234836504"
  }, "Home"))), external_react_default.a.createElement("li", {
    className: "jsx-1234836504" + " " + "left-content"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/api",
    className: "left-content"
  }, external_react_default.a.createElement("a", {
    className: "jsx-1234836504"
  }, "api"))), external_react_default.a.createElement("li", {
    className: "jsx-1234836504"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/software"
  }, external_react_default.a.createElement("a", {
    className: "jsx-1234836504"
  }, "software"))))), external_react_default.a.createElement(style_default.a, {
    styleId: "1234836504",
    css: [".container.jsx-1234836504{height:10vh;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:sans-serif;background-color:transparent;text-transform:uppercase;position:fixed;background-color:rgba(255,255,255,0.3);}", "ul.jsx-1234836504{padding:0;margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}", "li.jsx-1234836504{list-style:none;}", "a.jsx-1234836504{-webkit-text-decoration:none;text-decoration:none;color:#3d3d3d;font-size:22px;display:block;padding:10px 45px;position:relative;}", "a.jsx-1234836504:before{content:\"\";position:absolute;top:0;left:0;width:100%;height:2px;background-color:#3d3d3d;-webkit-transform:scaleX(0);-ms-transform:scaleX(0);transform:scaleX(0);-webkit-transition:all 0.5s;transition:all 0.5s;-webkit-transform-origin:left;-ms-transform-origin:left;transform-origin:left;}", "a.jsx-1234836504:hover.jsx-1234836504:before,a.jsx-1234836504:hover.jsx-1234836504:after{-webkit-transform:scalex(1);-ms-transform:scalex(1);transform:scalex(1);}", "a.jsx-1234836504:after{content:\"\";position:absolute;bottom:0;left:0;width:100%;height:2px;background-color:#3d3d3d;-webkit-transform:scaleX(0);-ms-transform:scaleX(0);transform:scaleX(0);-webkit-transition:all 0.5s;transition:all 0.5s;-webkit-transform-origin:right;-ms-transform-origin:right;transform-origin:right;}", ".Logo.jsx-1234836504{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}"]
  }));
};

/* harmony default export */ var Components_Header = (Header_Header);
// CONCATENATED MODULE: ./Components/Layout.js



var Layout_Layout = function Layout(props) {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(Components_Header, null), props.children);
};

/* harmony default export */ var Components_Layout = __webpack_exports__["a"] = (Layout_Layout);

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);




var API = function API() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1441618199"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_Layout__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1441618199" + " " + "pannel1"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    className: "jsx-1441618199" + " " + 'box'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1441618199" + " " + 'header'
  }, "API LOGIN"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    placeholder: "Username",
    id: "user",
    className: "jsx-1441618199"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1441618199"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "password",
    placeholder: "Password",
    id: "pass",
    className: "jsx-1441618199"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1441618199"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "button",
    value: "Login",
    onClick: submit,
    className: "jsx-1441618199"
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1441618199",
    css: [".header.jsx-1441618199{font-size:80px;font-family:arial;-webkit-letter-spacing:20px;-moz-letter-spacing:20px;-ms-letter-spacing:20px;letter-spacing:20px;text-transform:uppercase;color:white;}", ".box.jsx-1441618199{width:50vh;padding:40px;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background:#191919;text-align:center;}", ".pannel1.jsx-1441618199{font-family:Arial;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;place-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:100vh;margin:0;padding:0;}", ".box.jsx-1441618199 input[type = 'text'].jsx-1441618199,.box.jsx-1441618199 input[type = 'password'].jsx-1441618199{border:0;background:none;display:block;margin:20px auto;text-align:center;border:2px solid #3498db;padding:14px 10px;width:200px;outline:none;color:white;border-radius:24px;-webkit-transition:0.25s;transition:0.25s;font-size:20px;}", ".box.jsx-1441618199 input[type = 'text'].jsx-1441618199:focus,.box.jsx-1441618199 input[type = 'password'].jsx-1441618199:focus{width:280px;border-color:#2ecc71;}", ".box.jsx-1441618199 input[type = 'button'].jsx-1441618199{border:0;background:none;display:block;margin:20px auto;text-align:center;border:2px solid #2ecc71;padding:14px 10px;width:200px;outline:none;color:white;border-radius:24px;-webkit-transition:0.25s;transition:0.25s;cursor:pointer;font-size:20px;}", ".box.jsx-1441618199 input[type = 'button'].jsx-1441618199:hover{background:#2ecc71;}"]
  }));
};

function submit() {
  var username = document.getElementById('user');
  var password = document.getElementById('pass');
  var coruser = null;
  var corpass = null;
  var user = null;
  var pass = null;
  CheckGiacomo();

  function CheckGiacomo() {
    var coruser = 'giacomo';
    var user = username.value;

    if (user == coruser) {
      var _corpass = 'password';
      var _pass = password.value;

      if (_pass == _corpass) {
        window.location.href = '/api/submit';
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (API);

/***/ })
/******/ ]);