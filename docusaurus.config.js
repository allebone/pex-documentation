const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "POLARIS",
    tagline: "Simple...Short...One Page Explanations for BOCKSCAR Projects",
    url: "https://docs.omni.af.mil",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    // organizationName: "allebone", // Usually your GitHub org/user name.
    // projectName: "polaris", // Usually your repo name.

    plugins: [
      [
        "@docusaurus/plugin-content-blog",
        {
          /**
           * Required for any multi-instance plugin
           */
          id: "projects",
          /**
           * URL route for the blog section of your site.
           * *DO NOT* include a trailing slash.
           */
          routeBasePath: "projects",
          /**
           * Path to data on filesystem relative to site dir.
           */
          path: "./projects",
          postsPerPage: 5,
          blogListComponent: "@theme/BlogListPage",
          // blogTagsListComponent: "@theme/BlogTagsListPage"
          blogTagsPostsComponent:  "@theme/BlogTagsPostsPage"
        },
      ],
    ],

    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            // Please change this to your repo.
            editUrl: "https://github.com/allebone/polaris/edit/main/website/",
            remarkPlugins: [
              [require("mdx-mermaid"), { mermaid: { theme: "dark" } }],
            ],
          },
          blog: {
            showReadingTime: true,
            // Please change this to your repo.
            editUrl:
              "https://github.com/allebone/polaris/edit/main/website/blog/",
            blogSidebarTitle: "Projects",
            blogSidebarCount: 0,
            postsPerPage: "ALL",
            feedOptions: {
              type: "all",
              copyright: `Copyright © ${new Date().getFullYear()} Project BOCKSCAR, 55th WG, Offutt AFB.`,
            },
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        colorMode: {
          defaultMode: "dark",
        },
        announcementBar: {
          id: "classification",
          content: "DYNAMIC CONTENT, HIGHEST CLASSIFICATION IS CUI",
          backgroundColor: "#502b85",
          textColor: "#FFFFFF",
          isCloseable: false,
        },
        navbar: {
          title: "POLARIS",
          logo: {
            alt: "Polaris Logo",
            src: "img/polaris.png",
            srcDark: "img/polaris_dark.png",
          },
          items: [
            { to: "/blog", label: "Projects", position: "left" },
            { to: "/about", label: "About", position: "left" },
            {
              href: "https://github.com/allebone/polaris",
              label: "GitHub",
              position: "right",
            },
            {
              type: "search",
              position: "right",
            },
          ],
        },
        footer: {
          style: "dark",
          links: [
            {
              title: "Docs",
              items: [
                {
                  label: "How To...",
                  to: "/docs/intro",
                },
              ],
            },
            {
              title: "Community",
              items: [
                {
                  label: "OMNI Forums",
                  href: "https://stackoverflow.com/questions/tagged/docusaurus",
                },
                {
                  label: "OMNI Chat",
                  href: "https://Stackoverflow.com/questions/tagged/docusaurus",
                },
              ],
            },
            {
              title: "More",
              items: [
                {
                  label: "GitHub",
                  href: "https://github.com/allebone/polaris",
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} Project BOCKSCAR.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  }
);
