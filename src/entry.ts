import type { App } from 'vue'
import LButton from './button'
import SFCButtonSetup from './button/SFCButtonSetup.vue'
import 'uno.css'

// 导出单独组件
export { LButton, SFCButtonSetup }

// 编写一个插件，实现一个install方法 用于全局注册组件
export default {
  install(app: App): void {
    app.component(LButton.name, LButton)
    app.component(SFCButtonSetup.name, SFCButtonSetup)
  },

}
