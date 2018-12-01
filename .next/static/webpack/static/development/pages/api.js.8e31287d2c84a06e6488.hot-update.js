webpackHotUpdate("static/development/pages/api.js",{

/***/ "./node_modules/react/index.js":
false,

/***/ "./pages/api.js":
/*!**********************!*\
  !*** ./pages/api.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {var API = function API() {
  return Router.push({
    pathname: '/api',
    query: {
      name: 'api'
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (API);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/api")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "dll-reference dll_52339ab353c8e0db40da":
false

})
//# sourceMappingURL=api.js.8e31287d2c84a06e6488.hot-update.js.map