module.exports = {
    title: '百度电视助手',
    description: 'Just playing around',
    themeConfig: {
        sidebar: [
            {
              title: '首页',   // 必要的
              path: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            },
            {
                title: '测试',   // 必要的
                path: '/test',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
              }
          ]
      },
      plugins: [
        ['@vuepress/search', {
          searchMaxSuggestions: 10
        }],
        require('./plugin/vuepress-plugin-pdf-export')
        ]
  }