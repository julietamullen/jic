import styles from "../styles/Videos.module.css";

export default function Videos({ videos }) {
  return (
    <main className={styles.wrapper}>
      <section>
        {videos &&
          videos.map((item) => {
            return (
              <article key={item}>
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${item}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </article>
            );
          })}
      </section>
      <a
        href="https://www.youtube.com/channel/UC2Xel3b_bb-RwcpZk0U4yuA"
        target="_blank"
        rel="noreferrer"
      >
        Visitá mi canal
      </a>
    </main>
  );
}
