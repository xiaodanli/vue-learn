/**
 * 函数的默认值
 */

 function fun(a = 3,b = 4){
    
    console.log(a,b)
 }
 fun();

 /**
  * 函数的参数可以有扩展运算符
 */

 function dis(a,...u){
    console.log(a,u);
 }

 dis(1,2,3,4);

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

let arr = [1,2,3];

arr.forEach(item => console.log(item))

function fun(){
    document.onclick = function(a){
        console.log(this);
    }
    // document.onclick = () =>{
    //     console.log(this);
    // }
}

fun();

let sum = (w,q=()=>{return 5}) => {
    console.log(q+w);
}

sum(1)
