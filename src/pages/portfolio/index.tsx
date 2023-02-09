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
          data.allMdx.nodes.map(node => (
            <PortfolioCard
              id="portfolio-project-image-container"
              image={node.frontmatter.heroImage}
              key={node.id}
              name={node.frontmatter.name}
              shortInfo={node.frontmatter.shortInfo}
              slug={node.frontmatter.slug}
            />
          ))
        }
      </div>
    </Layout>
  )
}

export const query = graphql`
  query PortfolioProjects {
    allMdx(sort: { frontmatter: { date: DESC }}) {
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
`

export default PortfolioPage

export const Head: HeadFC = () => <SEO title="Portfolio" />
