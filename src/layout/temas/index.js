import { Component } from "react";

import DataScroll from "../../component/DataScroll";
import Header from "../../component/Header";
import Topic from "../../component/Topic";

const tabs = ['Noticias', 'Deportes', 'Corazón'];
const serverHost = 'https://news-puller.herokuapp.com';

class Temas extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      total: 0,
      tabValue: 0,
      page: 0
    };

    this.handler = this.handler.bind(this);
    this.loadMore = this.loadMore.bind(this);
  }

  handler(event, tab) {
    this.setState({
      items:[],
      total: 0,
      tabValue: tab,
      page: 0
    }, this.loadMore);
  }

  componentDidMount() {
    this.loadMore()
  }

  loadMore() {
    let url = serverHost + '/get/topics/';
    const { page, tabValue, items } = this.state;
    
    if (tabValue == 1) {
      url += 'deportes';
    } else if (tabValue == 2) {
      url += 'corazon';
    } else {
      url += 'noticias';
    }

    url += '/page/' + page;

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: items.concat(json.items),
          total: json.total,
          tabValue: tabValue,
          page: page + 1
        });
      });
  }

  renderItems(items) {
    return items.map((topic) => {
      return <Topic topic={topic} />
    });
  }

  render() {
      const { items, total, tabValue } = this.state;

      const header = <Header title='Los temas más utilizados en las noticias' tabs={tabs} selected={tabValue} handler={this.handler} />

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

export default Temas;
