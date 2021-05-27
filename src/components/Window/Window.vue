<template>
  <div class="flex h-full w-full">
    <Login id="login_mask" @pass="pass"></Login>
    <MainWindow id="main_window" :info_list="info_list" :sid="sid"></MainWindow>
  </div>
</template>

<script>
import Login from "../Login/Login.vue";
import MainWindow from "../MainWindow/MainWindow.vue";
import axios from "_axios@0.21.1@axios";
export default {
  name: "Window",
  components: {MainWindow, Login},
  data(){
    return{
      info_list:[],
      sid:'-1',
    }
  },
  methods:{
    'pass':function (sid){
      this.$data.sid=sid;
      var __this=this;
      axios.post('http://localhost:3000/getInfo',{
        'sid':sid,
        'iid':-1,
        'content':''
      })
          .then(function (response) {
            if(response.data.length>0){
              for (let i = 0; i < response.data.length; i++) {
                __this.$data.info_list.push(response.data[i])
              }
            }
            console.log(response)
          })
          .catch(function (error) {
            console.log(error)
          })
    }
  }
}
</script>

<style scoped>

</style>