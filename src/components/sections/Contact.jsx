import emailjs from "@emailjs/browser";
import { useState } from "react";
import AnimatedSection from "../shared/AnimatedSection";
import styles from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faFacebook, faInstagram, faThreads, faLinkedinIn, } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
    const [status, setStatus] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("sending");

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                e.target,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                setStatus("sent");
                e.target.reset();
            })
            .catch((error) => {
                console.error("EmailJS Error:", error);
                setStatus("error");
            });
    };

    return (
        <AnimatedSection>
            <section id="contact" className={styles.contact}>
                <div className={styles.inner}>

                    <div className={styles.label}>
                        Contact
                    </div>

                    <h2 className={styles.title}>
                        Get In Touch
                    </h2>

                    <p className={styles.desc}>
                        Have a project in mind or just want to say hi? My
                        inbox is always open. I'll get back to you as soon
                        as possible.
                    </p>

                    <div className={styles.socialMedia}> 
                        <a href="https://facebook.com/samiullah.rahimi.1848" target="_blank" rel="noopener noreferrer" aria-label="Facebook" > 
                        <FontAwesomeIcon icon={faFacebook} /> </a> 
                        <a href="https://instagram.com/iam_s4mii" target="_blank" rel="noopener noreferrer" aria-label="Instagram" > 
                        <FontAwesomeIcon icon={faInstagram} /> </a> 
                        <a href="https://threads.net/iam_s4mii" target="_blank" rel="noopener noreferrer" aria-label="Threads" >
                        <FontAwesomeIcon icon={faThreads} /> </a>
                        <a href="https://linkedin.com/in/samiullah-rahimi-b7ab26404/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" > 
                        <FontAwesomeIcon icon={faLinkedinIn} /> </a> 
                    </div>

                    <form
                        className={styles.form}
                        onSubmit={handleSubmit}
                    >
                        <div className={styles.formGroup}>
                            <label
                                htmlFor="name"
                                className={styles.formLabel}
                            >
                                Name
                            </label>

                            <input
                                type="text"
                                id="name"
                                name="name"
                                className={styles.formInput}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label
                                htmlFor="email"
                                className={styles.formLabel}
                            >
                                Email
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                className={styles.formInput}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label
                                htmlFor="message"
                                className={styles.formLabel}
                            >
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                className={styles.formTextarea}
                                rows="6"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className={styles.btnPrimary}
                            disabled={status === "sending"}
                        >
                            {status === "sending"
                                ? "Sending..."
                                : "Send Message"}
                        </button>

                        {status === "sent" && (
                            <p>
                                Message sent! I'll get back to you soon.
                            </p>
                        )}

                        {status === "error" && (
                            <p>
                                Something went wrong. Try again or email me
                                directly.
                            </p>
                        )}
                    </form>
                </div>
            </section>
        </AnimatedSection>
    );
}

