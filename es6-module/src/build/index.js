"use strict";

var info = _interopRequireWildcard(require("./common/util"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// import {reverse} from './common/util';
// console.log(reverse)
// import {firstName as f,lastName as l,year as y,m} from './common/util';
// console.log(`${f}---${l}---${y}-----${m}`);
// let p1 = new Person('lili');
// p1.sayName()
// console.log(getFullName())
console.log((0, info.default)(), info.year);