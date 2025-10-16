import styles from './Hero.module.css'
import { profile } from '../../data/profile'
import Card from '../../components/Card/Card'
import avatar from '../../assets/claudio.png'; // ajuste o nome/extensão se for diferente


export default function Hero() {
  return (
    <section className="sectionSpacing">
      <div className="container">
        <Card className={styles.hero}>
          <div className={styles.avatar}>
              <img src={avatar} alt="Foto de Cláudio Cavalcante" />            
            </div> 
          <div className={styles.info}>
            <h1 className={styles.name}>{profile.name}</h1>
            <p className={styles.role}>{profile.role}</p>
            <p className={styles.summary}>{profile.summary}</p>
            <div className={styles.actions}>
              <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              {profile.resumeUrl && <a href={profile.resumeUrl} target="_blank" rel="noreferrer">Currículo</a>}
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
