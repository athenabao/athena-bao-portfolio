import Link from 'next/link';
import { Footer, Navigation, ProjectCard } from '../components/Shared';
import { projects } from '../data';

export const metadata = { title: 'Project Notes | Athena Bao' };

export default function ProjectNotes() {
  return <><Navigation /><main className="notes-page"><div className="section-inner">
    <Link className="text-link" href="/#work">← Back to selected work</Link>
    <header className="section-heading"><span className="section-label">Project notes</span><h1>A closer look at <em>the work.</em></h1></header>
    <div className="project-grid">{projects.map(project => <ProjectCard key={project.id} project={project} />)}</div>
    <p className="notes-todo">[TODO] Add detailed case studies with verified outcomes and project screenshots.</p>
    <Link className="text-link" href="/#contact">Get in touch →</Link>
  </div></main><Footer /></>;
}
