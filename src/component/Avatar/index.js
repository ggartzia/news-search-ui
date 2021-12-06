import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Custom styles for Avatar
import BaseAvatar from "./Base";

const Avatar = forwardRef(({ bgColor, size, shadow, ...rest }, ref) => (
  <BaseAvatar ref={ref} ownerState={{ shadow, bgColor, size }} {...rest} />
));

// Setting default values for the props of Avatar
Avatar.defaultProps = {
  bgColor: "transparent",
  size: "md",
  shadow: "none",
};

// Typechecking props for the Avatar
Avatar.propTypes = {
  bgColor: PropTypes.oneOf([
    "transparent",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "xxl"]),
  shadow: PropTypes.oneOf(["none", "xs", "sm", "md", "lg", "xl", "xxl", "inset"]),
};

export default Avatar;
