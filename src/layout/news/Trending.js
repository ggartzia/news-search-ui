import { Component } from "react";

import InfiniteScroll from 'react-infinite-scroll-component';
import Grid from "@mui/material/Grid";

import Header from "../../component/Header";
import Box from "../../component/Box";
import Typography from "../../component/Typography";
import NewList from "../../component/New/NewList";

const tabs = ['24 h', '72 h', '1 semana'];
const serverHost = 'https://news-puller.herokuapp.com';

class Trending extends Component {

  constructor(props) {
      super(props);

      this.state = {
          items: [],
          tabValue: 0,
          next: 0
      };

      this.handler = this.handler.bind(this);
      this.loadMore = this.loadMore.bind(this);
  }

  handler(event, tab) {
    this.setState({
      items:[],
      tabValue: tab,
      next: 0
    }, this.loadMore);
  }

  componentDidMount() {
    this.loadMore()
  }

  loadMore() {
    const { next, tabValue, items } = this.state;

    let hours = '24'

    if (tabValue == 1) {
      hours = '72'
    } else if (tabValue == 2) {
      hours = '168'
    }

    const url = serverHost + '/get/trending/' + hours + '/page/' + next

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: items.concat(json),
          tabValue: tabValue,
          next: next + 1
        });
      });
  }

  render() {
    const { items, tabValue } = this.state;

    return (
      <Box sx={{ p: 3, position: "relative", marginLeft: "17.125rem"}} >
        <Header title='Las noticias más compartidas'
                tabs={tabs}
                selected={tabValue}
                handler={this.handler} />
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
                return (
                  <NewList data={data} key={data.id}/>
                );
              })}
            </Grid>
          </InfiniteScroll>
        </Box>
      </Box>
    );
  }
}

export default Trending;
