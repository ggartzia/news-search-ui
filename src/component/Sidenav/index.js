import { useEffect } from "react";

// react-router-dom components
import { useLocation, NavLink } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import Box from "../Box";
import Typography from "../Typography";
import SidenavRoot from "./Base"


function Sidenav({ color, brand, brandName, routes, ...rest }) {
  const location = useLocation();
  const { pathname } = location;
  const collapseName = pathname.split("/").slice(1)[0];

  // Render all the routes from the routes.js (All the visible items on the Sidenav)
  const renderRoutes = routes.map(({ type, name, icon, title, key, route, href }) => {
    let returnValue;

    if (type === "link") {
      returnValue = (
        <NavLink to={route} key={key}>
          <Box {...rest}>
            <Typography
              variant="button"
              fontWeight="medium"
              pl={5}
              mt={2}
              mb={1}
              ml={1}
            >
              {name}
            </Typography>
          </Box>
        </NavLink>
      );
    } else if (type === "title") {
      returnValue = (
        <Typography
          key={key}
          display="block"
          variant="caption"
          fontWeight="bold"
          textTransform="uppercase"
          opacity={0.6}
          pl={3}
          mt={2}
          mb={1}
          ml={1}
        >
          {title}
        </Typography>
      );
    }

    return returnValue;
  });

  return (
    <SidenavRoot {...rest} variant="permanent">
      <Box pt={3} pb={1} px={4} textAlign="center">
        <Box component={NavLink} to="/" display="flex" alignItems="center">
          {brand && <Box component="img" src={brand} alt="Logo Distribucion Noticias" width="2rem" />}
          <Box
            width={!brandName && "100%"}
            sx="xl"
          >
            <Typography component="h6" variant="button" fontWeight="medium">
              {brandName}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider />
      <List>{renderRoutes}</List>
    </SidenavRoot>
  );
}

// Setting default values for the props of Sidenav
Sidenav.defaultProps = {
  color: "info",
  brand: "",
};

// Typechecking props for the Sidenav
Sidenav.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  brand: PropTypes.string,
  brandName: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sidenav;
