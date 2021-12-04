/**
=========================================================
* Soft UI Dashboard React - v3.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Soft UI Dashboard PRO React base styles
import colors from "../base/colors";

// Soft UI Dashboard PRO React helper functions
import pxToRem from "../functions/pxToRem";

const { dark, transparent, white } = colors;

export default {
  styleOverrides: {
    root: {
      backgroundColor: transparent.main,
      backgroundImage: `linear-gradient(to right, ${dark.main}, ${dark.main}, ${dark.main}) !important`,
      height: pxToRem(1),
      margin: `${pxToRem(16)} 0`,
      borderBottom: "none",
      opacity: 0.25,
    },

    vertical: {
      backgroundColor: transparent.main,
      backgroundImage: `linear-gradient(to bottom, ${dark.main}, ${dark.main}, ${dark.main}) !important`,
      width: pxToRem(1),
      height: "100%",
      margin: `0 ${pxToRem(16)}`,
      borderRight: "none",
    },

    light: {
      backgroundColor: transparent.main,
      backgroundImage: `linear-gradient(to right, ${white.main}, ${white.main}, ${white.main}) !important`,
      
      "&.MuiDivider-vertical": {
        backgroundImage: `linear-gradient(to bottom, ${white.main}, ${white.main}, ${white.main}) !important`,
      },
    },
  },
};
