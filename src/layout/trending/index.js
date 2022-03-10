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
      
      this.handler = this.handler.bind(this);

      this.state = {
          id: props.match.params.id,
          items: [],
          tabValue: 0
      };

      this.handler(null, 0);
  }

  handler(event, newValue) {
    let url = ''

    if (this.state.id) {
      url = serverHost + '/get/tweets/' + this.state.id + '/page/0'

    } else {
      let hours = '24'

      if (newValue == 1) {
        hours = '72'
      } else if (newValue == 2) {
        hours = '168'
      }

      url = serverHost + '/get/trending/' + hours + '/page/0'
    }

    fetch(url)
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                id: this.state.id,
                items: json,
                tabValue: newValue
            });
        });
  }

  render() {
    const { id, items, tabValue } = this.state;

    let header = <Header title='Las noticias más compartidas' tabs={tabs} selected={tabValue} handler={this.handler} />

    if (this.id) {
      header = <Header title='Distribución de la noticia en Twitter' />
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
              if (id) {
                return (
                  <Tweet tweetId={data._id.toString()} key={data._id}/>
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
