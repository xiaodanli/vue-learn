"use strict";

//字符串去空格 

/*
    trim()      去掉左右的空格
    trimLeft()  去掉左边的空格
    trimRight() 去掉右边的空格

    模板字符串  `${变量}`

    str.repeat(n)    输出重复n次的字符串   n:Number

    str.includes(检测字符串)   检测str的内部是否存在检测的字符串，返回值为布尔值

    str.startsWith(检测字符串) 检测str是否以检测字符串开始的   返回值为布尔值 
    
    str.endsWith(检测字符串)   检测str是否以检测字符串结尾的   返回值为布尔值

    区别indexOf()   返回的是指定下标，不是布尔值

    str.padStart(n,'@')     
    
    第一个参数：:填充后的字符串的总长度  第二个参数：填充的内容  

    str.padEnd(n,'@')      在str字符串的结尾填充n个@符号

    第一个参数：:填充后的字符串的总长度  第二个参数：填充的内容  

*/
//str.startsWith(检测字符串)  str.endsWith(检测字符串)
var url = '';
var imgUrl = '1.jpg';
var isJpg = imgUrl.endsWith('.png');
console.log(isJpg);
var file = 'file:///E:/%E5%A4%87%E8%AF%BE/es6-tao/new-own/vue-learn/es6-1/src/index.html';
console.log(file.startsWith('file')); //str.padStart(n,'@') str.padEnd(n,'@')

var str = 'abc';
console.log(str.padStart(6, '@'));
console.log(str.padEnd(6, '@'));