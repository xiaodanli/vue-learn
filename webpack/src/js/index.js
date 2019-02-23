// let fun = require('./util');

class Person{
    constructor(name){
        this.name = name;
    }
    sayName(){
        console.log(this.name)
    }
}
let p1 = new Person('456');
console.log(p1);
// console.log(fun('index'));

import {sum} from 'util'
console.log(sum)
