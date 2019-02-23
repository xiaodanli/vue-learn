"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFullName = getFullName;
exports.default = reverse;
exports.year = exports.Person = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// export let reverse = (str) => {
//     return str.split('').reverse().join('');
// }
// export let firstName = 'san';
// export let lastName = 'zhang';
// export let year = '2018';
var firstName = 'san';
var lastName = 'zhang';
var year = '2018';
exports.year = year;
setTimeout(function () {
  exports.year = year = '2010';
}, 500);

function getFullName() {
  return "".concat(firstName, "--").concat(lastName, "---").concat(year);
}

console.log(getFullName);

var Person =
/*#__PURE__*/
function () {
  function Person(name) {
    _classCallCheck(this, Person);

    this.name = 'lili';
  }

  _createClass(Person, [{
    key: "sayName",
    value: function sayName() {
      console.log(this.name);
    }
  }]);

  return Person;
}();

exports.Person = Person;

//可以快速看出抛出的模块
//as起别名 在引用时需要按别名引入
function reverse() {
  return "default";
}