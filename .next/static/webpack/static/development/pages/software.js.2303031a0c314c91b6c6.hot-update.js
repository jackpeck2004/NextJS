webpackHotUpdate("static/development/pages/software.js",{

/***/ "./Components/GitHubProjects/GitHubProjectItem.js":
/*!********************************************************!*\
  !*** ./Components/GitHubProjects/GitHubProjectItem.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
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

/***/ })

})
//# sourceMappingURL=software.js.2303031a0c314c91b6c6.hot-update.js.map