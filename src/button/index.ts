import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'LButton',

  // template:'<button>MyButton</button>'

  render() {
    return h('button', null, 'MyButton')
  },
})
