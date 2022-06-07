import { Component } from 'react';

import DataScroll from '../../component/DataScroll';
import Header from '../../component/Header';
import NewList from '../../component/New/NewList';

const serverHost = 'https://news-puller.herokuapp.com';

class MediaNews extends Component {

  constructor(props) {
      super(props);

      this.state = {
        medio: props.match.params.medio,
        items: [],
        next: 0
      };

      this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    this.loadMore()
  }

  loadMore() {
    const { next, medio, items, total } = this.state;
    const url = serverHost + '/get/media/' + medio + '/news/page/' + next;

    fetch(url)
        .then((res) => res.json())
        .then((json) => {
          this.setState({
            items: items.concat(json),
            total: total,
            medio: medio,
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
    const { items, total, medio } = this.state;
    const title = `Últimas noticias de ${medio}`;

    let header = <Header title={title}  />

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

export default MediaNews;
