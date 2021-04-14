webpackHotUpdate_N_E("pages/index",{

/***/ "./components/header.component.js":
/*!****************************************!*\
  !*** ./components/header.component.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/header.module.scss */ \"./styles/header.module.scss\");\n/* harmony import */ var _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _AuthApi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AuthApi */ \"./components/AuthApi.js\");\n\n\nvar _jsxFileName = \"/home/trex/Desktop/practiceapp/personaldetailsfull/nextfront/components/header.component.js\",\n    _this = undefined;\n\n\n\n\n\n\n\n\n\nvar Header = function Header(_ref) {\n  var userauth = _ref.userauth,\n      auth = _ref.auth;\n  // const auth = React.useContext(AuthApi);\n  var newuserauth = userauth;\n  var firstname = js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('firstname');\n  var lastname = js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('lastname');\n  var email = js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('email');\n\n  var ClearCookies = function ClearCookies() {\n    js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove('id', {\n      path: ''\n    });\n    js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove('email', {\n      path: ''\n    });\n    js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove('firstname', {\n      path: ''\n    });\n    js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove('lastname', {\n      path: ''\n    });\n    js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove('token', {\n      path: ''\n    });\n    console.log(\"userauth=====>\", userauth);\n    newuserauth();\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.header,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Navbar\"], {\n      bg: \"primary\",\n      variant: \"dark\",\n      fixed: \"top\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Navbar\"].Brand, {\n        href: \"\",\n        children: \"Personal Details Form In Next Js\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, _this), auth ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.displayname,\n        children: [\"Hello \", firstname, \" \", lastname]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 18\n      }, _this) : \"\", auth ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.email,\n        children: [\"Email Id : \", email]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 18\n      }, _this) : \"\", auth ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        href: \"/\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          onClick: function onClick() {\n            return ClearCookies();\n          },\n          className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.option,\n          children: \"SIGN OUT\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 34\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 18\n      }, _this) : \"\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIuY29tcG9uZW50LmpzPzRjYzEiXSwibmFtZXMiOlsiSGVhZGVyIiwidXNlcmF1dGgiLCJhdXRoIiwibmV3dXNlcmF1dGgiLCJmaXJzdG5hbWUiLCJDb29raWVzIiwiZ2V0IiwibGFzdG5hbWUiLCJlbWFpbCIsIkNsZWFyQ29va2llcyIsInJlbW92ZSIsInBhdGgiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwiaGVhZGVyIiwiZGlzcGxheW5hbWUiLCJvcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBS0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBcUI7QUFBQSxNQUFuQkMsUUFBbUIsUUFBbkJBLFFBQW1CO0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVO0FBQ2xDO0FBQ0EsTUFBTUMsV0FBVyxHQUFHRixRQUFwQjtBQUNBLE1BQU1HLFNBQVMsR0FBR0MsZ0RBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosQ0FBbEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdGLGdEQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLENBQWpCO0FBQ0EsTUFBTUUsS0FBSyxHQUFHSCxnREFBTyxDQUFDQyxHQUFSLENBQVksT0FBWixDQUFkOztBQUVBLE1BQU1HLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekJKLG9EQUFPLENBQUNLLE1BQVIsQ0FBZSxJQUFmLEVBQXFCO0FBQUVDLFVBQUksRUFBRTtBQUFSLEtBQXJCO0FBQ0FOLG9EQUFPLENBQUNLLE1BQVIsQ0FBZSxPQUFmLEVBQXdCO0FBQUVDLFVBQUksRUFBRTtBQUFSLEtBQXhCO0FBQ0FOLG9EQUFPLENBQUNLLE1BQVIsQ0FBZSxXQUFmLEVBQTRCO0FBQUVDLFVBQUksRUFBRTtBQUFSLEtBQTVCO0FBQ0FOLG9EQUFPLENBQUNLLE1BQVIsQ0FBZSxVQUFmLEVBQTJCO0FBQUVDLFVBQUksRUFBRTtBQUFSLEtBQTNCO0FBQ0FOLG9EQUFPLENBQUNLLE1BQVIsQ0FBZSxPQUFmLEVBQXdCO0FBQUVDLFVBQUksRUFBRTtBQUFSLEtBQXhCO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQTZCWixRQUE3QjtBQUNBRSxlQUFXO0FBQ1osR0FSRDs7QUFVQSxzQkFDRTtBQUFLLGFBQVMsRUFBRVcsaUVBQU0sQ0FBQ0MsTUFBdkI7QUFBQSwyQkFFRSxxRUFBQyxzREFBRDtBQUFRLFFBQUUsRUFBQyxTQUFYO0FBQXFCLGFBQU8sRUFBQyxNQUE3QjtBQUFvQyxXQUFLLEVBQUMsS0FBMUM7QUFBQSw4QkFDRSxxRUFBQyxzREFBRCxDQUFRLEtBQVI7QUFBYyxZQUFJLEVBQUMsRUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUVHYixJQUFJLGdCQUFJO0FBQUcsaUJBQVMsRUFBRVksaUVBQU0sQ0FBQ0UsV0FBckI7QUFBQSw2QkFBeUNaLFNBQXpDLE9BQXFERyxRQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSixHQUEwRSxFQUZqRixFQUdHTCxJQUFJLGdCQUFJO0FBQUcsaUJBQVMsRUFBRVksaUVBQU0sQ0FBQ04sS0FBckI7QUFBQSxrQ0FBd0NBLEtBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFKLEdBQTBELEVBSGpFLEVBSUdOLElBQUksZ0JBQUkscUVBQUMsZ0RBQUQ7QUFBTyxZQUFJLEVBQUMsR0FBWjtBQUFBLCtCQUFnQjtBQUFHLGlCQUFPLEVBQUU7QUFBQSxtQkFBTU8sWUFBWSxFQUFsQjtBQUFBLFdBQVo7QUFBa0MsbUJBQVMsRUFBRUssaUVBQU0sQ0FBQ0csTUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFKLEdBQXdHLEVBSi9HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWVELENBaENEOztLQUFNakIsTTtBQWtDU0EscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci5jb21wb25lbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBOYXZiYXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2hlYWRlci5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgQXV0aEFwaSBmcm9tIFwiLi9BdXRoQXBpXCI7XG5cblxuXG5cbmNvbnN0IEhlYWRlciA9ICh7dXNlcmF1dGgsYXV0aH0pID0+IHtcbiAgLy8gY29uc3QgYXV0aCA9IFJlYWN0LnVzZUNvbnRleHQoQXV0aEFwaSk7XG4gIGNvbnN0IG5ld3VzZXJhdXRoID0gdXNlcmF1dGg7XG4gIGNvbnN0IGZpcnN0bmFtZSA9IENvb2tpZXMuZ2V0KCdmaXJzdG5hbWUnKTtcbiAgY29uc3QgbGFzdG5hbWUgPSBDb29raWVzLmdldCgnbGFzdG5hbWUnKTtcbiAgY29uc3QgZW1haWwgPSBDb29raWVzLmdldCgnZW1haWwnKTtcblxuICBjb25zdCBDbGVhckNvb2tpZXMgPSAoKSA9PiB7XG4gICAgQ29va2llcy5yZW1vdmUoJ2lkJywgeyBwYXRoOiAnJyB9KTsgXG4gICAgQ29va2llcy5yZW1vdmUoJ2VtYWlsJywgeyBwYXRoOiAnJyB9KTsgXG4gICAgQ29va2llcy5yZW1vdmUoJ2ZpcnN0bmFtZScsIHsgcGF0aDogJycgfSk7IFxuICAgIENvb2tpZXMucmVtb3ZlKCdsYXN0bmFtZScsIHsgcGF0aDogJycgfSk7IFxuICAgIENvb2tpZXMucmVtb3ZlKCd0b2tlbicsIHsgcGF0aDogJycgfSApXG4gICAgY29uc29sZS5sb2coXCJ1c2VyYXV0aD09PT09PlwiLHVzZXJhdXRoKVxuICAgIG5ld3VzZXJhdXRoKClcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cblxuICAgICAgPE5hdmJhciBiZz1cInByaW1hcnlcIiB2YXJpYW50PVwiZGFya1wiIGZpeGVkPVwidG9wXCI+XG4gICAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIlwiPlBlcnNvbmFsIERldGFpbHMgRm9ybSBJbiBOZXh0IEpzPC9OYXZiYXIuQnJhbmQ+XG4gICAgICAgIHthdXRoID8gKDxhIGNsYXNzTmFtZT17c3R5bGVzLmRpc3BsYXluYW1lfT5IZWxsbyB7Zmlyc3RuYW1lfSB7bGFzdG5hbWV9PC9hPikgOiBcIlwiIH1cbiAgICAgICAge2F1dGggPyAoPGEgY2xhc3NOYW1lPXtzdHlsZXMuZW1haWx9PkVtYWlsIElkIDoge2VtYWlsfTwvYT4pIDogXCJcIiB9XG4gICAgICAgIHthdXRoID8gKDxMaW5rICBocmVmPScvJz48YSBvbkNsaWNrPXsoKSA9PiBDbGVhckNvb2tpZXMoKX0gY2xhc3NOYW1lPXtzdHlsZXMub3B0aW9ufSA+U0lHTiBPVVQ8L2E+PC9MaW5rPikgOiBcIlwiIH1cbiAgICAgIDwvTmF2YmFyPlxuXG5cbiAgICA8L2Rpdj5cbiAgKVxuXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/header.component.js\n");

/***/ })

})