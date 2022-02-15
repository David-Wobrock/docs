const githubPrismTheme = require('prism-react-renderer/themes/github')

const prismThemeLight = {
  ...githubPrismTheme,
  styles: [
    ...githubPrismTheme.styles,
    {
      languages: ['keto-relation-tuples'],
      types: ['namespace'],
      style: {
        color: '#666'
      }
    },
    {
      languages: ['keto-relation-tuples'],
      types: ['object'],
      style: {
        color: '#939'
      }
    },
    {
      languages: ['keto-relation-tuples'],
      types: ['relation'],
      style: {
        color: '#e80'
      }
    },
    {
      languages: ['keto-relation-tuples'],
      types: ['delimiter'],
      style: {
        color: '#555'
      }
    },
    {
      languages: ['keto-relation-tuples'],
      types: ['comment'],
      style: {
        color: '#999'
      }
    },
    {
      languages: ['keto-relation-tuples'],
      types: ['subject'],
      style: {
        color: '#903'
      }
    }
  ]
}

module.exports = {
  title: 'Ory',
  tagline: 'Open Source Identity and Access Infrastructure',
  url: `https://www.ory.sh/`,
  baseUrl: '/docs/',
  favicon: 'img/favico.png',
  onBrokenLinks: 'error',
  onBrokenMarkdownLinks: 'error',
  onDuplicateRoutes: 'error',
  organizationName: 'ory',
  projectName: 'docs',
  staticDirectories: ['src/static'],
  themeConfig: {
    prism: {
      additionalLanguages: [
        'powershell',
        'json5',
        'pug',
        'shell-session',
        'bash',
        'tsx'
      ]
    },
    announcementBar: {
      id: 'supportus',
      content: `Sign up for your <a href='https://console.ory.sh/registration?preferred_plan=start-up&utm_source=docs&utm_medium=banner&utm_campaign=top-banner-first900'>Ory Start Up plan free for a year</a> by using <code>FIRST900</code> during the sign up!`
    },
    algolia: {
      appId: 'V2EFIWEJ25',
      apiKey: 'dc6b220f7d2bcd12da60b9cce431d8c5',
      indexName: 'ory',
      contextualSearch: true,
      searchParameters: {
        facetFilters: [[`tags:docs`]]
      }
    },
    navbar: {
      hideOnScroll: false,
      logo: {
        alt: 'Ory',
        src: `docs/img/logo-docs.svg`,
        srcDark: `docs/img/logo-docs.svg`,
        href: `https://www.ory.sh/docs`
      },
      items: [
        {
          to: 'https://www.ory.sh/',
          label: `Home`,
          position: 'left'
        },
        {
          href: `https://github.com/ory/cloud/discussions`,
          label: 'Discussions',
          position: 'right'
        },
        {
          href: 'https://www.ory.sh/chat',
          label: 'Slack',
          position: 'right'
        },
        {
          href: `https://github.com/ory`,
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Ory Corp`,
      links: [
        {
          title: 'Company',
          items: [
            {
              label: 'Imprint',
              href: 'https://www.ory.sh/imprint'
            },
            {
              label: 'Privacy',
              href: 'https://www.ory.sh/privacy'
            },
            {
              label: 'Terms',
              href: 'https://www.ory.sh/tos'
            }
          ]
        }
      ]
    }
  },
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs',
        sidebarPath: require.resolve('./src/sidebar.js'),
        editUrl: `https://github.com/ory/docs/edit/master/docs`,
        // editCurrentVersion: false,
        routeBasePath: '/',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        disableVersioning: false,
        include: ['**/*.md', '**/*.mdx', '**/*.jsx', '**/*.tsx'],
        docLayoutComponent: '@theme/RoutedDocPage'
      }
    ],
    '@docusaurus/plugin-content-pages',
    require.resolve('./src/plugins/ory-scripts-loader'),
    require.resolve('./src/plugins/docusaurus-plugin-matamo'),
    '@docusaurus/plugin-sitemap',
    'docusaurus2-dotenv',
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/',
            to: '/docs',
          }
        ]
      }
    ]
  ],
  themes: [
    [
      '@docusaurus/theme-classic',
      {
        customCss: [require.resolve('./src/css/theme.css')]
      }
    ],
    '@docusaurus/theme-search-algolia',
    'docusaurus-theme-redoc'
  ]
}
