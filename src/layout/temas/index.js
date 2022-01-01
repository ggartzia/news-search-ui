import { Component } from "react";

import Grid from "@mui/material/Grid";

import Layout from "../../component/Layout";
import Header from "../../component/Header";
import Box from "../../component/Box";
import MiniCard from "../../component/MiniCard";
import Typography from "../../component/Typography";

const tabs = ["24 h", "72 h", "1 semana"];

class Temas extends Component {

  constructor(props) {
      super(props);

      this.handler = this.handler.bind(this);

      this.state = {
          items: [],
          tabValue: 0,
          DataisLoaded: false
      };

      this.handler(null, 0);
  }

  handler(event, newValue) {
    let hours = "24";

    if (this.state.tabValue == 1) {
      hours = "72"
    } else if (this.state.tabValue == 2) {
      hours = "168"
    } 

    fetch("https://news-puller.herokuapp.com/get/topics/" + hours)
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                items: json,
                tabValue: newValue,
                DataisLoaded: true
            });
        });
  }

  renderTopic(topic) {
    return (
      <Grid item xs={12} sm={6} xl={3} key={topic.name}>
        <MiniCard
          title={topic.name}
          count={topic.numNews}
          icon="emoji_events" />
      </Grid>
    );
  }

  render() {
      const { items, tabValue, DataisLoaded } = this.state;
      const headline = "Los temas más utilizados en las noticias"

      if (!DataisLoaded) {
        return (
          <Layout>
            <Header title={headline} tabs={tabs} selected={tabValue} />
            <Box mt={5} mb={15}>
              <Typography variant="h5" fontWeight="medium">
                No se han encontrado temas
              </Typography>
            </Box>
          </Layout>
          );
      }

      return (
        <Layout>
          <Header title={headline} tabs={tabs} selected={tabValue} handler={this.handler} />
          <Box mt={5} mb={3}>
            <Grid container spacing={3} key="temas">
              {items.map((data) => {
                return this.renderTopic(data);
              })}
            </Grid>
          </Box>
        </Layout>
      );
    }
}

export default Temas;
