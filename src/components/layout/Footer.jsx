import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      &copy; {new Date().getFullYear()} <span className={styles.accent}>Samiullah Rahimi</span>
    </footer>
  );
}
