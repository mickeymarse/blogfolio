import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: `Mickey’s Blog`,
    description: 'A journal on my journey into tech as a transfem career-changer.',
    // Pull in your project "site" from the endpoint context
    site: context.site,
    trailingSlash: false,
    xmlns: {
      media: 'http://search.yahoo.com/mrss/',
      atom: 'http://www.w3.org/2005/Atom',
    },
    // add atom:link to be compatible with atom
    customData: `<atom:link href="${context.site}rss.xml" rel="self" type="application/rss+xml" />`,
    // Array of `<item>`s in output xml
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      author: post.data.author,
      heroImage: post.data.heroImage,
      // Compute RSS link from post `slug`
      link: `/blog/${post.slug}/`,
      content: sanitizeHtml(parser.render(post.body)),
      ...post.data,
      customData: `<media:content
            type="image/${post.data.heroImage.format == 'jpg' ? 'jpeg' : 'png'}"
            width="${post.data.heroImage.width}"
            height="${post.data.heroImage.height}"
            medium="image"
            url="${context.site + post.data.heroImage.src}" />
        `,
    })),
  });
}
