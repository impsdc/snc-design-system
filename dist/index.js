"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("./styles/index.css");

var _App = _interopRequireDefault(require("./App"));

var _reportWebVitals = _interopRequireDefault(require("./reportWebVitals"));

// import * as styles from './src/styles/scss';
// export { styles };
// export * from './src/components/Link';
// export * from './src/components/Button';
_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_react.default.StrictMode, null, /*#__PURE__*/_react.default.createElement(_App.default, null)), document.getElementById('root')); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


(0, _reportWebVitals.default)();