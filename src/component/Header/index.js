import { Component, useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Box from "../Box";
import Typography from "../Typography";

class Header extends Component {

  constructor(props) {
      super(props);
  }

  renderTabs() {
    if (this.props.tabs && this.props.tabs.length > 0) {
      return (
        <Grid item xs={12} md={6} lg={4} sx={{ ml: "auto" }}>
          <AppBar position="static">
            <Tabs
              orientation="horizontal"
              value={this.props.selected}
              onChange={this.props.handler}
              sx={{ background: "transparent" }}
            >
            {this.props.tabs.map((tab) => <Tab label={tab} key={tab} />)}
            </Tabs>
          </AppBar>
        </Grid>
      )
    } else {
      return "";
    }
  }

  render() {
    return (
      <Box position="relative">
        <Card sx={{ mx: 3, py: 2, px: 3 }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item>
              <Box height="100%" mt={0.5} lineHeight={1}>
                <Typography variant="h5" fontWeight="medium">
                  {this.props.title}
                </Typography>
              </Box>
            </Grid>
            {this.renderTabs()}
          </Grid>
        </Card>
      </Box>
    );
  }
}

export default Header;
