// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ego4D',
  tagline: 'Ego4D Dataset',
  url: 'https://ego4d-data.org/',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'EGO4D',
  projectName: 'docs',
  trailingSlash: true,

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
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
      navbar: {
        title: 'Ego4D',
        logo: {
          alt: 'Ego4d Logo',
          src: 'img/ego-4d-logo.png',
          srcDark: 'img/ego-4d-logo-dark.png',
        },
        items: [],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Intro',
                to: '/',
              },
              {
                label: 'Annotation Guidelines',
                to: '/data/annotation-guidelines',
              },
              {
                label: 'Ego4D Challenge',
                to: '/challenge',
              },
              {
                label: 'Contact Us',
                to: '/contact',
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
                href: 'https://github.com/Ego4d',
              },
              {
                label: 'Ego4D Main Site',
                href: 'https://ego4d-data.org/'
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ego4d`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
