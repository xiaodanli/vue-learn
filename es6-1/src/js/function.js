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

/**
 * 函数的默认值
 */

//  function fun(a = 3,b = 4){
//     console.log(a,b)
//  }
//  fun();

let arr = [1,2,3];
console.log(arr.map(item => item+10));

//特点一：不能用做构造函数

//构造函数和其他函数的区别：调用方式的不同

//通过new关键字调用的函数为构造函数。

//特点二：this指向

let count = 0;

let obj = {
    count:10,
    add(){
        let setCount1 = function(){
            this.count = 20;
            console.log(this);  //window  调用的对象
            console.log(this.count);
        }

        let setCount2 = () => {
            this.count = 30;
            console.log(this);  //obj  定义的对象
            console.log(this.count);
        }
        setCount1();
        setCount2();
    }
}

obj.add();

//特点三：不能使用arguments，函数的参数可以有扩展运算符,代替方法 ...

let fun = (...params) => params.reduce((pre,next) => pre+next);
console.log(fun(1,2,3,4,5));

//  function dis(a,...u){
//     console.log(a,u);
//  }

//  dis(1,2,3,4);


// function fun(){
//     document.onclick = function(a){
//         console.log(this);
//     }
//     // document.onclick = () =>{
//     //     console.log(this);
//     // }
// }

// fun();

// let sum = (w,q=()=>{return 5}) => {
//     console.log(q+w);
// }

// sum(1)
