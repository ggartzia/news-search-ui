import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";

export default styled(Avatar)(({ theme, ownerState }) => {
  const { palette, functions, typography, boxShadows } = theme;
  const { shadow, bgColor, size } = ownerState;

  const { gradients, transparent } = palette;
  const { pxToRem, linearGradient } = functions;
  const { size: fontSize, fontWeightBold } = typography;

  // backgroundImage value
  const backgroundValue =
    bgColor === "transparent"
      ? transparent.main
      : linearGradient(gradients[bgColor].main, gradients[bgColor].state);

  // size value
  let sizeValue;

  switch (size) {
    case "s":
      sizeValue = {
        width: pxToRem(36),
        height: pxToRem(36),
        fontSize: fontSize.sm,
      };
      break;
    case "m":
      sizeValue = {
        width: pxToRem(48),
        height: pxToRem(48),
        fontSize: fontSize.sm,
      };
      break;
    case "l":
      sizeValue = {
        width: pxToRem(110),
        height: pxToRem(110),
        fontSize: fontSize.md,
      };
      break;
    default: {
      sizeValue = {
        width: pxToRem(48),
        height: pxToRem(48),
        fontSize: fontSize.md,
      };
    }
  }

  return {
    background: backgroundValue,
    fontWeight: fontWeightBold,
    boxShadow: boxShadows[shadow],
    ...sizeValue,
  };
});
