<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'SFCButton',
})
</script>

<template>
  <button>
    SFC
    <slot />
  </button>
</template>
