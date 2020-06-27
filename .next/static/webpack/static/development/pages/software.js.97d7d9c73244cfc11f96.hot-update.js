webpackHotUpdate("static/development/pages/software.js",{

/***/ "./Components/GitHubProjects/Project.js":
/*!**********************************************!*\
  !*** ./Components/GitHubProjects/Project.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

/***/ })

})
//# sourceMappingURL=software.js.97d7d9c73244cfc11f96.hot-update.js.map