import * as React from 'react'
import { Link } from "gatsby"
import type { IGatsbyImageData } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import { project, projectImageContainer, gatsbyImageWrapper } from './PortfolioCard.module.css'

interface PortfolioCardProps {
  id: string;
  image?: IGatsbyImageData;
  images?: Array;
  name: string;
  shortInfo: string;
  slug: string;
}

const resizePreservingAspectRatio = (srcWidth: number, srcHeight: number, maxWidth: number, maxHeight: number) => {
  var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

  return { width: srcWidth*ratio, height: srcHeight*ratio };
}

const renderImages = (image, images, name, newImageSize) => {
  if (images && images.length > 0) {
    return (<>
      {images.map((image, index) => (
        <GatsbyImage
          className={gatsbyImageWrapper}
          image={getImage(image)}
          alt={name}
          key={index}
          style={newImageSize}
        />
      ))}
    </>)
  }

  if (image) {
    const gatsbyImage = getImage(image);

    return (<GatsbyImage
      image={gatsbyImage}
      alt={name}
      style={newImageSize}
    />)
  }

  return <div />;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ id, image, images, name, shortInfo, slug }) => {
  let projectImageContainerStyle = {};
  let newImageSize = { width: 0, height: 0 };
  let imageObjectTarget;

  if (images && images.length > 0) {
    imageObjectTarget = images[0];
    projectImageContainerStyle = {
      ...projectImageContainerStyle,
      opacity: 0,
    };
  } else if (image) {
    imageObjectTarget = image;
  }

  let imgWidth = imageObjectTarget.childImageSharp.gatsbyImageData.width;
  const imgHeight = imageObjectTarget.childImageSharp.gatsbyImageData.height;
  let maxWidth = 0;
  const htmlElement = document.querySelector('html');
  if (htmlElement) maxWidth = htmlElement.clientWidth - 70;
  if (maxWidth > 960) maxWidth = 960;
  newImageSize = resizePreservingAspectRatio(imgWidth, imgHeight, maxWidth, 960);

  projectImageContainerStyle = {
    ...projectImageContainerStyle,
    width: newImageSize.width,
    height: newImageSize.height,
  };

  return (
    <div className={project}>
      <Link to={`/portfolio/${slug}/`}><h4>{name}</h4></Link>
      <small>{shortInfo}</small>
      <div id={id} className={projectImageContainer} style={ projectImageContainerStyle }>
        <Link to={`/portfolio/${slug}/`}>
          {renderImages(image, images, name, newImageSize)}
        </Link>
      </div>
    </div>
  )
}
