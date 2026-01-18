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
            { label: 'AI 에이전트란?', to: '/docs/overview/what-is-ai-agent' },
            { label: '발전 역사', to: '/docs/overview/evolution-history' },
            { label: '현재 기술 수준', to: '/docs/overview/current-state' },
          ],
        },
        {
          title: '핵심 기술',
          items: [
            { label: 'LLM 기반 에이전트', to: '/docs/core-technologies/llm-based-agent' },
            { label: '멀티모달 에이전트', to: '/docs/core-technologies/multimodal-agent' },
            { label: '자율 에이전트', to: '/docs/core-technologies/autonomous-agent' },
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
