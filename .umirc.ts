import { defineConfig } from 'dumi';

const repo = 'ik-form-docs';

export default defineConfig({
  title: repo,
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  // Because of using GitHub Pages
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  // '/guide': [
  //   {
  //     title: '菜单项',
  //     path: '菜单路由（可选）',
  //     children: [
  //       // 菜单子项（可选）
  //       'guide/index.md', // 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
  //     ],
  //   },
  // ],
  menus: {
    // 需要自定义侧边菜单的路径，没有配置的路径还是会使用自动生成的配置
    '/guide': [
      {
        title: '概览',
        path: '/guide',
        children: [
          'guide/Introdution.md',
          'guide/Started/index.md',
          'guide/Watch/index.md',
        ],
      },
    ],
  },
  navs: [
    {
      title: '概览',
      path: '/guide',
    },
    {
      title: 'API',
      path: '/api',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/ikong-code/ik-form-docs',
    },
  ],
  // more config: https://d.umijs.org/config
});
