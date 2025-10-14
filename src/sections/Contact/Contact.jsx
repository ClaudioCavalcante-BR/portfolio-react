import SectionTitle from '../../components/SectionTitle/SectionTitle'
import Card from '../../components/Card/Card'
import styles from './Contact.module.css'
import { profile } from '../../data/profile'
import { skills } from '../../data/skills'

export default function Contact() {
  return (
    <section id="contact" className="sectionSpacing">
      <div className="container">
        <SectionTitle title="Contato" subtitle="Vamos colaborar?" />
        <Card>
          <p className={styles.text}>
            Me chame para colaborar em APIs Java/Spring, integrações FIPE/externas e SPAs React.
            Respondo rápido!
          </p>
          <div className={styles.actions}>
            <a href={`mailto:${profile.email}`}>Enviar email</a>
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
          <div className={styles.skills}>
            {skills.slice(0, 12).map(s => <span key={s} className={styles.badge}>{s}</span>)}
          </div>
        </Card>
      </div>
    </section>
  )
}
