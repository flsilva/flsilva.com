import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { Layout } from '../../components/layouts/Layout';
import { SEO } from '../../components/SEO';
import { PortfolioCard } from '../../components/portfolio/PortfolioCard';
import { page } from './index.module.css';

const PortfolioPage: React.FC<PageProps<Queries.PortfolioProjectsQuery>> = ({ data }) => (
  <Layout>
    <div id="portfolio-page" className={page}>
      {data.allMdx.nodes.map((node) => (
        <PortfolioCard
          image={node.frontmatter.heroImage}
          key={node.id}
          name={node.frontmatter.name}
          shortInfo={node.frontmatter.shortInfo}
          slug={node.frontmatter.slug}
        />
      ))}
    </div>
  </Layout>
);

export const query = graphql`
  query PortfolioProjects {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { contentType: { eq: "portfolio-project" } } }
    ) {
      nodes {
        id
        frontmatter {
          heroImage {
            childImageSharp {
              gatsbyImageData
            }
          }
          name
          shortInfo
          slug
        }
      }
    }
  }
`;

export default PortfolioPage;

export const Head: HeadFC = () => (
  <SEO
    description="Check out some of the commercial projects I've worked on and played a key role."
    pagePath="/portfolio"
    title="Portfolio of Flavio Silva, a full stack software engineer"
  />
);
