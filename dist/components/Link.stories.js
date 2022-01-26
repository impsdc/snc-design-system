"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Videos = exports.Phone = exports.Internal = exports.ExternalInoui = exports.External = exports.Download = void 0;

var _react = _interopRequireDefault(require("react"));

require("../styles/index.css");

var _Link = require("./Link");

var _default = {
  title: "Component/Link",
  component: _Link.Link
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Link.Link, args);
};

var Internal = Template.bind({});
exports.Internal = Internal;
Internal.args = {
  label: 'Internal',
  type: "internal",
  blank: true,
  fontSize: '1.2rem'
};
var External = Template.bind({});
exports.External = External;
External.args = {
  label: 'External',
  type: 'external',
  blank: true
};
var ExternalInoui = Template.bind({});
exports.ExternalInoui = ExternalInoui;
ExternalInoui.args = {
  label: 'External InOui',
  type: 'external',
  blank: true,
  inoui: true
};
var Download = Template.bind({});
exports.Download = Download;
Download.args = {
  label: 'Download',
  type: 'download',
  blank: true,
  inoui: false
};
var Phone = Template.bind({});
exports.Phone = Phone;
Phone.args = {
  label: 'Phone InOui',
  type: 'phone',
  blank: true,
  href: '0606060606',
  inoui: true
};
var Videos = Template.bind({});
exports.Videos = Videos;
Videos.args = {
  label: 'Video',
  type: 'external',
  forVideo: true,
  blank: true,
  inoui: true,
  fontSize: '1.8rem'
};