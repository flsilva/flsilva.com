import Image from "next/image";
import Link from "next/link";
import { H2, SmallText } from "@/features/shared/ui/typography/Typography";

interface PortfolioCardProps {
  readonly image: string;
  readonly images?: string[];
  readonly imageWidth: number;
  readonly imageHeight: number;
  readonly name: string;
  readonly shortInfo: string;
  readonly slug: string;
}

export function PortfolioCard({
  image,
  images,
  imageWidth,
  imageHeight,
  name,
  shortInfo,
  slug,
}: PortfolioCardProps) {
  return (
    <div className="grid gap-y-6">
      <H2>
        <Link href={`/portfolio/${slug}`} className="hover:underline">
          {name}
        </Link>
      </H2>
      <SmallText className="mt-[-1.375rem] mb-4">{shortInfo}</SmallText>
      <div className="mt-[-1rem] relative overflow-hidden cursor-pointer">
        <Link href={`/portfolio/${slug}`}>
          {images && images.length > 0 ? (
            <Image
              src={`/images/portfolio/${slug}/${images[0]}`}
              alt={name}
              width={imageWidth}
              height={imageHeight}
              className="w-full h-auto"
            />
          ) : image ? (
            <Image
              src={`/images/portfolio/${slug}/${image}`}
              alt={name}
              width={imageWidth}
              height={imageHeight}
              className="w-full h-auto"
            />
          ) : null}
        </Link>
      </div>
    </div>
  );
}
