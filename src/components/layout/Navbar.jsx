import { useEffect, useState } from "react";
import { NAV_LINKS } from "../data/portfolioData";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
  const onScroll = () => {
    requestAnimationFrame(() => {
      setScrolled(window.scrollY > 40);
    });
  };

  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
}, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo} onClick={() => scrollTo("Home")}>
        &lt;<span>Samiullah Rahimi</span>/&gt;
      </div>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <button
              className={active === link ? styles.activeLink : ""}
              onClick={() => scrollTo(link)}
            >
              {link}
            </button>
          </li>
        ))}
      </ul>

      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
