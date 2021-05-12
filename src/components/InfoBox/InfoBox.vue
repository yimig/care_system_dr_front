<template>
<div class="infobox h-96 flex items-center relative" id="info_box" :style="info_outer_style">
  <div class="btn_info_to" @click="forward">
    <div class="el-icon-arrow-left"></div>
  </div>
<!--  <div class="info_mask relative" :style="info_mask_style">-->
<!--    <Info :style="info_inner_style" :id="now_item.id" :name="now_item.name" :is_male="now_item.is_male" :height="now_item.height" :age="now_item.age" :weight="now_item.weight" :is_allergic="now_item.is_allergic" :avatar="now_item.avatar"></Info>-->
<!--  </div>-->
  <div class="info_flow h-96 flex flex-row" :style="info_inner_style">
    <Info :style="info_inner_style" v-for="info in info_list" :key="info.id" :id="info.id" :name="info.name" :is_male="info.is_male" :height="info.height" :age="info.age" :weight="info.weight" :is_allergic="info.is_allergic" :avatar="info.avatar"></Info>
  </div>
  <div class="btn_info_to" @click="next">
    <div class="el-icon-arrow-right"></div>
  </div>
</div>
</template>

<script>
import Info from './info.vue'
export default {
  name: "InfoBox",
  props:['info_list'],
  data(){
    let id = this.info_list[0].id
    return{
      // now_id:id,
      // now_item:this.getNowItem(),
      info_outer_style:{
        width:''
      },
      info_inner_style:{
        width:''
      },
      // info_mask_style:{
      //   width:'',
      //   visibility:visible,
      // }
    }
  },
  methods:{
    getInfoHeight(){
      let width=(window.innerWidth)/2-48
      this.$data.info_outer_style.width=width+'px'
      this.$data.info_inner_style.width=width-100+'px'
    },
    getNowItem(){
      for (let i = 0; i < this.info_list.length; i++) {
        if(this.info_list[i].id === this.$data.now_id)return this.info_list[i]
      }
      return this.info_list[0]
    },
    next(){
      this.$data.now_id++;
    },
    forward(){
      this.$data.now_id--;
    }
  },
  components:{
    Info,
  },
  created() {
    addEventListener('resize',this.getInfoHeight)
    this.getInfoHeight()
  }
}
</script>

<style lang="less" scoped>
@import "res/style/Infobox.less";
</style>