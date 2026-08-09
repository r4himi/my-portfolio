import { useEffect, useRef, useState } from "react";
import AnimatedSection from "../shared/AnimatedSection";
import { SKILLS } from "../data/portfolioData";
import styles from "./Skills.module.css";

function SkillBar({ name, level, category, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.skillItem} ${visible ? styles.skillVisible : ""}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className={styles.skillHeader}>
        <span className={styles.skillName}>{name}</span>
        <span className={styles.skillTag}>{category}</span>
        <span className={styles.skillLevel}>{level}%</span>
      </div>
      <div className={styles.skillTrack}>
        <div
          className={styles.skillFill}
          style={{ width: visible ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.inner}>
        <AnimatedSection>
          <p className={styles.label}>Expertise</p>
          <h2 className={styles.title}>My Skills</h2>
        </AnimatedSection>
        <div className={styles.grid}>
          {SKILLS.map((skill, i) => (
            <SkillBar key={skill.name} {...skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
