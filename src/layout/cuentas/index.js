import { Component } from "react";

import InfiniteScroll from 'react-infinite-scroll-component';
import Grid from "@mui/material/Grid";

import Layout from "../../component/Layout";
import Header from "../../component/Header";
import Box from "../../component/Box";
import Typography from "../../component/Typography";
import { Timeline } from 'react-twitter-widgets'

const serverHost = 'https://news-puller.herokuapp.com';

class Cuentas extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      next: 0
    };

    this.handler = this.handler.bind(this);
    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    this.loadMore()
  }

  loadMore() {
    const url = serverHost + '/get/users/page/' + next
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: items.concat(json),
          next: next + 1
        });
      });
  }

  render() {
    const { items } = this.state;

    let header = <Header title='Las cuentas más activas en twitter'  />

    return (
      <Layout>
        {header}
        <Box mt={5} mb={3} px={5}>
          <InfiniteScroll
            data-testid="users-infinite-scroll"
            pageStart={0}
            dataLength={items?.length}
            next={this.loadMore}
            loader={<Typography variant="h5" fontWeight="medium">Buscando...</Typography>}
            hasMore={true}
          >
            <Grid container spacing={3} key="users">
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
          </InfiniteScroll>
        </Box>
      </Layout>
    );
  }
}

export default Cuentas;
