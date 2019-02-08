<template>
  <div class="container">
    <div class="l-nav">
      <router-link to="/about/news" tag="span">新闻</router-link>
      <router-link to="/about/link" tag="span">联系我们</router-link>
      <router-link to="/about/order" tag="span">点餐文档</router-link>
      <router-link to="/about/express" tag="span">快递</router-link>
    </div>
    <div class="r-con">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
  .container{
      display: block;
      width:100%;
      display: flex;
  }
  .l-nav{
    width:200px;
    background: lightblue;
  }
  
  span{
      padding:0 10px;
      height: 40px;
      display: block;
      line-height: 40px;
      margin:0 10px;
      list-style: none;
      color:#333;
      font-weight: 600;
      border-bottom:1px solid #fff;
  }
</style>
