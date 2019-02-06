"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//ES5的类
// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.sayName = function(){
//     console.log(this.name)
// }
// let person1 = new Person('lili',18);
// person1.sayName();
//ES6的类

/**
 * class是关键字，后面紧跟类名，类名采用驼峰式命名
 * 
 * 在类名后紧跟{}，在{}里面,只能写方法，没有关键字，方法和方法之间没有逗号
 * 
*/
var Person =
/*#__PURE__*/
function () {
  function Person(name, age) {
    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }

  _createClass(Person, [{
    key: "sayName",
    value: function sayName() {
      console.log(this.name);
    }
  }, {
    key: "setName",
    value: function setName(newName) {
      this.name = newName;
    }
  }]);

  return Person;
}();

var person1 = new Person('lixd', 18);
person1.sayName();
person1.setName('zs');
person1.sayName(); //使用extends实现继承

var Student =
/*#__PURE__*/
function (_Person) {
  _inherits(Student, _Person);

  function Student(name, age) {
    _classCallCheck(this, Student);

    return _possibleConstructorReturn(this, _getPrototypeOf(Student).call(this, name, age));
  }

  _createClass(Student, [{
    key: "setId",
    value: function setId(id) {
      this.id = id;
    }
  }, {
    key: "sayId",
    value: function sayId() {
      console.log(this.id);
    }
  }], [{
    key: "add",
    value: function add() {
      //类的静态方法，不能被实例继承，直接调用 Student.add()
      console.log('add');
    }
  }]);

  return Student;
}(Person);

var student = new Student('ls', 10);
student.setName('qq');
student.setId(1);
student.sayId();