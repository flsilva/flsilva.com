import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { LayoutCampaign } from '../../../components/layouts/LayoutCampaign';
import { SEO } from '../../../components/SEO';
import { Recommendation } from '../../../components/recommendations/Recommendation';
import { Recommendations } from '../../../components/recommendations/Recommendations';
import {
  copyImageContainer,
  header,
  imageContainerCaseStudy,
  caseStudyTitle,
  getInTouchButton,
} from '../../index.module.css';

const DeliveryPage: React.FC<PageProps> = () => (
  <LayoutCampaign>
    <header className={header}>
      <h2 className={caseStudyTitle}>
        Accelerate Your Startup&apos;s Success with the New Next.js App Router
      </h2>
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
      <h3>Introduction</h3>
      <p>
        Deliver a seamless, more responsive user experience and get your MVP to market in as little
        as a few weeks with reduced development risk building on the new{' '}
        <a href="https://nextjs.org/docs/app">Next.js App Router</a> and{' '}
        <a href="https://vercel.com/">Vercel</a> (used by companies like Nike and Adobe).
      </p>
      <p>
        To showcase the power of this technology, I built{' '}
        <a href="https://opentask.app/">OpenTask</a>, an{' '}
        <a href="https://github.com/flsilva/opentask">open-source</a> MVP task management web
        application.
      </p>
      <p>
        Discover how that technology accelerates time-to-market, improves customer satisfaction, and
        streamlines the developer experience – all critical to your bottom line.
      </p>
      <h3 style={{ marginBlockStart: '3rem' }}>The challenge</h3>
      <p>
        Today&#39;s users demand seamless and fast experiences across all devices. Still,
        traditional web development technology often results in poor user experiences, sluggish
        performance, and slow development cycles, leading to lower conversion rates, increased
        costs, and a competitive disadvantage.
      </p>
      <h3 style={{ marginBlockStart: '3rem' }}>The solution</h3>
      <h4>Accelerated Time-to-Market</h4>
      <p>
        The support for{' '}
        <a href="/blog/react-server-components-and-a-new-hybrid-web-app-model/">
          React Server Components
        </a>{' '}
        and{' '}
        <a href="/blog/react-server-components-and-a-new-hybrid-web-app-model/#server-actions">
          Server Actions
        </a>{' '}
        in the Next.js App Router leads to less code and fewer bugs, resulting in up to 30% faster
        development cycles than the already good{' '}
        <a href="https://nextjs.org/docs/pages">Pages Router</a>.
      </p>
      <p>
        That translates to launching your MVP in as little as a few weeks rather than months,
        putting you ahead of the competition and enabling you to gain valuable user insights,
        validate your idea, and attract investors faster – all critical success factors for
        early-stage startups.
      </p>
      <h4>Improved Customer Satisfaction</h4>
      <p>
        The Next.js App Router delivers lightning-fast page loads, optimized SEO, and seamless,
        responsive experiences across all devices.
      </p>
      <p>
        That translates into a superior user experience that delights customers, boosts engagement,
        and increases conversions. Happier customers lead to greater brand loyalty, higher retention
        rates, and increased revenue.
      </p>
      <h4>Streamlined Developer Experience</h4>
      <p>
        The Next.js App Router is a comprehensive full-stack framework that enables developers to
        create products using only one programming language, JavaScript. Vercel is the go-to cloud
        platform for deploying and scaling Next.js applications.
      </p>
      <p>
        Together, they significantly reduce the boilerplate code and tooling complexity, resulting
        in up to 30% smaller codebases (vs. the{' '}
        <a href="https://nextjs.org/docs/pages">Pages Router</a>) and less time managing
        infrastructure, empowering developers to deliver the features that drive business growth.
        All while increasing their satisfaction.
      </p>
      <h3 style={{ marginBlockStart: '3rem' }}>OpenTask: Powered by Next.js App Router</h3>
      <p>
        <a href="https://opentask.app/">OpenTask</a> is an{' '}
        <a href="https://github.com/flsilva/opentask">open-source</a> MVP task management web
        application built entirely with the Next.js App Router and{' '}
        <a href="https://supabase.com/">Supabase</a>.
      </p>
      <p>
        While intentionally streamlined to showcase the technology, it delivers essential features,
        including:
      </p>
      <ul>
        <li>
          Fast page loads, seamless user experience, and responsive web design across all devices.
        </li>
        <li>
          Secure user authentication via popular OAuth providers (Google, LinkedIn, and more).
        </li>
        <li>
          Easy-to-use tools to create, organize, and complete tasks, including a user-friendly date
          picker.
        </li>
      </ul>
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
        <b>See for yourself:</b> Explore <a href="https://opentask.app/">OpenTask</a> and discover
        how the Next.js App Router can accelerate your MVP development.
      </p>
      <p>
        Are you interested in the engineering details behind OpenTask? Explore my{' '}
        <a href="/blog/building-opentask-nextjs-app-router-react-server-components">
          in-depth article
        </a>{' '}
        on building it with the Next.js App Router.
      </p>
      <p>
        [1] Score achieved under a{' '}
        <a href="https://github.com/GoogleChrome/lighthouse/blob/main/docs/throttling.md">
          throttled (slow) network condition
        </a>
        .
      </p>
      <h3 style={{ marginBlockStart: '3rem' }}>Your MVP Launch Collaborator</h3>
      <p>
        With over a decade of experience in full-stack product development and expertise in the
        Next.js App Router, I help early-stage startup leaders launch unique MVPs in record time. My
        approach prioritizes:
      </p>
      <ul>
        <li>
          <b>Seamless Collaboration:</b> Clear communication and alignment on your product vision.
        </li>
        <li>
          <b>Tech-Driven Speed:</b> Leveraging the App Router to minimize development overhead and
          maximize launch velocity.
        </li>
        <li>
          <b>Sustainable Quality:</b> Building scalable, maintainable codebases that support your
          long-term growth.
        </li>
      </ul>
      <h4 style={{ textAlign: 'center' }}>
        <b style={{ fontWeight: 600 }}>
          I&#39;m available today to discuss your startup product idea.
        </b>
      </h4>
      <p style={{ margin: '4rem 0', textAlign: 'center' }}>
        <a className={`${getInTouchButton}`} href="mailto:flsilva7@gmail.com">
          Accelerate Your MVP Launch Now
        </a>
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
      <h3 style={{ marginBlockStart: '3rem' }}>Further Resources</h3>
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
          imgComponent={<StaticImage alt="Kate Frucher" src="../../kate-frucher.jpg" />}
          name="Kate Frucher"
          position="Managing Director | Co–Founder"
        >
          Flavio is an outstanding developer. He started working with us from our earliest days,
          jumping into a storm of activity to understand our vision, think through our basic
          architecture, build the foundations, and make the app come alive.
        </Recommendation>
        <Recommendation
          imgComponent={<StaticImage alt="Seyi Moon" src="../../seyi-moon.jpg" />}
          name="Seyi Moon"
          position="Manager"
        >
          Flavio not only has superb communication skills, but he&#39;s also a proactive problem
          solver. He will go above and beyond what is asked of him to make sure the team and the
          project will succeed.
        </Recommendation>
        <Recommendation
          imgComponent={<StaticImage alt="Richard Broo" src="../../richard-broo.jpg" />}
          name="Richard Broo"
          position="Co-Founder"
        >
          Flavio came in a freelance developer to help us develop a large platform MVP for a client.
          He proved himself beyond valuable in ideas and execution. I would recommend him for any
          project challenge, as he will rise to the occasion.
        </Recommendation>
      </Recommendations>
      <p style={{ margin: '0 0 2rem', textAlign: 'center' }}>
        <a className={`${getInTouchButton}`} href="mailto:flsilva7@gmail.com">
          Accelerate Your MVP Launch Now
        </a>
      </p>
    </div>
  </LayoutCampaign>
);

export default DeliveryPage;

export const Head: HeadFC = () => (
  <SEO
    description="Discover how I leverage the new Next.js App Router to launch successful MVPs for startups in record time. See my case study and client testimonials. I have over a decade of experience building products, full-stack."
    imagePath="/images/case-studies/accelerate-your-startup-success-nextjs-app-router/social-media-card.png"
    pagePath="/case-studies/accelerate-your-startup-success-nextjs-app-router/"
    title="Accelerate Your Startup's Success with the Next.js App Router"
  />
);
