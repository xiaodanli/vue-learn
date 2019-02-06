//ES5的类
//使用new关键词调用类时，

/**
 * 第一步：定义一个空对象  var obj = {};
 * 
 * 第二步：obj.__proto__ = 类.prototype
 * 
 * 第三步：类.call(obj);
 * 
 * 第四步：返回此对象
 * 
*/

// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.sayName = function(){
//     console.log(this.name)
// }

// let person1 = new Person('lili',18);

// person1.sayName();

//ES6的类

/**
 * class是关键字，后面紧跟类名，类名采用驼峰式命名
 * 
 * 在类名后紧跟{}，在{}里面,只能写方法，没有关键字，方法和方法之间没有逗号
 * 
 * constructor是类的默认方法，一个类里必须有constructor的方法，如果没有显示的定义，
 * 
 * 一个空的constructor会被默认添加
 * 
*/

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    sayName(){
        console.log(this.name)
    }

    setName(newName){
        this.name = newName;
    }
}

console.log(typeof(Person));

console.log(Person === Person.prototype.constructor);  //类的本身指向构造函数


//上面的类等同于

// Person.prototype = {
//     constructor(){

//     },
//     sayName(){},
//     setName(){}
// } 

let person1 = new Person('lixd',18);
console.log(person1.constructor === Person.prototype.constructor)

person1.sayName();

person1.setName('zs');

person1.sayName();

//使用extends实现继承

// class Student extends Person {
//     constructor(name,age){
//         super(name,age);
//     }   
//     setId(id){
//         this.id = id;
//     }
//     sayId(){
//         console.log(this.id);
//     }

//     static add(){  //类的静态方法，不能被实例继承，直接调用 Student.add()
//         console.log('add');
//     }
// }

// let student = new Student('ls',10);
// student.setName('qq');
// student.setId(1);
// student.sayId();


/**
 * 普通函数和构造函数的区别：调用方式不同
 * 
*/



