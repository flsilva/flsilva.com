import * as React from 'react';
import type { IGatsbyImageData } from 'gatsby-plugin-image';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { project, projectImageContainer, gatsbyImageWrapper } from './PortfolioCard.module.css';

interface PortfolioCardProps {
  image?: IGatsbyImageData;
  images?: Array<IGatsbyImageData>;
  name: string;
  shortInfo: string;
  slug: string;
}

const renderImages = (
  image: PortfolioCardProps,
  images: Array<PortfolioCardProps>,
  name: string,
  newImageSize: { width: number; height: number },
) => {
  if (images && images.length > 0) {
    return (
      <>
        {images.map((img) => (
          <GatsbyImage
            className={gatsbyImageWrapper}
            image={getImage(img)}
            alt={name}
            key={name}
            style={{ ...newImageSize, maxWidth: '100%' }}
          />
        ))}
      </>
    );
  }

  if (image) {
    const gatsbyImage = getImage(image);

    return <GatsbyImage image={gatsbyImage} alt={name} style={newImageSize} />;
  }

  return <div />;
};

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  image,
  images,
  name,
  shortInfo,
  slug,
}) => {
  let projectImageContainerStyle = {};
  const newImageSize = { width: 0, height: 0 };
  let imageObjectTarget;

  if (images && images.length > 0) {
    [imageObjectTarget] = images;
    projectImageContainerStyle = {
      ...projectImageContainerStyle,
      opacity: 0,
    };
  } else if (image) {
    imageObjectTarget = image;
  }

  if (imageObjectTarget) {
    projectImageContainerStyle = {
      ...projectImageContainerStyle,
      width: imageObjectTarget.childImageSharp.gatsbyImageData.width || 0,
      height: imageObjectTarget.childImageSharp.gatsbyImageData.height || 0,
    };
  }

  return (
    <div className={project}>
      <a href={`/portfolio/${slug}/`}>
        <h4>{name}</h4>
      </a>
      <small>{shortInfo}</small>
      <div
        id="portfolio-project-images-container"
        className={[projectImageContainer, 'card-img-container'].join(' ')}
        style={projectImageContainerStyle}
      >
        <a href={`/portfolio/${slug}/`}>{renderImages(image, images, name, newImageSize)}</a>
      </div>
    </div>
  );
};
