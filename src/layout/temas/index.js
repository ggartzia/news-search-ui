import { Component } from "react";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import Layout from "../../component/Layout";
import Header from "../../component/Header";
import Box from "../../component/Box";
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
  }

  handler(event, newValue) {
    this.setState({
      tab: newValue
    })
  }

  componentDidMount() {
    this.setState({
      tabValue: 0
    })
  }

  componentDidUpdate() {
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
                DataisLoaded: true
            });
        });
  }

  renderTopic(topic) {
    return (
      <Card>
        <Box display="flex" flexDirection="column">
          <Typography variant="button" fontWeight="medium">
            {topic.name}
          </Typography>
          <Typography variant="caption" color="secondary">
            Utilizado en {topic.numNews} noticias
          </Typography>
        </Box>
      </Card>);
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
                return (
                  <Tema data={data} />
                );
              })}
            </Grid>
          </Box>
        </Layout>
      );
    }
}

export default Temas;
