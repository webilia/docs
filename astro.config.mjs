// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
                        title: 'Webilia',
                        social: [
                                { icon: 'github', label: 'GitHub', href: 'https://github.com/webilia/docs' },
                                { icon: 'external', label: 'Website', href: 'https://webilia.com' },
                                { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/webilia-inc/' },
                        ],
                        sidebar: [
                                {
                                        label: 'Products',
                                        items: [
                                                { label: 'Listdom', slug: 'listdom' },
                                                { label: 'Vertex Addons', slug: 'vertex' },
                                        ],
                                },
                        ],
                }),
        ],
});
