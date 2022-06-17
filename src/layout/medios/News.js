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
    const { page, medio, items } = this.state;
    const url = serverHost + '/get/media/' + medio + '/news/page/' + page;

    fetch(url)
        .then((res) => res.json())
        .then((json) => {
          this.setState({
            medio: medio,
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
