// function* hello(){
//     yield 'hello1';
//     yield 'hello2';
//     return 'end';
// }
// let h = hello();
// console.log(h.next());  //{value:'hello1',done:false}
// console.log(h.next());  //{value:'hello2',done:false}
// console.log(h.next());  //{value:'end',done:true}


// function* getnum(time){
//     let string = yield new Promise((reslove,reject)=>{
//         setTimeout(() => {
//             reslove('123')
//         },time)
//     })
//     return string 
// } 
// let num = getnum(1000);
// console.log(num.next()); 
// console.log(num.next()); //yield后面的语句只执行它不会返回结果

// //ES7 async
// function sleep(time){
//     return new Promise((reslove,reject) => {
//         setTimeout(() => {
//             reject("123")
//         },1000)
//     })
// }

// async function errorFun(){
//     try{
//         let result = await sleep(1000);
//         console.log(result)
//     }catch(err){
//         console.warn(err)
//     }
//     console.log("======");
//     return await Promise.resolve('hello')
// }
// errorFun().then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.warn(error);
// })

let a = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('a')
    },3000)    
});

let b = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('b')
    },3000) 
});

let arr = [a,b];

async function fun(){
    for(let item of arr){
        let result = await item;
        console.log(result);
    }
    return '结果'
}

fun();



