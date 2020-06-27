webpackHotUpdate("static/development/pages/api.js",{

/***/ "./pages/api.js":
/*!**********************!*\
  !*** ./pages/api.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Layout */ "./Components/Layout.js");
var _jsxFileName = "/Users/jackpeck/Documents/dev/GiacomoPasinWebsite/GiacomoPasinWebsite/NextJS/pages/api.js";




var API = function API() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2563239980",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2563239980" + " " + "pannel1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    className: "jsx-2563239980" + " " + 'box',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2563239980" + " " + 'header',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "API LOGIN"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    placeholder: "Username",
    id: "user",
    className: "jsx-2563239980",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2563239980",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "password",
    placeholder: "Password",
    id: "pass",
    className: "jsx-2563239980",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2563239980",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "button",
    value: "Login",
    onClick: submit,
    className: "jsx-2563239980",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2563239980",
    css: ".header.jsx-2563239980{font-size:80px;font-family:arial;-webkit-letter-spacing:20px;-moz-letter-spacing:20px;-ms-letter-spacing:20px;letter-spacing:20px;text-transform:uppercase;}.box.jsx-2563239980{width:100%;padding:40px;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-align:center;}.pannel1.jsx-2563239980{font-family:Arial;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;place-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:100vh;margin:0;padding:0;}.box.jsx-2563239980 input[type = 'text'].jsx-2563239980,.box.jsx-2563239980 input[type = 'password'].jsx-2563239980{border:0;background:none;display:block;margin:20px auto;text-align:center;border:2px solid #3498db;padding:14px 10px;width:15%;outline:none;color:black;border-radius:24px;-webkit-transition:0.25s;transition:0.25s;font-size:20px;}.box.jsx-2563239980 input[type = 'text'].jsx-2563239980:focus,.box.jsx-2563239980 input[type = 'password'].jsx-2563239980:focus{width:25%;background-color:#3498db;}.box.jsx-2563239980 input[type = 'text'].jsx-2563239980::-webkit-input-placeholder.jsx-2563239980:focus,.box.jsx-2563239980 input[type = 'password'].jsx-2563239980::-webkit-input-placeholder.jsx-2563239980:focus{color:white;}.box.jsx-2563239980 input[type = 'text'].jsx-2563239980::-moz-placeholder.jsx-2563239980:focus,.box.jsx-2563239980 input[type = 'password'].jsx-2563239980::-moz-placeholder.jsx-2563239980:focus{color:white;}.box.jsx-2563239980 input[type = 'text'].jsx-2563239980:-ms-input-placeholder.jsx-2563239980:focus,.box.jsx-2563239980 input[type = 'password'].jsx-2563239980:-ms-input-placeholder.jsx-2563239980:focus{color:white;}.box.jsx-2563239980 input[type = 'text'].jsx-2563239980::placeholder.jsx-2563239980:focus,.box.jsx-2563239980 input[type = 'password'].jsx-2563239980::placeholder.jsx-2563239980:focus{color:white;}.box.jsx-2563239980 input[type = 'button'].jsx-2563239980{border:0;background:none;display:block;margin:20px auto;text-align:center;border:2px solid #2ecc71;padding:14px 10px;width:200px;outline:none;color:black;border-radius:24px;-webkit-transition:0.25s;transition:0.25s;cursor:pointer;font-size:20px;}.box.jsx-2563239980 input[type = 'button'].jsx-2563239980:hover{background:#2ecc71;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNrcGVjay9Eb2N1bWVudHMvZGV2L0dpYWNvbW9QYXNpbldlYnNpdGUvR2lhY29tb1Bhc2luV2Vic2l0ZS9OZXh0SlMvcGFnZXMvYXBpLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCZ0IsQUFHd0IsQUFPSixBQVNPLEFBVVYsQUFnQkcsQUFJRSxBQU1KLEFBaUJXLFNBMUNKLEFBMEJBLENBVlUsQ0FuQ2IsQ0F1Q2QsR0E5Q21CLEdBZ0JMLENBcURkLEtBN0RtQixDQW1CSixBQTBCQSxRQXBETSxFQTBDckIsSUFma0IsQUEwQkEsR0E3Q1QsUUFDQyxNQW1CUSxBQTBCQyxHQTVDYyxlQW1CUCxBQTBCQSxrQkF2Q04sT0FjRCxBQTBCQSxZQXZDSSxNQWNaLEFBMEJDLFVBekJFLEVBMEJBLENBekRZLFVBZ0NiLEVBMEJBLFVBekJPLEVBMEJBLENBMURyQixTQVNvQixPQXdCRCxFQTBCQSxTQWpEbkIsNEJBTWUsR0FrQkUsRUEwQkEsUUEzQ04sS0FrQlgsRUEwQmlCLEVBM0NMLFVBQ1osR0EyQ0MiLCJmaWxlIjoiL1VzZXJzL2phY2twZWNrL0RvY3VtZW50cy9kZXYvR2lhY29tb1Bhc2luV2Vic2l0ZS9HaWFjb21vUGFzaW5XZWJzaXRlL05leHRKUy9wYWdlcy9hcGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL0NvbXBvbmVudHMvTGF5b3V0J1xuXG5jb25zdCBBUEkgPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFubmVsMVwiPlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J2JveCc+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdoZWFkZXInPkFQSSBMT0dJTjwvcD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J1VzZXJuYW1lJyBpZD0ndXNlcicvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSdwYXNzd29yZCcgcGxhY2Vob2xkZXI9J1Bhc3N3b3JkJyBpZD0ncGFzcycvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSdidXR0b24nIHZhbHVlPSdMb2dpbicgb25DbGljaz17c3VibWl0fS8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuXG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuaGVhZGVyIHtcbiAgICAgICAgZm9udC1zaXplOiA4MHB4O1xuICAgICAgICBmb250LWZhbWlseTogYXJpYWw7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAyMHB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgfVxuXG4gICAgICAuYm94e1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogNDBweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgLnBhbm5lbDEge1xuICAgICAgICBmb250LWZhbWlseTogQXJpYWw7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cblxuICAgICAgLmJveCBpbnB1dFt0eXBlID0gJ3RleHQnXSwuYm94IGlucHV0W3R5cGUgPSAncGFzc3dvcmQnXXtcbiAgICAgICAgYm9yZGVyOjA7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMzNDk4ZGI7XG4gICAgICAgIHBhZGRpbmc6IDE0cHggMTBweDtcbiAgICAgICAgd2lkdGg6IDE1JTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjI1cztcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgfVxuXG4gICAgICAgLmJveCBpbnB1dFt0eXBlID0gJ3RleHQnXTpmb2N1cywgLmJveCBpbnB1dFt0eXBlID0gJ3Bhc3N3b3JkJ106Zm9jdXN7XG4gICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThkYjtcbiAgICAgICB9XG4gICAgICAgLmJveCBpbnB1dFt0eXBlID0gJ3RleHQnXTo6cGxhY2Vob2xkZXI6Zm9jdXMsIC5ib3ggaW5wdXRbdHlwZSA9ICdwYXNzd29yZCddOjpwbGFjZWhvbGRlcjpmb2N1c3tcbiAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICB9XG5cblxuXG4gICAgICAgLmJveCBpbnB1dFt0eXBlID0gJ2J1dHRvbidde1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMmVjYzcxO1xuICAgICAgICBwYWRkaW5nOiAxNHB4IDEwcHg7XG4gICAgICAgIHdpZHRoIDIwMHB4O1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgICAgIHRyYW5zaXRpb246IDAuMjVzO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICB9XG5cbiAgICAgICAuYm94IGlucHV0W3R5cGUgPSAnYnV0dG9uJ106aG92ZXJ7XG4gICAgICAgICBiYWNrZ3JvdW5kOiAjMmVjYzcxO1xuICAgICAgIH1cbiAgICAgIFxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5mdW5jdGlvbiAgc3VibWl0KCkge1xuICB2YXIgdXNlcm5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcicpO1xuICB2YXIgcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzcycpO1xuXG4gIHZhciBjb3J1c2VyID0gbnVsbDtcbiAgdmFyIGNvcnBhc3MgPSBudWxsO1xuXG4gIHZhciB1c2VyID0gbnVsbDtcbiAgdmFyIHBhc3MgPSBudWxsO1xuXG4gIENoZWNrR2lhY29tbygpO1xuXG4gIGZ1bmN0aW9uIENoZWNrR2lhY29tbygpIHtcbiAgICBsZXQgY29ydXNlciA9ICdnaWFjb21vJztcbiAgICBsZXQgdXNlciA9IHVzZXJuYW1lLnZhbHVlO1xuXG4gICAgaWYgKHVzZXIgPT0gY29ydXNlcil7XG4gICAgICBsZXQgY29ycGFzcyA9ICdwYXNzd29yZCc7XG4gICAgICBsZXQgcGFzcyA9IHBhc3N3b3JkLnZhbHVlO1xuXG4gICAgICBpZiAocGFzcyA9PSBjb3JwYXNzKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9hcGkvc3VibWl0LycgKyB1c2VyO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBUEk7XG4iXX0= */\n/*@ sourceURL=/Users/jackpeck/Documents/dev/GiacomoPasinWebsite/GiacomoPasinWebsite/NextJS/pages/api.js */",
    __self: this
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
        window.location.href = '/api/submit/' + user;
      }
    }
  }
}

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

/***/ })

})
//# sourceMappingURL=api.js.5aa7c8ba442c5165d02b.hot-update.js.map