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
                                { icon: 'cloud-download', label: 'Website', href: 'https://webilia.com' },
                                { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/webilia-inc/' },
                        ],
                        sidebar: [
                                {
                                        label: 'Products',
                                        items: [
                                                { label: 'Listdom', slug: 'listdom' },
                                                {
                                                        label: 'Vertex Addons',
                                                        collapsed: true,
                                                        items: [
                                                                { label: 'Overview', slug: 'vertex' },
                                                                {
                                                                        label: 'Getting Started',
                                                                        items: [
                                                                                {
                                                                                        label: 'Installation',
                                                                                        slug: 'vertex/getting-started/installation',
                                                                                },
                                                                        ],
                                                                },
                                                                {
                                                                        label: 'Extensions',
                                                                        items: [
                                                                                { label: 'Custom CSS/JS', slug: 'vertex/extensions/custom-css-js' },
                                                                                { label: 'Scroll to Up', slug: 'vertex/extensions/scroll-to-up' },
                                                                                { label: 'Wrapper Link', slug: 'vertex/extensions/wrapper-link' },
                                                                        ],
                                                                },
                                                                {
                                                                        label: 'Widgets',
                                                                        items: [
                                                                                { label: 'Accordion', slug: 'vertex/widgets/accordion' },
                                                                                { label: 'Alert Box', slug: 'vertex/widgets/alert-box' },
                                                                                { label: 'Archive Title', slug: 'vertex/widgets/archive-title' },
                                                                                { label: 'Author Box', slug: 'vertex/widgets/author-box' },
                                                                                { label: 'Breadcrumb', slug: 'vertex/widgets/breadcrumb' },
                                                                                { label: 'Comments Form', slug: 'vertex/widgets/comments-form' },
                                                                                { label: 'Countdown', slug: 'vertex/widgets/countdown' },
                                                                                { label: 'Dynamic Archive Posts', slug: 'vertex/widgets/dynamic-archive-posts' },
                                                                                { label: 'Fancy Text', slug: 'vertex/widgets/fancy-text' },
                                                                                { label: 'Featured Image', slug: 'vertex/widgets/featured-image' },
                                                                                { label: 'Image Hotspot', slug: 'vertex/widgets/image-hotspot' },
                                                                                { label: 'Information Box', slug: 'vertex/widgets/information-box' },
                                                                                { label: 'News Ticker', slug: 'vertex/widgets/news-ticker' },
                                                                                { label: 'Notice Box', slug: 'vertex/widgets/notice-box' },
                                                                                { label: 'Page Title', slug: 'vertex/widgets/page-title' },
                                                                                { label: 'Post Comments', slug: 'vertex/widgets/post-comments' },
                                                                                { label: 'Post Content', slug: 'vertex/widgets/post-content' },
                                                                                { label: 'Post Date', slug: 'vertex/widgets/post-date' },
                                                                                { label: 'Post Excerpt', slug: 'vertex/widgets/post-excerpt' },
                                                                                { label: 'Post Terms', slug: 'vertex/widgets/post-terms' },
                                                                                { label: 'Post Time', slug: 'vertex/widgets/post-time' },
                                                                                { label: 'Post Title', slug: 'vertex/widgets/post-title' },
                                                                                { label: 'Price Box', slug: 'vertex/widgets/price-box' },
                                                                                { label: 'Search Input', slug: 'vertex/widgets/search-input' },
                                                                                { label: 'Site Title', slug: 'vertex/widgets/site-title' },
                                                                                { label: 'Sound Player', slug: 'vertex/widgets/sound-player' },
                                                                                { label: 'Template', slug: 'vertex/widgets/template' },
                                                                                { label: 'Testimonial Carousel', slug: 'vertex/widgets/testimonial-carousel' },
                                                                                { label: 'Timeline', slug: 'vertex/widgets/timeline' },
                                                                                { label: 'Widgets Overview', slug: 'vertex/widgets/widgets-overview' },
                                                                        ],
                                                                },
                                                        ],
                                                },
                                        ],
                                },
                        ],
                        components: {
                                SocialIcons: './src/components/SocialIcons.astro',
                        },
                }),
        ],
});
