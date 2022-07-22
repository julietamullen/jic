import styles from "../styles/Featured.module.css";
import Link from "next/link";
import SingleCard from "../components/SingleCard";
import DoubleCard from "../components/DoubleCard";

export default function Featured({ projects, size }) {
  const raw = projects.filter((project) => project.featured == true);
  const featured = raw.slice(0, 3);

  return (
    <main className={styles.container} id="projects">
      <div className={styles.grid}>
        {featured.map((item, index) => {
          return index !== 0 ? (
            <SingleCard item={item} index={index} />
          ) : size.width > 700 ? (
            <DoubleCard item={item} index={index} />
          ) : (
            <SingleCard item={item} index={index} />
          );
        })}
      </div>
      <div className={styles.button}>
        <Link href="/projects">
          <a>Ver más proyectos</a>
        </Link>
      </div>
    </main>
  );
}
