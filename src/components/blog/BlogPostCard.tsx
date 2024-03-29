import * as React from 'react';
import { format } from 'date-fns';
import type { IGatsbyImageData } from 'gatsby-plugin-image';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { Tag } from '../tags/Tag';
import {
  author as authorStyle,
  authorImage as authorImageStyle,
  authorText as authorTextStyle,
  heroImage as heroImageStyle,
  description as descriptionStyle,
  tags as tagsStyle,
  titleLink,
} from './BlogPostCard.module.css';

interface BlogPostCardProps {
  author?: string;
  authorImage?: IGatsbyImageData;
  date: string;
  dateUpdated: string;
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
  dateUpdated,
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
      <a href={`/blog/${slug}`} className={titleLink}>
        <h1>{title}</h1>
      </a>
    </header>
    <footer>
      {description && <p className={descriptionStyle}>{description}</p>}
      {tagsLocation === 'above-hero' && renderTags(tags)}
      {author && (
        <div className={authorStyle}>
          {authorImage && (
            <GatsbyImage image={getImage(authorImage)} alt={author} className={authorImageStyle} />
          )}
          <div className={authorTextStyle}>
            <div>
              <small>
                {author} &#8226; {format(new Date(date), 'MMMM d, y')}
              </small>
            </div>
            {dateUpdated && <small>Updated on {format(new Date(dateUpdated), 'MMMM d, y')}</small>}
          </div>
        </div>
      )}
      <figure>
        <GatsbyImage className={heroImageStyle} image={getImage(heroImage)} alt={title} />
        {heroImageCreditText && heroImageCreditUrl && (
          <figcaption>
            <a href={heroImageCreditUrl}>{heroImageCreditText}</a>
          </figcaption>
        )}
      </figure>
      {tagsLocation === 'below-hero' && renderTags(tags)}
    </footer>
  </article>
);
