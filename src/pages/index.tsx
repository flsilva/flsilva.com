import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import type { HeadFC, PageProps } from "gatsby"
import { Layout } from '../layouts/Layout'
import { SEO } from '../components/SEO'
import { copyImageContainer, email, imageContainer, hiThere } from './index.module.css'
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
      <section className={hiThere}>
        <h1>Hi there, <span>I am Flavio Silva 👋</span></h1>
      </section>
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
          I started my career back in 2004, and I've been working remotely from home since 2009, and exclusively for overseas companies and startups since 2013 (mostly in the U.S.).
        </p>
        <p>
          I've been leading front-end teams since 2007. First on site, then remotely, working directly with CEOs, CTOs, managers, and designers.
        </p>
        <p>
          Since 2018 I have specialized in building cross-platform React apps. A single, responsive codebase running natively on iOS and Android, and on mobile and desktop web browsers, in a couple months. I believe many businesses can benefit from this tech strategy by drastically reducing costs and time to market.
        </p>
        <p>
          If you're looking to build cross-platform apps please <a href="mailto:flsilva7@gmail.com">get in touch</a>.
        </p>
        <p>
          I have experience with advanced software engineering topics such as software architecture & design, testing, design patterns, CI/CD, and with some of the greatest modern tools such as TypeScript, Jest, Node.js, Next.js, GraphQL, AWS / AppSync, Serverless Functions, Ruby / Rails, PostgreSQL, NoSQL, and more.
        </p>
        <p>
          For more information about my work please take a look at my resume, portfolio, open source projects, and my blog.
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
