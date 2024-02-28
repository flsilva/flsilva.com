import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Layout } from '../components/layouts/Layout';
import { SEO } from '../components/SEO';
import { Recommendation } from '../components/recommendations/Recommendation';
import { Recommendations } from '../components/recommendations/Recommendations';
import { copyImageContainer, getInTouchButton, header, imageContainer } from './index.module.css';

const IndexPage: React.FC<PageProps> = () => (
  <Layout>
    <header className={header}>
      <h2>Your Product Development Collaborator</h2>
    </header>
    <div style={{ marginTop: '2rem' }} className={copyImageContainer}>
      <div className={imageContainer}>
        <StaticImage alt="Flavio Silva" src="./flavio.jpg" width={250} height={250} />
      </div>
      <h4>Hi, I&#39;m Flavio 👋</h4>
      <p>I help startup founders launch and evolve MVPs in record time.</p>
      <p>
        With over 15 years working remotely and a decade building products full-stack, I specialize
        in the new <a href="https://nextjs.org/docs/app">Next.js App Router</a> to accelerate
        development, improve user experiences, and drive business results.
      </p>
      <p>My approach prioritizes:</p>
      <ul>
        <li>
          <b>Seamless Collaboration:</b> Ensuring clear communication and alignment on your vision.
        </li>
        <li>
          <b>Tech-Driven Speed:</b> Maximizing launch velocity with the App Router&#39;s efficiency.
        </li>
        <li>
          <b>Sustainable Quality:</b> Building maintainable and scalable codebases that support your
          growth.
        </li>
      </ul>
      <h4>Ready to launch your MVP in a few weeks?</h4>
      <p>
        Explore my{' '}
        <a href="/case-studies/accelerate-your-startup-success-nextjs-app-router/">case study</a> on
        how I accelerate startup success with the Next.js App Router, then let&#39;s discuss your
        launch and beyond.
      </p>
      <p style={{ margin: '4rem 0' }}>
        <a
          className={`${getInTouchButton} gtm-get-in-touch-mailto-link`}
          href="mailto:flsilva7@gmail.com"
        >
          Accelerate Your MVP Launch Now
        </a>
      </p>
      <h4>Available for joining teams</h4>
      <p>Are you looking for a full-stack collaborator to join your startup team?</p>
      <p>
        I&#39;m interested in leading or joining skilled startup teams building and evolving
        products in TypeScript, React, Next.js, and Node.js.
      </p>
      <p style={{ margin: '4rem 0' }}>
        <a
          className={`${getInTouchButton} gtm-get-in-touch-mailto-link`}
          href="mailto:flsilva7@gmail.com"
        >
          Contact Me
        </a>
      </p>
      <h3 style={{ marginTop: '4rem', textAlign: 'center' }}>
        Accelerate Your Startup Success with the Next.js App Router
      </h3>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: '4rem',
        }}
      >
        <div style={{ display: 'flex', width: '240px' }}>
          <StaticImage
            alt="OpenTask"
            src="./screenshot-iphone-14-2024-02-07-project-no-browser.png"
            width={436}
            height={885}
            style={{ maxWidth: '240px' }}
          />
        </div>
      </div>
      <p style={{ margin: '4rem 0', textAlign: 'center' }}>
        <a
          className={`${getInTouchButton} gtm-blog-post-opentask-case-study-link`}
          href="/case-studies/accelerate-your-startup-success-nextjs-app-router/"
        >
          Read the Case Study
        </a>
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
      <p style={{ fontSize: '0.875rem', lineHeight: '1.25rem', marginTop: '8rem' }}>
        February 2024. Florianópolis, Brazil.
      </p>
    </div>
  </Layout>
);

export default IndexPage;

export const Head: HeadFC = () => (
  <SEO
    description="I'm a Brazilian Full-Stack Software Engineer with 19 years of professional industry experience. Check out my website to learn more about me and my work."
    pagePath=""
    title="Product-Minded Full-Stack Engineer - Flavio Silva"
  />
);
