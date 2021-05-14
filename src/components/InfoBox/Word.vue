<template>
  <div class="flex flex-col">
    <div class="tone text-center select-none">{{ pinyin }}</div>
    <div class="word text-5xl select-none">{{ word }}</div>
  </div>
</template>

<script>
import { pinyin } from 'pinyin-pro';
export default {
  name: "Word",
  props:['word'],
  data(){
    return{
      pinyin:pinyin(this.word, { toneType: 'none' })
    }
  },

}
</script>

<style scoped>

</style>