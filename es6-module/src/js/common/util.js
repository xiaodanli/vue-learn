// export let reverse = (str) => {
//     return str.split('').reverse().join('');
// }

// export let firstName = 'san';
// export let lastName = 'zhang';
// export let year = '2018';

let firstName = 'san';
let lastName = 'zhang';
let year = '2018';

setTimeout(() => {
    year = '2010'
},500)

function getFullName(){
    return `${firstName}--${lastName}---${year}`
}

console.log(getFullName);

class Person{
    constructor(name){
        this.name='lili'
    }
    sayName(){
        console.log(this.name);
    }
}

export {getFullName,Person,year}; //可以快速看出抛出的模块

//as起别名 在引用时需要按别名引入

export default function reverse(){
    return "default"
}








