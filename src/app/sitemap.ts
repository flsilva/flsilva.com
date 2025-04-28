import type { MetadataRoute } from "next";

import { getAllProjectSlugs } from "@/features/portfolio/data/portfolioData";
import {
  getAllBlogPostSlugs,
  getBlogPosts,
} from "@/features/blog/data/blogData";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let map: MetadataRoute.Sitemap = [
    {
      url: "https://flsilva.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://flsilva.com/opentask-showcase",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://flsilva.com/open-source",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://flsilva.com/resume",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  // Portfolio
  const portfolioProjectSlugs = getAllProjectSlugs();
  map.push({
    url: "https://flsilva.com/portfolio",
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.5,
  });
  map = map.concat(
    portfolioProjectSlugs.map((slug) => ({
      url: `https://flsilva.com/portfolio/${slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    }))
  );

  // Blog
  const blogPostSlugs = getAllBlogPostSlugs();
  map.push({
    url: "https://flsilva.com/blog",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  });
  map = map.concat(
    blogPostSlugs.map((slug) => ({
      url: `https://flsilva.com/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    }))
  );

  // Blog tags
  const posts = await getBlogPosts();
  const tags = new Set();
  posts.forEach((post) => {
    post.tags?.forEach((tag) => tags.add(tag));
  });

  map = map.concat(
    new Array(...tags).map((slug) => ({
      url: `https://flsilva.com/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    }))
  );

  return map;
}
