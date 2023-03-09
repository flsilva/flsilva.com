import * as React from 'react';
import { format } from 'date-fns';
import type { IGatsbyImageData } from 'gatsby-plugin-image';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { Tag } from '../tags/Tag';
import {
  author as authorStyle,
  authorImage as authorImageStyle,
  heroImage as heroImageStyle,
  summary as summaryStyle,
  tags as tagsStyle,
} from './BlogPostCard.module.css';

interface BlogPostCardProps {
  author?: string;
  authorImage?: IGatsbyImageData;
  date: string;
  heroImage?: IGatsbyImageData;
  slug: string;
  summary?: string;
  tags?: Array<string>;
  title: string;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({
  author,
  authorImage,
  date,
  heroImage,
  slug,
  summary,
  tags,
  title,
}) => (
  <article>
    <header>
      <a href={`/blog/${slug}`}>
        <h1>{title}</h1>
      </a>
    </header>
    <footer>
      {summary && (
        <a href={`/blog/${slug}`}>
          <p className={summaryStyle}>{summary}</p>
        </a>
      )}
      {tags && tags.length > 0 && (
        <div className={tagsStyle}>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      )}
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
    </footer>
  </article>
);
