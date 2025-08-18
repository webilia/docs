// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightUtils from '@lorenzo_lewis/starlight-utils';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Webilia',
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
                { label: 'Site & Navigation', autogenerate: { directory: 'vertex/widgets/site-navigation' } },
                { label: 'Content & Layout', autogenerate: { directory: 'vertex/widgets/content-layout' } },
                { label: 'Media & Interactivity', autogenerate: { directory: 'vertex/widgets/media-interactivity' } },
                { label: 'Dynamic Posts & Templates', autogenerate: { directory: 'vertex/widgets/dynamic-posts-templates' } },
                { label: 'Data & Maps', autogenerate: { directory: 'vertex/widgets/data-maps' } },
                { label: 'Forms & Accounts', autogenerate: { directory: 'vertex/widgets/forms-accounts' } },
                { label: 'Carousels & Timelines', autogenerate: { directory: 'vertex/widgets/carousels-timelines' } },
              ],
            },
            { label: 'Extensions', autogenerate: { directory: 'vertex/extensions' } },
            { label: 'Advanced Features', autogenerate: { directory: 'vertex/advanced-features' } },
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
