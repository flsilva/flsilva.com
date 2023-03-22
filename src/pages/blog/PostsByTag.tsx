import * as React from 'react';
import { IGatsbyImageData } from 'gatsby-plugin-image';

import { Layout } from '../../components/layouts/Layout';
import { BlogPostCard } from '../../components/blog/BlogPostCard';
import { list } from './index.module.css';

interface PostsByTagProps {
  readonly nodes: readonly {
    readonly id: string;
    readonly frontmatter: {
      readonly name: string | null;
      readonly shortInfo: string | null;
      readonly slug: string | null;
      readonly heroImage: {
        readonly childImageSharp: {
          readonly gatsbyImageData: IGatsbyImageData;
        } | null;
      } | null;
    } | null;
  }[];
}

export const PostsByTag: React.FC<PostsByTagProps> = ({ nodes }) => (
  <Layout>
    <div className={list}>
      {nodes.map((node) => (
        <BlogPostCard
          key={node.id}
          date={node.frontmatter.date}
          description={node.frontmatter.description}
          heroImage={node.frontmatter.heroImage}
          heroImageCreditText={node.frontmatter.heroImageCreditText}
          heroImageCreditUrl={node.frontmatter.heroImageCreditUrl}
          slug={node.frontmatter.slug}
          tags={node.frontmatter.tags}
          tagsLocation="above-hero"
          title={node.frontmatter.title}
        />
      ))}
    </div>
  </Layout>
);
