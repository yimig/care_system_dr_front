<template>
  <div class="textbox flex-1 h-5/6 p-10 mt-8">
    <div class="h-full w-full outline-none text-2xl px-4 leading-8 bg-local rounded-2xl border-4 border-primary flex justify-center content-center items-center">
      <div class="h-auto">{{msg}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Label",
  props:["msg"]
}
</script>

<style scoped>

</style>