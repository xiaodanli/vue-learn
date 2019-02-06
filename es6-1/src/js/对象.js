/**
 * Object.keys()  获取对象所有的key，返回值为数组
 * 
 * -----------ES6----------
 * 
 * Object.values()  获取对象所有的value，返回值为数组
 * 
 * Object.assgin(目标对象，源对象1，源对象2....)  
 * 
 * 把所有的源对象的所有属性都挂载到目标对象上,同名的属性会被覆盖，（后面的会覆盖前面的）
 * 
 * 对象防篡改的方法：分三个级别：
 * 
 * 第一种：不允许新增，允许修改和删除         Object.preventExtensions(obj);
 * 
 * 第二种：不允许新增，不允许删除，允许修改   Object.seal(obj)
 * 
 * 第三种：不允许新增，删除和修改            Object.freeze(obj)
 * 
 * Object.entries()  返回值是数组，其成员是参数对象自身的（不含继承的）所有可遍历属性的键值
 * 
 */

 //Object.values()  获取对象所有的value，返回值为数组

// let obj = {name:'lili',age:18};
// console.log(obj);

// let target = {};

// let obj1 = {a:1,b:2};

// let obj2 = {name:'lili',age:18,a:7};

// let a = Object.assign(target,obj1,obj2);

// a.name = 'lixd';

// console.log(a,target);

let obj = {name:'lili',age:18};

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


//属性的简写

let c = 10;
let d = 20;

let num = {
    c,
    d
};
console.log(num);

function getDate(){
    let date = new Date();

    let y = date.getFullYear();

    let m = date.getMonth() + 1;

    let d = date.getDate();

    return {y,m,d}

}

console.log(getDate());

/**
 * 注：
 * 
 * 属性值为变量的值
 * 
 * 属性名和变量名重名
 * */ 


//方法的简写

let funObj = {
    sum(a,b){
        console.log(a+b)
    },
    minus(a,b){
        console.log(a-b);
    }
};

funObj.sum(1,2);

//对象的扩展运算符

console.log({...obj});






















