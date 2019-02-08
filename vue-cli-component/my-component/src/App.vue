<template>
  <div id="app">
    <div>
      <h1>{{title}}</h1>
      <users v-bind:userlist="userlist" @delItem="del"></users>
      用户名：<input type="text" v-model="user.name">
      密码：<input type="text" v-model="user.pwd">
      <button @click="add">添加成员</button>
    </div>
  </div>
</template>

<script>
import users from './components/user.vue'
export default {
  name: 'app',
  data(){
    return {
      title:'这是我的第一个脚手架项目',
      userlist:[],
      user:{
        name:'',
        pwd:''
      }
    }
  },
  components:{
    users
  },
  methods:{
    del(id,index){
      this.http.get('/users/api/del',{
        params:{
          id:id
        }
      }).then((res) => {
        if(res.data.code === 1){
          this.userlist.splice(index,1);
        }
      }).catch((error) => {
        console.warn(error);
      })
    },
    add(){
      this.http.post('/users/api/add',{name:this.user.name,pwd:this.user.pwd}).then((res) => {
        console.log(res);
        if(res.data.code === 1){
          this.userlist.push({name:this.user.name,pwd:this.user.pwd,id:res.data.id});
          this.user = {
            name:'',
            pwd:''
          }
        }
      }).catch((error) => {
        console.warn(error)
      })
    }
  },
  created(){
    this.http.all([this.http.get('/users/api/userlist'),this.http.get('/api/newslist')]).then(this.http.spread((res1,res2) => {
      if(res1.data.code === 1){
        this.userlist = res1.data.data;
      }

      if(res2.data.code === 1){
        console.log(res2.data.data);
      }
    }))
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
