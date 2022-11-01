<script lang="ts" setup name="SFCButtonSetup" inheritAttrs="false">
import { ref, withDefaults } from 'vue'
import type { LColor, LIcon } from './type'
const props = withDefaults(defineProps<{
  color?: LColor
  icon?: LIcon
}>(), {
  color: 'blue',
  icon: '',
})
const buttonClass = ref<string>(`
      py-2 
      px-4 
      font-semibold 
      rounded-lg 
      shadow-md 
      text-white 
      bg-${props.color}-500 
      hover:bg-${props.color}-700 
      border-none 
      cursor-pointer 
      m-1 
      `)

const IconClass = ref<string>(`i-ic-baseline-${props.icon} p-3`)
</script>

<template>
  <button :class="buttonClass">
    <i v-if="props.icon" :class="IconClass" />
    <slot />
  </button>
</template>
