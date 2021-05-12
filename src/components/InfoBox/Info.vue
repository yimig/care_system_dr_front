<template>
  <div class="infobox h-96 flex flex-row flex-shrink-0">
    <div class="info_detail flex-grow flex flex-col text-right text-blue justify-center items-end">
      <div class="name flex justify-end">
        <Word v-for="w in name" :key="w" :word="w"></Word>
      </div>
      <div class="tags flex flex-wrap justify-end my-4 w-72">
        <div v-if="is_male" class="tag gender bg-blue-dark text-bluelight">♂</div>
        <div v-else class="tag gender bg-pink text-pink">♀</div>
        <div class="tag age bg-yellow text-yellow">{{age}}岁</div>
        <div class="tag weight bg-green text-green">{{weight}}kg</div>
        <div class="tag height bg-indigo text-indigo">{{height}}cm</div>
        <div v-if="is_allergic" class="tag allergic bg-red text-red"><i class="allergic_icon el-icon-warning-outline mr-1"></i>过敏体质</div>
      </div>
    </div>
    <div class="info_avatar h-48 w-36 bg-white m-24 ml-12 flex justify-center items-end">
      <img v-if="avatar" :src="avatar" class="h-full w-full border-none object-cover">
      <i v-else class="el-icon-user text-9xl text-blue"></i>
    </div>
  </div>
</template>

<script>
import Word from "./Word.vue";
export default {
  name: "Info",
  props:['avatar','name','is_male','age','weight','height','is_allergic','id'],
  data(){
    return{
    }
  },
  components:{
    Word,
  }
}
</script>

<style lang="less" scoped>
@import "res/style/info.less";
</style>