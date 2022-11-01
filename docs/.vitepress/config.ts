export default {
  // 将在其中部署计划站点https://foo.github.io/bar/的URL '/bar/' 斜线结尾
  // base: '/less-ui/',
  title: '🔨 Less-UI', // 站点标题
  description: 'Less Ui Vue3组件库', // 网站的描述。这将呈现为<meta>页面 HTML 中的标签。
  lang: 'zh-CN',
  lastUpdated: true, // 最近更新时间
  themeConfig: {
    // 搜索 具体还没有配好
    algolia: {
      appKey: '',
      indexName: '',
      searchParameters: {
        faeFilters: ['tags:vue,react'],
      },
    },
    // 顶部菜单
    nav: [
      {
        text: '指南',
        activeMatch: '/guide/', // 这个还没懂有下拉的怎么搞
        link: '/guide/',
      },
      {
        text: '组件',
        activeMatch: '/components/', // 这个还没懂有下拉的怎么搞
        link: '/components/',
      },
      {
        text: '作者',
        link: '/auther/',
        activeMatch: '/auther/',
      },
    ],
    sidebar: {
      // 指南
      '/guide/': [
        {
          text: '基础',
          items: [{ text: '简介', link: '/guide/' }],
        },
      ],
      // 组件
      '/components/': [
        {
          text: '快速开始',
          items: [{ text: '简介', link: '/components/' }],
        },
        {
          text: '通用',
          items: [{ text: 'Button 按钮', link: '/components/button.md' }],
        },
        // { text: '导航' },
        // { text: '反馈' },
        // { text: '数据录入' },
        // { text: '数据展示' },
        // { text: '布局' },
      ],
    },
    socialLinks: [
      // 社交帐号的logo 您可以自定义socialLinks选项以显示图标的社交帐户链接。
      { icon: 'github', link: 'https://github.com/Loveyless' },
    ],
    editLink: {
      // 在 GitHub 上编辑此页面
      text: '在 GitHub 上编辑此页面',
      pattern: 'https://github.com/Loveyless',
    },
  },
}
