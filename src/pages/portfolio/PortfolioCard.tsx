import * as React from 'react'
import { Link } from "gatsby"
import type { IGatsbyImageData } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import { project, projectImage } from './PortfolioCard.module.css'

interface PortfolioCardProps {
  image: IGatsbyImageData;
  name: string;
  shortInfo: string;
  slug: string;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ image, name, shortInfo, slug }) => {
  const gatsbyImage = getImage(image);

  return (
    <div className={project}>
      <Link to={`/portfolio/${slug}/`}><h4>{name}</h4></Link>
      <small>{shortInfo}</small>
      <div className={projectImage}>
        <Link to={`/portfolio/${slug}/`}>
        {gatsbyImage &&
          <GatsbyImage
            image={gatsbyImage}
            alt={name}
          />
        }
        </Link>
      </div>
    </div>
  )
}
