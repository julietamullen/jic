import Link from "next/link";
import styles from "../styles/SingleCard.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function SingleCard({ item, index, size, mp }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Link href={`/projects/${item?.slug?.current}`} key={item}>
      <article
        className={mp ? styles.mpCard : styles.card}
        data-aos={
          mp
            ? index == 0
              ? "fade-right"
              : "fade-left"
            : size && size.width > 700
            ? index - 1 == 0 || (index - 1) % 3 == 0
              ? "fade-right"
              : "fade-left"
            : index == 0
            ? "null"
            : index % 2 == 0
            ? "fade-left"
            : "fade-right"
        }
      >
        <div className={styles.img}>
          <img
            src={item.imageUrl}
            alt={item.name}
            className={styles.imgBorder}
          />
        </div>
        <div className={styles.content}>
          <section className={styles.info}>
            <h2>{item.name != null && item.name}</h2>
            <h3>{item.categories != null && item.categories.join(", ")}</h3>
          </section>
        </div>
      </article>
    </Link>
  );
}
