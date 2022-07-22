import styles from "../styles/ProjectsContainer.module.css";
import { useState } from "react";
import SingleCard from "../components/SingleCard";
import DoubleCard from "../components/DoubleCard";
import Link from "next/link";

export default function ProjectsContainer({ projects, size }) {
  const filteredProjects = projects.filter((project) => !project.hidden);

  const [shown, setShown] = useState(filteredProjects);

  return (
    <main className={styles.container}>
      <section className={styles.projects}>
        <div className={styles.grid}>
          {shown.map((item, index) => {
            return (index == 0 && size.width > 800 && shown.length > 1) ||
              (index % 3 == 0 &&
                size.width > 800 &&
                index !== shown.length - 1) ? (
              <DoubleCard
                item={item}
                index={index}
                size={size}
                key={item.name}
              />
            ) : (
              <SingleCard
                item={item}
                index={index}
                size={size}
                key={item.name}
              />
            );
          })}
          <article className={styles.last}>
            <article>
              <h2>
                Tu marca puede
                <br />
                estar acá ;)
              </h2>
              <Link href="/contact">Trabajemos juntos!</Link>
            </article>
          </article>
        </div>
      </section>
    </main>
  );
}
