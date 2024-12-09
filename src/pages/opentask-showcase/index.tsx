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
  imageContainerCaseStudy,
  caseStudyTitle2,
  getInTouchButton,
} from '../index.module.css';

const DeliveryPage: React.FC<PageProps> = () => (
  <LayoutCampaign>
    <header className={header}>
      <h2 className={caseStudyTitle2}>OpenTask: A Next.js App Router Showcase</h2>
    </header>
    <div className={copyImageContainer}>
      <div className={imageContainerCaseStudy}>
        <StaticImage
          alt="OpenTask"
          src="./screenshot-iphone-14-2024-02-07-mkt-landing-no-browser.png"
          width={436}
          height={885}
          style={{ maxWidth: '250px' }}
        />
        <StaticImage
          alt="OpenTask"
          src="./screenshot-iphone-14-2024-02-07-project-no-browser.png"
          width={436}
          height={885}
          style={{ maxWidth: '250px' }}
        />
      </div>
      <h4>What is OpenTask?</h4>
      <p>
        <a href="https://opentask.app/">OpenTask</a> is an{' '}
        <a href="https://github.com/flsilva/opentask">open-source</a> and responsive task management
        web app MVP built with the new <a href="https://nextjs.org/docs/app">Next.js App Router</a>,{' '}
        <a href="https://vercel.com/">Vercel</a>, and <a href="https://supabase.com/">Supabase</a>.
      </p>
      <h4 style={{ marginBlockStart: '3rem' }}>Motivation</h4>
      <p>
        As a senior full-stack engineer passionate about modern web technologies, I built OpenTask
        in 2023 to learn the new Next.js App Router and{' '}
        <a href="/blog/react-server-components-and-a-new-hybrid-web-app-model/">
          React Server Components
        </a>{' '}
        while creating a practical, user-focused application. It showcases modern web development
        practices focused on seamless, fast user experiences and faster development cycles.
      </p>
      <h4 style={{ marginBlockStart: '3rem' }}>Tech Stack</h4>
      <p>
        I built OpenTask on TypeScript, React 18, the new{' '}
        <a href="https://nextjs.org/docs/app">Next.js App Router</a>, Tailwind CSS,{' '}
        <a href="https://supabase.com/">Supabase (Postgres)</a>, and{' '}
        <a href="https://www.prisma.io/">Prisma</a>. I set up CI/CD with{' '}
        <a href="https://github.com/features/actions">GitHub Actions</a> and deployed it to{' '}
        <a href="https://vercel.com/">Vercel</a>.
      </p>
      <h4 style={{ marginBlockStart: '3rem' }}>
        Delivering Business Value with the Next.js App Router
      </h4>
      <ul>
        <li>
          <b>Faster Time-to-Market:</b> By leveraging React Server Components and Server Actions in
          the Next.js App Router, I reduced development cycles by 30%, delivering a fully functional
          and responsive MVP in record time.
        </li>
        <li>
          <b>Superior User Experience:</b> OpenTask offers lightning-fast performance, responsive
          design across devices, and optimized SEO, resulting in higher user satisfaction and
          engagement.
        </li>
        <li>
          <b>Streamlined Developer Experience:</b> The comprehensive framework reduced code
          complexity, allowing me to focus on delivering the most important features while
          maintaining a clean and maintainable codebase.
        </li>
      </ul>
      <h4 style={{ marginBlockStart: '3rem' }}>Proven Results: Performance and Accessibility</h4>
      <p>
        <b>Proven performance:</b> OpenTask demonstrates the Next.js App Router&#39;s capabilities,
        achieving excellent scores in Google&#39;s PageSpeed Insights:
      </p>
      <ul>
        <li>
          Performance: 90<sup>[1]</sup>
          <sup />
        </li>
        <li>Accessibility: 100</li>
        <li>Best Practices: 100</li>
        <li>SEO: 100</li>
      </ul>
      <p>
        [1] Score achieved under a{' '}
        <a href="https://github.com/GoogleChrome/lighthouse/blob/main/docs/throttling.md">
          throttled (slow) network condition
        </a>
        .
      </p>
      <h4 style={{ marginBlockStart: '3rem' }}>Nexar</h4>
      <p>
        I designed <a href="https://nexar.dev/">Nexar</a> while building OpenTask. It&#39;s a{' '}
        <a href="/what-is-software-architecture/#modules-and-modular-architectures">
          layered and modular application architecture
        </a>{' '}
        for Next.js App Router apps.
      </p>
      <h4 style={{ marginBlockStart: '3rem' }}>Open to New Opportunities</h4>
      <p>
        I&#39;m available for challenging remote roles where I can leverage my expertise in building
        scalable solutions while collaborating with talented teams.
      </p>
      <p>
        <a className="gtm-get-in-touch-mailto-link" href="mailto:flsilva7@gmail.com">
          Let&apos;s discuss
        </a>{' '}
        how I can contribute to your next project.
      </p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          margin: '4rem 0',
        }}
      >
        <div style={{ display: 'flex', width: '832px' }}>
          <StaticImage
            alt="OpenTask"
            src="./screenshot-ipad-landscape-14-2024-02-07-task-date-picker.png"
            width={832}
            height={587}
            style={{ maxWidth: '832px' }}
          />
        </div>
      </div>
      <h4 style={{ marginBlockStart: '3rem' }}>Engineering Details</h4>
      <p>
        Are you interested in the engineering details behind OpenTask? Explore my{' '}
        <a href="/blog/building-opentask-nextjs-app-router-react-server-components">
          in-depth article
        </a>{' '}
        on building it with the new Next.js App Router.
      </p>
      <h4 style={{ marginBlockStart: '3rem' }}>Further Resources</h4>
      <ul>
        <li>
          <a href="https://vercel.com/customers/how-whop-improved-their-real-experience-score-by-200-with-the-next-js-app">
            How Whop improved their Real Experience Score by 200% with the Next.js App Router
            (vercel.com)
          </a>
        </li>
        <li>
          <a href="https://vercel.com/blog/forrester-total-economic-impact-vercel-ROI">
            Forrester Total Economic Impact™ study: Vercel delivered a 264% ROI (vercel.com)
          </a>
        </li>
      </ul>
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
    </div>
  </LayoutCampaign>
);

export default DeliveryPage;

export const Head: HeadFC = () => (
  <SEO
    description="Discover how I leverage the new Next.js App Router to build successful products for startups in record time."
    imagePath="/images/opentask-showcase/social-media-card.png"
    pagePath="/opentask-showcase/"
    title="OpenTask: A Next.js App Router Showcase"
  />
);
