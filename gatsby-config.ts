import type { GatsbyConfig } from 'gatsby';

/*
const wrapESMPlugin = (name) =>
  function wrapESM(opts) {
    return async (...args) => {
      const mod = await import(name);
      const plugin = mod.default(opts);
      return plugin(...args);
    };
  };
*/

const config: GatsbyConfig = {
  siteMetadata: {
    imagePath: '/logo-share.jpg',
    title: ' | flsilva.com',
    url: 'https://flsilva.com',
  },
  // More easily incorporate content into your pages through automatic
  // TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-image',
    // 'gatsby-plugin-mdx',
    'gatsby-plugin-postcss',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    /*
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        mdxOptions: {
          remarkPlugins: [
            // Add GitHub Flavored Markdown (GFM) support
            require('remark-gfm'),
          ],
          rehypePlugins: [
            wrapESMPlugin('rehype-slug'),
            [wrapESMPlugin('rehype-autolink-headings'), { behavior: 'wrap' }],
          ],
        },
      },
    },
    */
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        mdxOptions: {
          /*
           * Update rehype-slug and remark-gfm dependencies to latest versions once Gatsby adds
           * support to ESM packages.
           */
          rehypePlugins: [
            require('remark-gfm'),
            require('rehype-slug'),
            // require('rehype-autolink-headings'),
          ],
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              offsetY: '100',
              className: 'autolink-header-anchor',
              maintainCase: false,
              removeAccents: true,
              // isIconAfterHeader: true,
              // elements: [`h1`, `h4`],
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`,
      },
    },
  ],
};

export default config;
