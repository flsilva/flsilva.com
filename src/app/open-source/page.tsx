import type { Metadata } from "next";
import Image from "next/image";

import { A, H1, H2, P } from "@/features/shared/ui/typography/Typography";

export const metadata: Metadata = {
  title: "Open Source Software by Flavio Silva: full-stack engineer",
  description: "Check out the open source software projects I've created.",
};

export default function OpenSourcePage() {
  return (
    <article className="grid gap-y-6">
      <H1>Open Source</H1>
      <P>
        Here you can find open-source software projects I&#39;ve been building
        throughout my career. I invite anyone interested in analyzing my
        software engineering skills to look at these projects.
      </P>
      <Image
        src="/images/open-source/opentask-light.png"
        alt="OpenTask"
        width={190}
        height={65}
        className="rounded-lg mt-12 block dark:hidden"
      />
      <Image
        src="/images/open-source/opentask-dark.png"
        alt="OpenTask"
        width={220}
        height={55}
        className="rounded-lg mt-12 hidden dark:block"
      />
      <P>
        <A href="https://opentask.app">OpenTask</A> is an{" "}
        <A href="https://github.com/flsilva/opentask">open-source</A> and
        responsive MVP task management web application I built with the new{" "}
        <A href="https://nextjs.org/docs/app">Next.js App Router</A> in
        2023-2024.
      </P>
      <H2>Vostok Framework</H2>
      <Image
        src="/images/open-source/vostokframework.png"
        alt="Vostok Framework"
        width={260}
        height={130}
        className="bg-[#050505] rounded-lg p-8 md:w-72"
      />
      <P>
        I implemented{" "}
        <A href="https://vostokframework.flsilva.com/">VostokFramework</A>{" "}
        between 2011-2012 as a robust Adobe Flash AS3 framework for loading,
        managing, and storing external assets (XML, SWF, JPG, etc.). It includes
        advanced features such as built-in localization, loading queues, cache
        control, and more.
      </P>
      <P>
        VostokFramework was a great case study for me as it allowed me to study
        and apply several software engineering topics, including{" "}
        <A href="http://en.wikipedia.org/wiki/Software_design_pattern">
          Design Patterns
        </A>
        ,{" "}
        <A href="http://www.amazon.com/Framework-Design-Guidelines-Conventions-Libraries/dp/0321545613">
          Framework Design Guidelines
        </A>
        ,{" "}
        <A href="https://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530/">
          Test-Driven Development
        </A>
        ,{" "}
        <A href="https://cs.uwaterloo.ca/~m2nagapp/courses/CS446/1195/Arch_Design_Activity/Layered.pdf">
          Layered Architecture
        </A>
        , and{" "}
        <A href="https://www.amazon.com/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215/">
          Domain-Driven Design
        </A>
        . The result was a beautiful, carefully crafted Object-Oriented design
        based on best practices and patterns. The codebase is{" "}
        <A href="https://vostokframework.flsilva.com/docs/coverage-report/">
          77% covered by tests
        </A>
        .
      </P>
      <H2>AS3Collections</H2>
      <Image
        src="/images/open-source/as3collections.png"
        alt="AS3 Collections"
        width={260}
        height={72}
        className="bg-[#050505] rounded-lg p-8 md:w-72"
      />
      <P>
        I implemented{" "}
        <A href="https://as3collections.flsilva.com/">AS3Collections</A> between
        2010-2011 as a project based on the{" "}
        <A href="https://docs.oracle.com/javase/8/docs/technotes/guides/collections/overview.html">
          Java Collections Framework
        </A>
        , aiming to be a standard solution for more elaborated data structures
        nonexistent in the AS3 language (e.g., Lists, Maps, Queues) for any
        Adobe Flash/Flex/AIR AS3 application or framework. The codebase is{" "}
        <A href="https://as3collections.flsilva.com/docs/coverage-report/">
          95% covered by tests
        </A>
        .
      </P>
      <H2>AS3Utils</H2>
      <Image
        src="/images/open-source/as3utils.png"
        alt="AS3Utils"
        width={260}
        height={109}
        className="bg-[#050505] rounded-lg p-8 md:w-72"
      />
      <P>
        I implemented <A href="https://as3utils.flsilva.com/">AS3Utils</A>{" "}
        between 2010-2011 as a utility library composed of small solutions for
        daily, recurrent work, aiming to be a base utility library for any Adobe
        Flash/Flex/AIR AS3 application or framework.
      </P>
      <H2>AS3CoreAddendum</H2>
      <Image
        src="/images/open-source/as3coreaddendum.png"
        alt="AS3CoreAddendum"
        width={260}
        height={71}
        className="bg-[#050505] rounded-lg p-8 md:w-72"
      />
      <P>
        I implemented{" "}
        <A href="https://as3coreaddendum.flsilva.com/">AS3CoreAddendum</A>{" "}
        between 2010-2011 as an architectural addendum to the core of the Adobe
        Actionscript 3.0 language. It was based on standards and patterns found
        in the Java and C# languages, aiming to be a base standard library for
        any AS3 application or framework.
      </P>
    </article>
  );
}
