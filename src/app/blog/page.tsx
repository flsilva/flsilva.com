import type { Metadata } from "next";

import { BlogPostCard } from "@/features/blog/ui/BlogPostCard";
import { getBlogPosts } from "@/features/blog/data/blogData";

export const metadata: Metadata = {
  title: "Blog by Flavio Silva: full-stack engineer",
  description: "Check out my blog and the articles I've been writing.",
  alternates: {
    canonical: "/blog",
  },
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      {posts.map((post) => (
        <BlogPostCard
          key={post.slug}
          date={post.date}
          description={post.description}
          heroImage={post.heroImage}
          heroImageCreditText={post.heroImageCreditText}
          heroImageCreditUrl={post.heroImageCreditUrl}
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
