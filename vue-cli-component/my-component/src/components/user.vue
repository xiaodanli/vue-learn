<template>
    <ul>
        <li v-for="(user,index) in userlist" :key="user._id">
            <span>{{index+1}}.姓名{{user.name}}</span><br>
            <span>手机号{{user.pwd}}</span>
            <button @click="del(user._id,index)">删除</button>
        </li>
    </ul>
</template>
<script>
export default {
    data(){
        return {
            
        }
    },
    props:['userlist'],
    methods:{
        del(index){
            this.$emit('delItem',index);
        }
    }
}
</script>
