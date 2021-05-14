<template>
<div class="infobox h-96 flex items-center" id="info_box" :style="{width:outer_width+'px'}">
  <div class="btn_info_to" @click="forward">
    <div class="el-icon-arrow-left"></div>
  </div>
  <div class="info_flow h-96 flex flex-row relative z-0 select-none" :style="{width:outer_width-100+'px'}" @mousedown="inner_mouse_down($event)" @mouseleave="inner_mouse_up($event)" @mouseup="inner_mouse_up($event)" @mousemove="inner_mouse_move($event)">
<!--    <div class="info_mask absolute" :style="info_mask_style">-->
<!--      <Info :style="info_mask_style" :id="now_item.id" :name="now_item.name" :is_male="now_item.is_male" :height="now_item.height" :age="now_item.age" :weight="now_item.weight" :is_allergic="now_item.is_allergic" :avatar="now_item.avatar"></Info>-->
<!--    </div>-->
    <div class="info_line h-96 flex flex-row relative select-none" :style="{width:outer_width-100+'px',transform:line_transform}">
      <Info :style="{width:outer_width-100+'px'}" v-for="info in info_list" :key="info.id" :id="info.id" :name="info.name" :is_male="info.is_male" :height="info.height" :age="info.age" :weight="info.weight" :is_allergic="info.is_allergic" :avatar="info.avatar"></Info>
    </div>
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
    return{
      is_inner_down:false,
      now_item:this.getNowItem(),
      line_vis:'visible',
      outer_width:'',
      line_transform:'translateX(0px)',
    }
  },
  methods:{
    getInfoHeight(){
      this.$data.outer_width=(window.innerWidth)/2-48
    },
    getNowItem(){
      for (let i = 0; i < this.info_list.length; i++) {
        if(this.info_list[i].id === this.now_id)return this.info_list[i]
      }
      return this.info_list[0]
    },
    getTranslateBiases(translate_value){
      let sub = translate_value.substring(11)
      return Number(sub.split("px")[0])
    },
    inner_mouse_down(event){
      console.log("down")
      this.$data.is_inner_down=true
      this.move_biases = event.screenX
    },
    inner_mouse_move(event){
      if(this.$data.is_inner_down){
        // let trans_biasies = this.getTranslateBiases(this.line_biases)
        this.$data.line_transform="translateX("+(this.line_biases-(this.move_biases-event.screenX))+"px)"
      }
    },
    inner_mouse_up(event){
      if(!this.$data.is_inner_down)return
      this.$data.is_inner_down=false
      if(Math.abs(this.move_biases-event.screenX)>this.$data.outer_width*0.2){
        if(this.move_biases-event.screenX>0){
          this.next()
        }else{
          this.forward()
        }
      }else{
        this.$data.line_transform="translateX("+this.line_biases+"px)"
      }
    },
    next(){
      this.line_biases = this.line_biases - (this.$data.outer_width -100)
      this.$data.line_transform="translateX("+this.line_biases+"px)"
    },
    forward(){
      this.line_biases = this.line_biases + (this.$data.outer_width -100)
      this.$data.line_transform="translateX("+this.line_biases+"px)"
    }
  },
  components:{
    Info,
  },
  created() {
    addEventListener('resize',this.getInfoHeight)
    this.getInfoHeight()
    this.line_biases=0
  },
  mounted() {
  }
}
</script>

<style lang="less" scoped>
@import "res/style/Infobox.less";
</style>