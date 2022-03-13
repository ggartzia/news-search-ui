import { Component } from "react";

import Layout from "../../component/Layout";
import Header from "../../component/Header";
import Topic from "../../component/Topic";

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
      url += 'deportes';
    } else if (tabValue == 2) {
      url += 'corazon';
    } else {
      url += 'noticias';
    }

    url += '/page/' + next;

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

  renderItems(items) {
    return items.map((topic) => {
      return <Topic topic={topic} />
    });
  }

  render() {
      const { items, tabValue } = this.state;

      const header = <Header title='Los temas más utilizados en las noticias' tabs={tabs} selected={tabValue} handler={this.handler} />

      return (
        <Layout
          header={header}
          loadMore={this.loadMore}
          items={items}
          render={this.renderItems}
          />
      );
    }
}

export default Temas;
