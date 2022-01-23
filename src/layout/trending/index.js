import { Component } from "react";

import Grid from "@mui/material/Grid";

import Layout from "../../component/Layout";
import Header from "../../component/Header";
import Box from "../../component/Box";
import Typography from "../../component/Typography";
import New from "../../component/New";
import { Tweet } from 'react-twitter-widgets'

const tabs = ['24 h', '72 h', '1 semana'];
const serverHost = 'https://news-puller.herokuapp.com';

class Trending extends Component {

  constructor(props) {
      super(props);
      this.id = props.match.params.id;
      
      this.handler = this.handler.bind(this);

      this.state = {
          items: [],
          tabValue: 0,
          DataisLoaded: false
      };

      this.handler(null, 0);
  }

  handler(event, newValue) {
    let url = ''

    if (this.id) {
      url = serverHost + '/get/tweets/' + this.id

    } else {
      let hours = '24'

      if (newValue == 1) {
        hours = '72'
      } else if (newValue == 2) {
        hours = '168'
      }

      url = serverHost + '/get/trending/' + hours
    }

    fetch(url)
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                items: json,
                tabValue: newValue,
                DataisLoaded: true
            });
        });
  }

  render() {
    const { items, tabValue, DataisLoaded } = this.state;

    let header = <Header title='Las noticias más compartidas' tabs={tabs} selected={tabValue} handler={this.handler} />

    if (this.id) {
      header = <Header title='Distribución de la noticia en Twitter' />
    }

    if (!DataisLoaded) {
      return (
        <Layout>
          {header}
          <Box mt={5} mb={15}>
            <Typography variant="h5" fontWeight="medium">
              No se han encontrado noticias
            </Typography>
          </Box>
        </Layout>
        );
    }

    return (
      <Layout>
        {header}
        <Box mt={5} mb={3} px={5}>
          <Grid container
                spacing={2}
                sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}
                key="noticias">
            {items.map((data) => {
              if (this.id) {
                return (
                  <Tweet tweetId={data.id} key={data._id}/>
                );
              } else {
                return (
                  <New data={data} key={data._id}/>
                );
              }
            })}
          </Grid>
        </Box>
      </Layout>
    );
  }
}

export default Trending;
