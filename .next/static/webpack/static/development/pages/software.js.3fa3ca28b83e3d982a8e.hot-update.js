webpackHotUpdate("static\\development\\pages\\software.js",{

/***/ "./pages/software.js":
/*!***************************!*\
  !*** ./pages/software.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Layout */ "./Components/Layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_GitHubProjects_projectDB_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/GitHubProjects/projectDB.json */ "./Components/GitHubProjects/projectDB.json");
var _Components_GitHubProjects_projectDB_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../Components/GitHubProjects/projectDB.json */ "./Components/GitHubProjects/projectDB.json", 1);
/* harmony import */ var _Components_GitHubProjects_Project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/GitHubProjects/Project */ "./Components/GitHubProjects/Project.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_5__);
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
    value: function render() {
      var scrollToElement = function scrollToElement(element) {
        react_scroll__WEBPACK_IMPORTED_MODULE_5__["scroller"].scrollTo(element, {
          duration: 1000,
          delay: 10,
          offset: 0
        });
      };
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2810320650",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2810320650",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
        className: "jsx-2810320650",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2810320650" + " " + 'pannel1',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2810320650" + " " + 'pannel1__header--div',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        className: "jsx-2810320650" + " " + 'header',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, " Software ")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2810320650" + " " + 'pannel1__readMore--div',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        className: "jsx-2810320650" + " " + 'readMore',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "Read More"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2810320650" + " " + 'pannel2',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2810320650" + " " + '',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_GitHubProjects_Project__WEBPACK_IMPORTED_MODULE_4__["default"], {
        news: this.state.projects,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2810320650",
        css: ".pannel1{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:85vh;background-image:url(https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60);background-size:cover;margin:0;}.pannel2{width:100%;}.header{font-size:80px;font-family:arial;-webkit-letter-spacing:20px;-moz-letter-spacing:20px;-ms-letter-spacing:20px;letter-spacing:20px;text-transform:uppercase;color:white;}.pannel1__readMore{text-transform:uppercase;font-size:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:15vh;padding-top:0;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:whitesmoke;-webkit-letter-spacing:20px;-moz-letter-spacing:20px;-ms-letter-spacing:20px;letter-spacing:20px;}.readMore{-webkit-text-decoration:none;text-decoration:none;color:white;font-weight:lighter;}.readMore:hover{cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZ2lhY29cXERvY3VtZW50c1xcR2l0SHViXFxOZXh0SlNcXHBhZ2VzXFxzb2Z0d2FyZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRFEsQUFHc0IsQUFXRixBQUdJLEFBUVUsQUFXSixBQU1OLFdBM0JqQixJQUdvQixBQXlCcEIsVUFqQmlCLFFBUEssT0FRUCxVQVVELFlBQ1EsWUFsQ0csUUFtQ3pCLGdDQVhjLFlBQ0UsSUFUVyxVQVVOLGVBVFAsWUFDZCxNQWpCcUIsNERBMEJJLGlDQXpCWCxZQUNnSixzREF5QjNJLGlCQUNHLHFGQXpCRSxZQTBCeEIsVUF6QlcsU0FDWCIsImZpbGUiOiJDOlxcVXNlcnNcXGdpYWNvXFxEb2N1bWVudHNcXEdpdEh1YlxcTmV4dEpTXFxwYWdlc1xcc29mdHdhcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL0NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBEQVRBQkFTRSBmcm9tICcuLi9Db21wb25lbnRzL0dpdEh1YlByb2plY3RzL3Byb2plY3REQi5qc29uJ1xyXG5pbXBvcnQgR2l0SHViUHJvamVjdCBmcm9tICcuLi9Db21wb25lbnRzL0dpdEh1YlByb2plY3RzL1Byb2plY3QnXHJcbmltcG9ydCB7IHNjcm9sbGVyIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcclxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XHJcblxyXG5jbGFzcyBTb2Z0d2FyZSBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIHN0YXRlID0ge1xyXG4gICAgcHJvamVjdHM6IERBVEFCQVNFXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKXtcclxuICAgIGNvbnN0IHNjcm9sbFRvRWxlbWVudCA9IChlbGVtZW50KSA9PiB7XHJcbiAgICAgIHNjcm9sbGVyLnNjcm9sbFRvKGVsZW1lbnQse1xyXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICAgIGRlbGF5OiAxMCxcclxuICAgICAgICBvZmZzZXQ6IDBcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Bhbm5lbDEnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFubmVsMV9faGVhZGVyLS1kaXYnPlxyXG4gICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdoZWFkZXInPiBTb2Z0d2FyZSA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFubmVsMV9fcmVhZE1vcmUtLWRpdic+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdyZWFkTW9yZSc+UmVhZCBNb3JlPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Bhbm5lbDInPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9Jyc+XHJcbiAgICAgICAgICAgIDxHaXRIdWJQcm9qZWN0IG5ld3M9e3RoaXMuc3RhdGUucHJvamVjdHN9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbCA+IHtcclxuICAgICAgICBgXHJcbiAgICAgIC5wYW5uZWwxIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiA4NXZoO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUwNDYzOTcyNTU5MC0zNGQwOTg0Mzg4YmQ/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTkwMCZxPTYwKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIC5wYW5uZWwyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgICAuaGVhZGVyIHtcclxuICAgICAgICBmb250LXNpemU6IDgwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGFyaWFsO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAyMHB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucGFubmVsMV9fcmVhZE1vcmUge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNXZoO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLnJlYWRNb3JlIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucmVhZE1vcmU6aG92ZXJ7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgICAgIH0gPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTb2Z0d2FyZTsiXX0= */\n/*@ sourceURL=C:\\Users\\giaco\\Documents\\GitHub\\NextJS\\pages\\software.js */",
        __self: this
      }));
    }
  }]);

  return Software;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Software);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/software")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=software.js.3fa3ca28b83e3d982a8e.hot-update.js.map