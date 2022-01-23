import { forwardRef } from "react";

// Custom styles for SuiBox
import Base from "./Base";

const Box = forwardRef(
  ({ variant, bgColor, color, opacity, borderRadius, shadow, ...rest }, ref) => (
    <Base
      {...rest}
      ref={ref}
      ownerState={{ variant, bgColor, color, opacity, borderRadius, shadow }}
    />
  )
);

// Setting default values for the props of SuiBox
Box.defaultProps = {
  variant: "contained",
  bgColor: "transparent",
  color: "dark",
  opacity: 1,
  borderRadius: "none",
  shadow: "none",
};

export default Box;
