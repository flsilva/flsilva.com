import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

interface SEOProps {
  readonly authorName: string;
  readonly description: string;
  readonly imagePath?: string;
  readonly pagePath: string;
  readonly title: string;
  readonly tweetVia: string;
}

export const SEO: React.FC<SEOProps> = ({
  authorName,
  description,
  imagePath,
  pagePath,
  title,
  tweetVia,
}) => {
  const data = useStaticQuery<Queries.SeoQuery>(graphql`
    query Seo {
      site {
        siteMetadata {
          imagePath
          siteUrl
          title
        }
      }
    }
  `);

  const imgPath = imagePath
    ? imagePath.childImageSharp.gatsbyImageData.images.fallback.src
    : data.site?.siteMetadata?.imagePath;

  return (
    <>
      <title>{`${title}`}</title>
      <meta name="title" content={`${title}`} />
      <meta name="og:site_name" content="Flavio Silva" />
      <meta name="og:title" content={`${title}`} />
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />
      <meta name="og:type" content="article" />
      <meta name="site" content={`${data.site?.siteMetadata?.siteUrl}${pagePath}`} />
      <meta name="og:site" content={`${data.site?.siteMetadata?.siteUrl}${pagePath}`} />
      <meta name="og:url" content={`${data.site?.siteMetadata?.siteUrl}${pagePath}`} />
      <meta name="og:image" content={`${data.site?.siteMetadata?.siteUrl}${imgPath}`} />
      <meta name="twitter:title" content={`${title}`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${data.site?.siteMetadata?.siteUrl}${imgPath}`} />
      {tweetVia && <meta name="twitter:card" content="summary_large_image" />}
      {tweetVia && <meta name="twitter:site" content={`@${tweetVia}`} />}
      {tweetVia && <meta name="twitter:creator" content={`@${tweetVia}`} />}
      {authorName && <meta name="author" content={authorName} />}
    </>
  );
};
