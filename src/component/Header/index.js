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

function Header({ title, tabs }) {

  const [tabValue, setTabValue] = useState(0);

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  const renderTabs = function(tabs) {
    if (tabs && tabs.length > 0) {
      return (
        <Grid item xs={12} md={6} lg={4} sx={{ ml: "auto" }}>
          <AppBar position="static">
            <Tabs
              orientation="horizontal"
              value={tabValue}
              onChange={handleSetTabValue}
              sx={{ background: "transparent" }}
            >
            {tabs.map((tab) => <Tab label={tab} key={tab} />)}
            </Tabs>
          </AppBar>
        </Grid>
      )
    } else {
      return "";
    }
  };

  return (
    <Box position="relative">
      <Card sx={{ mx: 3, py: 2, px: 3 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <Box height="100%" mt={0.5} lineHeight={1}>
              <Typography variant="h5" fontWeight="medium">
                {title}
              </Typography>
            </Box>
          </Grid>
          {renderTabs(tabs)}
        </Grid>
      </Card>
    </Box>
  );
}

export default Header;
