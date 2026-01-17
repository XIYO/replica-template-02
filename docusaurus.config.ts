import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {readFileSync} from 'fs';

const siteConfig = JSON.parse(readFileSync('./site.config.json', 'utf-8'));
const siteUrl = `https://${siteConfig.subdomain}.xiyo.dev`;
const [orgName, repoName] = siteConfig.githubRepo.split('/');

const config: Config = {
  title: siteConfig.title,
  tagline: siteConfig.description,
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: siteUrl,
  baseUrl: '/',

  organizationName: orgName,
  projectName: repoName,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: siteConfig.locale,
    locales: [siteConfig.locale],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: siteConfig.title,
      logo: {
        alt: `${siteConfig.title} Logo`,
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: `https://github.com/${siteConfig.githubRepo}`,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '개요',
          items: [
            { label: '소개', to: '/docs/overview/introduction' },
            { label: '시장 영향', to: '/docs/overview/market-impact' },
            { label: '타겟 고객', to: '/docs/overview/target-audience' },
          ],
        },
        {
          title: '주요 기능',
          items: [
            { label: '하드웨어 사양', to: '/docs/features/hardware-specs' },
            { label: '소프트웨어 및 게임', to: '/docs/features/software-and-games' },
            { label: '사용자 경험', to: '/docs/features/user-experience' },
          ],
        },
        {
          title: '더보기',
          items: [
            { label: 'Blog', to: '/blog' },
            { label: 'GitHub', href: `https://github.com/${siteConfig.githubRepo}` },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ${siteConfig.title}. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
