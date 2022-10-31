import type { App } from 'vue'
import LButton from './button'
import SFCButton from './SFCButton.vue'
import JSXButton from './JSXButton'

// 导出单独组件
export { LButton, SFCButton, JSXButton }

// 编写一个插件，实现一个install方法 用于全局注册组件
export default {
  install(app: App): void {
    app.component(LButton.name, LButton)
    app.component(SFCButton.name, SFCButton)
    app.component(JSXButton.name, JSXButton)
  },

}
