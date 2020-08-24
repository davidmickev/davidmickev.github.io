"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function randColor() {
  return String("#" + Math.floor(Math.random() * 16777215).toString(16));
}

var _default = randColor;
exports["default"] = _default;