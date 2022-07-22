import styles from "../styles/Footer.module.css";
import { InstagramIcon, SpotifyIcon, YoutubeIcon } from "../components";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <section>
          <h2>Seguir</h2>
          <div className={styles.socialIconsContainer}>
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Ir a youtube"
              href="https://www.youtube.com/channel/UC2Xel3b_bb-RwcpZk0U4yuA"
            >
              <YoutubeIcon />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Ir a instagram"
              href="https://www.instagram.com/juanignaciocali/"
            >
              <InstagramIcon />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Ir a spotify"
              href="https://www.instagram.com/juanignaciocali/"
            >
              <SpotifyIcon />
            </a>
          </div>
        </section>
      </div>
    </footer>
  );
}
