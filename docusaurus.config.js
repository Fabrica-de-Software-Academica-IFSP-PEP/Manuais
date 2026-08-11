// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Manuais de Sistema',
  tagline: 'Fábrica de Software Acadêmica — IFSP Campus Presidente Epitácio',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://fabrica-de-software-academica-ifsp-pep.github.io',
  baseUrl: '/Manuais/',

  organizationName: 'Fabrica-de-Software-Academica-IFSP-PEP',
  projectName: 'Manuais',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          editUrl:
            'https://github.com/Fabrica-de-Software-Academica-IFSP-PEP/Manuais/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Manuais de Sistema',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'manuaisSidebar',
            position: 'left',
            label: 'Manuais',
          },
          {
            href: 'https://github.com/Fabrica-de-Software-Academica-IFSP-PEP/Manuais',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Manuais',
            items: [
              {
                label: 'Início',
                to: '/',
              },
            ],
          },
          {
            title: 'Institucional',
            items: [
              {
                label: 'IFSP Presidente Epitácio',
                href: 'https://pep.ifsp.edu.br/',
              },
            ],
          },
          {
            title: 'Repositório',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Fabrica-de-Software-Academica-IFSP-PEP/Manuais',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Fábrica de Software Acadêmica — IFSP Campus Presidente Epitácio`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
