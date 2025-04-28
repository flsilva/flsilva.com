import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { H2, SmallText } from "@/features/shared/ui/typography/Typography";
import { LinkButtonLeftArrowIcon } from "@/features/shared/ui/control/button/LinkButtonLeftArrowIcon";
import { LinkButtonRightArrowIcon } from "@/features/shared/ui/control/button/LinkButtonRightArrowIcon";
import {
  getAllProjectSlugs,
  getAdjacentProjects,
} from "@/features/portfolio/data/portfolioData";
import { PortfolioProjectCarousel } from "@/features/portfolio/ui/PortfolioProjectCarousel";

export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const { slug } = await params;
    const postModule = await import(
      `@/features/portfolio/data/${slug}/index.mdx`
    );
    return {
      title: `${postModule.name} | Portfolio of Flavio Silva`,
      description: postModule.description,
    };
  } catch {
    return {
      title: "Project Not Found",
    };
  }
}

export default async function PortfolioProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  let postModule: any;
  try {
    postModule = await import(`@/features/portfolio/data/${slug}/index.mdx`);
  } catch {
    notFound();
  }

  const {
    default: PortfolioProject,
    name,
    shortInfo,
    images,
    heroImage,
    imageWidth,
    imageHeight,
  } = postModule;
  const { previous, next } = await getAdjacentProjects(slug);

  return (
    <article className="grid gap-y-6">
      <H2>{name}</H2>
      <SmallText className="mt-[-1.375rem]">{shortInfo}</SmallText>
      {images && images.length > 0 ? (
        <PortfolioProjectCarousel
          slug={slug}
          images={images}
          imageWidth={imageWidth}
          imageHeight={imageHeight}
          isPortfolioIndexPage={false} // Set to true if on the index page
        />
      ) : heroImage ? (
        <Image
          src={`/images/portfolio/${slug}/${heroImage}`}
          alt={name}
          width={imageWidth}
          height={imageHeight}
          className="w-full h-auto rounded-md"
        />
      ) : null}
      <article className="grid gap-y-6 mt-8">
        <PortfolioProject />
      </article>
      <div className="flex justify-between mt-12">
        <div>
          {next && (
            <LinkButtonLeftArrowIcon
              text={next.name}
              to={`/portfolio/${next.slug}`}
            />
          )}
        </div>
        <div>
          {previous && (
            <LinkButtonRightArrowIcon
              text={previous.name}
              to={`/portfolio/${previous.slug}`}
            />
          )}
        </div>
      </div>
    </article>
  );
}
