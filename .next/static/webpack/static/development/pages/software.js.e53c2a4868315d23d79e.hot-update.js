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
        className: "jsx-3831102466",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-3831102466" + " " + 'App',
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
        className: "jsx-3831102466",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-3831102466" + " " + 'backgroundImg',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-3831102466" + " " + 'pannel1',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        className: "jsx-3831102466" + " " + 'header',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, " Software ")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-3831102466" + " " + 'pannel1__readMore',
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
        className: "jsx-3831102466" + " " + "readMore",
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
        className: "jsx-3831102466" + " " + 'pannel2',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-3831102466" + " " + '',
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
        styleId: "3831102466",
        css: ".backgroundImg{background-image:url(https://images.pexels.com/photos/825258/pexels-photo-825258.jpeg?cs=srgb&dl=board-circuit-board-circuits-825258.jpg&fm=jpg);background-size:cover;}.pannel1{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:85vh;margin:0;padding:0;}.pannel1__readMore{text-transform:uppercase;font-size:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:15vh;padding-top:0;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:whitesmoke;-webkit-letter-spacing:20px;-moz-letter-spacing:20px;-ms-letter-spacing:20px;letter-spacing:20px;font-weight:lighter;}.pannel2{margin:0 auto;margin-left:12.5%;}.header{font-size:80px;font-family:arial;-webkit-letter-spacing:20px;-moz-letter-spacing:20px;-ms-letter-spacing:20px;letter-spacing:20px;text-transform:uppercase;color:white;}.pannel1__readMore{text-transform:uppercase;font-size:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:15vh;padding-top:0;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:whitesmoke;-webkit-letter-spacing:20px;-moz-letter-spacing:20px;-ms-letter-spacing:20px;letter-spacing:20px;font-weight:lighter;}.readMore{-webkit-text-decoration:none;text-decoration:none;color:white;font-weight:lighter;font-family:sans-serif;}.readMore:hover{cursor:pointer;}@media only screen and (min-width:2000px){.pannel2{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-right:12.5%;padding:0;}}@media only screen and (min-width:1000px){.pannel2{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justift-content:center;-ms-flex-pack:center;justift-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-right:12.5%;padding:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNrcGVjay9Eb2N1bWVudHMvZGV2L0dpYWNvbW9QYXNpbldlYnNpdGUvR2lhY29tb1Bhc2luV2Vic2l0ZS9OZXh0SlMvcGFnZXMvc29mdHdhcmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdURRLEFBSTBKLEFBSXBJLEFBU1ksQUFhWCxBQUtDLEFBUVUsQUFZSixBQU9OLEFBS0QsQUFTQyxjQTdDRyxDQUtBLEFBMkJwQixVQTdDaUIsQUEwQkEsT0FaakIsQ0FLc0IsT0FsQlAsQUEwQkEsVUFXRCxZQUNRLFlBaERHLEFBMkRFLEFBU0EsUUFuQkYsdUJBQ3pCLFNBdkNjLEFBMEJBLFlBekJFLEFBMEJBLElBVFcsVUFoQk4sQUEwQkEsS0EzQ0csVUFrQ1YsWUFqQ2QsQUFrQ0EsTUE5QnFCLEFBMkRFLEFBU0EsNERBdkRFLEFBMEJBLGlDQXRDWCxBQTJEUyxBQVNBLFlBbkVaLE9BMkRHLEFBU0EsRUFuRUYsUUEyRFYsQUFTQSxFQW5FRixtQ0FVbUIsQUEwQkEsaUJBekJHLEFBMEJBLGlHQXpCQSxBQTBCQSxvQkF6QnRCLEFBMEJBIiwiZmlsZSI6Ii9Vc2Vycy9qYWNrcGVjay9Eb2N1bWVudHMvZGV2L0dpYWNvbW9QYXNpbldlYnNpdGUvR2lhY29tb1Bhc2luV2Vic2l0ZS9OZXh0SlMvcGFnZXMvc29mdHdhcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL0NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEQVRBQkFTRSBmcm9tICcuLi9Db21wb25lbnRzL0dpdEh1YlByb2plY3RzL3Byb2plY3REQi5qc29uJ1xuaW1wb3J0IEdpdEh1YlByb2plY3QgZnJvbSAnLi4vQ29tcG9uZW50cy9HaXRIdWJQcm9qZWN0cy9Qcm9qZWN0J1xuaW1wb3J0IHsgc2Nyb2xsZXIgfSBmcm9tICdyZWFjdC1zY3JvbGwnO1xuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNsYXNzIFNvZnR3YXJlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0ZSA9IHtcbiAgICBwcm9qZWN0czogREFUQUJBU0VcbiAgfVxuXG4gIHJlbmRlcigpe1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2Nyb2xsVG9FbGVtZW50ID0gKGVsZW1lbnQpID0+IHtcbiAgICAgIHNjcm9sbGVyLnNjcm9sbFRvKGVsZW1lbnQse1xuICAgICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgICAgZGVsYXk6IDEwLFxuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIHNtb290aDogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J0FwcCc+XG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmFja2dyb3VuZEltZyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFubmVsMSc+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0naGVhZGVyJz4gU29mdHdhcmUgPC9wPlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Bhbm5lbDFfX3JlYWRNb3JlJz5cbiAgICAgICAgICAgPExpbms+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInJlYWRNb3JlXCIgb25DbGljaz17KCk9PnNjcm9sbFRvRWxlbWVudCgnZ2l0aHViJyl9PiBSZWFkIE1vcmU8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8RWxlbWVudCBuYW1lPSdnaXRodWInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYW5uZWwyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nJz5cbiAgICAgICAgICAgIDxHaXRIdWJQcm9qZWN0IG5ld3M9e3RoaXMuc3RhdGUucHJvamVjdHN9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9FbGVtZW50PlxuICAgICAgICA8L0xheW91dD5cbiAgICAgIDwvZGl2PlxuXG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsID4ge1xuICAgICAgICBgXG5cbiAgICAgIC5iYWNrZ3JvdW5kSW1ne1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvODI1MjU4L3BleGVscy1waG90by04MjUyNTguanBlZz9jcz1zcmdiJmRsPWJvYXJkLWNpcmN1aXQtYm9hcmQtY2lyY3VpdHMtODI1MjU4LmpwZyZmbT1qcGcpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgfVxuICAgICAgLnBhbm5lbDEge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiA4NXZoO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG5cbiAgICAgIC5wYW5uZWwxX19yZWFkTW9yZSB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaGVpZ2h0OiAxNXZoO1xuICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgICB9XG5cbiAgICAgIC5wYW5uZWwye1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEyLjUlO1xuICAgICAgfVxuXG4gICAgICAuaGVhZGVyIHtcbiAgICAgICAgZm9udC1zaXplOiA4MHB4O1xuICAgICAgICBmb250LWZhbWlseTogYXJpYWw7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAyMHB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG5cbiAgICAgIC5wYW5uZWwxX19yZWFkTW9yZSB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaGVpZ2h0OiAxNXZoO1xuICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgICB9XG4gICAgICAucmVhZE1vcmUge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgfVxuXG4gICAgICAucmVhZE1vcmU6aG92ZXJ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMDAwcHgpIHtcbiAgICAgICAgLnBhbm5lbDIge1xuICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTIuNSU7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgICAgICAgLnBhbm5lbDIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmdC1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEyLjUlO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuXG4gICAgYFxuICAgICAgfSA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNvZnR3YXJlO1xuIl19 */\n/*@ sourceURL=/Users/jackpeck/Documents/dev/GiacomoPasinWebsite/GiacomoPasinWebsite/NextJS/pages/software.js */",
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
//# sourceMappingURL=software.js.e53c2a4868315d23d79e.hot-update.js.map