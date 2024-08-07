import styles from "../../styles/Icons.module.css";

interface YoutubeIconProps {
  playFill: string;
}

const YoutubeIcon = ({ playFill = "black" }: YoutubeIconProps) => (
  <svg
    className={styles.youtubeIcon}
    role="img"
    width="31"
    height="22"
    viewBox="0 0 31 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{`Ir a Youtube`}</title>
    <path d="M30.1215 3.70345C29.767 2.38593 28.7282 1.34741 27.411 0.992626C25.0042 0.333984 15.3773 0.333984 15.3773 0.333984C15.3773 0.333984 5.75062 0.333984 3.34389 0.96752C2.05195 1.32206 0.987845 2.38617 0.6333 3.70345C0 6.10995 0 11.1008 0 11.1008C0 11.1008 0 16.1168 0.6333 18.4981C0.98808 19.8154 2.02661 20.8542 3.34413 21.209C5.77596 21.8676 15.3775 21.8676 15.3775 21.8676C15.3775 21.8676 25.0042 21.8676 27.411 21.2341C28.7285 20.8795 29.767 19.8408 30.1218 18.5235C30.7551 16.1168 30.7551 11.1261 30.7551 11.1261C30.7551 11.1261 30.7804 6.10995 30.1215 3.70345Z" />
    <path
      d="M12.3125 15.7117L20.3178 11.101L12.3125 6.49023V15.7117Z"
      fill={playFill}
    />
  </svg>
);

export default YoutubeIcon;
