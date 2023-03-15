import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { DiscussionEmbed } from 'disqus-react';

import { Layout } from '../../components/layouts/Layout';
import { SEO } from '../../components/SEO';
import { BlogPostCard } from '../../components/blog/BlogPostCard';
import { post as postStyle } from './BlogPostPage.module.css';

const getBlogPostUrl = (baseUrl: string, slug: string) => `${baseUrl}/blog/${slug}`;

const BlogPostPage: React.FC<PageProps<Queries.BlogPostQuery>> = ({ children, data }) => (
  <Layout>
    <div>
      <BlogPostCard
        key={data.mdx.id}
        author={data.mdx.frontmatter.author}
        authorImage={data.mdx.frontmatter.authorImage}
        date={data.mdx.frontmatter.date}
        heroImage={data.mdx.frontmatter.heroImage}
        heroImageCreditText={data.mdx.frontmatter.heroImageCreditText}
        heroImageCreditUrl={data.mdx.frontmatter.heroImageCreditUrl}
        shouldRenderSocialMediaShare
        slug={data.mdx.frontmatter.slug}
        socialMediaShareData={{
          tweetText: data.mdx.frontmatter.tweetText,
          tweetVia: data.mdx.frontmatter.tweetVia,
          url: `${data.site?.siteMetadata?.url}/blog/${data.mdx.frontmatter.slug}`,
        }}
        description={data.mdx.frontmatter.description}
        tags={data.mdx.frontmatter.tags}
        tagsLocation="below-hero"
        title={data.mdx.frontmatter.title}
      />
      <article className={postStyle}>{children}</article>
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
    site {
      siteMetadata {
        url
      }
    }

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
        tweetText
        tweetVia
        title
      }
    }
  }
`;

export default BlogPostPage;

export const Head: HeadFC<PageProps<Queries.BlogPostQuery>> = ({ data }) => (
  <SEO
    description={data.mdx.frontmatter.description}
    title={data.mdx?.frontmatter.title}
    pagePath={`/blog/${data.mdx.frontmatter.slug}`}
    title={`${data.mdx.frontmatter.title}`}
  />
);
