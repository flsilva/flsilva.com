import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import type { HeadFC, PageProps } from "gatsby"
import { Layout } from '../layouts/Layout'
import { SEO } from '../components/SEO'
import { LeftArrowIconSvg } from '../components/svg/LeftArrowIconSvg'
import { RightArrowIconSvg } from '../components/svg/RightArrowIconSvg'
import { OpenQuoteIconSvg } from '../components/svg/OpenQuoteIconSvg'
import {
  copyImageContainer,
  header,
  imageContainer,
  recommendations,
  recommendationsContainer,
  recommendationContainer,
  recommendedByContainer,
  recommendedBySignature,
  recommendationsText,
  recommendationsTextTapToSee,
  recommendationContent,
  recommendationIndicator,
  recommendationsButtons,
  prevButton,
  nextButton,
} from './index.module.css'
/*
type DataProps = {
  site: {
    siteMetadata: {
      title: string
    }
  }
}
*/
const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <header className={header}>
        <h1>Hi, I'm Flavio 👋</h1>
      </header>
      <div className={copyImageContainer}>
        <div className={imageContainer}>
          <StaticImage
            alt="Flavio Silva"
            src="./flavio.jpg"
            width={400}
            height={400}
          />
        </div>
        <p>
          I'm a Brazilian Full-Stack Software Engineer with 18 years of professional industry experience. I've been leading front-end teams since 2007, and since 2009 I've been working remotely from home.
        </p>
        <p>
          Since 2018 I've specialized in building cross-platform React apps by implementing a single, responsive codebase, sharing about 90% of the front-end codebase with all platforms. That enables the codebase to be built as native iOS and Android apps and as a web app for mobile and desktop browsers. Many businesses can benefit from such a tech strategy by drastically reducing costs and time to market.
        </p>
        <p>
          I have also experience building back-end systems using modern tools like Node.js, AWS AppSync, and GraphQL and applying advanced software engineering practices, including Software Architecture, Software Testing, and CI/CD.
        </p>
        <p>
          Please <a href="mailto:flsilva7@gmail.com">get in touch</a> if you're looking to build full-stack cross-platform apps.
        </p>
        <h3 className={recommendationsText}>Recommendations</h3>
        <small className={recommendationsTextTapToSee}>Tap to see on LinkedIn</small>
        <div className={recommendationsContainer}>
          <div id="recommendations" className={recommendations}>
            <div className={recommendationContainer}>
              <OpenQuoteIconSvg />
              <div className={recommendationContent}>
                <p>
                  Flavio is both fast and thorough. But I was particularly struck by the deep thoughtfulness and helpfulness he brought to the team, and by the smile and positive spirit he shared, every day.
                </p>
                <div className={recommendedByContainer}>
                  <StaticImage
                    alt="Kate Frucher"
                    src="./kate-frucher.jpg"
                  />
                  <div className={recommendedBySignature}>
                    <small>Kate Frucher</small>
                    <small>Managing Director | Co–Founder</small>
                  </div>
                </div>
              </div>
            </div>
            <div className={recommendationContainer}>
              <OpenQuoteIconSvg />
              <div className={recommendationContent}>
                <p>
                  Flavio not only has superb communication skills, but he's also a proactive problem solver. He will go above and beyond what is asked of him to make sure the team and the project will succeed. Our team loves working with Flavio and we would work with Flavio again in a heartbeat.
                </p>
                <div className={recommendedByContainer}>
                  <StaticImage
                    alt="Kate Frucher"
                    src="./seyi-moon.jpg"
                  />
                  <div className={recommendedBySignature}>
                    <small>Seyi Moon</small>
                    <small>Manager</small>
                  </div>
                </div>
              </div>
            </div>
            <div className={recommendationContainer}>
              <OpenQuoteIconSvg />
              <div className={recommendationContent}>
                <p>
                  Flavio came in a freelance developer to help us develop a large platform MVP for a client. He proved himself beyond valuable in ideas and execution. I would recommend him for any project challenge, as he will rise to the occasion.
                </p>
                <div className={recommendedByContainer}>
                  <StaticImage
                    alt="Kate Frucher"
                    src="./richard-broo.jpg"
                  />
                  <div className={recommendedBySignature}>
                    <small>Richard Broo</small>
                    <small>Co-Founder</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="recommendations-buttons" className={recommendationsButtons}>
          <div id="prev-button" className={prevButton}>
            <LeftArrowIconSvg />
          </div>
          <div className={[recommendationIndicator, 'recommendation-indicator'].join(' ')}></div>
          <div className={[recommendationIndicator, 'recommendation-indicator'].join(' ')}></div>
          <div className={[recommendationIndicator, 'recommendation-indicator'].join(' ')}></div>
          <div id="next-button" className={nextButton}>
            <RightArrowIconSvg />
          </div>
        </div>
      </div>
    </Layout>
  )
}
/*
export const query = graphql`
  query IndexPage {
    site {
      siteMetadata {
        title
      }
    }
  }
`
*/
export default IndexPage

export const Head: HeadFC = () => <SEO title="About" />
