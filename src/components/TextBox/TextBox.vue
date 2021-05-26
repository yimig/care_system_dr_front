<template>
<div class="textbox flex-1 h-full p-10">
  <textarea :class="'h-full w-full outline-none border-none text-2xl px-4 leading-8 bg-local '+(type=='borderbox'?'borderbox':'')"></textarea>
</div>
</template>

<script>
export default {
  name: "TextBox",
  props:['type'],
}
</script>

<style scoped>
.textbox textarea{
  background: url('res/img/draft_line.png') repeat;
  background-clip: content-box;
}

.textbox .borderbox{
  background: none;
  @apply rounded-2xl border border-primary
}
</style>