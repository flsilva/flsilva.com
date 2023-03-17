import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

interface SEOProps {
  readonly description: string;
  readonly imagePath?: string;
  readonly pagePath: string;
  readonly title: string;
}

export const SEO: React.FC<SEOProps> = ({ description, imagePath, pagePath, title }) => {
  const data = useStaticQuery<Queries.SeoQuery>(graphql`
    query Seo {
      site {
        siteMetadata {
          imagePath
          url
          title
        }
      }
    }
  `);

  const imgPath = imagePath ? imagePath : data.site?.siteMetadata?.imagePath;

  return (
    <>
      <title>{`${title}${data.site?.siteMetadata?.title}`}</title>
      <meta name="og:title" content={`${title}${data.site?.siteMetadata?.title}`} />
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />
      <meta name="og:type" content="article" />
      <meta name="og:url" content={`${data.site?.siteMetadata?.url}${pagePath}`} />
      <meta property="og:image" content={`${data.site?.siteMetadata?.url}${imgPath}`} />
    </>
  );
};
