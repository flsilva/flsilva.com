import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Layout } from '../../components/layouts/Layout';
import { SEO } from '../../components/SEO';
import { experience, header, resumePage, technicalReading } from './index.module.css';

const ResumePage: React.FC<PageProps> = () => (
  <Layout>
    <header className={header}>
      <h1>Flavio Silva</h1>
      <h3>Full-Stack Software Engineer</h3>
    </header>
    <div className={resumePage}>
      <h5>Software Engineering Skills</h5>
      <ul>
        <li>
          <a href="http://en.wikipedia.org/wiki/JavaScript/">JavaScript</a>,{' '}
          <a href="https://www.typescriptlang.org/">TypeScript</a>,{' '}
          <a href="https://www.ruby-lang.org/en/">Ruby</a>,{' '}
          <a href="https://www.python.org/">Python</a>,{' '}
          <a href="http://en.wikipedia.org/wiki/HTML5">HTML5</a>,{' '}
          <a href="http://www.w3.org/TR/2001/WD-css3-roadmap-20010523/">CSS3</a>.
        </li>
        <li>
          <a href="https://martinfowler.com/architecture/">Software Architecture</a>,{' '}
          <a href="http://flsilva.com/blog/what-is-software-testing/">Software Testing</a>,{' '}
          <a href="https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612/">
            Design Patterns
          </a>
          .
        </li>
        <li>
          <a href="http://en.wikipedia.org/wiki/Agile_software_development">Agile</a>,&nbsp;
          <a href="https://martinfowler.com/books/refactoring.html">Refactoring</a>,{' '}
          <a href="https://www.amazon.com/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215/">
            Domain-Driven Design
          </a>
          , <a href="https://en.wikipedia.org/wiki/Continuous_integration">CI</a> /&nbsp;
          <a href="https://en.wikipedia.org/wiki/Continuous_delivery">CD</a>.
        </li>
      </ul>
      <h5>Front-End Skills</h5>
      <ul>
        <li>
          <a href="https://reactjs.org/">React</a>,{' '}
          <a href="https://reactnative.dev/">React Native</a>,{' '}
          <a href="https://nextjs.org/">Next.js</a>, <a href="https://remix.run/">Remix.run</a>.
        </li>
        <li>
          <a href="https://www.nngroup.com/articles/design-systems-101/">Design systems</a>,{' '}
          <a href="https://material.io/">Material Design</a>.
        </li>
        <li>
          <a href="https://www.componentdriven.org/">Component Driven UIs</a>,{' '}
          <a href="http://en.wikipedia.org/wiki/Responsive_web_design">Responsive Web Design</a>.
        </li>
      </ul>
      <h5>Back-End Skills</h5>
      <ul>
        <li>
          <a href="http://nodejs.org/">Node.js</a>,{' '}
          <a href="http://rubyonrails.org/">Ruby on Rails</a>,{' '}
          <a href="https://graphql.org">GraphQL</a>,{' '}
          <a href="http://en.wikipedia.org/wiki/Representational_state_transfer">REST</a>.
        </li>
        <li>
          <a href="https://martinfowler.com/articles/serverless.html">Serverless Architectures</a>
          ,&nbsp;
          <a href="https://aws.amazon.com/lambda/">AWS Lambda</a>,{' '}
          <a href="https://aws.amazon.com/appsync/">AWS AppSync</a>.
        </li>
        <li>
          <a href="http://en.wikipedia.org/wiki/SQL">SQL</a>,{' '}
          <a href="http://flsilva.com/blog/introduction-to-nosql/">NoSQL</a>,{' '}
          <a href="http://www.postgresql.org/">PostgreSQL</a>, <a href="https://redis.io/">Redis</a>
          , <a href="https://aws.amazon.com/dynamodb/">DynamoDB</a>.
        </li>
      </ul>
      <h5>Soft Skills</h5>
      <ul>
        <li>
          Excellent verbal and written English communication skills with tech and non-tech people.
        </li>
        <li>Critical thinking, proactivity, and problem-solving mindset.</li>
        <li>Teamwork and leadership.</li>
        <li>Project and time management.</li>
      </ul>
      <h5>Work Experience</h5>
      <ul className={experience}>
        <li>
          <h6>
            <a href="http://flsilva.com">Self-Employed</a>
          </h6>
          <small>since January 2009</small>
          <small>Occupation: Full-Stack Software Engineer</small>
          <p>
            I&#39;ve been working remotely from home since 2009, and since 2013 exclusively for
            overseas companies and startups, mainly in the U.S.
          </p>
          <p>
            I help companies and startups to build high-quality products and MVPs, implementing
            industry best practices and appropriate technologies, including TypeScript, JavaScript,
            React, React Native, Jest, Node.js, Ruby on Rails, AWS AppSync, PostgreSQL, and GraphQL.
          </p>
        </li>
        <li>
          <h6>
            <a href="https://www.linkedin.com/company/imprint-gift/">Imprint Partners Inc.</a>
          </h6>
          <small>October 2014 - October 2016 (2 years and 1 month)</small>
          <small>Occupation: Senior Front-End Engineer</small>
          <p>
            I worked remotely full-time for Imprint and had the opportunity to spend two months
            working in their office in Brooklyn, NYC. It was a wonderful experience to work for such
            a small startup, collaborating with every team member and seeing my work&#39;s massive
            impact on the product we were building.
          </p>
          <p>
            Aside from working on the desktop web app, I had the chance to onboard new team members,
            rebuild the product landing page in a responsive way to support mobile devices, and lead
            the development of the product&#39;s mobile web app from scratch.
          </p>
          <p>Some technologies used: JavaScript, Angular, CSS3, Ruby on Rails, and PostgreSQL.</p>
        </li>
        <li>
          <h6>
            <a href="https://www.linkedin.com/company/grafikonstruct/">Grafikonstruct</a>
          </h6>
          <small>April 2007 - December 2008 (1 year and 9 months)</small>
          <small>Occupation: Lead Flash Developer</small>
          <p>
            I learned a lot at Grafikonstruct by building highly interactive Adobe Flash
            ActionScript 3.0 apps. In addition, I led front-end teams and provided technical
            leadership and mentoring while working for world-class clients, including Nokia, Pepsi,
            and Del Valle.
          </p>
        </li>
        <li>
          <h6>
            <a href="https://www.linkedin.com/company/datamidiafcbi/">Datamidia, FCBi</a>
          </h6>
          <small>October 2006 - March 2007 (6 months)</small>
          <small>Occupation: Senior Flash Developer</small>
          <p>
            I developed cool projects using Adobe Flash with ActionScript 2.0, HTML, CSS, and
            JavaScript while working for world-class clients such as Motorola and Sky. When the
            agency&#39;s demand for web development was low, I decided to look for new challenges to
            keep improving myself.
          </p>
        </li>
        <li>
          <h6>
            <a href="http://www.ogilvy.com.br">Ogilvy Interactive Brasil</a>
          </h6>
          <small>June 2004 - September 2006 (2 years and 4 months)</small>
          <small>Occupation: Intern Web Developer, Junior Web Developer</small>
          <p>
            I started my career at Ogilvy Interactive in 2004, learning the foundations and best
            practices of web development from experienced software engineers, designers, and
            managers. Some of the technologies I learned include HTML, CSS, JavaScript, Adobe Flash
            with ActionScript 2.0, ASP, and MS SQL Server while working for world-class clients such
            as American Express, Motorola, and Unilever.
          </p>
        </li>
      </ul>
      <h5>Education</h5>
      <ul>
        <li>
          Bachelor&#39;s Degree in Technology and Digital Media (2004-2007)
          <small>
            <a href="http://www.pucsp.br/">Pontifical Catholic University of São Paulo (PUC-SP)</a>
          </small>
        </li>
      </ul>
      <h5>Languages</h5>
      <ul>
        <li>Portuguese: Native.</li>
        <li>English: Proficient.</li>
      </ul>
      <h5>Technical Reading</h5>
      <small>Some of the greatest technical books I&#39;ve read.</small>
      <ul className={technicalReading}>
        <li>
          <a href="http://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612/ref=sr_1_1?ie=UTF8&qid=1350367067&sr=8-1&keywords=Design+Patterns%3A+Elements+of+Reusable+Object-Oriented+Software">
            Design Patterns: Elements of Reusable Object-Oriented Software (by Erich Gamma, et. al.)
          </a>
        </li>
        <li>
          <a href="http://www.amazon.com/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215/ref=sr_1_1?s=books&ie=UTF8&qid=1350367369&sr=1-1&keywords=Domain-Driven+Design">
            Domain-Driven Design: Tackling Complexity in the Heart of Software (by Eric Evans)
          </a>
        </li>
        <li>
          <a href="http://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530/ref=sr_1_1?s=books&ie=UTF8&qid=1350367469&sr=1-1&keywords=Test+Driven+Development">
            Test Driven Development: By Example (by Kent Beck)
          </a>
        </li>
        <li>
          <a href="http://www.amazon.com/Software-Testing-2nd-Ron-Patton/dp/0672327988/ref=sr_1_1?s=books&ie=UTF8&qid=1350367510&sr=1-1&keywords=Software+Testing">
            Software Testing (by Ron Patton)
          </a>
        </li>
        <li>
          <a href="http://www.amazon.com/Agile-Project-Management-Microsoft-Professional/dp/073561993X/ref=sr_1_1?s=books&ie=UTF8&qid=1350368265&sr=1-1&keywords=Agile+Project+Management+with+Scrum">
            Agile Project Management with Scrum (by Ken Schwaber)
          </a>
        </li>
        <li>
          <a href="http://www.amazon.com/NoSQL-Distilled-Emerging-Polyglot-Persistence/dp/0321826620/ref=sr_1_1?ie=UTF8&qid=1380126326&sr=8-1&keywords=NoSQL+Distilled">
            NoSQL Distilled (by Pramod J. Sadalage and Martin Fowler)
          </a>
        </li>
        <li>
          <a href="http://www.amazon.com/Framework-Design-Guidelines-Conventions-Libraries/dp/0321545613/ref=sr_1_1?s=books&ie=UTF8&qid=1350367531&sr=1-1&keywords=Framework+Design+Guidelines%3A+Conventions%2C+Idioms%2C+and+Patterns+for+Reusable+.NET+Libraries%2C+Second+Edition+-+Addison-Wesley+Professional+-+Krzysztof+Cwalina%3B+Brad+Abrams">
            Framework Design Guidelines (Krzysztof Cwalina and Brad Abrams)
          </a>
        </li>
        <li>
          <a href="http://www.amazon.com/Responsive-Web-Design-Ethan-Marcotte/dp/B005SYWGXW/ref=sr_1_1?s=books&ie=UTF8&qid=1350367771&sr=1-1&keywords=Responsive+Web+Design">
            Responsive Web Design (by Ethan Marcotte)
          </a>
        </li>
      </ul>
    </div>
  </Layout>
);

export default ResumePage;

export const Head: HeadFC = () => (
  <SEO
    description="I'm a Brazilian Full-Stack Software Engineer with 19 years of professional industry experience. Check out my resume to learn more about me and my work."
    pagePath="/resume"
    title="Resume of Flavio Silva, a full-stack software engineer"
  />
);
