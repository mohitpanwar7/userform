webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_trex_Desktop_practiceapp_personaldetailsfull_nextfront_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_sign_in_and_sign_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sign-in-and-sign-up.component */ \"./components/sign-in-and-sign-up.component.js\");\n/* harmony import */ var _components_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/header.component */ \"./components/header.component.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index */ \"./pages/index.js\");\n\n\n\n\nvar _jsxFileName = \"/home/trex/Desktop/practiceapp/personaldetailsfull/nextfront/pages/_app.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_trex_Desktop_practiceapp_personaldetailsfull_nextfront_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\nfunction MyApp(_ref) {\n  _s();\n\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      auth = _useState[0],\n      setAuth = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var token = js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get(\"token\");\n\n    if (token != undefined) {\n      console.log(\"token======>\", token);\n      fetch('/api/userauth', {\n        method: 'POST',\n        headers: {\n          'Content-type': 'application/json'\n        },\n        body: JSON.stringify(token)\n      }).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        console.log(\"token response===>\", response);\n\n        if (response.message != \"Token is invalid!\") {\n          js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.set(\"id\", response.id);\n          js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.set(\"email\", response.email);\n          js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.set(\"firstname\", response.firstname);\n          js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.set(\"lastname\", response.lastname);\n        } else {\n          js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove(\"id\", {\n            path: ''\n          });\n          js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove(\"email\", {\n            path: ''\n          });\n          js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove(\"firstname\", {\n            path: ''\n          });\n          js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove(\"lastname\", {\n            path: ''\n          });\n          js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove(\"token\", {\n            path: ''\n          }); // this.setState({ auth: false });\n\n          setAuth(false);\n        }\n      });\n      var id = js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get(\"id\");\n      console.log(\"cookiesuserid\", id);\n\n      if (id != null) {\n        setAuth(true);\n      } else {\n        setAuth(false);\n      }\n    } else {\n      setAuth(false);\n    }\n\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {}, void 0, false);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      style: {\n        marginTop: \"100\"\n      },\n      children: auth ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 18\n      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_index__WEBPACK_IMPORTED_MODULE_8__[\"default\"], _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 51\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}\n\n_s(MyApp, \"9WAqlH7ce18Do7Hs9ag7VBaOXCs=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"]];\n});\n\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJhdXRoIiwic2V0QXV0aCIsInVzZUVmZmVjdCIsInRva2VuIiwiQ29va2llcyIsImdldCIsInVuZGVmaW5lZCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJtZXNzYWdlIiwic2V0IiwiaWQiLCJlbWFpbCIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwicmVtb3ZlIiwicGF0aCIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULE9BQXlDO0FBQUE7O0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTtBQUN2QyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUR1QyxrQkFFZkMsc0RBQVEsQ0FBQyxLQUFELENBRk87QUFBQSxNQUVoQ0MsSUFGZ0M7QUFBQSxNQUUxQkMsT0FGMEI7O0FBR3ZDQyx5REFBUyxDQUFDLFlBQU07QUFFZCxRQUFJQyxLQUFLLEdBQUdDLGdEQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLENBQVo7O0FBQ0EsUUFBSUYsS0FBSyxJQUFJRyxTQUFiLEVBQXdCO0FBQ3RCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLEVBQTRCTCxLQUE1QjtBQUNBTSxXQUFLLENBQUMsZUFBRCxFQUNIO0FBQ0VDLGNBQU0sRUFBRSxNQURWO0FBRUVDLGVBQU8sRUFBRTtBQUFFLDBCQUFnQjtBQUFsQixTQUZYO0FBR0VDLFlBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVYLEtBQWY7QUFIUixPQURHLENBQUwsQ0FNR1ksSUFOSCxDQU1RLFVBQUFDLFFBQVE7QUFBQSxlQUFJQSxRQUFRLENBQUNDLElBQVQsRUFBSjtBQUFBLE9BTmhCLEVBT0dGLElBUEgsQ0FPUSxVQUFBQyxRQUFRLEVBQUk7QUFDaEJULGVBQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaLEVBQWtDUSxRQUFsQzs7QUFDQSxZQUFJQSxRQUFRLENBQUNFLE9BQVQsSUFBb0IsbUJBQXhCLEVBQTZDO0FBQzNDZCwwREFBTyxDQUFDZSxHQUFSLENBQVksSUFBWixFQUFrQkgsUUFBUSxDQUFDSSxFQUEzQjtBQUNBaEIsMERBQU8sQ0FBQ2UsR0FBUixDQUFZLE9BQVosRUFBcUJILFFBQVEsQ0FBQ0ssS0FBOUI7QUFDQWpCLDBEQUFPLENBQUNlLEdBQVIsQ0FBWSxXQUFaLEVBQXlCSCxRQUFRLENBQUNNLFNBQWxDO0FBQ0FsQiwwREFBTyxDQUFDZSxHQUFSLENBQVksVUFBWixFQUF3QkgsUUFBUSxDQUFDTyxRQUFqQztBQUNELFNBTEQsTUFLTztBQUNMbkIsMERBQU8sQ0FBQ29CLE1BQVIsQ0FBZSxJQUFmLEVBQXFCO0FBQUVDLGdCQUFJLEVBQUU7QUFBUixXQUFyQjtBQUNBckIsMERBQU8sQ0FBQ29CLE1BQVIsQ0FBZSxPQUFmLEVBQXdCO0FBQUVDLGdCQUFJLEVBQUU7QUFBUixXQUF4QjtBQUNBckIsMERBQU8sQ0FBQ29CLE1BQVIsQ0FBZSxXQUFmLEVBQTRCO0FBQUVDLGdCQUFJLEVBQUU7QUFBUixXQUE1QjtBQUNBckIsMERBQU8sQ0FBQ29CLE1BQVIsQ0FBZSxVQUFmLEVBQTJCO0FBQUVDLGdCQUFJLEVBQUU7QUFBUixXQUEzQjtBQUNBckIsMERBQU8sQ0FBQ29CLE1BQVIsQ0FBZSxPQUFmLEVBQXdCO0FBQUVDLGdCQUFJLEVBQUU7QUFBUixXQUF4QixFQUxLLENBTUw7O0FBQ0F4QixpQkFBTyxDQUFDLEtBQUQsQ0FBUDtBQUNEO0FBRUYsT0F4Qkg7QUF5QkEsVUFBTW1CLEVBQUUsR0FBR2hCLGdEQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaLENBQVg7QUFDQUUsYUFBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2QlksRUFBN0I7O0FBQ0EsVUFBSUEsRUFBRSxJQUFJLElBQVYsRUFBZ0I7QUFDZG5CLGVBQU8sQ0FBQyxJQUFELENBQVA7QUFDRCxPQUZELE1BRU87QUFDTEEsZUFBTyxDQUFDLEtBQUQsQ0FBUDtBQUNEO0FBQ0YsS0FsQ0QsTUFrQ087QUFDTEEsYUFBTyxDQUFDLEtBQUQsQ0FBUDtBQUNEOztBQUVELHdCQUNFLHVKQURGO0FBS0QsR0E5Q1EsQ0FBVDtBQWdEQSxzQkFDRTtBQUFBLDJCQUNFO0FBQUssV0FBSyxFQUFFO0FBQUV5QixpQkFBUyxFQUFFO0FBQWIsT0FBWjtBQUFBLGdCQUNHMUIsSUFBSSxnQkFBSSxxRUFBQyxTQUFELG9CQUFlSixTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBSixnQkFBcUMscUVBQUMsOENBQUQsb0JBQVNBLFNBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUQ1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFPRDs7R0ExRFFGLEs7VUFDUUkscUQ7OztLQURSSixLO0FBNERNQSxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNpZ25JbkFuZFNpZ25VcFBhZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2lnbi1pbi1hbmQtc2lnbi11cC5jb21wb25lbnRcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBBcHAgZnJvbSAnLi9pbmRleCc7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBbYXV0aCwgc2V0QXV0aF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICB2YXIgdG9rZW4gPSBDb29raWVzLmdldChcInRva2VuXCIpXG4gICAgaWYgKHRva2VuICE9IHVuZGVmaW5lZCkge1xuICAgICAgY29uc29sZS5sb2coXCJ0b2tlbj09PT09PT5cIiwgdG9rZW4pXG4gICAgICBmZXRjaCgnL2FwaS91c2VyYXV0aCcsXG4gICAgICAgIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0b2tlbilcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJ0b2tlbiByZXNwb25zZT09PT5cIiwgcmVzcG9uc2UpXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLm1lc3NhZ2UgIT0gXCJUb2tlbiBpcyBpbnZhbGlkIVwiKSB7XG4gICAgICAgICAgICBDb29raWVzLnNldChcImlkXCIsIHJlc3BvbnNlLmlkKTtcbiAgICAgICAgICAgIENvb2tpZXMuc2V0KFwiZW1haWxcIiwgcmVzcG9uc2UuZW1haWwpO1xuICAgICAgICAgICAgQ29va2llcy5zZXQoXCJmaXJzdG5hbWVcIiwgcmVzcG9uc2UuZmlyc3RuYW1lKTtcbiAgICAgICAgICAgIENvb2tpZXMuc2V0KFwibGFzdG5hbWVcIiwgcmVzcG9uc2UubGFzdG5hbWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBDb29raWVzLnJlbW92ZShcImlkXCIsIHsgcGF0aDogJycgfSk7XG4gICAgICAgICAgICBDb29raWVzLnJlbW92ZShcImVtYWlsXCIsIHsgcGF0aDogJycgfSk7XG4gICAgICAgICAgICBDb29raWVzLnJlbW92ZShcImZpcnN0bmFtZVwiLCB7IHBhdGg6ICcnIH0pO1xuICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoXCJsYXN0bmFtZVwiLCB7IHBhdGg6ICcnIH0pO1xuICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoXCJ0b2tlblwiLCB7IHBhdGg6ICcnIH0pO1xuICAgICAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7IGF1dGg6IGZhbHNlIH0pO1xuICAgICAgICAgICAgc2V0QXV0aChmYWxzZSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSlcbiAgICAgIGNvbnN0IGlkID0gQ29va2llcy5nZXQoXCJpZFwiKVxuICAgICAgY29uc29sZS5sb2coXCJjb29raWVzdXNlcmlkXCIsIGlkKTtcbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIHNldEF1dGgodHJ1ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldEF1dGgoZmFsc2UpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEF1dGgoZmFsc2UpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIFxuICAgICAgPC8+XG4gICAgKVxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwMFwiIH19PlxuICAgICAgICB7YXV0aCA/ICg8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+KSA6ICg8QXBwIHsuLi5wYWdlUHJvcHN9Lz4pIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

})