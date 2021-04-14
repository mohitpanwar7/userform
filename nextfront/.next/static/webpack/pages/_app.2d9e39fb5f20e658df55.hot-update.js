webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/header.component.js":
/*!****************************************!*\
  !*** ./components/header.component.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/header.module.scss */ \"./styles/header.module.scss\");\n/* harmony import */ var _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _AuthApi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AuthApi */ \"./components/AuthApi.js\");\n\n\nvar _jsxFileName = \"/home/trex/Desktop/practiceapp/personaldetailsfull/nextfront/components/header.component.js\",\n    _this = undefined;\n\n\n\n\n\n\n\n\n\nvar Header = function Header(_ref) {\n  var userauth = _ref.userauth,\n      auth = _ref.auth;\n  // const auth = React.useContext(AuthApi);\n  var newuserauth = userauth;\n  var firstname = js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('name');\n  var name = js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('name');\n  var email = js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('email');\n\n  var ClearCookies = function ClearCookies() {\n    js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove('id', {\n      path: ''\n    });\n    js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove('email', {\n      path: ''\n    });\n    js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove('firstname', {\n      path: ''\n    });\n    js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove('lastname', {\n      path: ''\n    });\n    js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove('token', {\n      path: ''\n    });\n    console.log(\"userauth=====>\", userauth);\n    newuserauth();\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.header,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Navbar\"], {\n      bg: \"primary\",\n      variant: \"dark\",\n      fixed: \"top\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Navbar\"].Brand, {\n        href: \"\",\n        children: \"Personal Details Form In Next Js\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, _this), auth ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.displayname,\n        children: [\"Hello \", displayname]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 18\n      }, _this) : \"\", auth ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.email,\n        children: [\"Email Id : \", email]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 18\n      }, _this) : \"\", auth ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        href: \"/\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          onClick: function onClick() {\n            return ClearCookies();\n          },\n          className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.option,\n          children: \"SIGN OUT\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 34\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 18\n      }, _this) : \"\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIuY29tcG9uZW50LmpzPzRjYzEiXSwibmFtZXMiOlsiSGVhZGVyIiwidXNlcmF1dGgiLCJhdXRoIiwibmV3dXNlcmF1dGgiLCJmaXJzdG5hbWUiLCJDb29raWVzIiwiZ2V0IiwibmFtZSIsImVtYWlsIiwiQ2xlYXJDb29raWVzIiwicmVtb3ZlIiwicGF0aCIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJoZWFkZXIiLCJkaXNwbGF5bmFtZSIsIm9wdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFLQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFxQjtBQUFBLE1BQW5CQyxRQUFtQixRQUFuQkEsUUFBbUI7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7QUFDbEM7QUFDQSxNQUFNQyxXQUFXLEdBQUdGLFFBQXBCO0FBQ0EsTUFBTUcsU0FBUyxHQUFHQyxnREFBTyxDQUFDQyxHQUFSLENBQVksTUFBWixDQUFsQjtBQUNBLE1BQU1DLElBQUksR0FBR0YsZ0RBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosQ0FBYjtBQUNBLE1BQU1FLEtBQUssR0FBR0gsZ0RBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosQ0FBZDs7QUFFQSxNQUFNRyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCSixvREFBTyxDQUFDSyxNQUFSLENBQWUsSUFBZixFQUFxQjtBQUFFQyxVQUFJLEVBQUU7QUFBUixLQUFyQjtBQUNBTixvREFBTyxDQUFDSyxNQUFSLENBQWUsT0FBZixFQUF3QjtBQUFFQyxVQUFJLEVBQUU7QUFBUixLQUF4QjtBQUNBTixvREFBTyxDQUFDSyxNQUFSLENBQWUsV0FBZixFQUE0QjtBQUFFQyxVQUFJLEVBQUU7QUFBUixLQUE1QjtBQUNBTixvREFBTyxDQUFDSyxNQUFSLENBQWUsVUFBZixFQUEyQjtBQUFFQyxVQUFJLEVBQUU7QUFBUixLQUEzQjtBQUNBTixvREFBTyxDQUFDSyxNQUFSLENBQWUsT0FBZixFQUF3QjtBQUFFQyxVQUFJLEVBQUU7QUFBUixLQUF4QjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE2QlosUUFBN0I7QUFDQUUsZUFBVztBQUNaLEdBUkQ7O0FBVUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVXLGlFQUFNLENBQUNDLE1BQXZCO0FBQUEsMkJBRUUscUVBQUMsc0RBQUQ7QUFBUSxRQUFFLEVBQUMsU0FBWDtBQUFxQixhQUFPLEVBQUMsTUFBN0I7QUFBb0MsV0FBSyxFQUFDLEtBQTFDO0FBQUEsOEJBQ0UscUVBQUMsc0RBQUQsQ0FBUSxLQUFSO0FBQWMsWUFBSSxFQUFDLEVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFR2IsSUFBSSxnQkFBSTtBQUFHLGlCQUFTLEVBQUVZLGlFQUFNLENBQUNFLFdBQXJCO0FBQUEsNkJBQXlDQSxXQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSixHQUFpRSxFQUZ4RSxFQUdHZCxJQUFJLGdCQUFJO0FBQUcsaUJBQVMsRUFBRVksaUVBQU0sQ0FBQ04sS0FBckI7QUFBQSxrQ0FBd0NBLEtBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFKLEdBQTBELEVBSGpFLEVBSUdOLElBQUksZ0JBQUkscUVBQUMsZ0RBQUQ7QUFBTyxZQUFJLEVBQUMsR0FBWjtBQUFBLCtCQUFnQjtBQUFHLGlCQUFPLEVBQUU7QUFBQSxtQkFBTU8sWUFBWSxFQUFsQjtBQUFBLFdBQVo7QUFBa0MsbUJBQVMsRUFBRUssaUVBQU0sQ0FBQ0csTUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFKLEdBQXdHLEVBSi9HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWVELENBaENEOztLQUFNakIsTTtBQWtDU0EscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci5jb21wb25lbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBOYXZiYXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2hlYWRlci5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgQXV0aEFwaSBmcm9tIFwiLi9BdXRoQXBpXCI7XG5cblxuXG5cbmNvbnN0IEhlYWRlciA9ICh7dXNlcmF1dGgsYXV0aH0pID0+IHtcbiAgLy8gY29uc3QgYXV0aCA9IFJlYWN0LnVzZUNvbnRleHQoQXV0aEFwaSk7XG4gIGNvbnN0IG5ld3VzZXJhdXRoID0gdXNlcmF1dGg7XG4gIGNvbnN0IGZpcnN0bmFtZSA9IENvb2tpZXMuZ2V0KCduYW1lJyk7XG4gIGNvbnN0IG5hbWUgPSBDb29raWVzLmdldCgnbmFtZScpO1xuICBjb25zdCBlbWFpbCA9IENvb2tpZXMuZ2V0KCdlbWFpbCcpO1xuXG4gIGNvbnN0IENsZWFyQ29va2llcyA9ICgpID0+IHtcbiAgICBDb29raWVzLnJlbW92ZSgnaWQnLCB7IHBhdGg6ICcnIH0pOyBcbiAgICBDb29raWVzLnJlbW92ZSgnZW1haWwnLCB7IHBhdGg6ICcnIH0pOyBcbiAgICBDb29raWVzLnJlbW92ZSgnZmlyc3RuYW1lJywgeyBwYXRoOiAnJyB9KTsgXG4gICAgQ29va2llcy5yZW1vdmUoJ2xhc3RuYW1lJywgeyBwYXRoOiAnJyB9KTsgXG4gICAgQ29va2llcy5yZW1vdmUoJ3Rva2VuJywgeyBwYXRoOiAnJyB9IClcbiAgICBjb25zb2xlLmxvZyhcInVzZXJhdXRoPT09PT0+XCIsdXNlcmF1dGgpXG4gICAgbmV3dXNlcmF1dGgoKVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuXG4gICAgICA8TmF2YmFyIGJnPVwicHJpbWFyeVwiIHZhcmlhbnQ9XCJkYXJrXCIgZml4ZWQ9XCJ0b3BcIj5cbiAgICAgICAgPE5hdmJhci5CcmFuZCBocmVmPVwiXCI+UGVyc29uYWwgRGV0YWlscyBGb3JtIEluIE5leHQgSnM8L05hdmJhci5CcmFuZD5cbiAgICAgICAge2F1dGggPyAoPGEgY2xhc3NOYW1lPXtzdHlsZXMuZGlzcGxheW5hbWV9PkhlbGxvIHtkaXNwbGF5bmFtZX08L2E+KSA6IFwiXCIgfVxuICAgICAgICB7YXV0aCA/ICg8YSBjbGFzc05hbWU9e3N0eWxlcy5lbWFpbH0+RW1haWwgSWQgOiB7ZW1haWx9PC9hPikgOiBcIlwiIH1cbiAgICAgICAge2F1dGggPyAoPExpbmsgIGhyZWY9Jy8nPjxhIG9uQ2xpY2s9eygpID0+IENsZWFyQ29va2llcygpfSBjbGFzc05hbWU9e3N0eWxlcy5vcHRpb259ID5TSUdOIE9VVDwvYT48L0xpbms+KSA6IFwiXCIgfVxuICAgICAgPC9OYXZiYXI+XG5cblxuICAgIDwvZGl2PlxuICApXG5cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/header.component.js\n");

/***/ })

})