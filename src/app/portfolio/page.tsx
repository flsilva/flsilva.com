import type { Metadata } from "next";

import { PortfolioCard } from "@/features/portfolio/ui/PortfolioCard";
import { getPortfolioProjects } from "@/features/portfolio/data/portfolioData";

export const metadata: Metadata = {
  title: "Portfolio of Flavio Silva: full-stack engineer",
  description:
    "Check out some of the commercial projects I've worked on and played a key role.",
  alternates: {
    canonical: "/portfolio",
  },
};

export default async function PortfolioPage() {
  const projects = await getPortfolioProjects();

  return (
    <>
      {projects.map((project) => (
        <PortfolioCard
          key={project.slug}
          image={project.heroImage}
          imageWidth={project.imageWidth}
          imageHeight={project.imageHeight}
          name={project.name}
          shortInfo={project.shortInfo}
          slug={project.slug}
        />
      ))}
    </>
  );
}
