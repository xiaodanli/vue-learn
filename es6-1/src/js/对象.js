/**
 * Object.keys()  获取对象所有的key，返回值为数组
 * 
 * -----------ES6----------
 * 
 * Object.values()  获取对象所有的value，返回值为数组
 * 
 * Object.entries()  返回值是数组，其成员是参数对象自身的（不含继承的）所有可遍历属性的键值数组
 * 
 * Object.is()      比较两个值相等 
 * 
 * es5里面有两个比较相等的 == === '=='可以进行数值的转换   '===' NaN不等于NaN
 * 
 * Object.assgin(目标对象，源对象1，源对象2....)  
 * 
 * 把所有的源对象的所有属性都挂载到目标对象上,同名的属性会被覆盖，（后面的会覆盖前面的）
 * 
 */

 //属性的简写

// let c = 10;
// let d = 20;

// let num = {
//     c,
//     d
// };
// console.log(num);

// function getDate(){
//     let date = new Date();

//     let y = date.getFullYear();

//     let m = date.getMonth() + 1;

//     let d = date.getDate();

//     return {y,m,d}

// }

// console.log(getDate());

/**
 * 注：
 * 
 * 属性值为变量的值
 * 
 * 属性名和变量名重名
 * */ 


//方法的简写

// let funObj = {
//     sum(a,b){
//         console.log(a+b)
//     },
//     minus(a,b){
//         console.log(a-b);
//     }
// };

// funObj.sum(1,2);

//对象的扩展运算符

// console.log({...obj});

 //Object.values()  获取对象所有的value，返回值为数组

// let obj = {name:'lili',age:18};
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// console.log(Object.is(NaN,NaN)) //true
// console.log(Object.is({},{})) //false
// console.log(Object.is(-0,+0)) //false

// // console.log(obj.__proto__);
// // console.log(Object.create(obj));
// Object.setPrototypeOf(obj,{aa:1});
// console.log(Object.getPrototypeOf(obj));
// console.log(obj);


//-----------------------Object.assgin()-------------------------------


// let target = {};

// let obj1 = {name:'zs',sex:'男'};

// let obj2 = {name:'lili',age:18,address:'河北省'};

// let obj = Object.assign(target,obj1,obj2);

// obj.name = 'lixd';

// console.log(obj,target);

//对Object.assgin()方法的封装

// function extend(o,...arr){
//     arr.forEach((item) => {
//         for(let key in item){
//             o[key] = item[key];
//         }
//     })
//     return o
// }

// console.log(extend({},obj1,obj2));


//-----------------------Object.defineProperty()-------------------------------

// Object.defineProperty(obj,'age',{
//     value:19,       //值
//     writable:true,  //不可写
//     enumerable:false, //可枚举
//     configurable:false //是否可使用delete删除，true时删除后还可以再次设置，false不可删除但可以设置
// })

// console.log(obj.age);
// obj.age = 20;
// console.log(obj.age);
// for(let i in obj){
//     console.log(i);
// }
// delete obj.age;

// console.log(obj.age);

// obj.age = 10;
// console.log(obj.age);







//--------------------------------------------------------------
/**
 * 对象防篡改的方法：分三个级别：
 * 
 * 第一种：不允许新增，允许修改和删除         Object.preventExtensions(obj);
 * 
 * 第二种：不允许新增，不允许删除，允许修改   Object.seal(obj)
 * 
 * 第三种：不允许新增，删除和修改            Object.freeze(obj)
 * 
*/
// let obj = {name:'lili',age:18};

// console.log(Object.isExtensible(obj));

// Object.preventExtensions(obj);

// Object.seal(obj);

// Object.freeze(obj);

// obj.address = '河北';

// console.log(obj);

// obj.name = "lixd";

// console.log(obj);

// delete obj.age;

// console.log(obj);

// console.log(Object.isFrozen(obj));
// console.log(Object.isExtensible(obj));
// console.log(Object.isSealed(obj));


// let {name,address} = obj;

// console.log(name,address);

// console.log(Object.entries(obj));


let obj1 = {
    name:'lili',
    age:18,
    sex:'女'
};

let obj2 = {
    name:'lixd',
    age:10,
    address:'河北省',
    say(){
        console.log('say');
    }
};

//{name:'lixd',age:10,sex:0,address:'河北省'}

// function extend(o,...arr){
//     arr.forEach(function(item){
//         for(let i in item){
//             o[i] = item[i];
//         }
//     })
//     return o
// }

// console.log(extend({},obj1,obj2))
// $.extend({},obj1,obj2....);  不想改变原对象


// console.log(obj1.toString());

// for(let i in obj1){
//     console.log(i);
// }

// Object.defineProperty(obj1,'aa',{
//     value:'123'
// })
// console.log(obj1);
// for(let i in obj1){
//     console.log(i);
// }

// let info = Object.getOwnPropertyDescriptor(obj1,'aa');
// console.log(info);

/*
{
    configurable: true  是否可配置
    enumerable: true    是否可枚举 
    value: "lili"       属性的值
    writable: true      是否可编写
}
*/
// Object.defineProperty(obj1,'name',{
//     value:'zs',
//     enumerable:true,
//     configurable:false,
//     writable:false
// })

// delete obj1.name  //configurable:false   属性不可删除

//只遍历可枚举的属性

console.log(Object.keys(obj1))


Object.defineProperty(obj1,'name',{
    get(){
        return 'lisi'
    },
    set(val){
        alert('刚成年')
    }
})

console.log(obj1.name);
obj1.name = 'zhaowu';

console.log(Object.entries(obj1))

Object.setPrototypeOf(obj1,{});

console.log(obj1.__proto__ === obj1.constructor.prototype)






















