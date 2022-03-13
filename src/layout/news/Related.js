import { Component } from "react";

import InfiniteScroll from 'react-infinite-scroll-component';
import Grid from "@mui/material/Grid";

import Layout from "../../component/Layout";
import Box from "../../component/Box";
import Typography from "../../component/Typography";
import New from "../../component/New";
import NewList from "../../component/New/NewList";

const serverHost = 'https://news-puller.herokuapp.com';

class Related extends Component {

  constructor(props) {
    super(props);

	  this.state = {
      id: props.match.params.id,
	  	selectedNew: {},
	  	items: [],
      next: 0
	  };

    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    const url = serverHost + '/get/new/' + this.state.id;

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          selectedNew: json,
          items: [],
          next: 0
        });
      })
      .then(this.loadMore);
  }

  loadMore() {
    const { next, selectedNew, items } = this.state;
    const url = serverHost + '/get/relatedNews/' + selectedNew.id + '/page/' + next;

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: items.concat(json),
          selectedNew: selectedNew,
          next: next + 1
        });
      });
  }

  render() {
    const { selectedNew, items } = this.state;

    return (
      <Layout>
        <New data={selectedNew} />
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
      </Layout>
    );
  }
}

export default Related;
