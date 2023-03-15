import * as React from 'react';
import { format } from 'date-fns';
import type { IGatsbyImageData } from 'gatsby-plugin-image';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { Tag } from '../tags/Tag';
import {
  author as authorStyle,
  authorImage as authorImageStyle,
  heroImage as heroImageStyle,
  heroImageLink,
  description as descriptionStyle,
  tags as tagsStyle,
} from './BlogPostCard.module.css';

interface BlogPostCardProps {
  author?: string;
  authorImage?: IGatsbyImageData;
  date: string;
  description?: string;
  heroImage?: IGatsbyImageData;
  heroImageCreditText?: string;
  heroImageCreditUrl?: string;
  slug: string;
  tags?: Array<string>;
  tagsLocation?: 'above-hero' | 'below-hero';
  title: string;
}

const renderTags = (tags: Array<string> | undefined) => {
  if (tags && tags.length > 0) {
    return (
      <div className={tagsStyle}>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    );
  }
  return undefined;
};

export const BlogPostCard: React.FC<BlogPostCardProps> = ({
  author,
  authorImage,
  date,
  description,
  heroImage,
  heroImageCreditText,
  heroImageCreditUrl,
  slug,
  tags,
  tagsLocation = 'above-hero',
  title,
}) => (
  <article>
    <header>
      <a href={`/blog/${slug}`}>
        <h1>{title}</h1>
      </a>
    </header>
    <footer>
      {description && (
        <a href={`/blog/${slug}`}>
          <p className={descriptionStyle}>{description}</p>
        </a>
      )}
      {tagsLocation === 'above-hero' && renderTags(tags)}
      {author && (
        <div className={authorStyle}>
          {authorImage && (
            <GatsbyImage image={getImage(authorImage)} alt={author} className={authorImageStyle} />
          )}
          <small>
            <em>by</em> {author} <em>on</em> {format(new Date(date), 'MMM d, y')}
          </small>
        </div>
      )}
      <a href={`/blog/${slug}`}>
        <GatsbyImage className={heroImageStyle} image={getImage(heroImage)} alt={title} />
      </a>
      {heroImageCreditText && heroImageCreditUrl && (
        <a href={heroImageCreditUrl} className={heroImageLink}>
          {heroImageCreditText}
        </a>
      )}
      {tagsLocation === 'below-hero' && renderTags(tags)}
    </footer>
  </article>
);
