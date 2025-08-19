// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightUtils from '@lorenzo_lewis/starlight-utils';

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.webilia.com',
  integrations: [
    starlight({
      title: 'Webilia Docs',
      logo: {
        src: './src/assets/logo.svg',
        replacesTitle: true,
      },
      favicon: './src/assets/favicon.svg',
      editLink: {
        baseUrl: 'https://github.com/webilia/docs/edit/main',
      },
      defaultLocale: 'root',
      locales: {
        root: { label: 'English', lang: 'en' },
        fr: { label: 'Français' },
        es: { label: 'Español' },
        de: { label: 'Deutsch' },
        'pt-br': { label: 'Português (Brasil)', lang: 'pt-BR' },
        'zh-cn': { label: '简体中文', lang: 'zh-CN' },
        'zh-tw': { label: '繁體中文', lang: 'zh-TW' },
        ja: { label: '日本語' },
        fa: { label: 'فارسی', dir: 'rtl' },
        ar: { label: 'العربية', dir: 'rtl' },
        hi: { label: 'हिन्दी' },
        it: { label: 'Italiano' },
        ru: { label: 'Русский' },
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/webilia/docs' },
        { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/webilia-inc/' },
      ],
      sidebar: [
        {
          label: 'Listdom',
          items: [
            { label: 'Overview', link: '/listdom/' },
            { label: 'Getting Started', autogenerate: { directory: 'listdom/getting-started' } },
          ],
        },
        {
          label: 'Vertex Addons',
          items: [
            { label: 'Overview', autogenerate: { directory: 'vertex/overview' } },
            { label: 'Getting Started', autogenerate: { directory: 'vertex/getting-started' } },
            {
              label: 'Widgets',
              items: [
                { label: 'Widgets Overview', link: '/vertex/widgets/' },
                { label: 'Site & Navigation', autogenerate: { directory: 'vertex/widgets/site-navigation' }, collapsed: true },
                { label: 'Content & Layout', autogenerate: { directory: 'vertex/widgets/content-layout' }, collapsed: true },
                { label: 'Media & Interactivity', autogenerate: { directory: 'vertex/widgets/media-interactivity' }, collapsed: true },
                { label: 'Dynamic Posts & Templates', autogenerate: { directory: 'vertex/widgets/dynamic-posts-templates' }, collapsed: true },
                { label: 'Data & Maps', autogenerate: { directory: 'vertex/widgets/data-maps' }, collapsed: true },
                { label: 'Forms & Accounts', autogenerate: { directory: 'vertex/widgets/forms-accounts' }, collapsed: true },
                { label: 'Carousels & Timelines', autogenerate: { directory: 'vertex/widgets/carousels-timelines' }, collapsed: true },
              ],
              collapsed: true
            },
            { label: 'Extensions', autogenerate: { directory: 'vertex/extensions' }, collapsed: true },
            { label: 'Template Builder', autogenerate: { directory: 'vertex/template-builder' }, collapsed: true },
            {
              label: 'Advanced Features',
              items: [
                { label: 'Popup Builder', link: '/vertex/advanced-features/advanced-popup-builder' },
                { label: 'Dynamic Tags', link: '/vertex/advanced-features/dynamic-tags' },
                { label: 'Template Kit', link: '/vertex/advanced-features/templates-kit-demo-importer' },
              ],
              collapsed: true,
            },
          ],
        },
      ],
      plugins: [
        starlightUtils({ multiSidebar: { switcherStyle: 'horizontalList' } }),
      ],
      customCss: ['./src/styles/app.css'],
      components: {
        SocialIcons: './src/components/SocialIcons.astro',
      },
    }),
  ],
});
