"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface CarouselProps {
  slug: string;
  images: string[];
  imageWidth: number;
  imageHeight: number;
  isPortfolioIndexPage?: boolean;
}

const resizePreservingAspectRatio = (
  srcWidth: number,
  srcHeight: number,
  maxWidth: number,
  maxHeight: number
) => {
  const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
  return {
    width: srcWidth * ratio,
    height: srcHeight * ratio,
  };
};

export function PortfolioProjectCarousel({
  slug,
  images,
  imageWidth,
  imageHeight,
  isPortfolioIndexPage = false,
}: CarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [imageSize, setImageSize] = useState({
    width: imageWidth,
    height: imageHeight,
  });

  // Resize once on mount
  useEffect(() => {
    const updateSize = () => {
      if (!containerRef.current) return;
      const maxWidth = containerRef.current.getBoundingClientRect().width;

      setImageSize(
        resizePreservingAspectRatio(imageWidth, imageHeight, maxWidth, 960)
      );
      setOpacity(1);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [imageWidth, imageHeight]);

  // Automatic carousel animation
  useEffect(() => {
    if (isPortfolioIndexPage) return;

    const timer = setTimeout(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentImage, isPortfolioIndexPage, images.length]);

  return (
    <div ref={containerRef} className="w-full relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          width: `${imageSize.width * images.length}px`,
          transform: `translateX(-${currentImage * imageSize.width}px)`,
          opacity,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: imageSize.width, height: imageSize.height }}
          >
            <Image
              src={`/images/portfolio/${slug}/${image}`}
              alt={`Screenshot ${index + 1}`}
              width={imageSize.width}
              height={imageSize.height}
              className="rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
