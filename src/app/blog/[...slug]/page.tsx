import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getBlogPosts, getBlogPostsByTag } from "@/features/blog/data/blogData";
import { BlogPostCard } from "@/features/blog/ui/BlogPostCard";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  const tags = new Set();

  posts.forEach((post) => {
    post.tags?.forEach((tag) => tags.add(tag));
  });

  return Array.from(tags).map((tag) => ({ slug: [tag] }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;

  if (slug.length > 1) {
    return {
      title: "Page Not Found",
    };
  }

  const posts = await getBlogPostsByTag(slug[0]);

  if (posts.length === 0) {
    if (slug.length > 1) {
      return {
        title: "Page Not Found",
      };
    }
  }

  // Replace hyphens with spaces
  const tag = slug[0].replace(/-/g, " ");

  return {
    title: `${
      tag.charAt(0).toUpperCase() + tag.slice(1)
    } articles by Flavio Silva: full-stack engineer`,
    description: `Check out my articles about ${tag}.`,
  };
}

export default async function BlogTagPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  if (slug.length > 1) notFound();

  const posts = await getBlogPostsByTag(slug[0]);
  if (posts.length === 0) notFound();

  return (
    <>
      {posts.map((post) => (
        <BlogPostCard
          key={post.slug}
          date={post.date}
          description={post.description}
          heroImage={post.heroImage}
          heroImageHeight={post.heroImageHeight}
          heroImageWidth={post.heroImageWidth}
          slug={post.slug}
          tags={post.tags}
          tagsLocation="above-hero"
          title={post.title}
          titleLink={`/blog/${post.slug}`}
        />
      ))}
    </>
  );
}
