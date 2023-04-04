import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    imagePath: '/logo-share.png',
    title: ' | flsilva.com',
    siteUrl: 'https://flsilva.com',
  },
  // More easily incorporate content into your pages through automatic
  // TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-postcss',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'flsilva.com',
        short_name: 'flsilva.com',
        start_url: '/',
        background_color: '#f5f5f5',
        theme_color: '#f5f5f5',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: 'src/images/icon.svg', // This path is relative to the root of the site.
        cache_busting_mode: 'none',
        theme_color_in_head: false, // This will avoid adding theme-color meta tag.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: 'use-credentials',
      },
    },
    // 'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        workboxConfig: {
          // needed to fix a bug when running yarn build.
          skipWaiting: true,
        },
      },
    },
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
            require('rehype-highlight'),
            // require('rehype-autolink-headings'),
          ],
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
            },
          },
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
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-0V7CZYLV9K', // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Defaults to https://www.googletagmanager.com
          origin: 'https://flsilva.com',
          // Delays processing pageview events on route update (in milliseconds)
          delayOnRouteUpdate: 0,
        },
      },
    },
    'gatsby-plugin-sitemap',
  ],
};

export default config;
