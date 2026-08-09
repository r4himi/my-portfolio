import { useEffect, useRef, useState } from "react";
import styles from "./AnimatedSection.module.css";

export default function AnimatedSection({ children, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.section} ${visible ? styles.visible : ""} ${className}`}
    >
      {children}
    </div>
  );
}
