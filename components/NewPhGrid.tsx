import styled from "@emotion/styled";
import Image from "next/image";
import { NewGridProps } from "../queries/sanityQueries";
import styles from "../styles/PhGrid.module.css";

type GridProps = {
  length: number;
};

const GridContainer = styled.section<GridProps>`
  position: relative;
  display: grid;
  grid-template-rows: repeat(
    ${(props) => props.length},
    ${(props) => (1 / props.length).toFixed(2)}fr
  );
  gap: 5px;
`;

const GridRow = styled.section<GridProps>`
  position: relative;
  display: grid;
  grid-template-columns: repeat(${(props) => props.length}, 1fr);
  gap: 5px;
`;

const GridColum = styled.div`
  position: relative;
  display: grid;
  width: 100%;
`;

const NewPhGrid = ({ grid }: NewGridProps) => {
  return (
    <section className={styles.container}>
      <GridContainer length={grid.rows.length}>
        {grid.rows.map((row, index) => (
          <GridRow length={row.columns.length} key={`row-${index}`}>
            {row.columns.map((column) => (
              <GridColum key={`column-${index}`}>
                <Image
                  src={column.url}
                  alt={column.alt ?? ""}
                  layout="responsive"
                  width={column.dimensions.width}
                  height={column.dimensions.height}
                />
              </GridColum>
            ))}
          </GridRow>
        ))}
      </GridContainer>
    </section>
  );
};

export default NewPhGrid;
