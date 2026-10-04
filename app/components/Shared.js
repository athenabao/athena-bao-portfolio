import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function Navigation() {
  return <nav aria-label="Main navigation">
    <Link className="logo" href="/">athena.bao<span aria-hidden="true">.</span></Link>
    <div className="nav-links">
      <Link href="/#about">About</Link><Link href="/#work">Work</Link>
      <Link href="/#experience">Experience</Link><Link href="/#places">Places</Link>
      <Link href="/#contact">Contact</Link>
    </div>
  </nav>;
}

export function SectionHeading({ number, label, children }) {
  return <div className="section-heading"><span className="section-label">{number} / {label}</span><h2>{children}</h2></div>;
}

export function ProjectCard({ project }) {
  return <article className="project" id={project.id}>
    <span className="project-category">{project.category}</span>
    <h3>{project.name}</h3><p>{project.description}</p>
    <ul className="tags" aria-label="Tech stack">{project.stack.map(tag => <li key={tag}>{tag}</li>)}</ul>
    <p className="challenge"><strong>Hard problem</strong>{project.challenge}</p>
    {project.github ? <a className="text-link" href={project.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={16} /></a>
      : <span className="todo">[TODO] Add repository link if public.</span>}
  </article>;
}

export function Contact() {
  return <section className="contact" id="contact">
    <div className="section-inner">
      <SectionHeading number="08" label="Contact">Let’s <em>talk.</em></SectionHeading>
      <p>I’m seeking new-grad Forward Deployed Engineering and software engineering roles starting early 2027. I’d be happy to talk about the work.</p>
      <a className="email" href="mailto:athenabao2005@gmail.com">athenabao2005@gmail.com <ArrowUpRight aria-hidden="true" size={24} /></a>
      <div className="socials">
        <a href="https://linkedin.com/in/athena-bao-419146246/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={16} /></a>
        <a href="https://github.com/athenabao" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={16} /></a>
      </div>
    </div>
  </section>;
}

export function Footer() {
  return <footer><span>© {new Date().getFullYear()} Athena Bao</span><a href="/#top">Back to top ↑</a></footer>;
}
