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
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/webilia/docs' },
        { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/webilia-inc/' },
        { icon: 'cloud-download', label: 'Website', href: 'https://webilia.com' },
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
            { label: 'Overview', link: '/vertex/' },
            { label: 'Getting Started', autogenerate: { directory: 'vertex/getting-started' } },
            { label: 'Extensions', autogenerate: { directory: 'vertex/extensions' } },
            { label: 'Widgets', autogenerate: { directory: 'vertex/widgets' } },
          ],
        },
      ],
      plugins: [
        starlightUtils({ multiSidebar: { switcherStyle: 'horizontalList' } }),
      ],
      customCss: ['./src/styles/app.css'],
      components: {
        SocialIcons: './src/components/SocialIcons.astro',
        Search: './src/components/AlgoliaSearch.astro',
      },
    }),
  ],
});
