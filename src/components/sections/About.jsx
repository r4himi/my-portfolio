import AnimatedSection from "../shared/AnimatedSection";
import { STATS } from "../data/portfolioData";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <AnimatedSection>
        <p className={styles.label}>About Me</p>
        <h2 className={styles.title}>Who I Am</h2>
        <div className={styles.grid}>
          <div className={styles.text}>
            <p>
              I'm a <strong>full-stack developer</strong> interested in building practical
              web applications that solve real-world problems. I work mainly with
              <strong>React, Django, Python, and JavaScript</strong>, and I enjoy turning
              ideas into simple and useful digital products.
            </p>
            <p>
              I’m continuously improving my development skills by building projects,
              learning new technologies, and solving problems through code. My goal is to
              grow as a software developer and eventually work on projects involving
              <strong> AI and machine learning</strong>.
            </p>

          </div>
          <div className={styles.stats}>
            {STATS.map((s, i) => (
              <div key={i} className={styles.statCard}>
                <div className={styles.statNum}>{s.num}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
