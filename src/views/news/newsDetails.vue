<template>
  <div>
    我是新闻详情
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router';
export default defineComponent({
  setup() {
    console.log(useRoute().params.aid)
  },
})
</script>
