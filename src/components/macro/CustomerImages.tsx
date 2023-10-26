import { useEffect, useState } from "react";
import { Visual } from "../micro/Visual";
import { initialImages } from "../../data/initialImages";

export type CustomerImagesProps = {
  customer_id: string;
};

export const CustomerImages = (props: CustomerImagesProps) => {
  const { customer_id } = props;
  const [images, setImages] = useState<string[]>(initialImages.images);

  useEffect(() => {
    const timer = setInterval(() => {
      const IDs = Array.from({ length: 9 }, () =>
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
  }, [customer_id]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        {images
          .filter((item, index) => index < 3)
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        {images
          .filter((item, index) => index >= 3 && index < 6)
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        {images
          .filter((item, index) => index >= 6 && index < 9)
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
    </div>
  );
};
