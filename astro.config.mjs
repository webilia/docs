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
      favicon: '/favicon.svg',
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
            { label: 'Installation & Activation', autogenerate: { directory: 'listdom/installation-and-activation' }, collapsed: true },
            {
              label: 'Managing Listings',
              items: [
                { label: 'All Listings Menu', link: '/listdom/managing-listings/all-listings-menu/' },
                { label: 'Add/Edit Listing', link: '/listdom/managing-listings/add-edit-listing/' },
                { label: 'Custom Fields', link: '/listdom/managing-listings/custom-fields/' },
              ],
              collapsed: true
            }, 
            { label: 'Search & Filter Builder', autogenerate: { directory: 'listdom/search-filtering' }, collapsed: true },
            {
              label: 'Settings',
              items: [
                { label: 'General', link: '/listdom/settings/general/' },
                { label: 'Customizer', link: '/listdom/settings/customizer/' },
                { label: 'Frontend Dashboard', link: '/listdom/settings/frontend-dashboard/' },
                { label: 'Users', link: '/listdom/settings/users/' },
                { label: 'Single Listing', link: '/listdom/settings/single-listing/' },
                { label: 'Advanced', link: '/listdom/settings/advanced/' },
                { label: 'AI', link: '/listdom/settings/ai/' },
                { label: 'API', link: '/listdom/settings/api/' },
              ],
              collapsed: true
            }, 
            { label: 'Listdom Addons', autogenerate: { directory: 'listdom/addons' }, collapsed: true },
            { label: 'Frontend Dashboard', autogenerate: { directory: 'listdom/frontend-dashboard' }, collapsed: true },
            { label: 'Notifications', autogenerate: { directory: 'listdom/notifications' }, collapsed: true },
            { label: 'Import & Export', autogenerate: { directory: 'listdom/import-export' }, collapsed: true },
            {
              label: 'Listdomer Theme',
              items: [
                { label: 'Installation Setup', link: '/listdom/listdomer-theme/installation-setup/' },
                { label: 'Demo Import', link: '/listdom/listdomer-theme/demo-import/' },
                { label: 'Settings', link: '/listdom/listdomer-theme/settings/' },
                { label: 'Widgets', link: '/listdom/listdomer-theme/widgets/' },
                { label: 'Page Templates', link: '/listdom/listdomer-theme/page-templates/' },
                { label: 'Troubleshooting', link: '/listdom/listdomer-theme/troubleshooting/' },
              ],
              collapsed: true
            }, 
            { label: 'How tos', autogenerate: { directory: 'listdom/how-tos' }, collapsed: true },
            { label: 'Troubleshooting', autogenerate: { directory: 'listdom/troubleshooting' }, collapsed: true },
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
        PageTitle: './src/components/PageTitle.astro',
      },
    }),
  ],
});
