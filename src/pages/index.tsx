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
        I&#39;m a full-stack software engineer from Brazil with over two decades of professional
        experience, with the last 15 years working remotely. I&#39;ve been leading front-end teams
        since 2007.
      </p>
      <p>
        I have experience working directly with co-founders and designers throughout the feature
        spec and design process to deliver engaging and performant apps.
      </p>
      <p>
        I&#39;ve just shipped <a href="https://opentask.app">OpenTask</a>, a free,{' '}
        <a href="https://github.com/flsilva/opentask/">open-source</a>, fully functional, and
        responsive PWA MVP task management app. I wrote a{' '}
        <a href="https://flsilva.com/blog/opentask-nextjs-app-router-case-study/">case study</a>{' '}
        about it.
      </p>
      <p>
        I built it on TypeScript, React 18, the new{' '}
        <a href="https://nextjs.org/docs/app">Next.js App Router</a>, Tailwind CSS,{' '}
        <a href="https://supabase.com/">Supabase (Postgres)</a>, and{' '}
        <a href="https://www.prisma.io/">Prisma</a>. I set up CI/CD with{' '}
        <a href="https://github.com/features/actions">GitHub Actions</a> and deployed it to{' '}
        <a href="https://vercel.com/">Vercel</a>.
      </p>
      <p>
        It leverages new features from React and Next.js, including{' '}
        <a href="https://flsilva.com/blog/react-server-components-and-a-new-hybrid-web-app-model/">
          React Server Components
        </a>{' '}
        and{' '}
        <a href="https://flsilva.com/blog/react-server-components-and-a-new-hybrid-web-app-model/#server-actions">
          Server Actions
        </a>
        .
      </p>
      <p>
        I designed <a href="https://nexar.dev/">Nexar</a>, an application architecture for Next.js
        App Router apps while building OpenTask.
      </p>
      <p>
        It&#39;s a rewarding time to be a full-stack engineer. I feel incredibly productive and
        satisfied with my work. I can write clean and{' '}
        <a href="https://flsilva.com/blog/what-is-software-architecture/#modules-and-modular-architectures">
          modular
        </a>{' '}
        code and deliver top-quality applications supported by unit and integration testing.
      </p>
      <p>
        Over the past years, I&#39;ve led the development of a cross-platform{' '}
        <a href="https://necolas.github.io/react-native-web/">React Native Web</a> app, sharing
        about 90% of the front-end codebase across the iOS, Android, and Web apps among other
        projects.
      </p>
      <p>
        I&#39;m available to work with TypeScript, React 18, Next.js App Router, Vercel, and GitHub
        Copilot! 🚀
      </p>
      <p>
        Let&#39;s&nbsp;
        <a href="mailto:flsilva7@gmail.com">get in touch</a>.
      </p>
      <p>
        Florianópolis, Brazil.
        <br />
        December 2023.
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
    title="About Flavio Silva - Full-Stack Software Engineer"
  />
);
