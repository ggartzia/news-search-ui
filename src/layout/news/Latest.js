import { Component } from 'react';

import DataScroll from '../../component/DataScroll';
import Header from '../../component/Header';
import NewList from '../../component/New/NewList';

const tabs = ['Noticias', 'Deportes', 'Corazón'];
const serverHost = 'https://news-puller.herokuapp.com';

class Latest extends Component {

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
    let url = serverHost + '/get/'
    const { page, tabValue, items } = this.state;

    let theme = 'noticias';
      
    if (tabValue == 1) {
      theme = 'deportes'
    } else if (tabValue == 2) {
      theme = 'corazon'
    } 
    url += theme +'/24/page/' + page

    fetch(url)
        .then((res) => res.json())
        .then((json) => {
          this.setState({
            tabValue: tabValue,
            total: json.total,
            items: items.concat(json.items),
            page: page + 1
          });
        });
  }

  renderItems(items) {
    return items.map((data) => {
        return (
          <NewList data={data} key={data._id}/>
        );
      });
  }

  render() {
    const { items, total, tabValue } = this.state;

    let header = <Header title='Últimas noticias'
                         tabs={tabs}
                         selected={tabValue}
                         handler={this.handler} />

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

export default Latest;
