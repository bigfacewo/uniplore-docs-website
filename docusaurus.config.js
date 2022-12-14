// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Uniplore Documentation',
  tagline: 'Uniplore iDIS & Labplore',
  // github部署
  //url: 'https://uniplore.github.io', // 部署版本需要调整此处的域名
  //baseUrl: '/uniplore-docs-website/',
  
  // 腾讯云部署
  url: 'https://doc.uniplore.cn', // 部署版本需要调整此处的域名
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'uniplore', // Usually your GitHub org/user name.
  projectName: 'uniplore-docs-website', // Usually your repo name.
  deploymentBranch: 'deploy-pages-idis', // deploy branch name
  //staticDirectories: ['static'],

  i18n: {
    defaultLocale: 'zh-cn',
    // locales: ['en', 'zh-cn'],
    locales: ['zh-cn'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
      fa: {
        direction: 'rtl',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // lastVersion: 'current',
          // versions: {
          //   current: {
          //     label: '1.2.0',
          //     path: '1.2.0'
          //   }
          // }
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // 头部导航栏配置
      navbar: {
        title: 'Uniplore',
        logo: {
          alt: 'uniplore Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownItemsAfter: [{to: '/', label: 'All versions'}],
            dropdownActiveClassDisabled: false,
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'Github',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      // 页脚导航配置
      footer: {
        style: 'light',
        // style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
              {
                label: 'Official Website',
                href: 'http://www.uniplore.cn',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Uniplore, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // 发布文档网站配置
      algolia: {
        appId: 'YOUR_APP_ID',
        apiKey: 'YOUR_SEARCH_API_KEY',
        indexName: 'YOUR_INDEX_NAME',
        contextualSearch: true,
        externalUrlRegex: 'external\\.com|domain\\.com',
        searchParameters: {
          // facetFilters: ['language:en', ['filter1', 'filter2'], 'filter3'],
        },
        searchPagePath: 'search',
      },
    }),
};

module.exports = config;
