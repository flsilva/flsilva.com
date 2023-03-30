import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { Layout } from '../components/layouts/Layout';
import { SEO } from '../components/SEO';
import { Recommendation } from '../components/recommendations/Recommendation';
import { Recommendations } from '../components/recommendations/Recommendations';
import { copyImageContainer, header, imageContainer } from './index.module.css';

const IndexPage: React.FC<PageProps> = () => (
  <Layout>
    <header className={header}>
      <h1>Hi, I&#39;m Flavio 👋</h1>
    </header>
    <div className={copyImageContainer}>
      <div className={imageContainer}>
        <StaticImage alt="Flavio Silva" src="./flavio.jpg" width={400} height={400} />
      </div>
      <p>
        I&#39;m a Brazilian Full-Stack Software Engineer with 19 years of professional industry
        experience. I&#39;ve been leading front-end teams since 2007, and since 2009 I&#39;ve been
        working remotely from home.
      </p>
      <p>
        Since 2018 I&#39;ve specialized in building cross-platform React apps by implementing a
        single, responsive codebase, sharing about 90% of the front-end codebase with all platforms.
        That enables the codebase to be built as native iOS and Android apps and as a web app for
        mobile and desktop browsers. Many businesses can benefit from such a tech strategy by
        drastically reducing costs and time to market.
      </p>
      <p>
        I also have experience building back-end systems using tools like Node.js, Ruby on Rails,
        AWS AppSync, and GraphQL and applying advanced software engineering practices, including
        software architecture, testing, and CI/CD.
      </p>
      <p>
        Please&nbsp;
        <a href="mailto:flsilva7@gmail.com">get in touch</a> if you&#39;re looking to build
        full-stack cross-platform apps.
      </p>
      <Recommendations>
        <Recommendation
          imgComponent={<StaticImage alt="Kate Frucher" src="./kate-frucher.jpg" />}
          name="Kate Frucher"
          position="Managing Director | Co–Founder"
        >
          Flavio is both fast and thorough. But I was particularly struck by the deep thoughtfulness
          and helpfulness he brought to the team, and by the smile and positive spirit he shared,
          every day.
        </Recommendation>
        <Recommendation
          imgComponent={<StaticImage alt="Seyi Moon" src="./seyi-moon.jpg" />}
          name="Seyi Moon"
          position="Manager"
        >
          Flavio not only has superb communication skills, but he&#39;s also a proactive problem
          solver. He will go above and beyond what is asked of him to make sure the team and the
          project will succeed.
        </Recommendation>
        <Recommendation
          imgComponent={<StaticImage alt="Richard Broo" src="./richard-broo.jpg" />}
          name="Richard Broo"
          position="Co-Founder"
        >
          Flavio came in a freelance developer to help us develop a large platform MVP for a client.
          He proved himself beyond valuable in ideas and execution. I would recommend him for any
          project challenge, as he will rise to the occasion.
        </Recommendation>
      </Recommendations>
    </div>
  </Layout>
);

export default IndexPage;

export const Head: HeadFC = () => (
  <SEO
    description="I'm a Brazilian Full-Stack Software Engineer with 19 years of professional industry experience. Check out my website to learn more about me and my work."
    pagePath=""
    title="About Flavio Silva, a full-stack software engineer"
  />
);
