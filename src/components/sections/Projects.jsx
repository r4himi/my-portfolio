import { useEffect, useRef, useState } from "react";
import AnimatedSection from "../shared/AnimatedSection";
import { PROJECTS } from "../data/portfolioData";
import styles from "./Projects.module.css";

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.card} ${visible ? styles.cardVisible : ""}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className={styles.cardIndex}>0{index + 1}</div>
      <h3 className={styles.cardTitle}>{project.title}</h3>
      <p className={styles.cardDesc}>{project.description}</p>
      <div className={styles.tags}>
        {project.tags.map((t) => (
          <span key={t} className={styles.tag}>{t}</span>
        ))}
      </div>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
        View Project <span className={styles.arrow}>→</span>
      </a>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.inner}>
        <AnimatedSection>
          <p className={styles.label}>Work</p>
          <h2 className={styles.title}>Projects</h2>
        </AnimatedSection>
        <div className={styles.grid}>
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
