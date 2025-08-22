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
            { label: 'Getting Started', autogenerate: { directory: 'listdom/getting-started' } },
            { label: 'Installation & Activation', autogenerate: { directory: 'listdom/installation-and-activation' } },
            { label: 'Managing Listings',
             items: [
                { label: 'Add/Edit Listing', autogenerate: { directory: 'listdom/manage-listings/add-edit-listings' }, collapsed: true },
                { label: 'Taxonomies', autogenerate: { directory: 'listdom/manage-listings/taxonomies' }, collapsed: true },
                { label: 'Custom Fields', autogenerate: { directory: 'listdom/manage-listings/custom-fields' }, collapsed: true },
              ],
              collapsed: true
            }, 
            { label: 'Skins Shortcodes', autogenerate: { directory: 'listdom/skins-shortcodes' } },
            { label: 'Search & Filter Builder', autogenerate: { directory: 'listdom/search-filtering' } },
            { label: 'Settings',
             items: [
                { label: 'General', autogenerate: { directory: 'listdom/Settings/general' }, collapsed: true },
                { label: 'Customizer', autogenerate: { directory: 'listdom/Settings/customizer' }, collapsed: true },
                { label: 'Frontend Dashboard', autogenerate: { directory: 'listdom/Settings/frontend-dashboard' }, collapsed: true },
                { label: 'Users', autogenerate: { directory: 'listdom/Settings/users' }, collapsed: true },
                { label: 'Single Listing', autogenerate: { directory: 'listdom/Settings/single-listing' }, collapsed: true },
                { label: 'Advanced', autogenerate: { directory: 'listdom/Settings/advanced' }, collapsed: true },
                { label: 'AI', autogenerate: { directory: 'listdom/Settings/ai' }, collapsed: true },
                { label: 'API', autogenerate: { directory: 'listdom/Settings/api' }, collapsed: true },
              ],
              collapsed: true
            }, 
            { label: 'Map Setup ', autogenerate: { directory: 'listdom/map-setup' } },
            { label: 'Shortcodes', autogenerate: { directory: 'listdom/shortcodes' } },
            { label: 'Theme Widgets', autogenerate: { directory: 'listdom/theme-widgets' } },
            { label: 'Listdom Addons', autogenerate: { directory: 'listdom/addons' } },
            { label: 'Frontend Dashboard', autogenerate: { directory: 'listdom/frontend-dashboard' } },
            { label: 'Notifications', autogenerate: { directory: 'listdom/notifications' } },
            { label: 'Import & Export', autogenerate: { directory: 'listdom/import-export' } },         
            { label: 'Listdomer Theme',
             items: [
                { label: 'Installation Setup', autogenerate: { directory: 'listdom/listdomer-theme/installation-setup' }, collapsed: true },
                { label: 'Demo Import', autogenerate: { directory: 'listdom/listdomer-theme/demo-import' }, collapsed: true },
                { label: 'Settings', autogenerate: { directory: 'listdom/listdomer-theme/settings' }, collapsed: true },
                { label: 'Widgets', autogenerate: { directory: 'listdom/listdomer-theme/widgets' }, collapsed: true },
                { label: 'Page Templates', autogenerate: { directory: 'listdom/listdomer-theme/page-templates' }, collapsed: true },
                { label: 'Troubleshooting', autogenerate: { directory: 'listdom/listdomer-theme/troubleshooting' }, collapsed: true },
              ],
              collapsed: true
            }, 
            { label: 'How tos', autogenerate: { directory: 'listdom/how-tos' } },
            { label: 'Troubleshooting', autogenerate: { directory: 'listdom/troubleshooting' } },
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
