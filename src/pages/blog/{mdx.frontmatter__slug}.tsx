import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { DiscussionEmbed } from 'disqus-react';

import { Layout } from '../../components/layouts/Layout';
import { SEO } from '../../components/SEO';
import { BlogPostCard } from '../../components/blog/BlogPostCard';
import { CreativeCommonsBy } from '../../components/creative-commons/CreativeCommonsBy';
import { SocialMediaShareButtons } from '../../components/social-media-share/SocialMediaShareButtons';
import { post as postStyle } from './BlogPostPage.module.css';

const BlogPostPage: React.FC<PageProps<Queries.BlogPostQuery>> = ({ children, data }) => (
  <Layout>
    <div>
      <BlogPostCard
        key={data.mdx.id}
        author={data.mdx.frontmatter.author}
        authorImage={data.mdx.frontmatter.authorImage}
        date={data.mdx.frontmatter.date}
        dateUpdated={data.mdx.frontmatter.dateUpdated}
        heroImage={data.mdx.frontmatter.heroImage}
        heroImageCreditText={data.mdx.frontmatter.heroImageCreditText}
        heroImageCreditUrl={data.mdx.frontmatter.heroImageCreditUrl}
        shouldRenderSocialMediaShare
        slug={data.mdx.frontmatter.slug}
        description={data.mdx.frontmatter.description}
        tags={data.mdx.frontmatter.tags}
        tagsLocation="below-hero"
        title={data.mdx.frontmatter.title}
      />
      <SocialMediaShareButtons
        hashtags={data.mdx.frontmatter.tags}
        tweetText={data.mdx.frontmatter.tweetText}
        tweetVia={data.mdx.frontmatter.tweetVia}
        url={`${data.site?.siteMetadata?.siteUrl}/blog/${data.mdx.frontmatter.slug}`}
      />
      <article className={postStyle}>{children}</article>
      <SocialMediaShareButtons
        hashtags={data.mdx.frontmatter.tags}
        tweetText={data.mdx.frontmatter.tweetText}
        tweetVia={data.mdx.frontmatter.tweetVia}
        url={`${data.site?.siteMetadata?.siteUrl}/blog/${data.mdx.frontmatter.slug}`}
      />
      <CreativeCommonsBy
        authorName={data.mdx.frontmatter.author}
        authorUrl={data.mdx.frontmatter.authorUrl}
        workTitle={data.mdx.frontmatter.title}
      />
      <DiscussionEmbed
        config={{
          identifier: `/blog/${data.mdx.frontmatter.slug}/`,
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
        siteUrl
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
        authorUrl
        date
        dateUpdated
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
    authorName={data.mdx.frontmatter.author}
    description={data.mdx.frontmatter.description}
    imagePath={data.mdx.frontmatter.heroImage}
    title={data.mdx?.frontmatter.title}
    pagePath={`/blog/${data.mdx.frontmatter.slug}`}
    title={`${data.mdx.frontmatter.title}`}
    tweetVia={`${data.mdx.frontmatter.tweetVia}`}
  />
);
