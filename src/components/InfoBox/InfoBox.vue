<template>
<div class="infobox h-96 flex flex-row">
  <div class="info_detail flex-grow flex flex-col text-right text-blue justify-center items-end">
    <div class="name flex justify-end">
      <Word v-for="w in nameValue" :key="w" :word="w"></Word>
    </div>
    <div class="tags flex flex-wrap justify-end my-4 w-72">
      <div v-if="isMaleValue" class="tag gender bg-blue-dark text-bluelight">♂</div>
      <div v-else class="tag gender bg-pink text-pink">♀</div>
      <div class="tag age bg-yellow text-yellow">{{ageValue}}岁</div>
      <div class="tag weight bg-green text-green">{{weightValue}}kg</div>
      <div class="tag height bg-indigo text-indigo">{{heightValue}}cm</div>
      <div v-if="isAllergicValue" class="tag allergic bg-red text-red"><i class="allergic_icon el-icon-warning-outline mr-1"></i>过敏体质</div>
    </div>
  </div>
  <div class="info_avatar h-48 w-36 bg-white m-24 ml-12"></div>
</div>
</template>

<script>
import Word from "./Word.vue";
export default {
  name: "InfoBox",
  props:['name','is_male','age','weight','height','is_allergic'],
  data(){
    return{
      nameValue:this.name,
      isMaleValue:this.is_male,
      ageValue:this.age,
      weightValue:this.weight,
      heightValue:this.height,
      isAllergicValue:this.is_allergic
    }
  },
  components:{
    Word,
  }
}
</script>

<style lang="less" scoped>
@import "res/style/infobox.less";
</style>