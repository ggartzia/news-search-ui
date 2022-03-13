import { Component } from "react";

import Layout from "../../component/Layout";
import Box from "../../component/Box";
import Card from "@mui/material/Card";
import Search from "../../component/Search";
import NewList from "../../component/New/NewList";

const serverHost = 'https://news-puller.herokuapp.com';

class BuscarTema extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      topic: props.match.params.topic,
      next: 0
    };

    this.handler = this.handler.bind(this);
    this.search = this.search.bind(this);

  }

  handler(event, newTopic) {
    this.setState({
      items:[],
      topic: newTopic,
      next: 0
    }, this.search);
  }

  componentDidMount() {
    if (this.state.topic != null) {
      this.search();
    }
  }

  search() {
    const { next, topic, items } = this.state;
    let url = serverHost + '/get/news/' + topic + '/page/' + next;

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: items.concat(json),
          topic: topic,
          next: next + 1
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
    const { items, topic } = this.state;
    const title = topic ? topic : 'Buscar tema...'

    const searchBox = (
      <Card>
        <Search title={title} onChange={this.handler} />
      </Card>
    );

    if (!topic) {
      return (
        <Box sx={{ p: 2, position: "relative", marginLeft: "17.125rem"}}>
          {searchBox}
        </Box>
      );
    }

    return (
      <Layout
        header={searchBox}
        loadMore={this.search}
        items={items}
        render={this.renderItems}
        />
    );
  }
}

export default BuscarTema;
