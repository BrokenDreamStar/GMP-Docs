import { defineConfig } from "vitepress"

export const zh = defineConfig({
  lang: "zh-CN",
  title: "GlobalMarketPlus 文档",
  description: "GlobalMarketPlus 文档",

  themeConfig: {
    nav: nav(),

    sidebar: sidebar(),

    outlineTitle: "导航",
    outline: [1, 6],

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    footer: {
      copyright: `版权所有 ©2015 - ${new Date().getFullYear()} 红色创意工作室`,
    },
  },
})

function nav() {
  return [
    { text: "首页", link: "/" },
    {
      text: "文档",
      link: "docs/Home",
      activeMatch: "/docs/",
    },
  ]
}

function sidebar() {
  return [
    {
      text: "目录",
      items: [
        { text: "主页面", link: "/docs/Home" },
        { text: "使用帮助&常见问题", link: "/docs/Helper" },
        { text: "命令帮助", link: "/docs/Commands" },
        { text: "配置文件", link: "/docs/Configuration-Files" },
        { text: "GUI设置", link: "/docs/GUI-Settings" },
        { text: "消息元件", link: "/docs/Message-Component" },
        { text: "占位符(内部使用)", link: "/docs/Placeholders-Internal" },
        { text: "占位符(外部使用)", link: "/docs/Placeholders-Hook" },
        { text: "API及使用文档", link: "/docs/API及使用文档" },
      ],
    },
  ]
}

export const search = {
  root: {
    translations: {
      button: {
        buttonText: "搜索文档",
        buttonAriaLabel: "搜索文档",
      },
      modal: {
        noResultsText: "无法找到结果",
        resetButtonTitle: "清除查询条件",
        footer: {
          selectText: "选择",
          navigateText: "切换",
          closeText: "关闭",
        },
      },
    },
  },
}
