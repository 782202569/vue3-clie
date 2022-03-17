<template>
  <el-icon :size="20">
    <edit />
  </el-icon>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Edit } from '@element-plus/icons-vue'
export default defineComponent({
  components: {
    "edit": Edit,
  },
  setup() {
    
  },
})
</script>
