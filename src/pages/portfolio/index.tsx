import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { Layout } from '../../components/layouts/Layout';
import { SEO } from '../../components/SEO';
import { PageContentHeader } from '../../components/PageContentHeader';
import { PortfolioCard } from '../../components/portfolio/PortfolioCard';

const PortfolioPage: React.FC<PageProps<Queries.PortfolioProjectsQuery>> = ({ data }) => (
  <Layout>
    <PageContentHeader linkTo="/portfolio/" title="Portfolio" />
    <div id="portfolio-page">
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
    allMdx(sort: { frontmatter: { date: DESC } }) {
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

export const Head: HeadFC = () => <SEO title="Portfolio" />;
