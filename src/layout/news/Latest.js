import { Component } from 'react';

import InfiniteScroll from 'react-infinite-scroll-component';
import Grid from "@mui/material/Grid";
import Layout from '../../component/Layout';
import Header from '../../component/Header';
import Box from '../../component/Box';
import Typography from '../../component/Typography';
import NewList from '../../component/New/NewList';

const tabs = ['Noticias', 'Deportes', 'Corazón'];
const serverHost = 'https://news-puller.herokuapp.com';

class Latest extends Component {

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
    let url = serverHost + '/get/'
    const { next, tabValue, id, items } = this.state;

    if (id) {
      url += 'relatedNews/' + id + '/page/' + next
    } else {
      let theme = 'noticias';
      
      if (tabValue == 1) {
        theme = 'deportes'
      } else if (tabValue == 2) {
        theme = 'corazon'
      } 
      url += theme +'/24/page/' + next
    }

    fetch(url)
        .then((res) => res.json())
        .then((json) => {
          this.setState({
            items: items.concat(json),
            id: id,
            tabValue: tabValue,
            next: next + 1
          })
        });
  }

  render() {
    const { items, tabValue } = this.state;

    let header = <Header title='Últimas noticias' tabs={tabs} selected={tabValue} handler={this.handler} />

    if (this.id) {
      header = <Header title='Noticias relacionadas' />
    }

    return (
      <Layout>
        {header}
        <Box mt={3}>
          <InfiniteScroll
            data-testid="news-infinite-scroll"
            pageStart={0}
            dataLength={items?.length}
            next={this.loadMore}
            loader={<Typography variant="h5" fontWeight="medium">Buscando noticias...</Typography>}
            hasMore={true}
          >
            <Grid container key="noticias">
              {items?.map((data) => (
                <NewList data={data} key={data.id}/>
              ))}
            </Grid>
          </InfiniteScroll>
        </Box>
      </Layout>
    );
  }
}

export default Latest;
