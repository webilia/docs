// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightUtils from '@lorenzo_lewis/starlight-utils';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Webilia',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/webilia/docs' },
        { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/webilia-inc/' },
        { icon: 'cloud-download', label: 'Website', href: 'https://webilia.com' },
      ],
      sidebar: [
        { label: 'Listdom', autogenerate: { directory: 'listdom' } },
        { label: 'Vertex Addons', autogenerate: { directory: 'vertex' } },
      ],
      plugins: [
        starlightUtils({ multiSidebar: { switcherStyle: 'horizontalList' } }),
      ],
      customCss: ['./src/styles/multi-sidebar.css'],
      components: {
        SocialIcons: './src/components/SocialIcons.astro',
      },
    }),
  ],
});
