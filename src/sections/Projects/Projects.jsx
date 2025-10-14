import SectionTitle from '../../components/SectionTitle/SectionTitle'
import Card from '../../components/Card/Card'
import styles from './Projects.module.css'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="sectionSpacing">
      <div className="container">
        <SectionTitle title="Projetos em destaque" subtitle="APIs Java/Spring e SPAs React" />
        <div className={styles.grid}>
          {projects.map(p => (
            <Card key={p.title}>
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.subtitle}>{p.subtitle}</p>
              <p className={styles.desc}>{p.description}</p>
              <div className={styles.stack}>
                {p.stack.map(s => <span key={s} className={styles.badge}>{s}</span>)}
              </div>
              <div className={styles.links}>
                {p.links.repo && <a href={p.links.repo} target="_blank" rel="noreferrer">Código</a>}
                {p.links.demo && <a href={p.links.demo} target="_blank" rel="noreferrer">Demo</a>}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
