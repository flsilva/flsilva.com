import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Layout } from '../../components/layouts/Layout';
import { SEO } from '../../components/SEO';
import {
  ossProject,
  vostokFramework,
  as3Collections,
  as3Utils,
  as3CoreAddendum,
} from './index.module.css';

const OpenSourcePage: React.FC<PageProps> = () => (
  <Layout>
    <p>
      Here you can find open-source software projects I&#39;ve been building throughout my career. I
      invite anyone interested in analyzing my software engineering skills to look at these
      projects.
    </p>
    <div className={[ossProject, vostokFramework].join(' ')}>
      <div>
        <StaticImage alt="VostokFramework" src="./vostokframework.png" />
      </div>
      <p>
        I implemented <a href="https://vostokframework.flsilva.com/">VostokFramework</a> between
        2011-2012 as a robust Adobe Flash AS3 framework for loading, managing, and storing external
        assets (XML, SWF, JPG, etc.). It includes advanced features such as built-in localization,
        loading queues, cache control, and more.
      </p>
      <p>
        VostokFramework was a great case study for me as it allowed me to study and apply several
        software engineering topics, including{' '}
        <a href="http://en.wikipedia.org/wiki/Software_design_pattern">Design Patterns</a>,{' '}
        <a href="http://www.amazon.com/Framework-Design-Guidelines-Conventions-Libraries/dp/0321545613">
          Framework Design Guidelines
        </a>
        ,{' '}
        <a href="https://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530/">
          Test-Driven Development
        </a>
        ,{' '}
        <a href="https://cs.uwaterloo.ca/~m2nagapp/courses/CS446/1195/Arch_Design_Activity/Layered.pdf">
          Layered Architecture
        </a>
        , and{' '}
        <a href="https://www.amazon.com/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215/">
          Domain-Driven Design
        </a>
        . The result was a beautiful, carefully crafted Object-Oriented design based on best
        practices and patterns. The codebase is{' '}
        <a href="https://vostokframework.flsilva.com/docs/coverage-report/">77% covered by tests</a>
        .
      </p>
    </div>
    <div className={[ossProject, as3Collections].join(' ')}>
      <div>
        <StaticImage alt="AS3Collections" src="./as3collections.png" />
      </div>
      <p>
        I implemented <a href="https://as3collections.flsilva.com/">AS3Collections</a> between
        2010-2011 as a project based on the{' '}
        <a href="https://docs.oracle.com/javase/8/docs/technotes/guides/collections/overview.html">
          Java Collections Framework
        </a>
        , aiming to be a standard solution for more elaborated data structures nonexistent in the
        AS3 language (e.g., Lists, Maps, Queues) for any Adobe Flash/Flex/AIR AS3 application or
        framework. The codebase is{' '}
        <a href="https://as3collections.flsilva.com/docs/coverage-report/">95% covered by tests</a>.
      </p>
    </div>
    <div className={[ossProject, as3Utils].join(' ')}>
      <div>
        <StaticImage alt="AS3Utils" src="./as3utils.png" />
      </div>
      <p>
        I implemented <a href="https://as3utils.flsilva.com/">AS3Utils</a> between 2010-2011 as a
        utility library composed of small solutions for daily, recurrent work, aiming to be a base
        utility library for any Adobe Flash/Flex/AIR AS3 application or framework.
      </p>
    </div>
    <div className={[ossProject, as3CoreAddendum].join(' ')}>
      <div>
        <StaticImage alt="AS3CoreAddendum" src="./as3coreaddendum.png" />
      </div>
      <p>
        I implemented <a href="https://as3coreaddendum.flsilva.com/">AS3CoreAddendum</a> between
        2010-2011 as an architectural addendum to the core of the Adobe Actionscript 3.0 language.
        It was based on standards and patterns found in the Java and C# languages, aiming to be a
        base standard library for any AS3 application or framework.
      </p>
    </div>
  </Layout>
);

export default OpenSourcePage;

export const Head: HeadFC = () => (
  <SEO
    description="Check out the open source software projects I've created."
    pagePath="/open-source"
    title="Open Source Software"
  />
);
