"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = void 0;

var _react = _interopRequireDefault(require("react"));

require("../styles/scss/link.scss");

/* eslint-disable jsx-a11y/anchor-is-valid */
var Link = function Link(_ref) {
  var label = _ref.label,
      type = _ref.type,
      href = _ref.href,
      blank = _ref.blank,
      inoui = _ref.inoui,
      fontSize = _ref.fontSize,
      forVideo = _ref.forVideo;
  return /*#__PURE__*/_react.default.createElement("a", {
    className: "link ".concat(inoui ? 'inoui ' : '').concat(forVideo ? 'video ' : '').concat(type),
    href: !href ? '#' : type === 'phone' ? "tel:".concat(href) : href,
    target: blank ? "_blank" : '',
    style: {
      fontSize: "".concat(fontSize)
    },
    rel: "noreferrer"
  }, label);
};

exports.Link = Link;
Link.defaultProps = {
  label: '',
  type: 'internal',
  href: '',
  blank: false,
  inoui: false
};