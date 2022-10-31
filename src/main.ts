// import { createApp } from 'vue'

// Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js". at <App>
import { createApp } from 'vue/dist/vue.esm-browser'

// import LessUi from '../dist/less-ui.esm.js'
import LessUi from './entry'
// import LButton from './button'
// import SFCButton from './SFCButton.vue'

createApp({
  template: `
            <div>
                <LButton>普通按钮</LButton>
                <LButton color='green'>普通按钮</LButton>
                <LButton color='yellow'>普通按钮</LButton>
                <LButton color='red'>普通按钮</LButton>
                <SFCButton>普通按钮</SFCButton>
            </div>
        `,
}).use(LessUi).mount('#app')
