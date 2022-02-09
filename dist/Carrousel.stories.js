"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Inoui = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Carrousel = require("./Carrousel");

var _data = require("../helpers/data");

var _default = {
  title: "Component/Carrousel",
  component: _Carrousel.Carrousel
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Carrousel.Carrousel, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  inoui: false,
  space: "medium",
  slide: _data.data
};
var Inoui = Template.bind({});
exports.Inoui = Inoui;
Inoui.args = {
  inoui: true,
  space: "light",
  slide: _data.data
};