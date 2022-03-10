import { useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";

import Divider from "@mui/material/Divider";

import Box from "../Box";
import Typography from "../Typography";
import SidenavRoot from "./Base"

import logo from "../../assets/logo.png";

function Sidenav({ routes }) {
  const location = useLocation();
  const { pathname } = location;
  const collapseName = pathname.split("/").slice(1)[0];

  const renderRoutes = routes.map(({ type, title, key, exact, route }) => {
    const selected = (collapseName === key ? "italic" : "normal");
    
    if (type === "link") {
      if (exact) {
        return (
          <NavLink to={route} key={key}>
            <Box>
              <Typography
                variant="button"
                fontWeight="medium"
                fontStyle={selected}
                pl={5}
                mt={2}
                mb={1}
                ml={1}
              >
                {title}
              </Typography>
            </Box>
          </NavLink>
        );
      }
    } else  {
      return (
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
    return "";
  });

  return (
    <SidenavRoot variant="permanent">
      <Box pt={3} pb={1} px={4} textAlign="center">
        <Box component={NavLink} to="/" display="flex" alignItems="center">
          <Box component="img" src={logo} alt="Logo Distribucion Noticias" width="2rem" />
          <Box sx="lg">
            <Typography component="h6" variant="button" fontWeight="medium">
              Distribución de noticias
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider />
      {renderRoutes}
    </SidenavRoot>
  );
}

export default Sidenav;
