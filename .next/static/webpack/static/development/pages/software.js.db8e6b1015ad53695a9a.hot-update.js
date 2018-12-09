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
var _jsxFileName = "/Users/jackpeck/Documents/dev/GiacomoPasinWebsite/GiacomoPasinWebsite/NextJS/Components/GitHubProjects/GitHubProjectItem.js";



var GitHubProjectItem = function GitHubProjectItem(_ref) {
  var item = _ref.item;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3931260232" + " " + 'ghProject',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3931260232" + " " + 'projectHeader',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, item.name, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-3931260232",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "|"), " ", item.main_language), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3931260232" + " " + 'description',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3931260232",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, item.description)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3931260232" + " " + 'skills',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3931260232",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Develoed Skills: ", item.other_languages)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3931260232",
    css: ".ghProject{background:transparent;height:100%;min-height:100%;color:black;font-family:sans-serif;text-align:center;border:1px solid black;margin-bottom:10vh;padding-bottom:10vh;margin-left:25%;margin-right:25%;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;border-radius:12px;}strong{font-size:40px;font-weight:lighter;}.ghProject:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}.description{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.projectHeader{text-align:center;font-size:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNrcGVjay9Eb2N1bWVudHMvZGV2L0dpYWNvbW9QYXNpbldlYnNpdGUvR2lhY29tb1Bhc2luV2Vic2l0ZS9OZXh0SlMvQ29tcG9uZW50cy9HaXRIdWJQcm9qZWN0cy9HaXRIdWJQcm9qZWN0SXRlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhZ0IsQUFHNEMsQUFpQlIsQUFLTSxBQUlSLEFBTUssZUFkRSxHQWVMLEtBaENILFVBaUNoQixFQWhDb0IsQUFpQnBCLGdCQWhCZ0IsWUFDVyxXQXVCSixDQUp2QixXQWpCc0Isa0JBQ0ssdUJBQ0osbUJBQ0Msb0JBQ0osQ0FrQk8sZUFqQk4saUJBQ2MsbUVBaUJuQyxHQWhCdUIsbUJBQ3ZCIiwiZmlsZSI6Ii9Vc2Vycy9qYWNrcGVjay9Eb2N1bWVudHMvZGV2L0dpYWNvbW9QYXNpbldlYnNpdGUvR2lhY29tb1Bhc2luV2Vic2l0ZS9OZXh0SlMvQ29tcG9uZW50cy9HaXRIdWJQcm9qZWN0cy9HaXRIdWJQcm9qZWN0SXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgR2l0SHViUHJvamVjdEl0ZW0gPSAoeyBpdGVtIH0pID0+IHtcbiAgICByZXR1cm4gKCBcbiAgICA8ZGl2IGNsYXNzTmFtZSA9ICdnaFByb2plY3QnID5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdwcm9qZWN0SGVhZGVyJz57aXRlbS5uYW1lfSA8c3Ryb25nPnw8L3N0cm9uZz4ge2l0ZW0ubWFpbl9sYW5ndWFnZX08L3A+IFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGVzY3JpcHRpb24nPlxuICAgICAgICAgICAgICAgIDxwPntpdGVtLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NraWxscyc+XG4gICAgICAgICAgICAgICAgPHA+RGV2ZWxvZWQgU2tpbGxzOiB7aXRlbS5vdGhlcl9sYW5ndWFnZXN9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsID4ge1xuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAuZ2hQcm9qZWN0e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwdmg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHZoO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjUlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDI1JTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzdHJvbmd7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmdoUHJvamVjdDpob3ZlcntcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAuZGVzY3JpcHRpb257XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5wcm9qZWN0SGVhZGVye1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIGBcbiAgICAgIH0gPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdpdEh1YlByb2plY3RJdGVtOyJdfQ== */\n/*@ sourceURL=/Users/jackpeck/Documents/dev/GiacomoPasinWebsite/GiacomoPasinWebsite/NextJS/Components/GitHubProjects/GitHubProjectItem.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (GitHubProjectItem);

/***/ })

})
//# sourceMappingURL=software.js.db8e6b1015ad53695a9a.hot-update.js.map