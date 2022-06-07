import { Component } from 'react';

import DataScroll from '../../component/DataScroll';
import Header from '../../component/Header';
import NewList from '../../component/New/NewList';

const serverHost = 'https://news-puller.herokuapp.com';

class MediaNews extends Component {

  constructor(props) {
      super(props);

      this.state = {
        media: props.match.params.medio,
        total: 0,
        items: [],
        page: 0
      };

      this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    this.loadMore()
  }

  loadMore() {
    const { page, media } = this.state;
    const url = serverHost + '/get/media/' + media + '/news/page/' + page;

    fetch(url)
        .then((res) => res.json())
        .then((json) => {
          this.setState(json)
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
    const { items, total, media } = this.state;
    const title = `Últimas noticias de ${media}`;

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
