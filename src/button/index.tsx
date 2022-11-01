import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import 'uno.css'
import type { LColor, LIcon } from './type'

export const props = {
  color: {
    type: String as PropType<LColor>,
    default: 'blue', // 设定默认颜色
  },
  icon: {
    type: String as PropType<LIcon>,
    default: '',
  },
}
export default defineComponent({
  name: 'LButton',
  props,
  // template:'<button>MyButton</button>'
  setup(props, { slots }) {
    return () => <button
      class={`
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
      `}
    >
      {props.icon !== '' ? <i class={`i-ic-baseline-${props.icon} p-3`}></i> : ''}
      {slots.default ? slots.default() : ''}
    </button>
  },
})
