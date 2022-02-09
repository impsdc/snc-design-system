"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bloc = void 0;

var _react = _interopRequireDefault(require("react"));

require("../styles/scss/button.scss");

var Bloc = function Bloc(_ref) {
  var space = _ref.space,
      img = _ref.img;
  return /*#__PURE__*/_react.default.createElement("section", null, /*#__PURE__*/_react.default.createElement("img", {
    src: img,
    alt: "header",
    className: "bg-gray-300 block ml-auto mr-auto ".concat(space === "light" ? "pt-4" : space === "normal" ? "pt-12" : space === "medium" ? "pt-20" : space === "big" ? "pt-28" : "")
  }));
};

exports.Bloc = Bloc;
Bloc.defaultProps = {
  img: "",
  space: "light"
};