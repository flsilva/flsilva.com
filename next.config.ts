import { remarkCodeHike, recmaCodeHike } from "codehike/mdx";
import createMDX from "@next/mdx";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  async redirects() {
    return [
      {
        source: "/opentask",
        destination:
          "/blog/https://flsilva.com/blog/building-opentask-nextjs-app-router-react-server-components",
        permanent: true,
      },
    ];
  },
};

/** @type {import('codehike/mdx').CodeHikeConfig} */
const chConfig = {
  components: { code: "Code", inlineCode: "InlineCode" },
};

const linkIconHast /*: Element */ = {
  type: "element",
  tagName: "svg",
  properties: {
    // Use camelCase for attributes with hyphens where possible
    // Use strings for data-* attributes
    className: ["text_hash__wLjCi", "inline-block", "ml-2"], // Add positioning classes if needed
    "data-testid": "geist-icon",
    height: 16,
    strokeLinejoin: "round",
    style: "color:currentColor",
    viewBox: "0 0 16 16",
    width: 16,
  },
  children: [
    {
      type: "element",
      tagName: "path",
      properties: {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.46968 1.46968C10.1433 -0.203925 12.8567 -0.203923 14.5303 1.46968C16.2039 3.14329 16.2039 5.85674 14.5303 7.53034L12.0303 10.0303L10.9697 8.96968L13.4697 6.46968C14.5575 5.38186 14.5575 3.61816 13.4697 2.53034C12.3819 1.44252 10.6182 1.44252 9.53034 2.53034L7.03034 5.03034L5.96968 3.96968L8.46968 1.46968ZM11.5303 5.53034L5.53034 11.5303L4.46968 10.4697L10.4697 4.46968L11.5303 5.53034ZM1.46968 14.5303C3.14329 16.2039 5.85673 16.204 7.53034 14.5303L10.0303 12.0303L8.96968 10.9697L6.46968 13.4697C5.38186 14.5575 3.61816 14.5575 2.53034 13.4697C1.44252 12.3819 1.44252 10.6182 2.53034 9.53034L5.03034 7.03034L3.96968 5.96968L1.46968 8.46968C-0.203923 10.1433 -0.203925 12.8567 1.46968 14.5303Z",
        fill: "currentColor",
      },
      children: [],
    },
  ],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [[remarkCodeHike, chConfig]],
    recmaPlugins: [[recmaCodeHike, chConfig]],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: ["autolink-header-anchor"],
          },
          content: [
            linkIconHast, // Pass the hast object representing the SVG
          ],
        },
      ],
    ],
    jsx: true,
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
