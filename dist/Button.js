"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

var Button = function Button(_ref) {
  var type = _ref.type,
      label = _ref.label,
      icon = _ref.icon;
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "\n            btn\n            default\n            ".concat(type, "\n            ").concat(icon ? 'icon-btn' : '', "\n            ")
  }, icon && /*#__PURE__*/_react.default.createElement("span", {
    className: "icon ".concat(icon)
  }), label);
};

exports.Button = Button;
Button.defaultProps = {
  type: 'default',
  onClick: undefined
};