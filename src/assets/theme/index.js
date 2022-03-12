/**
=========================================================
* Soft UI Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import { createTheme } from "@mui/material/styles";

// Soft UI Dashboard PRO React base styles
import colors from "./base/colors";
import typography from "./base/typography";
import boxShadows from "./base/boxShadows";
import borders from "./base/borders";
import globals from "./base/globals";

// Soft UI Dashboard PRO React helper functions
import boxShadow from "./functions/boxShadow";
import linearGradient from "./functions/linearGradient";
import pxToRem from "./functions/pxToRem";

// Soft UI Dashboard PRO React components base styles for @mui material components
import sidenav from "./components/sidenav";
import card from "./components/card";
import button from "./components/button";
import divider from "./components/divider";
import tableContainer from "./components/table";
import appBar from "./components/appBar";
import tabs from "./components/tabs";
import tab from "./components/tab";
import container from "./components/container";
import svgIcon from "./components/svgIcon";

export default createTheme({
  palette: { ...colors },
  typography: { ...typography },
  boxShadows: { ...boxShadows },
  borders: { ...borders },
  functions: {
    boxShadow,
    linearGradient,
    pxToRem
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...globals,
        ...container,
      },
    },
    MuiDrawer: { ...sidenav },
    MuiCard: { ...card },
    MuiButton: { ...button },
    MuiDivider: { ...divider },
    MuiTableContainer: { ...tableContainer },
    MuiAppBar: { ...appBar },
    MuiTabs: { ...tabs },
    MuiTab: { ...tab },
    MuiSvgIcon: { ...svgIcon }
  },
});
