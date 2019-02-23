//先介绍es6是什么？es6的由来  
//再介绍为什么使用es6？
//babel的使用

//再介绍let和const

//es5 有全局作用域和局部作用域  

//es6 有块级作用域  {} 

//声明变量  

//es5 使用var

//es6 使用let const（常量）

//let 有块级作用域，var没有
//let 声明的变量不能成为window的属性
//let 没有变量提升，var有
//暂时性死区 

if(true){
    let b = 10;
}
console.log(window);

// let i = 'bawei';

let lis = document.querySelectorAll('li');
//es5
// for(var i = 0;i<4;i++){
//     (function(m){
//         lis[m].onclick = function(){
//             console.log(m);
//         }
//     })(i)
// }

//es6
for(let i = 0;i<4;i++){
    lis[i].onclick = function(){
        console.log(i);
    }
}

//变量提升
// console.log(a);
// let a = 10;

// 暂时性死区---局部环境中的m暂时封锁到该区域，其他的与它同名的都不能使用

// let m = 78;

// function fun(){
//     // console.log(m);
//     let m = 20;    
// }

// fun();

// //let 在同一作用域内变量不能重复定义
// for (let i = 0; i < 4; i++) {
//     let i = 10;
//     {
//         let i = 'zs';
//         console.log(i);
//     }
//     console.log(i);   
// }

// // let a = 10;
// // let a = 20;

// // const b;

// //js分基本类型和引用类型

// // 基本类型存储在栈内存中
// // 引用类型存储在栈内存和推内存中
// // 在es6中栈区的值是不可变的，堆区的值是可变的

//基本类型
// const str = 1;
// if(true){
//     const str = 'bawei';
//     console.log(str)
// }
// console.log(str);

//引用类型 对象
// const arr = [1,2,3];

// arr.push(5);

// // arr = 1; //报错

// console.log(arr);











