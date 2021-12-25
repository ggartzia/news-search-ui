// @mui material components
import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import TwitterIcon from "@mui/icons-material/Twitter";
import AddCircleIcon from '@mui/icons-material/AddCircle';

// Soft UI Dashboard PRO React components
import Layout from "../../component/Layout";
import Header from "../../component/Header";
import Avatar from "../../component/Avatar";
import Box from "../../component/Box";
import Typography from "../../component/Typography";

import colors from "../../assets/theme/base/colors";
import pxToRem from "../../assets/theme/functions/pxToRem";

import data from "./noticias.json";

class UltimasNoticias extends React.Component {

  constructor(props) {
      super(props);

      this.state = {
          items: [],
          DataisLoaded: false
      };
  }

  componentDidMount() {
    fetch("https://news-puller.herokuapp.com/get/deportes/24")
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                items: json,
                DataisLoaded: true
            });
        });
  }

  render() {
      const tabs = ["Noticias", "Deportes", "Corazón"];
      const { DataisLoaded, items } = this.state;
      const { socialMediaColors } = colors;

      return (
        <Layout>
          <Header title="Últimas noticias" tabs={tabs} />
          <Box mt={5} mb={3}>
            <Grid container spacing={3}>
              items.map((data) => {
                <Grid item xs={12} md={6} xl={4}>
                  <Card>
                    <Box display="flex" alignItems="center" px={1} py={1} mb={1}>
                      <Box mr={2}>
                        <Avatar src={data.image} alt="something here" variant="square" size="xxl"/>
                      </Box>
                      <Box display="flex" flexDirection="column">
                        <Typography variant="button" fontWeight="medium">
                          {data.title}
                        </Typography>
                      </Box>
                    </Box>

                    <Box display="flex" alignItems="center" px={1} py={0.5}>
                      <Box mr={2}>
                        <Avatar src={data.logo} alt={data.paper} size="sm" />
                      </Box>
                      <Box display="flex" flexDirection="column">
                        <Typography variant="button" fontWeight="medium">
                          {data.paper}
                        </Typography>
                        <Typography variant="caption" color="secondary">
                          Publicado hace {data.published}
                        </Typography>
                      </Box>
                    </Box>

                    <Box display="flex" px={1} py={0.5}>
                      <Box
                        component="a"
                        href={data._id}
                        target="_blank"
                        rel="noreferrer"
                        fontSize={pxToRem(14)}
                        lineHeight={2}>

                        <Typography variant="button" pr={0.5} fontWeight="medium" >
                          Noticias relacionadas
                        </Typography>
                        <Typography variant="span" fontSize="large" verticalAlign="sub" >
                          <AddCircleIcon />
                        </Typography>
                      </Box>

                      <Box
                        component="a"
                        href={data._id}
                        target="_blank"
                        rel="noreferrer"
                        fontSize={pxToRem(18)}
                        color={socialMediaColors.twitter.main}
                        pr={1}
                        pl={18}>
                        <TwitterIcon />
                      </Box>
                    </Box>
                  </Card>
                </Grid>
              });
            </Grid>
          </Box>
        </Layout>
      );
    }
}

export default UltimasNoticias;
