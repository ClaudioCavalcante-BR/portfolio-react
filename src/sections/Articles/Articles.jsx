import SectionTitle from '../../components/SectionTitle/SectionTitle'
import Card from '../../components/Card/Card'
import styles from './Articles.module.css'
import { articles } from '../../data/articles'

export default function Articles() {
  return (
    <section id="articles" className="sectionSpacing">
      <div className="container">
        <SectionTitle title="Artigos & Estudos" />
        <div className={styles.grid}>
          {articles.map(a => (
            <Card key={a.title}>
              <div className={styles.item}>
                <div>
                  <h3 className={styles.title}>{a.title}</h3>
                  <p className={styles.meta}>Leia mais</p>
                </div>
                <a className={styles.link} href={a.url} target="_blank" rel="noreferrer">Abrir</a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
