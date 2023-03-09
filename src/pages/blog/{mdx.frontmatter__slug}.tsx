import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { graphql } from 'gatsby';

import { Layout } from '../../components/layouts/Layout';
import { SEO } from '../../components/SEO';
import { BlogPostCard } from '../../components/blog/BlogPostCard';

const PortfolioProjectPage: React.FC<PageProps<Queries.PortfolioProjectPageQuery>> = ({
  children,
  data,
}) => (
  <Layout>
    <div>
      <BlogPostCard
        key={data.mdx.id}
        author={data.mdx.frontmatter.author}
        authorImage={data.mdx.frontmatter.authorImage}
        date={data.mdx.frontmatter.date}
        heroImage={data.mdx.frontmatter.heroImage}
        slug={data.mdx.frontmatter.slug}
        summary={data.mdx.frontmatter.summary}
        tags={data.mdx.frontmatter.tags}
        title={data.mdx.frontmatter.title}
      />
      <article>{children}</article>
    </div>
  </Layout>
);

export const query = graphql`
  query BlogPost($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        authorImage {
          childImageSharp {
            gatsbyImageData
          }
        }
        author
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
`;

export default PortfolioProjectPage;

export const Head: HeadFC = ({ data }) => (
  <SEO title={`Article: ${data.mdx.frontmatter.title} by `} />
);
