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

/**
 * The base box-shadow styles for the Soft UI Dashboard PRO Material.
 * You can add new box-shadow using this file.
 * You can customized the box-shadow for the entire Soft UI Dashboard PRO Material using thie file.
 */

// Soft UI Dashboard PRO React Base Styles
import colors from "./colors";

// Soft UI Dashboard PRO React Helper Functions
import boxShadow from "../functions/boxShadow";

const { black, white, info, inputColors, tabs } = colors;

export default {
  xs: boxShadow([0, 2], [9, -5], black.main),
  sm: boxShadow([0, 5], [10, 0], black.main),
  md: `${boxShadow([0, 4], [6, -1], black.light)}, ${boxShadow(
    [0, 2],
    [4, -1],
    black.light
  )}`,
  lg: `${boxShadow([0, 8], [26, -4], black.light)}, ${boxShadow(
    [0, 8],
    [9, -5],
    black.light
  )}`,
  xl: boxShadow([0, 23], [45, -11], black.light),
  xxl: boxShadow([0, 20], [27, 0], black.main),
  inset: boxShadow([0, 1], [2, 0], black.main, "inset"),
  navbarBoxShadow: `${boxShadow([0, 0], [1, 1], white.main, "inset")}, ${boxShadow(
    [0, 20],
    [27, 0],
    black.main
  )}`,
  buttonBoxShadow: {
    main: `${boxShadow([0, 4], [7, -1], black.main)}, ${boxShadow(
      [0, 2],
      [4, -1],
      black.main
    )}`,
    stateOf: `${boxShadow([0, 3], [5, -1], black.main)}, ${boxShadow(
      [0, 2],
      [5, -1],
      black.main
    )}`,
    stateOfNotHover: boxShadow([0, 0], [0, 3.2], info.main),
  },
  inputBoxShadow: {
    focus: boxShadow([0, 0], [0, 2], inputColors.boxShadow),
    error: boxShadow([0, 0], [0, 2], inputColors.error),
    success: boxShadow([0, 0], [0, 2], inputColors.success),
  },
  sliderBoxShadow: {
    thumb: boxShadow([0, 1], [13, 0], black.main),
  },
  tabsBoxShadow: {
    indicator: boxShadow([0, 1], [5, 1], tabs.indicator.boxShadow),
  },
};
