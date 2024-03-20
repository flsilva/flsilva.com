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
      <h1>Remote MVP Developer</h1>
      <h4 style={{ marginTop: '0' }}>
        Need an MVP fast? Hire a results-driven senior collaborator.
      </h4>
    </header>
    <div className={copyImageContainer}>
      <div className={imageContainerCampaign}>
        <StaticImage alt="Flavio Silva" src="../flavio.jpg" width={250} height={250} />
      </div>
      <h4>Hi, I&#39;m Flavio 👋</h4>
      <p>
        I&#39;m a full-stack engineer from Brazil (15+ years working remotely) helping executives of
        early-stage startups launch their SaaS ideas from concept to product in a few weeks.
      </p>
      <p>
        Here&#39;s why you should hire me as your senior collaborator{' '}
        <b>to build your startup MVP:</b>
      </p>
      <ul style={{ display: 'block' }}>
        <li>
          <b>Reclaim founder focus –</b> I own technical execution, managing tasks independently.
        </li>
        <li>
          <b>No surprises:</b> Clear communication ensure your product stays on track.
        </li>
        <li>
          <b>Build MVPs fast with proven tech:</b> I&#39;ve just shipped{' '}
          <a href="https://opentask.app/" className="gtm-opentask-website-link">
            OpenTask
          </a>
          , an{' '}
          <a href="https://github.com/flsilva/opentask" className="gtm-opentask-github-repo-link">
            open-source
          </a>{' '}
          MVP as part of a{' '}
          <a
            href="/case-studies/accelerate-your-startup-success-nextjs-app-router/"
            className="gtm-blog-post-opentask-case-study-link"
          >
            case study
          </a>{' '}
          I wrote. I&#39;m using{' '}
          <a
            href="https://flsilva.com/blog/react-server-components-and-a-new-hybrid-web-app-model/"
            className="gtm-blog-post-react-server-components-hybrid-model-link"
          >
            new React and Next.js features
          </a>{' '}
          that help developers build products faster with less code and bugs.
        </li>
      </ul>
      <h5 style={{ marginTop: '3rem', textAlign: 'center' }}>
        I&#39;m available today to discuss your startup MVP idea.{' '}
      </h5>
      <p style={{ margin: '4rem 0', textAlign: 'center' }}>
        <a
          className={`${getInTouchButton} gtm-google-ads-2024-campaigns-cta-link`}
          href="mailto:flsilva7@gmail.com"
        >
          Accelerate Your MVP Launch Now
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
          Flavio is an outstanding developer. He started working with us from our earliest days,
          jumping into a storm of activity to understand our vision, think through our basic
          architecture, build the foundations, and make the app come alive.
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
          Accelerate Your MVP Launch Now
        </a>
      </p>
    </div>
  </LayoutCampaign>
);

export default DeliveryPage;

export const Head: HeadFC = () => (
  <SEO
    description="Discover how I leverage the new Next.js App Router to launch successful MVPs for startups in record time. See my case study and client testimonials. I have over a decade of experience building products full-stack."
    pagePath=""
    title="Remote MVP Engineer - Flavio Silva"
  />
);
