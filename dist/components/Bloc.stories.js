"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

require("../styles/index.css");

var _Bloc = require("./Bloc");

var _bloc = _interopRequireDefault(require("../images/bloc2.jpg"));

var _default = {
  title: "Component/Bloc",
  component: _Bloc.Bloc
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Bloc.Bloc, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  img: _bloc.default,
  space: "medium"
};