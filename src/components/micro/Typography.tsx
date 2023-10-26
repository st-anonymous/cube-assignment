export type TypographyProps = {
  text: string;
  size?: "extra-small" | "small" | "medium" | "large" | "extra-large";
  textType?: "primary" | "secondary";
  textAlign?: "center" | "left" | "right";
  styleProps?: React.CSSProperties;
  onClick?: () => any;
};

export const Typography = (props: TypographyProps) => {
  const {
    text,
    size = "small",
    textAlign = "center",
    styleProps,
    onClick,
  } = props;

  let style: React.CSSProperties = {
    textAlign: textAlign,
    cursor: onClick && "pointer",
  };
  switch (size) {
    case "extra-large":
      style = { ...style, fontSize: 150 };
      break;
    case "large":
      style = { ...style, fontSize: 64 };
      break;
    case "medium":
      style = { ...style, fontSize: 48 };
      break;
    case "small":
      style = { ...style, fontSize: 36 };
      break;
    case "extra-small":
      style = { ...style, fontSize: 24 };
      break;
  }
  style = { ...style, ...styleProps };

  return (
    <>
      <div onClick={onClick} style={style}>
        {text}
      </div>
    </>
  );
};
