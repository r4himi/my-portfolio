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
              I'm a <strong>frontend developer</strong> passionate about creating
              digital products that are both functional and beautiful. Currently
              building with <strong>React + Vite</strong> and always learning
              what's next.
            </p>
            <p>
              I care deeply about <strong>user experience</strong>, performance,
              and writing code that lasts. When I'm not coding, I'm probably
              sketching UI ideas or exploring new tech.
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
