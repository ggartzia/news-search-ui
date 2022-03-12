import { Component } from "react";

import InfiniteScroll from 'react-infinite-scroll-component';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";

import Layout from "../../component/Layout";
import Header from "../../component/Header";
import Box from "../../component/Box";
import Typography from "../../component/Typography";

const serverHost = 'https://news-puller.herokuapp.com';

class Cuentas extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      next: 0
    };

    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    this.loadMore()
  }

  loadMore() {
    const { next, items } = this.state;
    const url = serverHost + '/get/users/page/' + next;

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: items.concat(json),
          next: next + 1
        });
      });
  }

  renderUser(data) {
    return (
      <Grid item ml={3} mt={3} mb={3} key={data.id}>
        <Card style={{width: "330px"}}>
          <Box component="a"
               href={"/cuenta/" + data.id}
               display="flex"
               alignItems="center"
               px={1}
               py={1}
               mb={1}>
            <Box mr={2}>
              <Avatar src={data.image} alt={data.name} sx={{ width: 56, height: 56 }} />
            </Box>
            <Box display="flex" flexDirection="column">
              <Typography variant="button" fontWeight="medium">
                {data.name}
              </Typography>
              <Typography variant="caption" color="secondary">
                {data.tweets} noticias compartidas
              </Typography>
            </Box>
          </Box>
        </Card>
      </Grid>
    );
  }

  render() {
    const { items } = this.state;

    let header = <Header title='Las cuentas más activas en twitter'  />

    return (
      <Layout>
        {header}
        <Box mt={5} mb={3} ml={1}>
          <InfiniteScroll
            data-testid="users-infinite-scroll"
            pageStart={0}
            dataLength={items?.length}
            next={this.loadMore}
            loader={<Typography variant="h5" fontWeight="medium">Buscando...</Typography>}
            hasMore={true}
          >
            <Grid container spacing={1} key="users">
              {items.map((data) => {
                return this.renderUser(data);
              })}
            </Grid>
          </InfiniteScroll>
        </Box>
      </Layout>
    );
  }
}

export default Cuentas;
