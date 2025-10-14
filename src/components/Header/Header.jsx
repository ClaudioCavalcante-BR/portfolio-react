import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <a href="#" className={styles.brand}>claudio.dev</a>
          <div className={styles.links}>
            <a href="#projects">Projetos</a>
            <a href="#experience">Experiência</a>
            <a href="#articles">Artigos</a>
            <a href="#contact">Contato</a>
          </div>
        </nav>
      </div>
    </header>
  )
}
