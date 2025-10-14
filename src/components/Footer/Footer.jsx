import styles from './Footer.module.css'
import { profile } from '../../data/profile'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.row}>
          <p>© {new Date().getFullYear()} {profile.name}. Construído com React + Vite.</p>
          <div className={styles.links}>
            <a href={`mailto:${profile.email}`}>Email</a>
            <a href={profile.github} target="_blank">GitHub</a>
            <a href={profile.linkedin} target="_blank">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
