/**
 * ES5 类  构造函数 + 原型
 * 
*/

function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.sayName = function(){
    console.log(this.name);
}

let person1 = new Person('lili',18);

person1.sayName();

/**
 * 普通函数和构造函数的区别：调用的方式不同
 * 
 * 使用new关键字调用函数的具体步骤：
 * 
 * 第一步：定义一个空对象  var obj = {};
 * 
 * 第二步：obj.__proto__ = 类.prototype;
 * 
 * 第三步：类.call(obj)
 * 
 * 第四步：返回此对象
*/

//------------------------ES6--------------------------

/**
 * ES6的类可以看做是一个的语法糖，ES6的类的功能，ES5都可以实现
 * 
 * 使用class关键词，后面紧跟类名，类名采用驼峰式命名
 * 
 * 在类名之后，紧跟{},在{}内只能定义方法，方法和方法之间不能写逗号
 * 
 * constructor是类的默认方法，如果没有显示的定义，类会隐式的定义一个空的constructor方法
 * 
*/

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sayName(){
        console.log(this.name);
    }
}

let person = new Person('lixd',18);

console.log(typeof(Person)); //function

console.log(Person === Person.prototype.constructor);

console.log(person.constructor === Person.prototype.constructor);

person.sayName();

/**
 * 1>ES6类没有提升
 * 
 * 2>不能重名
 * 
 * 3>必须使用new关键字来调用
*/





