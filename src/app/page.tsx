import type { Metadata } from "next";
import Image from "next/image";

import { A, H1, P } from "@/features/shared/ui/typography/Typography";
import { Recommendations } from "@/features/shared/ui/recommendations/Recommendations";

export const metadata: Metadata = {
  title: "About Flavio Silva - Full-Stack Software Engineer",
  description:
    "I'm a Brazilian Full-Stack Software Engineer with 20 years of professional industry experience. Check out my website to learn more about my work.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <header className="flex flex-col">
        <H1 className="text-center flex-grow md:text-left">
          Hi, I&#39;m Flavio 👋
        </H1>
      </header>
      <div className="flex flex-col md:block">
        <div className="w-[180px] h-[180px] md:w-[250px] md:h-[250px] self-center md:self-auto block float-right mt-8 md:mt-1">
          <Image
            src="/images/people/flavio.jpg"
            alt="Flavio Silva"
            width={400}
            height={400}
            className="w-[180px] h-[180px] md:w-[250px] md:h-[250px] rounded-full border-4 border-gray-300"
          />
        </div>
        <article className="grid gap-y-6 mt-10">
          <P>
            I&#39;m a senior full-stack engineer with 20 years of experience,
            with the last 11 years building products remotely for American
            startups. I specialize in <b>React</b>, <b>Next.js</b>, and{" "}
            <b>Node.js</b>, and I have a track record of leading teams,
            architecting solutions, and collaborating with founders and
            designers to drive business results.
          </P>
          <P>
            Recently, I built <A href="/opentask-showcase/">OpenTask</A>, an{" "}
            <A href="https://github.com/flsilva/opentask/">open-source</A> and
            responsive task management MVP showcasing modern web development
            practices with{" "}
            <A href="/blog/react-server-components-and-a-new-hybrid-web-app-model/">
              React Server Components
            </A>{" "}
            and the new{" "}
            <A href="https://nextjs.org/docs/app">Next.js App Router</A>.
          </P>
        </article>
        <article className="grid gap-y-6 mt-10">
          <P>
            OpenTask implements <A href="https://nexar.dev/">Nexar</A>, a{" "}
            <A href="/blog/what-is-software-architecture/#modules-and-modular-architectures">
              modular
            </A>{" "}
            and{" "}
            <A href="/blog/what-is-software-architecture/#layers-and-layered-architectures">
              layered
            </A>{" "}
            application architecture I designed to help teams build scalable and
            maintainable Next.js App Router apps.
          </P>
        </article>
        <article className="grid gap-y-6 mt-10">
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
          <P className="mt-8">
            São Paulo,
            <br />
            November 2024.
          </P>
        </article>
        <Recommendations className="mt-8 mb-16" />
      </div>
    </>
  );
}
