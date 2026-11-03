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
      // Licensing moved to Lab22 (2026-11-02): the same banner lab22.ai shows.
      announcementBar: {
        id: 'lab22_move',
        content:
          '<span style="font-size:15px;font-weight:600;">Ego4D and Ego-Exo4D access has moved to Lab22. <a href="https://lab22.ai" style="color:#ffffff;font-weight:700;text-decoration:underline;text-underline-offset:3px;white-space:nowrap;margin-left:8px;">Learn more &rarr;</a></span>',
        backgroundColor: '#1f3fae',
        textColor: '#ffffff',
        isCloseable: false,
      },
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

  plugins: [
    [
      require.resolve("docusaurus-plugin-search-local"),
      {
        indexDocs: true,
        indexPages: true,
        hashed: true,
      },
    ],
  ],
};

module.exports = config;
