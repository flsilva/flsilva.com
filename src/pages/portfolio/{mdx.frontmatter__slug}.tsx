import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { graphql } from "gatsby"
import { Layout } from '../../layouts/Layout'
import { SEO } from '../../components/SEO'
import { PageContentHeader } from '../../components/PageContentHeader'
import { PortfolioCard } from './PortfolioCard'

const PortfolioProjectPage: React.FC<PageProps> = ({ children, data }) => {
  return (
    <Layout>
      <PageContentHeader title="Portfolio" />
      <div>
        <PortfolioCard
          id="portfolio-project-carousel-container"
          image={data.mdx.frontmatter.heroImage}
          images={data.mdx.frontmatter.images}
          key={data.mdx.id}
          name={data.mdx.frontmatter.name}
          shortInfo={data.mdx.frontmatter.shortInfo}
          slug={data.mdx.frontmatter.slug}
        />
        { children }
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
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
`

export default PortfolioProjectPage

export const Head: HeadFC = ({ data }) => <SEO title={`Portfolio Project: ${data.mdx.frontmatter.name}`} />