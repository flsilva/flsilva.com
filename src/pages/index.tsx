import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import type { HeadFC, PageProps } from "gatsby"
import { Layout } from '../layouts/Layout'
import { SEO } from '../components/SEO'
import { copyImageContainer, email, header, imageContainer } from './index.module.css'
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
        <h1>Hi there,</h1> <h3>I am Flavio Silva 👋</h3>
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
          I'm a Brazilian Full-Stack Software Engineer with 18 years of professional industry experience building full-stack web & mobile applications.
        </p>
        <p>
          I started my professional career in 2004, and I've been working remotely from home since 2009 and exclusively for overseas companies and startups since 2013, mainly in the U.S.
        </p>
        <p>
          I've been leading front-end teams since 2007. First on-site, then remotely, working with CEOs, CTOs, managers, and designers.
        </p>
        <p>
          Since 2018 I have specialized in building cross-platform React apps by implementing a single, responsive codebase. Then, we build it as native iOS and Android apps and as web apps for mobile and desktop browsers. Many businesses can benefit from such a tech strategy by drastically reducing costs and time to market.
        </p>
        <p>
          I have experience with advanced software engineering practices, including Software Architecture, Testing, CI/CD, Agile, and modern technology such as TypeScript, React, React Native, Design Systems, Jest, Node.js, Next.js, Remix, AWS AppSync, Ruby on Rails, PostgreSQL, and GraphQL.
        </p>
        <p>
          Please <a href="mailto:flsilva7@gmail.com">get in touch</a> if you're looking to build full-stack cross-platform apps.
        </p>
        <p>
          And while you're here, look at my resume, portfolio, open-source projects, and blog for more information about my work.
        </p>
        <p>
          Thank you for reading.
        </p>
        <p>
          <a href="https://www.google.com/maps/place/Florian%C3%B3polis,+SC/@7.7500839,-57.3472604,3z/data=!4m5!3m4!1s0x9527394eb2c632d7:0x81bc550b6a04c746!8m2!3d-27.5948036!4d-48.5569286" target="_blank">
            Florianópolis
          </a>
          , December 2022.
          <br />
          Flavio Silva <a href="mailto:flsilva7@gmail.com" className={email}>(flsilva7@gmail.com)</a>
        </p>
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

export const Head: HeadFC = () => <SEO title="Home" />
