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
        { icon: 'cloud-download', label: 'Website', href: 'https://webilia.com' },
        { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/webilia-inc/' },
      ],
      sidebar: [
        { label: 'Listdom', autogenerate: { directory: 'listdom' } },
        { label: 'Vertex Addons', autogenerate: { directory: 'vertex-addons' } },
      ],
      plugins: [
        starlightUtils({ multiSidebar: { switcherStyle: 'horizontalList' } }),
      ],
      components: {
        SocialIcons: './src/components/SocialIcons.astro',
      },
    }),
  ],
});
