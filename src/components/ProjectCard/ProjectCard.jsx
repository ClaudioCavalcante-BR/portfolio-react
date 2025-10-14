import Card from "../Card/Card";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }) {
  const { title, subtitle, description, stack = [], links = {} } = project;

  return (
    <Card>
      <h3 className={styles.title}>{title}</h3>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

      {description && <p className={styles.desc}>{description}</p>}

      {!!stack.length && (
        <div className={styles.stack}>
          {stack.map((s) => (
            <span key={s} className={styles.badge}>{s}</span>
          ))}
        </div>
      )}

      <div className={styles.links}>
        {links.repo && (
          <a href={links.repo} target="_blank" rel="noreferrer">Código</a>
        )}
        {links.demo && (
          <a href={links.demo} target="_blank" rel="noreferrer">Demo</a>
        )}
      </div>
    </Card>
  );
}
