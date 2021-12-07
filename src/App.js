import { useEffect, useMemo } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import theme from "./assets/theme";

import Sidenav from "./component/Sidenav";
import routes from "./routes";

export default function App() {
  const { pathname } = useLocation();


  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} component={route.component} key={route.key} />;
      }

      return null;
    });

  return <ThemeProvider theme={theme}>
           <CssBaseline />
           <Sidenav routes={routes} />
           <Switch>
             {getRoutes(routes)}
             <Redirect from="*" to="/dashboard" />
           </Switch>
         </ThemeProvider>;
}
