"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// -------------数组---------------
// let [a,b,c] = [1,2,3];
// console.log(a,b,c);
//左右数量不等
// let [m,n] = [1,4];  
// let [m,n] = [1,4,2];
// let [m,n,f] = [1,2];
// let [m,n] = [1,,2];
// let [m,,n] = [1,2,4];
// console.log(m,n);
//默认值
// let [m=2,n,f=10] = [1,2];
// console.log(m,n,f)
//嵌套
// let [[a,b],c,d] = [[1,2],3,[4,5]];
// console.log(a,b,c,d)
// -------------对象-----------------
//起别名 name起的别名x age起的别名交y
// let {name:x,age:y} = {name:'lili',age:18};
// let {name:x,age:y=10} = {name:'lili'};
// console.log(x,y);
// 左右值不一致
// let {name,age} = {name:'lili',age:18};
// let {name,age} = {name:'lili'};
// let {name} = {name:'lili',age:18};
// console.log(name,age);
//给默认值 用在判断变量是否时undefind,是的话重新赋值
// let {name='zs',age=12} = {name:'lili'};
// console.log(name,age);
//沿着原型链去寻找属性
// let {toString:o} = {};
// console.log(o);
// let {push,length} = [];
// console.log(push,length);
// --------- 函数参数的赋值 -------------
//本质还是对象和数组的解构赋值
//传入的是数组
// function fun([a=8,b]){
//     console.log(a,b)
// }
// fun([,2])
// function fun({name,address}){
//     console.log(name,address)
// }
// fun({name:'lili',age:18})
// ------ 解构赋值的应用 ------
//交换赋值
// let xx = 'x';
// let yy = 'y';
// [xx,yy] = [yy,xx];
// console.log(xx,yy);
//快速获取函数返回的值
// function getDate(){
//     let date = new Date();
//     let y = date.getFullYear();
//     let m = date.getMonth() + 1;
//     return {y:y,m:m}
// }
// let {y:year,m:month} = getDate();
// console.log(year,month);
//获取对象的属性值
// <div class="wrap" style=""> <p>hello</p> </div>
var obj = {
  tagName: 'div',
  props: {
    class: 'wrap',
    style: 'width:100px;height:100px;background:red'
  },
  children: {
    tagName: 'p',
    children: 'hello'
  }
};

function createElement(obj) {
  var tagName = obj.tagName,
      props = obj.props,
      children = obj.children;
  var el = document.createElement(tagName);

  if (props) {
    for (var key in props) {
      el.setAttribute(key, props[key]);
    }
  }

  if (_typeof(children) === 'object') {
    var child = createElement(children);
    el.appendChild(child);
  } else {
    el.innerHTML = children;
  }

  return el;
}

console.log(createElement(obj));