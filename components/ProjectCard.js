import styles from "../styles/ProjectCard.module.css"
import Image from 'next/image'
import Link from "next/link"

export default function ProjectCard ({item, shown}) {

    const length = shown.length - 1

    return (
            <article className={shown.indexOf(item) == 0 ? styles.double :
                            shown.indexOf(item) % 3 != 0 ? styles.single :
                            shown.indexOf(item) == length ? styles.single : styles.double}>
            <div className={styles.content}>
                <section className={styles.info}>
                    <h2>{item.name}</h2>
                    <h3>{item.categories.join(", ")}</h3>
                    {shown.indexOf(item) == 0 ? 
                    <p>Ver el proyecto <img src="/arrow.png" alt="Ver el proyecto" className={styles.arrow}/></p>
                    : shown.indexOf(item) % 3 != 0 ? null
                    : shown.indexOf(item) == length ? null : <p>Ver el proyecto <img src="/arrow.png" alt="Ver el proyecto" className={styles.arrow}/></p>
                    }
                </section>
            </div>
            <div className={styles.img}>
            <Image
                src={item.imageUrl}
                alt={item.name}
                layout="fill"
                objectFit="cover"
                quality={100}
                className={styles.imgBorder}
                />
            </div>
        </article>
    )
}