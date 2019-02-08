<template>
    <div>
        详情{{$route.query.id}}
    </div>
</template>

<script>
export default {
    created(){
        console.log(this.$route.query)
    }
}
</script>
