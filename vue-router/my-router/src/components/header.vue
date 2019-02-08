<template>
    <div class="container">
        <nav>
            <router-link :to="{name:'home'}" tag="span">主页</router-link>
            <router-link :to="{name:'nav'}" tag="span">菜单</router-link>
            <router-link :to="{name:'manage'}" tag="span">管理</router-link>
            <router-link :to="{name:'about'}" tag="span">管理我们</router-link>
        </nav>
        <div class="r-nav">
            <router-link :to="{name:'login'}" tag="span">登录</router-link>
            <router-link :to="{name:'register'}" tag="span">注册</router-link>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        
    }
}
</script>

<style scoped>
    .container{
        background: #eee;
        display: block;
        width:100%;
        height: 40px;
    }
    span{
        padding:0 10px;
        height: 40px;
        line-height: 40px;
        margin:0 10px;
        float: left;
        list-style: none;
        color:#333;
        font-weight: 600;
    }
    .r-nav{
        float: right;
    }
</style>

