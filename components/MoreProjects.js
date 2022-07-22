import styles from "../styles/ProjectPage.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SingleCard from "./SingleCard";

export default function MoreProjects({ moreProjects, size }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className={styles.moreProjectsContainer}>
      <h2>Otros Proyectos</h2>
      <section className={styles.moreProjects}>
        {moreProjects &&
          moreProjects.map((item, index) => {
            return (
              <SingleCard
                item={item}
                index={index}
                size={size}
                mp={true}
                key={item}
              />
            );
          })}
      </section>
    </section>
  );
}
