<template>
    <div>
        新闻
        <span @click="goDetail(2)">查看详情</span>
    </div>  
</template>
<script>
export default {
    methods:{
        goDetail(id){
            // this.$router.go(-1);
            this.$router.push({name:'detail',query:{id:id}})
        }
    }
}
</script>
