<script lang="ts" setup name="SFCButtonSetup" inheritAttrs="false">
</script>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'SFCButtonSetup',
})
</script>

<template>
  <button>
    SFCSetup
    <slot />
  </button>
</template>
