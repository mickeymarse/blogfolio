import { getCollection } from 'astro:content';

const SITE_URL = import.meta.env.SITE_URL;
const collection = 'blog';

export default async () => {
  const posts = await getCollection(collection);

  return posts.map((post) => ({
    ...post,
    data: {
      ...post.data,
      ogImage: `${SITE_URL}/og/${collection}/${post.slug}.png`,
    },
  }));
};
