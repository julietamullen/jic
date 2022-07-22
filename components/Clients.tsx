import styles from "../styles/Clients.module.css";
import Image from "next/image";
import { InView } from "react-intersection-observer";
import { useContext } from "react";
import ColorContext from "./context/ColorContext";

interface clientsProps {
  clients: [logo: imgData];
}

interface imgData {
  logos: {
    imgUrl: string;
    imgData: { dimensions: { width: string; height: string } };
  }[];
}

const Clients = ({ clients }: clientsProps) => {
  const { colorBlack } = useContext(ColorContext); // colorWhite y colorBlack son funciones que cambian el color en el context.

  return (
    <InView
      rootMargin="0px 0px -90%"
      as="section"
      onChange={(InView) => InView && colorBlack()}
      className={styles.clients}
    >
      <h2 className={styles.title}>Marcas que confiaron en mí</h2>
      <div className={styles.grid}>
        {clients[0].logos.map((logo, index) => {
          return (
            <div className={styles.logo}>
              <Image
              key={`marca-${index}`}
                src={logo.imgUrl}
                alt="cliente"
                layout="fixed"
                width={logo.imgData.dimensions.width}
                height={logo.imgData.dimensions.height}
              />
            </div>
          );
        })}
      </div>
    </InView>
  );
};

export default Clients;
