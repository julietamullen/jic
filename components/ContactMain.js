import styles from "../styles/ContactMain.module.css";
import Form from "./Form";
import { useState } from "react";

export default function ContactMain({ size }) {
  const [sent, setSent] = useState(false);

  return (
    <main className={styles.main}>
      <section
        style={
          sent && size && size.width < 700
            ? {
                height: "100vh",
                overflow: "hidden",
                position: "fixed",
                top: "0",
                zIndex: "3",
              }
            : null
        }
      >
        <article className={styles.area1}>
          <h2>Conversemos!</h2>
          <p className={styles.border}>
            Dejame saber quien sos y<br />
            cómo puedo ayudarte.
          </p>
          <p>
            Si no querés llenar el
            <br />
            formulario, podes
            <br />
            enviarme un mail.
          </p>
        </article>
        <article className={styles.area2}>
          <h3>Mis datos</h3>
          <p>juan.ignacio.cali@gmail.com</p>
          <article className={styles.links}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/juanignaciocali/"
            >
              <img
                src="/img/instagram.svg"
                alt="Ir a Instagram"
                className={styles.icon}
              />
            </a>
          </article>
        </article>
        <article className={styles.area3}>
          <h2>
            Llená
            <br />
            el formulario
          </h2>
          <p className={styles.border}>
            Dejame tus datos, así
            <br />
            podemos estar en contacto.
          </p>
        </article>
        <article className={styles.area4}>
          <Form sent={sent} setSent={setSent} size={size} />
        </article>
        <article className={styles.area5}>
          <h2>
            Cuál es
            <br />
            tu idea?
          </h2>
          <p className={styles.border}>
            Hablemos sobre
            <br />
            tu proyecto.
          </p>
        </article>
      </section>
    </main>
  );
}
