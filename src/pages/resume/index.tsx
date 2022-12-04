import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Layout } from '../../layouts/Layout'
import { SEO } from '../../components/SEO'
import { experience, header, resumePage } from './index.module.css'

const ResumePage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <header className={header}>
        <h1>Flavio Silva</h1>
        <h3>Full-Stack Software Engineer</h3>
      </header>
      <div className={resumePage}>
        <small>A summary of my skill set.</small>
        <h4>Software Engineering Skills</h4>
        <ul>
          <li>
            <a href="http://en.wikipedia.org/wiki/JavaScript/" target="_blank">JavaScript</a>, <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>, <a href="https://www.ruby-lang.org/en/" target="_blank">Ruby</a>, <a href="https://www.python.org/" target="_blank">Python</a>, <a href="http://en.wikipedia.org/wiki/HTML5" target="_blank">HTML5</a>, <a href="http://www.w3.org/TR/2001/WD-css3-roadmap-20010523/" target="_blank">CSS3</a>.
          </li>
          <li>
            <a href="https://martinfowler.com/architecture/" target="_blank">Software Architecture</a>, <a href="http://flsilva.com/blog/what-is-software-testing/" target="_blank">Software Testing</a>, <a href="https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612/" target="_blank">Design Patterns</a>.
          </li>
          <li>
            <a href="http://en.wikipedia.org/wiki/Agile_software_development" target="_blank">Agile</a>, <a href="https://martinfowler.com/books/refactoring.html" target="_blank">Refactoring</a>, <a href="https://www.amazon.com/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215/" target="_blank">Domain-Driven Design</a>, <a href="https://en.wikipedia.org/wiki/Continuous_integration" target="_blank">CI</a> / <a href="https://en.wikipedia.org/wiki/Continuous_delivery" target="_blank">CD</a>.
          </li>
        </ul>
        <h4>Front-End Skills</h4>
        <ul>
          <li>
            <a href="https://facebook.github.io/react/" target="_blank">React</a>, <a href="https://facebook.github.io/react-native/" target="_blank">React Native</a>, <a href="https://nextjs.org/" target="_blank">Next.js</a>, <a href="https://remix.run/" target="_blank">Remix</a>.
          </li>
          <li>
            <a href="https://www.nngroup.com/articles/design-systems-101/" target="_blank">Design system</a>, <a href="https://material.io/" target="_blank">Material Design</a>.
          </li>
          <li>
          <a href="https://www.componentdriven.org/" target="_blank">Component Driven UIs</a>, <a href="http://en.wikipedia.org/wiki/Responsive_web_design" target="_blank">Responsive Web Design</a>.
          </li>
        </ul>
        <h4>Back-End Skills</h4>
        <ul>
          <li>
            <a href="http://nodejs.org/" target="_blank">Node.js</a>, <a href="http://rubyonrails.org/" target="_blank">Ruby on Rails</a>, <a href="https://graphql.org" target="_blank">GraphQL</a>, <a href="http://en.wikipedia.org/wiki/Representational_state_transfer" target="_blank">REST</a>.
          </li>
          <li>
          <a href="https://martinfowler.com/articles/serverless.html" target="_blank">Serverless Architectures</a>, <a href="https://aws.amazon.com/lambda/" target="_blank">AWS Lambda</a>, <a href="https://aws.amazon.com/appsync/" target="_blank">AWS AppSync</a>.
          </li>
          <li>
            <a href="http://en.wikipedia.org/wiki/SQL" target="_blank">SQL</a>, <a href="http://flsilva.com/blog/introduction-to-nosql/" target="_blank">NoSQL</a>, <a href="http://www.postgresql.org/" target="_blank">PostgreSQL</a>, <a href="https://redis.io/" target="_blank">Redis</a>, <a href="https://aws.amazon.com/dynamodb/" target="_blank">DynamoDB</a>.
          </li>
        </ul>
        <h4>Soft Skills</h4>
        <ul>
          <li>Excellent verbal and written English communication skills with tech and non-tech people.</li>
          <li>Critical thinking, proactivity, and problem-solving mindset.</li>
          <li>Teamwork and leadership.</li>
          <li>Project and time management.</li>
        </ul>
        <h4>Experience</h4>
        <ul className={experience}>
          <li>
            <h6><a href="http://flsilva.com">Self-Employed</a></h6>
            <small>since January 2009</small>
            <small>Occupation: Full-Stack Software Engineer</small>
            <p>
              I've been working remotely from home since 2009, and since 2013 exclusively for overseas companies and startups, mainly in the U.S.
            </p>
            <p>
              I help companies and startups to build high-quality products and MVPs, implementing industry best practices and appropriate technologies, including TypeScript, React, React Native, Jest, AWS AppSync, Node.js, Ruby on Rails, PostgreSQL, and GraphQL.
            </p>
          </li>
          <li>
            <h6><a href="https://www.linkedin.com/company/imprint-gift/" target="_blank">Imprint Partners Inc.</a></h6>
            <small>October 2014 - October 2016 (2 years and 1 month)</small>
            <small>Occupation: Senior Front-End Engineer</small>
            <p>
              I worked remotely full-time for Imprint and had the opportunity to spend two months working in their office in Brooklyn, NYC. It was a wonderful experience to work for such a small startup, collaborating with every team member and seeing my work's massive impact on the product we were building.
            </p>
            <p>
              Aside from working on the desktop web app, I had the chance to onboard new team members, rebuild the product landing page in a responsive way to support mobile devices, and lead the development of the product's mobile web app from scratch.
            </p>
            <p>
              Some technologies used: JavaScript, Angular, CSS3, Ruby on Rails, PostgreSQL, and GitHub.
            </p>
          </li>
          <li>
            <h6><a href="https://www.linkedin.com/company/grafikonstruct/" target="_blank">Grafikonstruct</a></h6>
            <small>April 2007 – December 2008 (1 year and 9 months)</small>
            <small>Occupation: Lead Flash Developer</small>
            <p>I learned a lot at Grafikonstruct by building highly interactive Adobe Flash ActionScript 3.0 apps. In addition, I led front-end teams and provided technical leadership and mentoring while working for world-class clients, including Nokia, Pepsi, and Del Valle.</p>
          </li>
          <li>
            <h6><a href="https://www.linkedin.com/company/datamidiafcbi/" target="_blank">Datamidia, FCBi</a></h6>
            <small>October 2006 – March 2007 (6 months)</small>
            <small>Occupation: Senior Flash Developer</small>
            <p>I developed cool projects using Adobe Flash with ActionScript 2.0, HTML, CSS, and JavaScript while working for world-class clients such as Motorola and Sky. When the agency's demand for web development was low, I decided to look for new challenges to keep improving myself.</p>
          </li>
          <li>
            <h6><a href="http://www.ogilvy.com.br" target="_blank">Ogilvy Interactive Brasil</a></h6>
            <small>June 2004 – September 2006 (2 years and 4 months)</small>
            <small>Occupation: Intern Web Developer, Junior Web Developer</small>
            <p>I started my career at Ogilvy Interactive in 2004, learning the foundations and best practices of web development from experienced software engineers, designers, and managers. Some of the technologies I learned include HTML, CSS, JavaScript, Adobe Flash with ActionScript 2.0, ASP, and MS SQL Server while working for world-class clients such as American Express, Motorola, and Unilever.</p>
          </li>
        </ul>
        <h4>Education</h4>
        <ul>
          <li>
              Bachelor's Degree in Technology and Digital Media (2004-2007)
              <small><a href="http://www.pucsp.br/" target="_blank">Pontifical Catholic University of São Paulo (PUC-SP)</a></small>
          </li>
        </ul>
        <h4>Languages</h4>
        <ul>
          <li>Portuguse: Native</li>
          <li>English: Proficient</li>
        </ul>
        <h4>Technical Reading</h4>
        <small>Some of the greatest technical books I've read.</small>
        <ul>
          <li>
            <a href="http://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612/ref=sr_1_1?ie=UTF8&qid=1350367067&sr=8-1&keywords=Design+Patterns%3A+Elements+of+Reusable+Object-Oriented+Software" target="_blank">Design Patterns: Elements of Reusable Object-Oriented Software (by Erich Gamma, et. al.)</a>
          </li>
          <li>
            <a href="http://www.amazon.com/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215/ref=sr_1_1?s=books&ie=UTF8&qid=1350367369&sr=1-1&keywords=Domain-Driven+Design" target="_blank">Domain-Driven Design: Tackling Complexity in the Heart of Software (by Eric Evans)</a>
          </li>
          <li>
            <a href="http://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530/ref=sr_1_1?s=books&ie=UTF8&qid=1350367469&sr=1-1&keywords=Test+Driven+Development" target="_blank">Test Driven Development: By Example (by Kent Beck)</a>
          </li>
          <li>
            <a href="http://www.amazon.com/Software-Testing-2nd-Ron-Patton/dp/0672327988/ref=sr_1_1?s=books&ie=UTF8&qid=1350367510&sr=1-1&keywords=Software+Testing" target="_blank">Software Testing (by Ron Patton)</a>
          </li>
          <li>
            <a href="http://www.amazon.com/Agile-Project-Management-Microsoft-Professional/dp/073561993X/ref=sr_1_1?s=books&ie=UTF8&qid=1350368265&sr=1-1&keywords=Agile+Project+Management+with+Scrum" target="_blank">Agile Project Management with Scrum (by Ken Schwaber)</a>
          </li>
          <li>
            <a href="http://www.amazon.com/NoSQL-Distilled-Emerging-Polyglot-Persistence/dp/0321826620/ref=sr_1_1?ie=UTF8&qid=1380126326&sr=8-1&keywords=NoSQL+Distilled" target="_blank">NoSQL Distilled (by Pramod J. Sadalage and Martin Fowler)</a>
          </li>
          <li>
            <a href="http://www.amazon.com/Framework-Design-Guidelines-Conventions-Libraries/dp/0321545613/ref=sr_1_1?s=books&ie=UTF8&qid=1350367531&sr=1-1&keywords=Framework+Design+Guidelines%3A+Conventions%2C+Idioms%2C+and+Patterns+for+Reusable+.NET+Libraries%2C+Second+Edition+-+Addison-Wesley+Professional+-+Krzysztof+Cwalina%3B+Brad+Abrams" target="_blank">Framework Design Guidelines (Krzysztof Cwalina and Brad Abrams)</a>
          </li>
          <li>
            <a href="http://www.amazon.com/Responsive-Web-Design-Ethan-Marcotte/dp/B005SYWGXW/ref=sr_1_1?s=books&ie=UTF8&qid=1350367771&sr=1-1&keywords=Responsive+Web+Design" target="_blank">Responsive Web Design (by Ethan Marcotte)</a>
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default ResumePage

export const Head: HeadFC = () => <SEO title="Home" />
