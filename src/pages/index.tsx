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
        I&#39;m a senior full-stack engineer with 20 years of experience, with the last 11 years
        building products remotely for American startups. I specialize in <b>React</b>,{' '}
        <b>Next.js</b>, and <b>Node.js</b>, and I have a track record of leading teams, architecting
        solutions, and collaborating with founders and designers to drive business results.
      </p>
      <p>
        Recently, I built <a href="/opentask-showcase/">OpenTask</a>, an{' '}
        <a href="https://github.com/flsilva/opentask/">open-source</a> and responsive task
        management MVP showcasing modern web development practices with{' '}
        <a href="/blog/react-server-components-and-a-new-hybrid-web-app-model/">
          React Server Components
        </a>{' '}
        and the new <a href="https://nextjs.org/docs/app">Next.js App Router</a>. I designed{' '}
        <a href="https://nexar.dev/">Nexar</a> while building OpenTask. It&#39;s a{' '}
        <a href="/blog/what-is-software-architecture/#modules-and-modular-architectures">modular</a>{' '}
        and{' '}
        <a href="/blog/what-is-software-architecture/#layers-and-layered-architectures">layered</a>{' '}
        application architecture to improve scalability and maintainability of Next.js App Router
        apps
      </p>
      <p>
        I&#39;m seeking a full-time remote position where I can leverage my expertise in building
        scalable solutions while collaborating with a talented team.
      </p>
      <p>
        <a className="gtm-get-in-touch-mailto-link" href="mailto:flsilva7@gmail.com">
          Let&apos;s discuss
        </a>{' '}
        how I can contribute to your team&#39;s success.
      </p>
      <p>
        <br />
        <br />
        São Paulo,
        <br />
        November 2024.
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
    description="I'm a Brazilian Full-Stack Software Engineer with 20 years of professional industry experience. Check out my website to learn more about my work."
    pagePath=""
    title="About Flavio Silva - Full-Stack Software Engineer"
  />
);
