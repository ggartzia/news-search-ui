import { Component } from "react";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";

import DataScroll from "../../component/DataScroll";
import Header from "../../component/Header";
import Box from "../../component/Box";
import Typography from "../../component/Typography";

const serverHost = 'https://news-puller.herokuapp.com';

class Cuentas extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      total: 100,
      next: 0
    };

    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    this.loadMore()
  }

  loadMore() {
    const { next, items, total } = this.state;
    const url = serverHost + '/get/users/page/' + next;

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: items.concat(json),
          total: total,
          next: next + 1
        });
      });
  }

  renderItems(items) {
    return items.map((data) => {
      return (
        <Grid item ml={3} mr={2} mt={3} mb={3}>
          <Card style={{width: "330px"}} key={data.id}>
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
    });
  }

  render() {
    const { items, total } = this.state;

    let header = <Header title='Las cuentas más activas en twitter'  />

    return (
      <DataScroll
        header={header}
        loadMore={this.loadMore}
        items={items}
        total={total}
        render={this.renderItems}
        />
    );
  }
}

export default Cuentas;
