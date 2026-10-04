import Link from 'next/link';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { experience, gallery, projects } from './data';
import { Contact, Footer, Navigation, ProjectCard, SectionHeading } from './components/Shared';
import Places from './components/Places';
import PhotoQuiz from './components/PhotoQuiz';

const toolbox = [
  { title: 'Languages', items: ['Java', 'Python', 'C', 'JavaScript', 'TypeScript', 'HTML', 'CSS'] },
  { title: 'Frameworks & libraries', items: ['React', 'React Native', 'Express.js', 'D3.js', 'Vega-Lite'] },
  { title: 'Tools & platforms', items: ['Git', 'GitHub', 'Azure', 'AWS (DynamoDB)', 'Vercel', 'Jira', 'IntelliJ', 'VS Code'] },
];

export default function Home() {
  return <>
    <Navigation />
    <main id="top">
      <header className="hero">
        <img className="hero-image" src="/Athena%20Headshot.jpg" alt="Athena Bao" fetchPriority="high" />
        <div className="hero-content">
          <span className="eyebrow">UW Computer Science · Class of 2026</span>
          <h1>Athena <em>Bao.</em></h1>
          <p>I’m a software engineer and UW senior. I work on software, cloud integrations, and tools that help people use their data.</p>
          <a className="button" href="#work">Selected work <ArrowDown size={18} /></a>
        </div>
        <a className="hero-next" href="#about">A little about me <ArrowDown size={18} /></a>
      </header>

      <section id="about"><div className="section-inner">
        <SectionHeading number="01" label="About">A little <em>about me.</em></SectionHeading>
        <div className="about-layout">
          <div className="about-copy">
            <p>I’m a senior at the University of Washington’s Paul G. Allen School, earning a B.S. in Computer Science with a Business minor. I graduate in December 2026.</p>
            <p>I like working through how a system fits into someone’s day, from the API behind it to the details that make it easier to use. My recent engineering work includes Microsoft 365 integrations at Nintendo, cloud migration and SSO at Stanley, and financial analytics work with Apexys.</p>
            <p>Outside of school and work, I enjoy running, traveling, and staying involved in tech community spaces at UW.</p>
          </div>
          <dl className="facts"><div><dt>Graduation</dt><dd>December 2026</dd></div><div><dt>Degree</dt><dd>B.S. Computer Science</dd></div><div><dt>Minor</dt><dd>Business</dd></div><div><dt>Focus</dt><dd>Software engineering · Cloud systems · Data tools</dd></div></dl>
        </div>
      </div></section>

      <section id="work" className="work-section"><div className="section-inner">
        <SectionHeading number="02" label="Selected work">What I’ve <em>worked on.</em></SectionHeading>
        <div className="project-grid">{projects.map(project => <ProjectCard key={project.id} project={project} />)}</div>
        <Link className="text-link case-link" href="/case-studies">Project notes <ArrowUpRight size={18} /></Link>
      </div></section>

      <section id="experience"><div className="section-inner">
        <SectionHeading number="03" label="Experience">Where I’ve <em>worked.</em></SectionHeading>
        <div className="timeline">{experience.map(job => <article className="experience-row" key={job.org}>
          <span className="dates">{job.dates}</span><div><h3>{job.role}</h3><p className="organization">{job.org}</p><p>{job.description}</p></div>
        </article>)}</div>
      </div></section>

      <section id="gallery" className="gallery-section"><div className="section-inner">
        <SectionHeading number="04" label="Gallery">Outside <em>of work.</em></SectionHeading>
        <div className="gallery-grid">{gallery.map(photo => <figure key={photo.id}>
          <div className="gallery-image"><img src={photo.photo} alt={photo.alt} loading="lazy" /></div>
          <figcaption><span className="project-category">{photo.category}</span><h3>{photo.name}</h3><p>{photo.caption}</p></figcaption>
        </figure>)}</div>
      </div></section>

      <section id="places"><div className="section-inner">
        <SectionHeading number="05" label="Places">A few <em>places.</em></SectionHeading>
        <Places />
      </div></section>

      <section id="quiz" className="quiz-section"><div className="section-inner">
        <SectionHeading number="06" label="Photo quiz">Guess the <em>destination.</em></SectionHeading>
        <PhotoQuiz />
      </div></section>

      <section id="toolbox" className="toolbox-section"><div className="section-inner">
        <SectionHeading number="07" label="Toolbox">My <em>toolbox.</em></SectionHeading>
        <div className="toolbox-grid">{toolbox.map(group => <div key={group.title}><h3>{group.title}</h3><ul className="tags">{group.items.map(item => <li key={item}>{item}</li>)}</ul></div>)}</div>
      </div></section>
      <Contact />
    </main>
    <Footer />
  </>;
}
