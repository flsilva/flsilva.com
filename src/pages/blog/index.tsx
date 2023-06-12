import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { graphql } from 'gatsby';

import { Layout } from '../../components/layouts/Layout';
import { SEO } from '../../components/SEO';
import { BlogPostCard } from '../../components/blog/BlogPostCard';
import { list } from './index.module.css';

const BlogPage: React.FC<PageProps<Queries.PortfolioProjectsQuery>> = ({ data }) => (
  <Layout>
    <div className={list}>
      {data.allMdx.nodes.map((node) => (
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

export const query = graphql`
  query BlogPosts {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { contentType: { eq: "blog-post" } } }
    ) {
      nodes {
        id
        frontmatter {
          date
          description
          heroImage {
            childImageSharp {
              gatsbyImageData
            }
          }
          heroImageCreditText
          heroImageCreditUrl
          slug
          tags
          title
        }
      }
    }
  }
`;

export default BlogPage;

export const Head: HeadFC = () => (
  <SEO
    description="Check out my blog and the articles I've been writing."
    pagePath="/blog"
    title="Blog"
  />
);
