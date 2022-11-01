# Button 按钮
常用操作按钮

## 基础用法

  <div style="margin-bottom:20px;">
    <LButton color="blue">
      主要按钮
    </LButton>
    <LButton color="green">
      绿色按钮
    </LButton>
    <LButton color="gray">
      灰色按钮
    </LButton>
    <LButton color="yellow">
      黄色按钮
    </LButton>
    <LButton color="red">
      红色按钮
    </LButton>
  </div>
  <div style="margin-bottom:20px;">
    <LButton color="blue" icon="search">
      搜索按钮
    </LButton>
    <LButton color="green" icon="edit">
      编辑按钮
    </LButton>
    <LButton color="gray" icon="check">
      成功按钮
    </LButton>
    <LButton color="yellow" icon="message">
      提示按钮
    </LButton>
    <LButton color="red" icon="delete">
      删除按钮
    </LButton>
  </div>

```vue
<template>
  <div style="margin-bottom:20px;">
    <LButton color="blue">
      主要按钮
    </LButton>
    <LButton color="green">
      绿色按钮
    </LButton>
    <LButton color="gray">
      灰色按钮
    </LButton>
    <LButton color="yellow">
      黄色按钮
    </LButton>
    <LButton color="red">
      红色按钮
    </LButton>
  </div>
  <div style="margin-bottom:20px;">
    <LButton color="blue" icon="search">
      搜索按钮
    </LButton>
    <LButton color="green" icon="edit">
      编辑按钮
    </LButton>
    <LButton color="gray" icon="check">
      成功按钮
    </LButton>
    <LButton color="yellow" icon="message">
      提示按钮
    </LButton>
    <LButton color="red" icon="delete">
      删除按钮
    </LButton>
  </div>
</template>
```

## 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。
设置 icon 属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用 i 标签即可，可以使用自定义图标。

  <div class="flex flex-row">
    <LButton icon='search'></LButton>
    <LButton color='green' icon='check'></LButton>
    <LButton color='yellow' icon='edit'></LButton>
    <LButton color='red' icon='delete'></LButton>
  </div>

```vue
<template>
  <div class="flex flex-row">
    <LButton icon="edit" plain />
    <LButton icon="delete" plain />
    <LButton icon="share" plain />
    <LButton round plain icon="search">
      搜索
    </LButton>
  </div>
</template>
```
