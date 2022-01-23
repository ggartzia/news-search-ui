import { forwardRef } from "react";

// Custom styles for Avatar
import BaseAvatar from "./Base";

const Avatar = forwardRef(({ bgColor, size, shadow, ...rest }, ref) => (
  <BaseAvatar ref={ref} ownerState={{ shadow, bgColor, size }} {...rest} />
));


// Setting default values for the props of Avatar
Avatar.defaultProps = {
  bgColor: "transparent",
  size: "m",
  shadow: "none",
};

export default Avatar;
