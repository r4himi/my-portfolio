import TypewriterText from "../shared/TypewriterText";
import styles from "./Hero.module.css";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className={styles.hero}>
      <div>
        <p className={styles.pre}>Hello, World</p>
        <h1 className={styles.name}>Samiullah Rahimi</h1>
        <div className={styles.role}>
          <TypewriterText text="Frontend Developer & UI Engineer" delay={900} />
        </div>
        <p className={styles.desc}>
          I build fast, accessible, and visually sharp web experiences.
          Focused on clean code, thoughtful design, and smooth interactions.
        </p>
        <div className={styles.ctas}>
          <button className={styles.btnPrimary} onClick={() => scrollTo("projects")}>
            View Projects
          </button>
          <button className={styles.btnOutline} onClick={() => scrollTo("contact")}>
            Get In Touch
          </button>
        </div>
      </div>
      <div className={styles.scrollHint}>Scroll down</div>
    </section>
  );
}
