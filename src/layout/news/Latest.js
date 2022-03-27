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
      url += 'related/' + id + '/page/' + next
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

  renderItems(items) {
    return items.map((data) => {
        return (
          <NewList data={data} key={data.id}/>
        );
      });
  }

  render() {
    const { items, tabValue } = this.state;

    let header = <Header title='Últimas noticias'
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

export default Latest;
