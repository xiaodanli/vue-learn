"use strict";

/**
 * 
 * Number.isFinite()   检查一个数值是否是有限的，返回值为Boolean
 * 
 * 注：不是数值类型的，一律返回false，在其内部不会进行数值转换
 * 
 * Number.isNaN()      检查一个数值是否不是一个数字
 * 
 * 注：ES5的方法：isFinite()   isNaN()
 * 
 *     ES6的方法：Number.isFinite()  Number.isNaN()
 * 
 * es5的方法会先把数值转换为数字，然后再进行判断，es6不会进行数值的转换
 * 
 * Number.parseInt()   把值转换为整数
 * 
 * Number.parseFloat() 把值转换为小数
 * 
 * 注：ES5中parseInt()  parseFloat()  
 * 
 *     ES6中Number.parseInt()  Number.parseFloat()
 * 
 * 这样写的目的是：只是简单的移植，没有任何变化，减少全局变量，逐渐实现语言模块化
 * 
 * Math.trunc()  去掉小数部分
 * 
 * Math.sign()   判断一个数值是正数，负数，还是0
 */
var num = 1;
Number.isFinite(num);