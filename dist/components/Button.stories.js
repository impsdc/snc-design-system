"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Edito = exports.DefaultInoui = exports.DefaultIcon = exports.DefaultDark = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

require("../styles/index.css");

var _Button = require("./Button");

var _default = {
  title: "Component/Button",
  component: _Button.Button
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Button.Button, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  label: 'Default',
  type: 'default'
};
var DefaultInoui = Template.bind({});
exports.DefaultInoui = DefaultInoui;
DefaultInoui.args = {
  label: 'Default Inoui',
  type: 'inoui'
};
var DefaultDark = Template.bind({});
exports.DefaultDark = DefaultDark;
DefaultDark.args = {
  label: 'Default Dark',
  type: 'dark'
};
var DefaultIcon = Template.bind({});
exports.DefaultIcon = DefaultIcon;
DefaultIcon.args = {
  label: 'Icon button',
  icon: 'phone'
};
var Edito = Template.bind({});
exports.Edito = Edito;
Edito.args = {
  icon: 'phone',
  type: "edito",
  label: 'Edito button'
};