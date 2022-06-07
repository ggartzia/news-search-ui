import { Component } from "react";

import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Search from "../../component/Search";
import DataScroll from "../../component/DataScroll";
import NewList from "../../component/New/NewList";

const serverHost = 'https://news-puller.herokuapp.com';

class BuscarTema extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      topic: props.match.params.topic,
      total: 0,
      page: 0
    };

    this.handler = this.handler.bind(this);
    this.search = this.search.bind(this);
  }

  handler(event, newTopic) {
    console.log("what is going on", this.state, newTopic)
    this.setState({
      items:[],
      topic: newTopic,
      total: 0,
      page: 0
    }, this.search);
  }

  componentDidMount() {
    if (this.state.topic != null) {
      this.search();
    }
  }

  search() {
    const { page, topic, items } = this.state;
    let url = serverHost + '/get/news/' + topic + '/page/' + page;

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: items.concat(json.items),
          total: json.total,
          topic: topic,
          page: page + 1
        });
      });
  }

  renderItems(items) {
    return items.map((data) => {
        return (
          <NewList data={data} key={data.id}/>
        );
      });
  }

  render() {
    const { items, total, topic } = this.state;
    const title = topic ? topic : 'Buscar tema...'

    const searchBox = (
      <Card>
        <Search title={title} handler={this.handler} />
      </Card>
    );

    if (!topic) {
      return (
        <Box sx={{ py: 2.5, px: 5, marginLeft: "17.125rem"}}>
          {searchBox}
        </Box>
      );
    }

    return (
      <DataScroll
        header={searchBox}
        loadMore={this.search}
        items={items}
        total={total}
        render={this.renderItems}
        />
    );
  }
}

export default BuscarTema;
