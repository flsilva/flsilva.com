import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { graphql } from "gatsby"
import { Layout } from '../../layouts/Layout'
import { SEO } from '../../components/SEO'
import { PageContentHeader } from '../../components/PageContentHeader'
import { PortfolioCard } from './PortfolioCard'

const PortfolioPage: React.FC<PageProps> = ({ data }) => {
  return (
    <Layout>
      <PageContentHeader title="Portfolio" />
      <div>
        {
          data.allPortfolioProjectsJson.nodes.map(node => (
            <PortfolioCard
              image={node.heroImage}
              key={node.id}
              name={node.name}
              shortInfo={node.shortInfo}
              slug={node.slug}
            />
          ))
        }
      </div>
    </Layout>
  )
}

export const query = graphql`
  query PortfolioProjects {
    allPortfolioProjectsJson {
      nodes {
        id
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

export default PortfolioPage

export const Head: HeadFC = () => <SEO title="Portfolio" />
