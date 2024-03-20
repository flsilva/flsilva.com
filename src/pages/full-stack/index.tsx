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
      <h1>Remote Full-Stack Developer</h1>
      <h4 style={{ marginTop: '0' }}>
        Need results now? Hire a results-driven senior collaborator.
      </h4>
    </header>
    <div className={copyImageContainer}>
      <div className={imageContainerCampaign}>
        <StaticImage alt="Flavio Silva" src="../flavio.jpg" width={250} height={250} />
      </div>
      <h4>Hi, I&#39;m Flavio 👋</h4>
      <p>
        I&#39;m a full-stack engineer from Brazil (15+ years working remotely) specializing in
        React, Next.js, and Node.js development.
      </p>
      <p>
        Here&#39;s why you should hire me as your <b>Senior Full-Stack Collaborator:</b>
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
          <b>Build full-stack products at speed:</b> I leverage deep{' '}
          <a
            href="https://flsilva.com/blog/react-server-components-and-a-new-hybrid-web-app-model/"
            className="gtm-blog-post-react-server-components-hybrid-model-link"
          >
            React/Next.js/Node.js expertise
          </a>{' '}
          (7+ years) to deliver complex full-stack solutions efficiently. I&#39;ve just shipped{' '}
          <a href="https://opentask.app/" className="gtm-opentask-website-link">
            OpenTask
          </a>
          , an{' '}
          <a href="https://github.com/flsilva/opentask" className="gtm-opentask-github-repo-link">
            open-source
          </a>{' '}
          Next.js App Router PWA MVP as part of a{' '}
          <a
            href="/case-studies/accelerate-your-startup-success-nextjs-app-router/"
            className="gtm-blog-post-opentask-case-study-link"
          >
            case study
          </a>{' '}
          I wrote.
        </li>
        <li>
          <b>Build maintainable and scalable full-stack apps:</b> See{' '}
          <a href="https://nexar.dev/" className="gtm-nexar-website-link">
            Nexar
          </a>
          , an application architecture for full-stack Next.js App Router apps I designed while
          building OpenTask.
        </li>
      </ul>
      <h5 style={{ marginTop: '3rem', textAlign: 'center' }}>
        I&#39;m available today to discuss the front-end and back-end of your project.{' '}
      </h5>
      <p style={{ margin: '4rem 0', textAlign: 'center' }}>
        <a
          className={`${getInTouchButton} gtm-google-ads-2024-campaigns-cta-link`}
          href="mailto:flsilva7@gmail.com"
        >
          Hire a Senior Full-Stack Collaborator
        </a>
      </p>
      <h3 style={{ marginTop: '4rem', textAlign: 'center' }}>
        Accelerate Your Startup&#39;s Success with the Next.js App Router
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
          className={`${getInTouchButton} gtm-google-ads-2024-campaigns-cta-link`}
          href="mailto:flsilva7@gmail.com"
        >
          Hire a Senior Full-Stack Collaborator
        </a>
      </p>
    </div>
  </LayoutCampaign>
);

export default DeliveryPage;

export const Head: HeadFC = () => (
  <SEO
    description="Discover how I leverage React and Next.js to help teams build products and ship features faster. See my case study and client testimonials. I have over a decade of experience building products, full-stack."
    pagePath=""
    title="Remote Full-Stack Engineer - Flavio Silva"
  />
);
