import type { PropType } from 'vue'
import { defineComponent } from 'vue'
// import 'uno.css'

export type LColor = 'white' | 'black' | 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink'
export const props = {
  color: {
    type: String as PropType<LColor>,
    default: 'blue', // 设定默认颜色
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
      {slots.default ? slots.default() : ''}
    </button>
  },
})
