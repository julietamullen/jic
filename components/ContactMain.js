import styles from "../styles/ContactMain.module.css"
import Select from 'react-select'
import {useState} from "react"
import Form from "./Form"

export default function ContactMain () {

    return (
        <main className={styles.main}>
            <section>
                <article className={styles.area1}>
                    <h2>Conversemos!</h2>
                    <p className={styles.border}>Dejame saber quien sos y cómo puedo ayudarte.</p>
                    <p>Si no querés llenar el formulario, podes enviarme un mail o llamarme. </p>
                </article>
                <article className={styles.area2}>
                    <h3>Mis datos</h3>
                    <p>juan.ignacio.cali@gmail.com</p>
                    <p>+54 221 356-3090</p>
                    <h3>Seguime</h3>
                </article>
                <article className={styles.area3}>
                    <h2>Quién sos?</h2>
                    <p className={styles.border}>Dejame tus datos, así podemos estar en contacto.</p>
                </article>
                <article className={styles.area4}>
                    <Form />
                </article>
                <article className={styles.area5}>
                    <h2>Cuál es tu idea?</h2>
                    <p className={styles.border}>Hablemos sobre tu proyecto.</p>
                </article>
            </section>
        </main>
    )
}