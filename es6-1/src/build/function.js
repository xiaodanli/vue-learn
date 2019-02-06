"use strict";

/**
 * 函数的默认值
 */
function fun() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
  console.log(a, b);
}

fun();
/**
 * 函数的参数可以有扩展运算符
*/

function dis(a) {
  for (var _len = arguments.length, u = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    u[_key - 1] = arguments[_key];
  }

  console.log(a, u);
}

dis(1, 2, 3, 4);
/**
 * 箭头函数
 * 
 * 在箭头函数里有些东西可以省略
 * 
 * 1>当参数为一个时，()可以省略
 * 
 * 2>当{}中只有一条语句时，可以省略{}
 * 
 * 3>当我们省略{},默认在这条语句前加上return
 * 
 * 
 * 箭头函数的特点：
 * 
 * 1>不能做构造函数
 * 
 * 2>没有this  this指向定义函数所在的对象，不再是调用时的对象
 * 
 * 3>不能使用arguments
 * 
 * */

var arr = [1, 2, 3];
arr.forEach(function (item) {
  return console.log(item);
});

function fun() {
  document.onclick = function (a) {
    console.log(this);
  }; // document.onclick = () =>{
  //     console.log(this);
  // }

}

fun();

var sum = function sum(w) {
  var q = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
    return 5;
  };
  console.log(q + w);
};

sum(1);