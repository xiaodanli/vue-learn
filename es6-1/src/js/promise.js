/**
 * Promise 承诺
 * 
 * Promise是一个对象，此对象是一个构造函数，可以获取异步操作的消息。
 * 
 * 它可以看做是一个容器，里面保存着未来才会结束的事件，（通常是异步的结果）
 * 
 * 解决问题：异步编程的解决方案,可以将异步操作以同步操作的流程写出来，不用再层层嵌套
 * 
 * Promise特点:
 * 
 * 1>对象的状态不受外界影响
 * 
 * Promise代表一种异步状态，它有三种状态：pending(进行中) fulfilled(已成功) rejected(已失败)
 * 
 * 2>一旦状态改变就不会再变
 * 
 * pending ---> fulfilled
 * 
 * pending ---> rejected
 * 
 * Promise.all([promise1,promise2,promise3...]).then((res) => {})  将多个promise包装成多个promise
 * 
 * Promise.prototype.then()  第一个函数：成功的函数  第二个函数：失败的函数
 * 
 * Promise.prototype.catch()  捕捉异常
 * 
 * Promise.prototype.finally() 不管promise最后的状态如何，都会执行
 
 */

 let timer = (n) => {
     return new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve('成功')
        },n)
    })
 };

 timer(1000).then((results) => {
    console.log(results);
 }).catch((error)=>{
    console.log(error);
 }).finally(() =>{
     console.log('end');
 })


 function loadImg(params){
    return new Promise(function(reslove,reject){
        let imgObj = new Image();
        imgObj.src=params.url;
        imgObj.title = params.title;
        imgObj.onload = () => {
            reslove(imgObj);
        };

        imgObj.onerror = () => {
            reject(new Error('img url not is'+params.url));
        }
    })
 }

 loadImg({
     title:'图片',
     url:'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_86d58ae1.png'
 }).then((results) => {
    document.body.append(results);
 },(error) => {
    console.lwarn(error)
 })

 function getNumber(min,max){
     return new Promise((reslove,reject) => {
        setTimeout(() => {
            reslove(Math.floor(Math.random()*(max-min+1)+min));
        },1000)
     })
 }

 Promise.all([getNumber(10,20),getNumber(20,30),getNumber(30,40)]).then((res) => {
     console.log(res);
 })




