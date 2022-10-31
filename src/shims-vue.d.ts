declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
// 在引用 .vue 模块时候，编辑器中 import 语句会有红色的警告。
// 这是因为Typescript 默认是不支持 .vue 类型的模块的。可以通过添加一个模块的类型定义来解决这个问题。