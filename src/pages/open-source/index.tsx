import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import { Layout } from '../../layouts/Layout'
import { SEO } from '../../components/SEO'
import { PageContentHeader } from '../../components/PageContentHeader'
import { ossProject, vostokFramework, as3Collections, as3Utils, as3CoreAddendum } from './index.module.css'

const OpenSourcePage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <PageContentHeader linkTo="/open-source/" title="Open Source" />
      <p>
        Here you can find open-source software projects I've built throughout my career. I invite anyone interested in analyzing my software engineering skills to look at these projects.
      </p>
      <div className={[ossProject, vostokFramework].join(' ')}>
        <div>
          <StaticImage alt="VostokFramework" src="./vostokframework.png" />
        </div>
        <p>
          I implemented <a href="http://vostokframework.org" target="_blank">VostokFramework</a> between 2011-2012 as a robust Adobe Flash AS3 framework for loading, managing, and storing external assets (XML, SWF, JPG, etc.). It includes advanced features such as built-in localization, loading queues, cache control, and more.
        </p>
        <p>
          VostokFramework was a great case study for me as it allowed me to study and apply several software engineering topics, including <a href="http://en.wikipedia.org/wiki/Software_design_pattern" target="_blank">Design Patterns</a>, <a href="http://www.amazon.com/Framework-Design-Guidelines-Conventions-Libraries/dp/0321545613" target="_blank">Framework Design Guidelines</a>, <a href="http://en.wikipedia.org/wiki/Test-driven_development" target="_blank">Test-Driven Development</a>, <a href="http://my.safaribooksonline.com/book/software-engineering-and-development/0321125215/the-building-blocks-of-a-model-driven-design/ch04#X2ludGVybmFsX0h0bWxWaWV3P3htbGlkPTAtMzIxLTEyNTIxLTUlMkZjaDA0bGV2MXNlYzEmcXVlcnk9" target="_blank">Layered Architecture</a>, and <a href="http://en.wikipedia.org/wiki/Domain-driven_design" target="_blank">Domain-Driven Design</a>.
          The result was a beautiful, carefully crafted Object-Oriented design based on best practices and patterns with <a href="http://vostokframework.org/docs/coverage-report/" target="_blank">77% of codebase coverage testing</a>.
        </p>
      </div>
      <div className={[ossProject, as3Collections].join(' ')}>
        <div>
          <StaticImage alt="AS3Collections" src="./as3collections.png" />
        </div>
        <p>
          I implemented <a href="http://as3collections.org" target="_blank">AS3Collections</a> between 2010-2011 as a project based on the <a href="http://en.wikipedia.org/wiki/Java_collections_framework" target="_blank">Java Collections Framework</a>, aiming to be a standard solution for data structures (e.g., Lists, Maps, Queues) for any Adobe Flash/Flex/AIR AS3 application or framework. The <a href="http://as3collections.org/docs/coverage-report" target="_blank">codebase coverage testing sits at 95%</a>.
        </p>
      </div>
      <div className={[ossProject, as3Utils].join(' ')}>
        <div>
          <StaticImage alt="AS3Utils" src="./as3utils.png" />
        </div>
        <p>
          I implemented <a href="http://as3utils.org" target="_blank">AS3Utils</a> between 2010-2011 as a utility library composed of small solutions for daily, recurrent work, aiming to be a base utility library for any Adobe Flash/Flex/AIR AS3 application or framework.
        </p>
      </div>
      <div className={[ossProject, as3CoreAddendum].join(' ')}>
        <div>
          <StaticImage alt="AS3CoreAddendum" src="./as3coreaddendum.png" />
        </div>
        <p>
          I implemented <a href="http://as3coreaddendum.org" target="_blank">AS3CoreAddendum</a> between 2010-2011 as an architectural addendum to the core of the Adobe Actionscript 3.0 language. It was based on standards and patterns found in the Java and C# languages, aiming to be a base standard library for any AS3 application or framework.
        </p>
      </div>
    </Layout>
  )
}

export default OpenSourcePage

export const Head: HeadFC = () => <SEO title="Open Source Projects by" />
