import { forwardRef } from "react";

// Custom styles for Typography
import TypographyBase from "./Base";

const Typography = forwardRef(
  (
    { color, fontWeight, textTransform, verticalAlign, textGradient, opacity, children, ...rest },
    ref
  ) => (
    <TypographyBase
      {...rest}
      ref={ref}
      ownerState={{ color, textTransform, verticalAlign, fontWeight, opacity, textGradient }}
    >
      {children}
    </TypographyBase>
  )
);

Typography.defaultProps = {
  color: "dark",
  fontWeight: false,
  textTransform: "none",
  verticalAlign: "unset",
  textGradient: false,
  opacity: 1,
};

export default Typography;
