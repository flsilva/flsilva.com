import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { LayoutCampaign } from '../../components/layouts/LayoutCampaign';
import { SEO } from '../../components/SEO';
import { Recommendation } from '../../components/recommendations/Recommendation';
import { Recommendations } from '../../components/recommendations/Recommendations';
import {
  copyImageContainer,
  header,
  imageContainerCampaign,
  getInTouchButton,
} from '../index.module.css';

const DeliveryPage: React.FC<PageProps> = () => (
  <LayoutCampaign>
    <header className={header}>
      <h1>Remote React Developer</h1>
      <h4 style={{ marginTop: '0' }}>Need results now? Hire a results-driven React expert.</h4>
    </header>
    <div className={copyImageContainer}>
      <div className={imageContainerCampaign}>
        <StaticImage alt="Flavio Silva" src="../flavio.jpg" width={250} height={250} />
      </div>
      <h4>Hi, I&#39;m Flavio 👋</h4>
      <p>
        I&#39;m a full-stack engineer from Brazil (15+ years working remotely) specializing in React
        and Next.js development.
      </p>
      <p>
        Here&#39;s why you should hire me as your <b>React Expert now:</b>
      </p>
      <ul style={{ display: 'block' }}>
        <li>
          <b>Drive results quickly:</b> I manage tasks independently, find creative solutions with
          minimal oversight, and prioritize rapid delivery.
        </li>
        <li>
          <b>Communicate transparently:</b> I provide concise updates, ask clear questions, and
          raise red flags beforehand.
        </li>
        <li>
          <b>Deliver proven solutions:</b> I help founders, executives, and fellow developers
          overcome challenges with strategic ideas and efficient execution.
        </li>
        <li>
          <b>Build React products at speed:</b> I leverage deep{' '}
          <a href="https://flsilva.com/blog/react-server-components-and-a-new-hybrid-web-app-model/">
            React/Next.js expertise
          </a>{' '}
          (7+ years) to deliver complex solutions efficiently. I&#39;ve just shipped{' '}
          <a href="https://opentask.app/">OpenTask</a>, an{' '}
          <a href="https://github.com/flsilva/opentask">open-source</a> React + Next.js App Router
          PWA MVP as part of a{' '}
          <a href="https://flsilva.com/blog/opentask-nextjs-app-router-case-study/">case study</a> I
          wrote.
        </li>
        <li>
          <b>Build maintainable and scalable React apps:</b> See{' '}
          <a href="https://nexar.dev/">Nexar</a>, an application architecture for full-stack React +
          Next.js App Router apps I designed while building OpenTask.
        </li>
      </ul>
      <p>
        I&#39;m available today to discuss your React project.{' '}
        <b>Start now with a free estimate.</b>
      </p>
      <p style={{ margin: '4rem 0', textAlign: 'center' }}>
        <a
          className={getInTouchButton}
          href="mailto:flsilva7@gmail.com"
          onClick={() => gtag_report_conversion('mailto:flsilva7@gmail.com')}
        >
          Hire a React Expert Now
        </a>
      </p>
      <h3 style={{ marginTop: '4rem', textAlign: 'center' }}>Featured Project: OpenTask</h3>
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
      <Recommendations>
        <Recommendation
          imgComponent={<StaticImage alt="Kate Frucher" src="../kate-frucher.jpg" />}
          name="Kate Frucher"
          position="Managing Director | Co–Founder"
        >
          Flavio is both fast and thorough. But I was particularly struck by the deep thoughtfulness
          and helpfulness he brought to the team, and by the smile and positive spirit he shared,
          every day.
        </Recommendation>
        <Recommendation
          imgComponent={<StaticImage alt="Seyi Moon" src="../seyi-moon.jpg" />}
          name="Seyi Moon"
          position="Manager"
        >
          Flavio not only has superb communication skills, but he&#39;s also a proactive problem
          solver. He will go above and beyond what is asked of him to make sure the team and the
          project will succeed.
        </Recommendation>
        <Recommendation
          imgComponent={<StaticImage alt="Richard Broo" src="../richard-broo.jpg" />}
          name="Richard Broo"
          position="Co-Founder"
        >
          Flavio came in a freelance developer to help us develop a large platform MVP for a client.
          He proved himself beyond valuable in ideas and execution. I would recommend him for any
          project challenge, as he will rise to the occasion.
        </Recommendation>
      </Recommendations>
      <p style={{ margin: '0 0 2rem', textAlign: 'center' }}>
        <a
          className={getInTouchButton}
          href="mailto:flsilva7@gmail.com"
          onClick={() => gtag_report_conversion('mailto:flsilva7@gmail.com')}
        >
          Hire a React Expert Now
        </a>
      </p>
    </div>
  </LayoutCampaign>
);

export default DeliveryPage;

export const Head: HeadFC = () => (
  <SEO
    description="I'm a Brazilian Full-Stack Software Engineer with 19 years of professional industry experience. Check out my website to learn more about me and my work."
    pagePath=""
    title="About Flavio Silva - Full-Stack Software Engineer"
  />
);
