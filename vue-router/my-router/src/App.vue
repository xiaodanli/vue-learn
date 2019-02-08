<template>
  <div id="app">
    <m-header></m-header>
    <div class="con">
      <router-view></router-view>
    </div>
    <m-footer></m-footer>
  </div>
</template>

<script>
import Mheader from '@/components/header'
import Mfooter from '@/components/footer'
export default {
  name: 'App',
  components:{
    'm-header':Mheader,
    'm-footer':Mfooter
  },
  methods:{
    
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
}

#app{
  width:100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.con{
  width:100%;
  flex:1;
}
</style>
