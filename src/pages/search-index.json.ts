import { getCollection } from 'astro:content';

export async function GET() {
  const articles = await getCollection('articles');
  const index = articles.map((a) => ({
    title: a.data.title,
    slug: a.data.slug,
    excerpt: a.data.excerpt,
    category: a.data.category,
  }));
  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json' },
  });
}
