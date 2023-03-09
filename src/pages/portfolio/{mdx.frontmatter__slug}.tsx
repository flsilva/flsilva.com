import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { Layout } from '../../components/layouts/Layout';
import { SEO } from '../../components/SEO';
import { PortfolioCard } from '../../components/portfolio/PortfolioCard';
import { page } from './index.module.css';

const PortfolioProjectPage: React.FC<PageProps<Queries.PortfolioProjectPageQuery>> = ({
  children,
  data,
}) => (
  <Layout>
    <div id="portfolio-project-page" className={page}>
      <PortfolioCard
        image={data.mdx.frontmatter.heroImage}
        images={data.mdx.frontmatter.images}
        key={data.mdx.id}
        name={data.mdx.frontmatter.name}
        shortInfo={data.mdx.frontmatter.shortInfo}
        slug={data.mdx.frontmatter.slug}
      />
      {children}
    </div>
  </Layout>
);

export const query = graphql`
  query PortfolioProjectPage($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        images {
          childImageSharp {
            gatsbyImageData
          }
        }
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
`;

export default PortfolioProjectPage;

export const Head: HeadFC = ({ data }) => (
  <SEO title={`${data.mdx.frontmatter.name} project by `} />
);
