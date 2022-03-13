import { Component } from "react";

import InfiniteScroll from 'react-infinite-scroll-component';
import Grid from "@mui/material/Grid";

import Layout from "../../component/Layout";
import Header from "../../component/Header";
import Box from "../../component/Box";
import Typography from "../../component/Typography";
import NewList from "../../component/New/NewList";
import { Tweet } from 'react-twitter-widgets'

const tabs = ['24 h', '72 h', '1 semana'];
const serverHost = 'https://news-puller.herokuapp.com';

class Trending extends Component {

  constructor(props) {
      super(props);

      this.state = {
          id: props.match.params.id,
          items: [],
          tabValue: 0,
          next: 0
      };

      this.handler = this.handler.bind(this);
      this.loadMore = this.loadMore.bind(this);
  }

  handler(event, tab) {
    this.setState({
      id: this.state.id,
      items:[],
      tabValue: tab,
      next: 0
    }, this.loadMore);
  }

  componentDidMount() {
    this.loadMore()
  }

  loadMore() {
    let url = serverHost + '/get';
    const { next, tabValue, id, items } = this.state;

    if (id) {
      url += '/tweets/' + id + '/page/' + next

    } else {
      let hours = '24'

      if (tabValue == 1) {
        hours = '72'
      } else if (tabValue == 2) {
        hours = '168'
      }

      url += '/trending/' + hours + '/page/' + next
    }

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: items.concat(json),
          id: id,
          tabValue: tabValue,
          next: next + 1
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
        <Box mt={2}>
          <InfiniteScroll
            data-testid="news-infinite-scroll"
            pageStart={0}
            dataLength={items?.length}
            next={this.loadMore}
            loader={<Typography variant="h5" fontWeight="medium">Buscando...</Typography>}
            hasMore={true}
          >
            <Grid container key="noticias">
              {items.map((data) => {
                if (id) {
                  return (
                    <Tweet tweetId={data._id.toString()} key={data._id}/>
                  );
                } else {
                  return (
                    <NewList data={data} key={data.id}/>
                  );
                }
              })}
            </Grid>
          </InfiniteScroll>
        </Box>
      </Layout>
    );
  }
}

export default Trending;
