import { Component } from "react";

import Grid from "@mui/material/Grid";

import Layout from "../../component/Layout";
import Box from "../../component/Box";
import Card from "@mui/material/Card";
import Typography from "../../component/Typography";
import Search from "../../component/Search";
import { Timeline } from 'react-twitter-widgets'

const serverHost = 'https://news-puller.herokuapp.com';

class Cuentas extends Component {

  constructor(props) {
      super(props);

      this.handler = this.handler.bind(this);

      this.state = {
          items: [],
          DataisLoaded: false
      };

  }

  handler(event, newValue) {
    fetch(serverHost + '/get/news/' + newValue + '/page/0')
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                items: json,
                topic: newValue,
                DataisLoaded: true
            });
        });
  }

  render() {
      const { items, topic, DataisLoaded } = this.state;

      let header = <Header title='Las cuentas más activas en twitter'  />

      if (!DataisLoaded) {
        return (
          <Layout>
            {header}
          </Layout>
          );
      }

      return (
        <Layout>
          {header}
          <Box mt={5} mb={3}>
            <Grid container spacing={3} key="noticias">
              {items.map((data) => {
                return (
                  <Timeline
                    dataSource={{
                      sourceType: 'profile',
                      screenName: data.author_id
                    }}
                    options={{
                      height: '400'
                    }}
                  />
                );
              })}
            </Grid>
          </Box>
        </Layout>
      );
    }
}

export default Cuentas;
