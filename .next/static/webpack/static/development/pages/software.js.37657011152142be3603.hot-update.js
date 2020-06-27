webpackHotUpdate("static/development/pages/software.js",{

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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
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
        className: "jsx-1503111875",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-1503111875" + " " + 'App',
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
        className: "jsx-1503111875",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-1503111875" + " " + 'backgroundImg',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-1503111875" + " " + 'pannel1',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        className: "jsx-1503111875" + " " + 'header',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, " Software ")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-1503111875" + " " + 'pannel1__readMore',
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
        className: "jsx-1503111875" + " " + "readMore",
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
        className: "jsx-1503111875" + " " + 'pannel2',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-1503111875" + " " + '',
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
        styleId: "1503111875",
        css: ".backgroundImg{background-image:url(https://images.unsplash.com/photo-1547213529-98a94130a2f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80);background-size:cover;}.pannel1{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:85vh;margin:0;padding:0;}.pannel1__readMore{text-transform:uppercase;font-size:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:15vh;padding-top:0;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:whitesmoke;-webkit-letter-spacing:20px;-moz-letter-spacing:20px;-ms-letter-spacing:20px;letter-spacing:20px;font-weight:lighter;}.pannel2{width:100%;margin:0 auto;margin-left:12.5%;}.header{font-size:80px;font-family:arial;-webkit-letter-spacing:20px;-moz-letter-spacing:20px;-ms-letter-spacing:20px;letter-spacing:20px;text-transform:uppercase;color:white;}.pannel1__readMore{text-transform:uppercase;font-size:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:15vh;padding-top:0;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:whitesmoke;-webkit-letter-spacing:20px;-moz-letter-spacing:20px;-ms-letter-spacing:20px;letter-spacing:20px;font-weight:lighter;}.readMore{-webkit-text-decoration:none;text-decoration:none;color:white;font-weight:lighter;font-family:sans-serif;}.readMore:hover{cursor:pointer;}@media only screen and (min-width:2000px){.pannel2{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-right:12.5%;padding:0;}}@media only screen and (min-width:1000px){.pannel2{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justift-content:center;-ms-flex-pack:center;justift-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-right:12.5%;padding:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNrcGVjay9Eb2N1bWVudHMvZGV2L0dpYWNvbW9QYXNpbldlYnNpdGUvR2lhY29tb1Bhc2luV2Vic2l0ZS9OZXh0SlMvcGFnZXMvc29mdHdhcmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdURRLEFBSW1LLEFBSTdJLEFBU1ksQUFhZCxBQU1JLEFBUVUsQUFZSixBQU9OLEFBS0QsQUFTQyxXQTlDRCxJQU1JLEFBMkJwQixVQTlDaUIsQUFjRyxBQWFILFFBUEssT0FuQlAsQUEyQkEsR0FiZixPQXdCYyxZQUNRLFlBakRHLEFBNERFLEFBU0EsUUFuQkYsdUJBQ3pCLFNBeENjLEFBMkJBLFlBMUJFLEFBMkJBLElBVFcsVUFqQk4sQUEyQkEsY0E1Q0csQ0FtQ1YsWUFDZCxNQS9CcUIsQUE0REUsQUFTQSxHQXpFdkIseURBaUJ5QixBQTJCQSxpQ0F2Q1gsQUE0RFMsQUFTQSxZQXBFWixPQTRERyxBQVNBLEVBcEVGLFFBNERWLEFBU0EsRUFwRUYsbUNBVW1CLEFBMkJBLGlCQTFCRyxBQTJCQSxpR0ExQkEsQUEyQkEsb0JBMUJ0QixBQTJCQSIsImZpbGUiOiIvVXNlcnMvamFja3BlY2svRG9jdW1lbnRzL2Rldi9HaWFjb21vUGFzaW5XZWJzaXRlL0dpYWNvbW9QYXNpbldlYnNpdGUvTmV4dEpTL3BhZ2VzL3NvZnR3YXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9Db21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgREFUQUJBU0UgZnJvbSAnLi4vQ29tcG9uZW50cy9HaXRIdWJQcm9qZWN0cy9wcm9qZWN0REIuanNvbidcbmltcG9ydCBHaXRIdWJQcm9qZWN0IGZyb20gJy4uL0NvbXBvbmVudHMvR2l0SHViUHJvamVjdHMvUHJvamVjdCdcbmltcG9ydCB7IHNjcm9sbGVyIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tICdyZWFjdC1zY3JvbGwnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jbGFzcyBTb2Z0d2FyZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGUgPSB7XG4gICAgcHJvamVjdHM6IERBVEFCQVNFXG4gIH1cblxuICByZW5kZXIoKXtcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjcm9sbFRvRWxlbWVudCA9IChlbGVtZW50KSA9PiB7XG4gICAgICBzY3JvbGxlci5zY3JvbGxUbyhlbGVtZW50LHtcbiAgICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICAgIGRlbGF5OiAxMCxcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBzbW9vdGg6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdBcHAnPlxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgIDxici8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JhY2tncm91bmRJbWcnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Bhbm5lbDEnPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2hlYWRlcic+IFNvZnR3YXJlIDwvcD5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYW5uZWwxX19yZWFkTW9yZSc+XG4gICAgICAgICAgIDxMaW5rPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJyZWFkTW9yZVwiIG9uQ2xpY2s9eygpPT5zY3JvbGxUb0VsZW1lbnQoJ2dpdGh1YicpfT4gUmVhZCBNb3JlPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEVsZW1lbnQgbmFtZT0nZ2l0aHViJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFubmVsMic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9Jyc+XG4gICAgICAgICAgICA8R2l0SHViUHJvamVjdCBuZXdzPXt0aGlzLnN0YXRlLnByb2plY3RzfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRWxlbWVudD5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICA8L2Rpdj5cblxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbCA+IHtcbiAgICAgICAgYFxuXG4gICAgICAuYmFja2dyb3VuZEltZ3tcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTQ3MjEzNTI5LTk4YTk0MTMwYTJmMz9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MzMwMCZxPTgwKTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIH1cbiAgICAgIC5wYW5uZWwxIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogODV2aDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuXG4gICAgICAucGFubmVsMV9fcmVhZE1vcmUge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDogMTV2aDtcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgICAgfVxuXG4gICAgICAucGFubmVsMntcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTIuNSU7XG4gICAgICB9XG5cbiAgICAgIC5oZWFkZXIge1xuICAgICAgICBmb250LXNpemU6IDgwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDIwcHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cblxuICAgICAgLnBhbm5lbDFfX3JlYWRNb3JlIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBoZWlnaHQ6IDE1dmg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICAgIH1cbiAgICAgIC5yZWFkTW9yZSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICB9XG5cbiAgICAgIC5yZWFkTW9yZTpob3ZlcntcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMDBweCkge1xuICAgICAgICAucGFubmVsMiB7XG4gICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMi41JTtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xuICAgICAgICAucGFubmVsMiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ0LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTIuNSU7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG5cbiAgICBgXG4gICAgICB9IDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU29mdHdhcmU7XG4iXX0= */\n/*@ sourceURL=/Users/jackpeck/Documents/dev/GiacomoPasinWebsite/GiacomoPasinWebsite/NextJS/pages/software.js */",
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
//# sourceMappingURL=software.js.37657011152142be3603.hot-update.js.map