<template>
  <div class="h-full w-full relative flex">
    <SideBar id="sidebar" class="h-full z-10 relative"></SideBar>
    <div class="content flex flex-auto relative z-0">
      <TextBox class="flex-1 h-full" id="textbox" :text="now_item.prescription" @textchange="textChange"></TextBox>
      <div class="profile flex-1 h-full flex flex-col">
        <div class="info flex-1 bg-blue-light relative overflow-hidden">
          <InfoBox :info_list="info_list" @itemChange="itemChange" @beforeItemChange="beforeItemChange" id="infobox"></InfoBox>
          <div class="move absolute text-8xl -bottom-12 text-white font-bold select-none">////////////////////////////////////////////////////////////////////////////////////////////////////////////</div>
        </div>
        <div class="info_line flex-1 relative overflow-hidden">
          <div class="move absolute text-8xl -top-12 text-bluelight font-bold select-none">////////////////////////////////////////////////////////////////////////////////////////////////////////////</div>
          <Label id="detailbox" :msg="now_item.detail"></Label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "../SideBar/SideBar.vue";
import TextBox from "../TextBox/TextBox.vue";
import Label from "../Label/Label.vue";
import InfoBox from "../InfoBox/InfoBox.vue";
import axios from "_axios@0.21.1@axios";
export default {
  name: "MainWindow",
  components: {InfoBox, Label, TextBox, SideBar},
  props:['info_list','sid'],
  data(){
    return{
      now_item:{id:-1},
      text_change:false,
    }
  },
  methods:{
    'getItemById':function (id){
      let i=0;
      for (; i < this.info_list.length; i++) {
        if(this.info_list[i].id === id){
          return this.info_list[i];
        }
      }
    },
    'itemChange':function (args){
      this.$data.now_item=args.now_item;
      if(this.$data.text_change)
      {
        this.getItemById(args.old_item.id).prescription=document.getElementById("input_area").value;
        this.$data.text_change=false;
      }
    },
    'beforeItemChange':function (args) {
      this.check_info();
    },
    'textChange':function (text){
      this.$data.text_change=true;
      this.is_change=true;
    },
    'check_info':function (){
      var __this=this;
      axios.post('http://localhost:3000/getInfo',{
        'sid':__this.sid,
        'iid':__this.is_change?__this.$data.now_item.id:-1,
        'content':__this.is_change?document.getElementById("input_area").value:''
      })
          .then(function (response) {
            __this.is_change=false;
            if(response.data.length>0&&response.data.length>__this.info_list.length){
              __this.info_list=response.data;
            }
            console.log(response)
          })
          .catch(function (error) {
            __this.is_change=false;
            console.log(error)
          })
    }
  },
  watch:{
    info_list:{
      handler(oldV,newV){
        if(this.now_item.id===-1){
          this.$data.now_item=newV[0]
        }
      },
      deep:true
    }
  },
  created() {
    this.is_change=false;
  }
}
</script>

<style scoped>

</style>