import Image from "next/image";
import styles from "../styles/Banner.module.css";
import { useWindowSize } from "../hooks/useWindowSize";

export default function Banner({ img }) {
  const size = useWindowSize();

  return (
    <article className={styles.banner}>
      <Image
        src={img}
        alt="Imagen de separador"
        layout="fill"
        objectFit="cover"
        objectPosition={size.width > 700 ? "center" : "bottom"}
        quality={100}
        priority={true}
      />
    </article>
  );
}
