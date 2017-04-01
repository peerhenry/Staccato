/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _table = __webpack_require__(3);

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var tableData = {
  id: 1,
  className: 'pure-table',
  style: {
    margin: 'auto',
    marginTop: '30px',
    marginBottom: '30px'
  },
  headerData: {
    rows: [{
      cells: [{ content: 'header1' }, { content: 'header2' }, { content: 'header5' }]
    }]
  },
  footerData: {
    rows: [{
      cells: [{ content: 'footer1' }, { content: 'footer2' }, { content: 'footer3' }]
    }]
  },
  bodyData: {
    rows: [{
      cells: [{
        content: 'yeah'
      }, {
        content: 'row1 cell2'
      }, {
        content: 'row1 cell3'
      }]
    }, {
      cells: [{
        content: 'row2 cell2'
      }, {
        content: 'row2 cell2'
      }, {
        content: 'row2 cell3'
      }]
    }]
  }
};

var App = function App(_ref) {
  _objectDestructuringEmpty(_ref);

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_table2.default, { tableData: tableData })
  );
};

exports.default = App;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Trow = function Trow(_ref) {
  var rowData = _ref.rowData,
      ElementSlug = _ref.ElementSlug;
  return _react2.default.createElement(
    "tr",
    { className: rowData.className, style: rowData.style },
    rowData.cells.map(function (cell, index) {
      return _react2.default.createElement(
        ElementSlug,
        { key: index, style: cell.style },
        " ",
        cell.content,
        " "
      );
    })
  );
};

var Tpart = function Tpart(_ref2) {
  var Slug = _ref2.Slug,
      ElementSlug = _ref2.ElementSlug,
      data = _ref2.data;
  return _react2.default.createElement(
    Slug,
    { className: data.className, style: data.style },
    data.rows.map(function (row, index) {
      return _react2.default.createElement(Trow, { key: index, rowData: row, ElementSlug: ElementSlug });
    })
  );
};

var Table = function Table(_ref3) {
  var tableData = _ref3.tableData;
  return _react2.default.createElement(
    "table",
    { className: tableData.className, style: tableData.style },
    tableData.headerData ? _react2.default.createElement(Tpart, { Slug: "thead", ElementSlug: "th", data: tableData.headerData }) : null,
    tableData.footerData ? _react2.default.createElement(Tpart, { Slug: "tfoot", ElementSlug: "td", data: tableData.footerData }) : null,
    tableData.bodyData ? _react2.default.createElement(Tpart, { Slug: "tbody", ElementSlug: "td", data: tableData.bodyData }) : null
  );
};

exports.default = Table;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _App = __webpack_require__(1);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = document.getElementById('app');
(0, _reactDom.render)(_react2.default.createElement(_App2.default, null), app);

/***/ })
/******/ ]);