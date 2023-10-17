// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ego4D & EgoExo4D Documentation',
  tagline: 'The Ego4D & EgoExo4D Dataset',
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
          sidebarPath: require.resolve('./sidebar.js'),
          path: 'docs',
          breadcrumbs: false,
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ego4d',
        path: 'ego4d',
        routeBasePath: 'ego4d',
        breadcrumbs: false,
        sidebarPath: require.resolve('./sidebar-ego4d.js'),
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'egoexo',
        path: 'egoexo',
        routeBasePath: 'egoexo',
        breadcrumbs: false,
        sidebarPath: require.resolve('./sidebar-egoexo.js'),
        // ... other options
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Ego4D & EgoExo4D',
        logo: {
          alt: 'Ego4d Logo',
          src: 'img/ego-4d-logo.png',
          srcDark: 'img/ego-4d-logo-dark.png',
        },
        items: [
          {
            label: 'Ego4D',
            to: '/ego4d/',
          },
          {
            label: 'EgoExo',
            to: '/egoexo/',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/',
              },
              {
                label: 'Ego4D Annotation Guidelines',
                to: '/ego4d/data/annotation-guidelines',
              },
              {
                label: 'Ego4D Challenge',
                to: '/ego4d/challenge',
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
              {
                label: 'GitHub',
                href: 'https://github.com/EGO4D',
              },
              {
                label: 'Ego4D Main Site',
                href: 'https://ego4d-data.org/'
              },
              {
                label: 'Dataset GH Repository',
                href: 'https://github.com/facebookresearch/Ego4d',
              },
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
