import { useEffect, useState } from "react";
import { Visual } from "../micro/Visual";
import { initialImages } from "../../data/initialImages";

export type CustomerImagesProps = {
  customer_id: string;
  numberOfColumns?: number;
  numberOfRows?: number;
};

export const CustomerImages = (props: CustomerImagesProps) => {
  const { customer_id, numberOfColumns = 3, numberOfRows = 3 } = props;
  const [images, setImages] = useState<string[]>(initialImages.images);

  useEffect(() => {
    const timer = setInterval(() => {
      const IDs = Array.from({ length: numberOfColumns * numberOfRows }, () =>
        Math.floor(Math.random() * 1000)
      );
      let currImage: string[] = [];
      IDs.map((id) => {
        return (currImage = [
          ...currImage,
          `https://picsum.photos/id/${id}/200/200`,
        ]);
      });
      setImages(currImage);
    }, 10000);
    return () => {
      setImages(initialImages.images);
      clearInterval(timer);
    };
  }, [customer_id, numberOfColumns, numberOfRows]);

  const getComponentsInRow = (rowNumber: number) => {
    return (
      <div style={styles.rowAligned} key={rowNumber}>
        {images
          .filter(
            (item, index) =>
              index >= numberOfColumns * (rowNumber - 1) &&
              index < numberOfColumns * rowNumber
          )
          .map((item: any) => {
            return (
              <Visual
                key={customer_id + Math.random()}
                src={item}
                alt={`customer_id ` + customer_id + `'s Image`}
                styleProps={{ margin: 24 }}
              />
            );
          })}
      </div>
    );
  };

  const getComponentsInColumn = (numOfRows: number) => {
    const rowNumbers = Array.from(
      { length: numOfRows },
      (_, index) => index + 1
    );
    return (
      <div style={styles.columnAligned}>
        {rowNumbers.map((rowNumber) => getComponentsInRow(rowNumber))}
      </div>
    );
  };

  return getComponentsInColumn(numberOfRows);
};

export const styles: { [key: string]: React.CSSProperties } = {
  rowAligned: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  columnAligned: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
};
