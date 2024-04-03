import { defineConfig } from "vitepress"

export const en = defineConfig({
  lang: "en-US",
  title: "GlobalMarketPlus Docs",
  description: "GlobalMarketPlus Docs",

  themeConfig: {
    nav: nav(),

    sidebar: sidebar(),

    outlineTitle: "Nav",
    outline: [1, 6],

    footer: {
      copyright: `Copyright ©2015 - ${new Date().getFullYear()} TRC Studio`,
    },
  },
})

function nav() {
  return [
    { text: "Home", link: "/en/index.md" },
    {
      text: "Docs",
      link: "/en/docs/Home",
      activeMatch: "/en/docs/",
    },
  ]
}

function sidebar() {
  return [
    {
      text: "Directory",
      items: [
        { text: "Home", link: "/en/docs/Home" },
        { text: "Helper", link: "/en/docs/Helper" },
        { text: "Commands", link: "/en/docs/Commands" },
        { text: "Configuration-Files", link: "/en/docs/Configuration-Files" },
        { text: "GUI-Settings", link: "/en/docs/GUI-Settings" },
        { text: "Message-Component", link: "/en/docs/Message-Component" },
        {
          text: "Placeholders-Internal",
          link: "/en/docs/Placeholders-Internal",
        },
        { text: "Placeholders-Hook", link: "/en/docs/Placeholders-Hook" },
      ],
    },
  ]
}
