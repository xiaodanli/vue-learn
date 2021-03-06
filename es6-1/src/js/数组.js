//还差一个for of

/**
 * push 在数组的末尾添加元素
 * 
 * unshift 在数组的开头添加元素
 * 
 * pop  在数组的结尾删除元素
 * 
 * shift 在数组的开头删除元素
 * 
 * sort  排序
 * 
 * reverse 翻转数组
 * 
 * slice 截取元素，不会改变原数组
 * 
 * splice 截取元素，会改变原数组 
 * 
 * some  循环数组，只有有一个符合条件，返回值为真
 * 
 * every 循环数组，所有的项都符合条件时，返回值为真
 * 
 * forEach 循环数组，没有返回值
 * 
 * map     循环数组, 有返回值
 * 
 * join    把数组以特定字符连接成字符串
 * 
 * concat  拼接数组
 * 
 * indexOf    查找符合条件的下标，找不到返回-1
 *
 * Array.isArray()   检测变量是否为数组，返回布尔值
 * 
 * ---------es6新增的方法------------
 * 
 * Array.from(类数组)   把类数组转化为真数组  返回的是一个真正的数组
 * 
 * Array.of()     把一组值转换为数组  弥补了Array(10)的缺点  
 * 
 * find(function(val,key,原数组){return 条件})       参数为回调函数，返回的是符合条件的第一个元素
 * 
 * findIndex(function(val,key,原数组){return 条件})  参数为回调函数，返回的是第一个符合条件的下标
 * 
 * includes()  返回布尔值 和indexOf不同,对NaN的操作不同
 * 
 * fill() 
 * 
 * 只传一个参数
 * 
 * fill(填充的元素)     用填充元素填充数组 
 * 
 * fill(填充的元素,开始下标,结束下标)   
 * 
 * 用填充元素把开始下标到结束下标（不包括结束下标）的元素全部填充掉
 * 
 * copyWithin()
 * 
 * ...扩展运算符 
*/

// let arr = [1,2,3];
// arr.forEach(function(item,index,ss){
//     console.log(`${item}----${index}----${ss}`);
// })

//Array.from()

// let lis = document.querySelectorAll('li');

// lis = Array.from(lis);

// console.log(Array.isArray(lis));

//Array.of()

// let arr = Array.of(1,2,3,4,NaN);

// let arr1 = arr.findIndex(function(val,key){
//     return val > 2
// })

// console.log(arr1);

//fill 只传一个参数:基本类型和引用类型

// let arr3 = new Array(3).fill({name:'lili'}); //[{name:'lili'},{name:'lili'},{name:'lili'}]

// arr3[0].name = 'lixd';

// console.log(arr3) //[{name:'lixd'},{name:'lixd'},{name:'lixd'}]

//注：填充的数据类型为对象，那么被赋值的为同一个内存地址对象
// console.log(arr);

//fill传三个参数

// arr.fill('*',1,3);

// function arr(length,cont){
//     // return Array(length).fill(cont);
//     consolwe.log(length)
//     return Array.from({length},function(){  //Array.from()还支持类数组对象  
//         return cont;
//     })
//  }
//  console.log(arr(10,'aa'));

//扩展运算符 ...

// let arr4 = [...arr];

// console.log(arr4 == arr);

//flat(拉平的层级)  把多维数组拉平

// let arr5 = [1,2,3,[4,5,[7,8]]];
// let arr6 = arr5.flat(2);

// function includeArr(oldArr,objArr){
//     objArr.forEach((item) => {
//         oldArr.splice(item.index,0,item.content);
//     })
//     console.log(oldArr);
// }

// includeArr(['a','b','c','d'],[{
//     content:"item1",
//     index:3
// },{
//     content:"item4",
//     index:0
// }])

//['item4',a','b','c','item1','d']

// console.log(arr6);

// let lis = Array.from(document.querySelectorAll('li'),function(item){
//     console.log(item)
//     return item.innerHTML
// });

// console.log(document.querySelectorAll('li'));

// console.log(Array.isArray(lis))

// console.log(lis);


// function loadmore(){
//     console.log(Array.isArray(Array.prototype.slice(arguments)))    
// }

// let loadmore = (...params) => {
//     console.log(Array.isArray(params))
// }

// loadmore(1,2)

// let arr = [1,2,3];

// let test = arr.findIndex((item) => {
//     return item > 3
// })

// console.log(test);

let arr = ['a','b','c'];

console.log(arr.entries())
let entry = arr.values();


console.log(entry.next())
console.log(entry.next())
console.log(entry.next())
console.log(entry.next())







