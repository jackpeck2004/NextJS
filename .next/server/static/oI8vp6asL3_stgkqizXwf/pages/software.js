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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(23);


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: ./Components/Layout.js + 2 modules
var Layout = __webpack_require__(4);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./Components/GitHubProjects/projectDB.json
var projectDB = __webpack_require__(6);

// CONCATENATED MODULE: ./Components/GitHubProjects/GitHubProjectItem.js



var GitHubProjectItem_GitHubProjectItem = function GitHubProjectItem(_ref) {
  var item = _ref.item;
  return external_react_default.a.createElement("div", {
    className: "jsx-1857146047" + " " + 'ghProject'
  }, external_react_default.a.createElement("p", {
    className: "jsx-1857146047" + " " + 'projectHeader'
  }, item.name, " ", external_react_default.a.createElement("strong", {
    className: "jsx-1857146047"
  }, "|"), " ", item.language), external_react_default.a.createElement("div", {
    className: "jsx-1857146047" + " " + 'description'
  }, external_react_default.a.createElement("p", {
    className: "jsx-1857146047"
  }, item.description)), external_react_default.a.createElement(style_default.a, {
    styleId: "1857146047",
    css: [".ghProject{background:transparent;height:100%;min-height:100%;color:black;font-family:sans-serif;width:150%;text-align:center;border:1px solid black;margin-bottom:10vh;padding-bottom:10vh;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;border-radius:12px;}", "strong{font-size:40px;font-weight:lighter;}", ".ghProject:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}", ".description{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".projectHeader{text-align:center;font-size:30px;}"]
  }));
};

/* harmony default export */ var GitHubProjects_GitHubProjectItem = (GitHubProjectItem_GitHubProjectItem);
// CONCATENATED MODULE: ./Components/GitHubProjects/Project.js




var Project_GitHubProject = function GitHubProject(props) {
  var items = props.news.map(function (item) {
    return external_react_default.a.createElement(GitHubProjects_GitHubProjectItem, {
      key: item.id,
      item: item
    });
  });
  return external_react_default.a.createElement("div", {
    className: "jsx-3070189300" + " " + 'div'
  }, external_react_default.a.createElement("div", {
    className: "jsx-3070189300" + " " + 'project'
  }, props.children, items), external_react_default.a.createElement(style_default.a, {
    styleId: "3070189300",
    css: [".div{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:15%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;}"]
  }));
};

/* harmony default export */ var Project = (Project_GitHubProject);
// CONCATENATED MODULE: ./pages/software.js


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







var software_Software =
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
      projects: projectDB
    });

    return _this;
  }

  _createClass(Software, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "jsx-2866657679"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2866657679"
      }, external_react_default.a.createElement(Layout["a" /* default */], null, external_react_default.a.createElement("br", {
        className: "jsx-2866657679"
      }), external_react_default.a.createElement("div", {
        className: "jsx-2866657679" + " " + 'pannel1'
      }, external_react_default.a.createElement("p", {
        className: "jsx-2866657679" + " " + 'header'
      }, " Software ")), external_react_default.a.createElement("div", {
        className: "jsx-2866657679" + " " + 'pannel2'
      }, external_react_default.a.createElement("div", {
        className: "jsx-2866657679" + " " + ''
      }, external_react_default.a.createElement(Project, {
        news: this.state.projects
      }))))), external_react_default.a.createElement(style_default.a, {
        styleId: "2866657679",
        css: [".pannel1{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100vh;background-image:url(https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60);background-size:cover;margin:0;}", ".pannel2{width:100%;}", ".header{font-size:80px;font-family:arial;-webkit-letter-spacing:20px;-moz-letter-spacing:20px;-ms-letter-spacing:20px;letter-spacing:20px;text-transform:uppercase;color:white;}", ".pannel1__readMore{text-transform:uppercase;font-size:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:15vh;padding-top:0;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:whitesmoke;-webkit-letter-spacing:20px;-moz-letter-spacing:20px;-ms-letter-spacing:20px;letter-spacing:20px;}", ".readMore{-webkit-text-decoration:none;text-decoration:none;color:white;font-weight:lighter;}", ".readMore:hover{cursor:pointer;}"]
      }));
    }
  }]);

  return Software;
}(external_react_["Component"]);

/* harmony default export */ var software = __webpack_exports__["default"] = (software_Software);

/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(2);
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

/***/ 6:
/***/ (function(module) {

module.exports = [{"name":"Snake JS","description":"Snake is an 8bit game that I refusrbished and coded in JavaScript to understand how the language works","img":"","language":"JavaScript"},{"name":"Test"},{"name":"Test 2","description":"uisdgzvciuysdjgzuficjsgz"}];

/***/ })

/******/ });