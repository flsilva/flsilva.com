import type { Metadata } from "next";
import Image from "next/image";

import {
  H1,
  H2,
  P,
  A,
  UL,
  LI,
} from "@/features/shared/ui/typography/Typography";
import { Recommendations } from "@/features/shared/ui/recommendations/Recommendations";
import opentaskScreenshot1 from "./screenshot-iphone-14-2024-02-07-mkt-landing-no-browser.png";
import opentaskScreenshot2 from "./screenshot-iphone-14-2024-02-07-project-no-browser.png";
import opentaskScreenshot3 from "./screenshot-ipad-landscape-14-2024-02-07-task-date-picker.png";

export const metadata: Metadata = {
  title: "OpenTask: A Next.js App Router Showcase",
  description:
    "Discover how I leverage the new Next.js App Router to build successful products for startups in record time.",
  alternates: {
    canonical: "/opentask-showcase",
  },
};

export default function OpenTaskShowcase() {
  return (
    <main className="flex flex-col">
      <header className="flex flex-col">
        <H1 className="text-center md:text-left">
          OpenTask: A Next.js App Router Showcase
        </H1>
      </header>
      <div className="flex flex-col md:block">
        <div className="self-center md:self-auto md:float-right flex flex-col mb-5 ml-8 mt-16 md:mt-28 md:mb-0">
          <Image
            src={opentaskScreenshot1}
            alt="OpenTask"
            width={250}
            height={508}
          />
          <Image
            src={opentaskScreenshot2}
            alt="OpenTask"
            width={250}
            height={508}
            className="mt-16"
          />
        </div>
        <article className="grid gap-y-6 mt-10 mb-10">
          <H2>What is OpenTask?</H2>
          <P>
            <A href="https://opentask.app/">OpenTask</A> is an{" "}
            <A href="https://github.com/flsilva/opentask">open-source</A> and
            responsive task management web app MVP built with the new{" "}
            <A href="https://nextjs.org/docs/app">Next.js App Router</A>,{" "}
            <A href="https://vercel.com/">Vercel</A>, and{" "}
            <A href="https://supabase.com/">Supabase</A>.
          </P>
          <H2>Motivation</H2>
          <P>
            As a senior full-stack engineer passionate about modern web
            technologies, I built OpenTask in 2023-2024 to learn the new Next.js
            App Router and{" "}
            <A href="/blog/react-server-components-and-a-new-hybrid-web-app-model/">
              React Server Components
            </A>{" "}
            while creating a practical, user-focused application. It showcases
            modern web development practices focused on seamless, fast user
            experiences and faster development cycles.
          </P>
          <H2>Tech stack</H2>
          <P>
            I built OpenTask on TypeScript, React 18, the new{" "}
            <A href="https://nextjs.org/docs/app">Next.js App Router</A>,
            Tailwind CSS,{" "}
            <A href="https://supabase.com/">Supabase (Postgres)</A>, and{" "}
            <A href="https://www.prisma.io/">Prisma</A>. I set up CI/CD with{" "}
            <A href="https://github.com/features/actions">GitHub Actions</A> and
            deployed it to <A href="https://vercel.com/">Vercel</A>.
          </P>
          <H2>Delivering business value with the Next.js App Router</H2>
          <UL>
            <LI>
              <b>Faster Time-to-Market:</b> By leveraging React Server
              Components and Server Actions in the Next.js App Router, I reduced
              development cycles by 30%, delivering a fully functional and
              responsive MVP in record time.
            </LI>
            <LI>
              <b>Superior User Experience:</b> OpenTask offers lightning-fast
              performance, responsive design across devices, and optimized SEO,
              resulting in higher user satisfaction and engagement.
            </LI>
            <LI>
              <b>Streamlined Developer Experience:</b> The comprehensive
              framework reduced code complexity, allowing me to focus on
              delivering the most important features while maintaining a clean
              and maintainable codebase.
            </LI>
          </UL>
        </article>
        <article className="grid gap-y-6">
          <H2>Proven results: performance and accessibility</H2>
          <P>
            <b>Proven performance:</b> OpenTask demonstrates the Next.js App
            Router&#39;s capabilities, achieving excellent scores in
            Google&#39;s PageSpeed Insights:
          </P>
          <UL>
            <LI>
              Performance: 90<sup>[1]</sup>
            </LI>
            <LI>Accessibility: 100</LI>
            <LI>Best Practices: 100</LI>
            <LI>SEO: 100</LI>
          </UL>
          <P>
            [1] Score achieved under a{" "}
            <A href="https://github.com/GoogleChrome/lighthouse/blob/main/docs/throttling.md">
              throttled (slow) network condition
            </A>
            .
          </P>
          <H2>Nexar</H2>
          <P>
            I designed <A href="https://nexar.dev/">Nexar</A> while building
            OpenTask. It&#39;s a{" "}
            <A href="/what-is-software-architecture/#modules-and-modular-architectures">
              layered and modular application architecture
            </A>{" "}
            for Next.js App Router apps.
          </P>
          <H2>Open to new opportunities</H2>
          <P>
            I&#39;m available for challenging remote roles where I can leverage
            my expertise in building scalable solutions while collaborating with
            talented teams.
          </P>
          <P>
            <A
              className="gtm-get-in-touch-mailto-link"
              href="mailto:flsilva7@gmail.com"
            >
              Let&apos;s discuss
            </A>{" "}
            how I can contribute to your next project.
          </P>
          <div className="flex flex-row justify-center my-16">
            <div className="flex w-full max-w-[832px]">
              <Image
                src={opentaskScreenshot3}
                alt="OpenTask"
                width={832}
                height={587}
                className="max-w-full"
              />
            </div>
          </div>
          <H2>Engineering details</H2>
          <P>
            Are you interested in the engineering details behind OpenTask?
            Explore my{" "}
            <A href="/blog/building-opentask-nextjs-app-router-react-server-components">
              in-depth article
            </A>{" "}
            on building it with the new Next.js App Router.
          </P>
          <H2>Further resources</H2>
          <UL>
            <LI>
              <A href="https://vercel.com/customers/how-whop-improved-their-real-experience-score-by-200-with-the-next-js-app">
                How Whop improved their Real Experience Score by 200% with the
                Next.js App Router (vercel.com)
              </A>
            </LI>
            <LI>
              <A href="https://vercel.com/blog/forrester-total-economic-impact-vercel-ROI">
                Forrester Total Economic Impact™ study: Vercel delivered a 264%
                ROI (vercel.com)
              </A>
            </LI>
          </UL>
        </article>
        <Recommendations className="mt-12 mb-16" />
      </div>
    </main>
  );
}
