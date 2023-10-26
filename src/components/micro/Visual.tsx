export type VisualProps = {
  src: string;
  alt: string;
  styleProps?: React.CSSProperties;
};
export const Visual = (props: VisualProps) => {
  const { src, alt, styleProps } = props;
  return (
    <div
      style={{
        display: "flex",
        ...styleProps,
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: 200,
          height: 200,
          borderRadius: 15,
        }}
      />
    </div>
  );
};
