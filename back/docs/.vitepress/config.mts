import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "iComida",
  description: "O iComida é um projeto para Engenharia de Software IV",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "Documentação",
        items: [
          { text: "⚡ Introdução", link: "/01-introduction" },
          { text: "📦 Ferramentas", link: "/02-tools" },
          { text: "🚀 Padrões de Projeto", link: "/03-design-patterns" },
          { text: "🗂️ Organização", link: "/04-project-organization" },
          { text: "👾 Equipe", link: "/05-team" },
          { text: "📝 Changelog", link: "/06-changelog" },
          { text: "📬 Solicitações", link: "07-requests" },
          { text: "✅ Conclusão", link: "/08-conclusion" },
          { text: "💡 Ajuda", link: "/09-help" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/ads5-es4/icomida" },
    ],
  },
});
