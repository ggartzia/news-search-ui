import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// Soft UI Dashboard PRO React components
import Box from "../Box";
import Typography from "../Typography";

function Header() {

  const [tabValue, setTabValue] = useState(0);

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  return (
    <Box position="relative">
      <Card sx={{ mx: 3, py: 2, px: 3 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <Box height="100%" mt={0.5} lineHeight={1}>
              <Typography variant="h5" fontWeight="medium">
                Últimas noticias
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{ ml: "auto" }}>
            <AppBar position="static">
              <Tabs
                orientation="horizontal"
                value={tabValue}
                onChange={handleSetTabValue}
                sx={{ background: "transparent" }}
              >
                <Tab label="Noticias" />
                <Tab label="Deportes" />
                <Tab label="Corazón" />
              </Tabs>
            </AppBar>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}

export default Header;
