
const SM = "@media (min-width: 576px)";
const MD = "@media (min-width: 768px)";
const LG = "@media (min-width: 992px)";
const XL = "@media (min-width: 1200px)";
const XXL = "@media (min-width: 1400px)";

const sharedClasses = {
  paddingRight: "1.5rem !important",
  paddingLeft: "1.5rem !important",
  marginRight: "auto !important",
  marginLeft: "auto !important",
  width: "100% !important",
  position: "relative",
};

export default {
  [SM]: {
    ".MuiContainer-root": {
      ...sharedClasses,
      maxWidth: "540px !important",
    },
  },
  [MD]: {
    ".MuiContainer-root": {
      ...sharedClasses,
      maxWidth: "720px !important",
    },
  },
  [LG]: {
    ".MuiContainer-root": {
      ...sharedClasses,
      maxWidth: "960px !important",
    },
  },
  [XL]: {
    ".MuiContainer-root": {
      ...sharedClasses,
      maxWidth: "1140px !important",
    },
  },
  [XXL]: {
    ".MuiContainer-root": {
      ...sharedClasses,
      maxWidth: "1320px !important",
    },
  },
};
