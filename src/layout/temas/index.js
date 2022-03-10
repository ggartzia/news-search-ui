import { Component } from "react";

import InfiniteScroll from 'react-infinite-scroll-component';
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
    let url = serverHost + '/get/topics/';
    const { next, tabValue, items } = this.state;
    
    if (tabValue == 1) {
      url += 'deportes'
    } else if (tabValue == 2) {
      url += 'corazon'
    } else {
      url += 'noticias'
    }

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

  renderTopic(topic) {
    return (
      <Grid item ml={3} mt={2} key={topic.name}>
        <Typography
            component="a"
            href={"/buscarTema/" + topic.name}
            variant="caption"
            color="secondary"
            fontWeight="medium" > 
          <MiniCard
            title={topic.name}
            count={topic.usage} />
        </Typography>
      </Grid>
    );
  }

  render() {
      const { items, tabValue } = this.state;

      const header = <Header title='Los temas más utilizados en las noticias' tabs={tabs} selected={tabValue} handler={this.handler} />

      return (
        <Layout>
          {header}
          <Box mt={3} ml={1}>
            <InfiniteScroll
              data-testid="news-infinite-scroll"
              pageStart={0}
              dataLength={items?.length}
              next={this.loadMore}
              loader={<Typography variant="h5" fontWeight="medium">Buscando...</Typography>}
              hasMore={true}
            >
              <Grid container spacing={4} key="temas">
                {items.map((data) => {
                  return this.renderTopic(data);
                })}
              </Grid>
            </InfiniteScroll>
          </Box>
        </Layout>
      );
    }
}

export default Temas;
