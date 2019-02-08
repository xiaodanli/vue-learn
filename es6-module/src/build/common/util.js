"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reverse = void 0;

var reverse = function reverse(str) {
  return str.split('').reverse().join('');
};

exports.reverse = reverse;