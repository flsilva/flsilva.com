import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { DiscussionEmbed } from 'disqus-react';

import { Layout } from '../../components/layouts/Layout';
import { SEO } from '../../components/SEO';
import { BlogPostCard } from '../../components/blog/BlogPostCard';

const BlogPostPage: React.FC<PageProps<Queries.BlogPostQuery>> = ({ children, data }) => (
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
      <article>
        <p>identifier: {`/blog/${data.mdx.frontmatter.slug}`}</p>
        <p>title: {data.mdx.frontmatter.title}</p>
        <p>shortname: {process.env.GATSBY_DISQUS_NAME}</p>
        {children}
      </article>
      <DiscussionEmbed
        config={{
          identifier: `/blog/${data.mdx.frontmatter.slug}`,
          title: data.mdx.frontmatter.title,
        }}
        shortname={process.env.GATSBY_DISQUS_NAME || ''}
      />
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

export default BlogPostPage;

export const Head: HeadFC<PageProps<Queries.BlogPostQuery>> = ({ data }) => (
  <SEO title={`${data.mdx.frontmatter.title} by `} />
);
