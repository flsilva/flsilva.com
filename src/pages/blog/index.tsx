import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { graphql } from 'gatsby';

import { Layout } from '../../components/layouts/Layout';
import { SEO } from '../../components/SEO';
import { BlogPostCard } from '../../components/blog/BlogPostCard';

const BlogPage: React.FC<PageProps<Queries.PortfolioProjectsQuery>> = ({ data }) => (
  <Layout>
    <div>
      {data.allMdx.nodes.map((node) => (
        <BlogPostCard
          key={node.id}
          date={node.frontmatter.date}
          heroImage={node.frontmatter.heroImage}
          slug={node.frontmatter.slug}
          summary={node.frontmatter.summary}
          tags={node.frontmatter.tags}
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
          heroImage {
            childImageSharp {
              gatsbyImageData
            }
          }
          slug
          summary
          tags
          title
        }
      }
    }
  }
`;

export default BlogPage;

export const Head: HeadFC = () => <SEO title="Blog from " />;
