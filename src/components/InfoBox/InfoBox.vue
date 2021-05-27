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
      line_vis:'visible',
      outer_width:'',
      line_transform:'translateX(0px)',
    }
  },
  methods:{
    getInfoHeight(){
      this.$data.outer_width=(window.innerWidth)/2-48
    },
    getNextItem(){
      let i = 0
      let is_found=false
      for (; i < this.info_list.length; i++) {
        if(this.info_list[i].id === this.now_item.id){
          is_found=true
          break
        }
      }
      console.log('found?'+is_found)
      if(is_found&&i<this.info_list.length-1){
        return this.info_list[i+1]
      }
      return false
    },
    getForwardItem(){
      let i = 0
      let is_found=false
      for (; i < this.info_list.length; i++) {
        if(this.info_list[i].id === this.now_item.id){
          is_found=true
          break
        }
      }
      if(is_found&&i>0){
        return this.info_list[i-1]
      }
      return false
    },
    inner_mouse_down(event){
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
      this.$emit("beforeItemChange",{'now_item':this.now_item,'item_list':this.info_list})
      if(this.getNextItem())
      {
        this.$emit("beforeNextItem",{'now_item':this.now_item,'next_item':this.getNextItem()})
        this.now_item=this.getNextItem()
        this.$emit("itemChange",{'old_item':this.getForwardItem(),'now_item':this.now_item,'item_list':this.info_list})
        this.line_biases = this.line_biases - (this.$data.outer_width -100)
        this.$data.line_transform="translateX("+this.line_biases+"px)"
        this.$emit("afterNextItem",{'old_item':this.getForwardItem(),'new_item':this.now_item})
      }else {
        this.$data.line_transform="translateX("+this.line_biases+"px)"
      }
    },
    forward(){
      this.$emit("beforeItemChange",{'now_item':this.now_item,'item_list':this.info_list})
      if(this.getForwardItem())
      {
        this.$emit("beforeForwardItem",{'now_item':this.now_item,'forward_item':this.getForwardItem()})
        this.now_item=this.getForwardItem()
        this.$emit("itemChange",{'old_item':this.getNextItem(),'now_item':this.now_item,'item_list':this.info_list})
        this.line_biases = this.line_biases + (this.$data.outer_width -100)
        this.$data.line_transform="translateX("+this.line_biases+"px)"
        this.$emit("afterForwardItem",{'old_item':this.getNextItem(),'new_item':this.now_item})
      }else {
        this.$data.line_transform="translateX("+this.line_biases+"px)"
      }
    },
  },
  components:{
    Info,
  },
  created() {
    addEventListener('resize',this.getInfoHeight)
    this.getInfoHeight()
    this.line_biases=0
    // this.now_item=null
    this.now_item = {id:'0'}
  },
  mounted() {

  }
}
</script>

<style lang="less" scoped>
@import "res/style/Infobox.less";
</style>