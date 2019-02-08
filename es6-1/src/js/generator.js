function* hello(){
    yield 'hello1';
    yield 'hello2';
    return 'end';
}
let h = hello();
console.log(h.next());  //{value:'hello1',done:false}
console.log(h.next());  //{value:'hello2',done:false}
console.log(h.next());  //{value:'end',done:true}


