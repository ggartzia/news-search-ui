import { Component } from "react";

import Grid from "@mui/material/Grid";

import Layout from "../../component/Layout";
import Header from "../../component/Header";
import Box from "../../component/Box";
import MiniCard from "../../component/MiniCard";
import Typography from "../../component/Typography";

const tabs = ['Noticias', 'Deportes', 'Corazón'];
const serverHost = 'https://news-puller.herokuapp.com';

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
    let theme = 'noticias';
    
    if (newValue == 1) {
      theme = 'deportes'
    } else if (newValue == 2) {
      theme = 'corazon'
    } 

    fetch(serverHost + '/get/topics/' + theme)
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
        <Typography
            component="a"
            href={"/buscarTema/" + topic.name}
            variant="caption"
            color="secondary"
            fontWeight="medium" > 
          <MiniCard
            title={topic.name}
            count={topic.usage}
            icon="emoji_events" />
        </Typography>
      </Grid>
    );
  }

  render() {
      const { items, tabValue, DataisLoaded } = this.state;
      const headline = 'Los temas más utilizados en las noticias'

      let header = <Header title='Los temas más utilizados en las noticias' tabs={tabs} selected={tabValue} handler={this.handler} />

      if (!DataisLoaded) {
        return (
          <Layout>
            {header}
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
          {header}
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
