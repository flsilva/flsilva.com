import type { GatsbyConfig } from 'gatsby';

const { remarkCodeHike } = require('@code-hike/mdx');

const config: GatsbyConfig = {
  siteMetadata: {
    imagePath: '/logo-share.png',
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
            // require('rehype-autolink-headings'),
          ],
          remarkPlugins: [[remarkCodeHike, { theme: 'dark-plus' }]],
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
        name: 'components',
        path: `${__dirname}/src/components`,
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
          // Delays processing pageview events on route update (in milliseconds)
          delayOnRouteUpdate: 0,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-MZ5B7LWK',

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: 'gatsby' },

        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        // routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
        // Defaults to false
        enableWebVitalsTracking: true,
        // Defaults to https://www.googletagmanager.com
        // selfHostedOrigin: "YOUR_SELF_HOSTED_ORIGIN",
        // Defaults to gtm.js
        // selfHostedPath: "YOUR_SELF_HOSTED_PATH",
      },
    },
    {
      resolve: 'gatsby-plugin-zopfli',
      options: {
        extensions: ['html', 'css', 'js', 'json', 'svg'],
      },
    },
    'gatsby-plugin-sitemap',
  ],
};

export default config;
