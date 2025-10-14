import SectionTitle from '../../components/SectionTitle/SectionTitle'
import Card from '../../components/Card/Card'
import styles from './Experience.module.css'
import { experience } from '../../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="sectionSpacing">
      <div className="container">
        <SectionTitle title="Experiência" />
        <div className={styles.col}>
          {experience.map(e => (
            <Card key={e.company}>
              <div className={styles.row}>
                <div>
                  <h3 className={styles.role}>{e.role}</h3>
                  <p className={styles.company}>{e.company}</p>
                </div>
                <span className={styles.period}>{e.period}</span>
              </div>
              <ul className={styles.list}>
                {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
