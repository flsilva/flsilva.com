import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

interface SEOProps {
  title: string;
}

export const SEO: React.FC<SEOProps> = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <title>{title} {data.site.siteMetadata.title}</title>
  )
}
