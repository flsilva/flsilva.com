import fs from "fs";
import path from "path";

export interface BlogPost {
  readonly author: string;
  readonly authorImage: string;
  readonly authorUrl: string;
  readonly changefreq: string;
  readonly contentType: string;
  readonly date: string;
  readonly dateUpdated?: string;
  readonly description: string;
  readonly heroImage: string;
  readonly heroImageCreditText?: string;
  readonly heroImageCreditUrl?: string;
  readonly heroImageHeight: number;
  readonly heroImageWidth: number;
  readonly priority: number;
  readonly slug: string;
  readonly tags?: string[];
  readonly title: string;
  readonly tweetText: string;
  readonly tweetVia: string;
  readonly tweetCardImage: string;
}

const contentDir = path.join(process.cwd(), "src/features/blog/data");

// Only consider subfolders that contain an `index.mdx`
function getBlogPostFolders(): string[] {
  return fs.readdirSync(contentDir).filter((folderName) => {
    const fullPath = path.join(contentDir, folderName, "index.mdx");
    return fs.existsSync(fullPath);
  });
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const slugs = getBlogPostFolders();

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const mod = await import(`@/features/blog/data/${slug}/index.mdx`);
      const {
        author,
        authorImage,
        authorUrl,
        changefreq,
        contentType,
        date,
        dateUpdated,
        description,
        heroImage,
        heroImageCreditText,
        heroImageCreditUrl,
        heroImageHeight,
        heroImageWidth,
        priority,
        tags,
        title,
        tweetText,
        tweetVia,
        tweetCardImage,
      } = mod;

      return {
        author,
        authorImage,
        authorUrl,
        changefreq,
        contentType,
        date,
        dateUpdated,
        description,
        heroImage,
        heroImageCreditText,
        heroImageCreditUrl,
        heroImageHeight,
        heroImageWidth,
        priority,
        slug,
        tags,
        title,
        tweetText,
        tweetVia,
        tweetCardImage,
      } satisfies BlogPost;
    })
  );

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getBlogPostsByTag(tag: string): Promise<BlogPost[]> {
  const posts = await getBlogPosts();
  return posts.filter((post) => post.tags?.includes(tag));
}

export function getAllBlogPostSlugs(): string[] {
  return getBlogPostFolders();
}
