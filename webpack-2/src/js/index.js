// let reverse = require('./reverse.js');
import reverse from 'reverse'
console.log(reverse('ads'));

import '../scss/index.scss'

let a = 10;
console.log(a);

let xhr = new XMLHttpRequest();
xhr.open('GET','/classify/api/iconlist');
xhr.send(null);
xhr.onreadystatechange = () => {
    if(xhr.readyState != 4)return;
    if(xhr.status === 200){
        console.log(xhr.responseText)
    }
}

import Vue from 'vue';
console.log(Vue);