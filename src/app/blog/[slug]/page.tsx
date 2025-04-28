import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { H2 } from "@/features/shared/ui/typography/Typography";
import { DiscussionEmbedClient } from "@/features/shared/ui/commenting/DiscussionEmbedClient";
import { CreativeCommonsBy } from "@/features/shared/ui/creative-commons/CreativeCommonsBy";
import { SocialMediaShareButtons } from "@/features/shared/ui/social-media-share/SocialMediaShareButtons";
import { getAllBlogPostSlugs } from "@/features/blog/data/blogData";
import { BlogPostCard } from "@/features/blog/ui/BlogPostCard";
import { GiscusClient } from "@/features/shared/ui/commenting/GiscusClient";

export async function generateStaticParams() {
  const slugs = await getAllBlogPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const { slug } = await params;
    const postModule = await import(`@/features/blog/data/${slug}/index.mdx`);
    return {
      title: postModule.name,
      description: postModule.description,
    };
  } catch {
    return {
      title: "Post Not Found",
    };
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  let postModule: any;
  try {
    postModule = await import(`@/features/blog/data/${slug}/index.mdx`);
  } catch {
    notFound();
  }

  const {
    default: BlogPost,
    author,
    authorImage,
    authorUrl,
    date,
    dateUpdated,
    description,
    heroImage,
    heroImageCreditText,
    heroImageCreditUrl,
    heroImageHeight,
    heroImageWidth,
    tags,
    tweetText,
    tweetVia,
    title,
  } = postModule;

  return (
    <div>
      <BlogPostCard
        author={author}
        authorImage={authorImage}
        date={date}
        dateUpdated={dateUpdated}
        description={description}
        heroImage={heroImage}
        heroImageCreditText={heroImageCreditText}
        heroImageCreditUrl={heroImageCreditUrl}
        heroImageHeight={heroImageHeight}
        heroImageWidth={heroImageWidth}
        slug={slug}
        socialMediaShareButtons
        tags={tags}
        tagsLocation="below-hero"
        tweetText={tweetText}
        tweetVia={tweetVia}
        title={title}
      />
      <article className="grid gap-y-6 -mt-8">{<BlogPost />}</article>
      <CreativeCommonsBy
        authorName={author}
        authorUrl={authorUrl}
        className="mt-12"
        workTitle={title}
      />
      <SocialMediaShareButtons
        className="mt-12"
        hashtags={tags}
        tweetText={tweetText}
        tweetVia={tweetVia}
        url={`https://flsilva.com/blog/${slug}`}
      />
      {slug === "introduction-to-nodejs" && (
        <DiscussionEmbedClient slug={slug} title={title} />
      )}
      {slug !== "introduction-to-nodejs" && (
        <>
          <H2 id="post-comments" className="text-center mt-8 mb-12">
            Leave a comment using your GitHub account
          </H2>
          <GiscusClient title={title} />
        </>
      )}
    </div>
  );
}
