import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { graphql } from 'gatsby';

import { SEO } from '../../../components/SEO';
import { PostsByTag } from '../../../components/blog/PostsByTag';

const LetsEncryptPosts: React.FC<PageProps<Queries.PortfolioProjectsQuery>> = ({ data }) => (
  <PostsByTag
    nodes={data.allMdx.nodes.filter(
      (node) => node.frontmatter.tags && node.frontmatter.tags.indexOf('lets-encrypt') !== -1,
    )}
  />
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

export default LetsEncryptPosts;

export const Head: HeadFC = () => (
  <SEO
    description="Check out my articles about Let's Encrypt."
    pagePath="/blog/lets-encrypt"
    title="Let's Encrypt articles by Flavio Silva: full-stack engineer"
  />
);
