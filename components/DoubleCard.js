import Link from "next/link";
import styles from "../styles/DoubleCard.module.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SingleCard({ item, index, size }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Link href={`/projects/${item?.slug?.current}`} key={item._id}>
      <article
        data-aos={
          index == 0 ? "fade-down" : index % 2 == 0 ? "fade-left" : "fade-right"
        }
        className={styles.card}
      >
        <div className={styles.content}>
          <section className={styles.info}>
            <h2>{item.name != null && item.name}</h2>
            <h3>{item.categories != null && item.categories.join(", ")}</h3>
          </section>
          <a href={`/projects/${item?.slug?.current}`}>
            <p>Ver el proyecto</p>
            <img
              src="/img/arrow.svg"
              alt="Ver el proyecto"
              className={styles.arrow}
            />
          </a>
        </div>
        <div className={styles.img}>
          <img
            src={item.imageUrl}
            alt={item.name}
            className={styles.imgBorder}
          />
        </div>
      </article>
    </Link>
  );
}
