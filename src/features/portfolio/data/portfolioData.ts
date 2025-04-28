import fs from "fs";
import path from "path";

export interface PortfolioProject {
  readonly slug: string;
  readonly name: string;
  readonly shortInfo: string;
  readonly description: string;
  readonly date: string;
  readonly heroImage: string;
  readonly imageHeight: number;
  readonly imageWidth: number;
  readonly images?: string[];
}

const contentDir = path.join(process.cwd(), "src/features/portfolio/data");

// Only consider subfolders that contain an `index.mdx`
function getProjectFolders(): string[] {
  return fs.readdirSync(contentDir).filter((folderName) => {
    const fullPath = path.join(contentDir, folderName, "index.mdx");
    return fs.existsSync(fullPath);
  });
}

export async function getPortfolioProjects(): Promise<PortfolioProject[]> {
  const slugs = getProjectFolders();

  const projects = await Promise.all(
    slugs.map(async (slug) => {
      const mod = await import(`@/features/portfolio/data/${slug}/index.mdx`);
      const {
        name,
        shortInfo,
        description,
        date,
        heroImage,
        images,
        imageWidth,
        imageHeight,
      } = mod;

      return {
        slug,
        name,
        shortInfo,
        description,
        date,
        heroImage,
        images,
        imageWidth,
        imageHeight,
      } satisfies PortfolioProject;
    })
  );

  return projects.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getAdjacentProjects(slug: string) {
  const projects = await getPortfolioProjects();
  const currentIndex = projects.findIndex((project) => project.slug === slug);

  const previous =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;
  const next = currentIndex > 0 ? projects[currentIndex - 1] : null;

  return { previous, next };
}

export function getAllProjectSlugs(): string[] {
  return getProjectFolders();
}
