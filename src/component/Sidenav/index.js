import { useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

import Box from "../Box";
import Typography from "../Typography";
import SidenavRoot from "./Base"

import logo from "../../assets/logo.png";

function Sidenav({ routes }) {
  const location = useLocation();
  const { pathname } = location;
  const collapseName = pathname.split("/").slice(1)[0];

  // Render all the routes from the routes.js (All the visible items on the Sidenav)
  const renderRoutes = routes.map(({ type, name, icon, title, key, route, href }) => {
    let returnValue;

    if (type === "link") {
      returnValue = (
        <NavLink to={route} key={key}>
          <Box>
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
    <SidenavRoot variant="permanent">
      <Box pt={3} pb={1} px={4} textAlign="center">
        <Box component={NavLink} to="/" display="flex" alignItems="center">
          <Box component="img" src={logo} alt="Logo Distribucion Noticias" width="2rem" />
          <Box sx="xl">
            <Typography component="h6" variant="button" fontWeight="medium">
              Distribución de noticias
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider />
      <List>{renderRoutes}</List>
    </SidenavRoot>
  );
}

export default Sidenav;
