"use client";

import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

import {
  A,
  H1,
  P,
  SmallText,
} from "@/features/shared/ui/typography/Typography";
import { Tag } from "@/features/shared/ui/tags/Tag";
import { SpaceBetween } from "@/features/shared/ui/SpaceBetween";
import { SocialMediaShareButtons } from "@/features/shared/ui/social-media-share/SocialMediaShareButtons";

interface BlogPostCardProps {
  readonly author?: string;
  readonly authorImage?: string; // URL string now, since GatsbyImage is not used
  readonly date: string;
  readonly dateUpdated?: string;
  readonly description?: string;
  readonly heroImage: string; // URL string
  readonly heroImageCreditText?: string;
  readonly heroImageCreditUrl?: string;
  readonly heroImageHeight: number;
  readonly heroImageWidth: number;
  readonly slug: string;
  readonly socialMediaShareButtons?: boolean;
  readonly tags?: Array<string>;
  readonly tagsLocation: "above-hero" | "below-hero";
  readonly title: string;
  readonly titleLink?: string;
  readonly tweetText?: string;
  readonly tweetVia?: string;
}

const renderTags = (tags?: Array<string>) => {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="flex flex-row-reverse flex-wrap gap-y-4 mt-1.5">
      {tags
        .concat([])
        .reverse()
        .map((tag) => (
          <Tag key={tag} className="mr-2">
            {tag}
          </Tag>
        ))}
    </div>
  );
};

export const BlogPostCard = ({
  author,
  authorImage,
  date,
  dateUpdated,
  description,
  heroImage,
  heroImageCreditText,
  heroImageCreditUrl,
  heroImageHeight,
  heroImageWidth,
  slug,
  socialMediaShareButtons,
  tags,
  tagsLocation = "above-hero",
  title,
  titleLink,
  tweetText,
  tweetVia,
}: BlogPostCardProps) => {
  return (
    <article className="grid gap-y-6 mb-10">
      <header>
        {titleLink && (
          <H1>
            <Link href={titleLink} className="no-underline hover:no-underline">
              {title}
            </Link>
          </H1>
        )}
        {!titleLink && <H1>{title}</H1>}
      </header>
      <div>
        {description && <P className="m-0">{description}</P>}
        {tags && tagsLocation === "above-hero" && (
          <div className="mt-6 mb-8">{renderTags(tags)}</div>
        )}
        {author && (
          <div className="flex items-center flex-row my-6">
            {authorImage && (
              <Image
                src={`/images/people/${authorImage}`}
                alt={author}
                width={40}
                height={40}
                className="rounded-full w-10 h-10 object-cover"
              />
            )}
            <div className="ml-2 text-sm text-gray-600">
              <div>
                <SmallText>
                  {author} &#8226; {format(new Date(date), "MMMM d, y")}
                </SmallText>
              </div>
              {dateUpdated && (
                <SmallText className="block">
                  Updated on {format(new Date(dateUpdated), "MMMM d, y")}
                </SmallText>
              )}
            </div>
          </div>
        )}
        {heroImage && (
          <figure className="mt-4">
            <Image
              src={`/images/blog/${slug}/${heroImage}`}
              alt={title}
              width={heroImageWidth}
              height={heroImageHeight}
              className="w-full h-auto rounded"
            />
            {heroImageCreditText && heroImageCreditUrl && (
              <figcaption className="mt-2 text-center">
                {heroImageCreditUrl && (
                  <A
                    href={heroImageCreditUrl}
                    className="text-sm text-secondary-text hover:underline"
                  >
                    {heroImageCreditText}
                  </A>
                )}
                {!heroImageCreditUrl && heroImageCreditText && (
                  <p className="text-sm text-secondary-text hover:underline">
                    {heroImageCreditText}
                  </p>
                )}
              </figcaption>
            )}
          </figure>
        )}
        {((tags && tagsLocation === "below-hero") ||
          socialMediaShareButtons) && (
          <SpaceBetween className="items-start my-8">
            {socialMediaShareButtons && (
              <SocialMediaShareButtons
                hashtags={tags}
                tweetText={tweetText || ""}
                tweetVia={tweetVia}
                url={`https://www.flsilva.com/blog/${slug}`}
              />
            )}
            {tags && tagsLocation === "below-hero" && renderTags(tags)}
          </SpaceBetween>
        )}
      </div>
    </article>
  );
};
