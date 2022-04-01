import { Component } from "react";

import DataScroll from "../../component/DataScroll";
import Header from "../../component/Header";
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

  renderItems(items) {
    return items.map((data) => {
        return (
          <NewList data={data} key={data.id}/>
        );
      });
  }

  render() {
    const { items, tabValue } = this.state;

    const header = <Header title='Las noticias más compartidas'
                           tabs={tabs}
                           selected={tabValue}
                           handler={this.handler} />
    return (
      <DataScroll
        header={header}
        loadMore={this.loadMore}
        items={items}
        render={this.renderItems}
        />
    );
  }
}

export default Trending;