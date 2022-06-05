import { Component } from "react";

import DataScroll from "../../component/DataScroll";
import Header from "../../component/Header";
import User from "../../component/User";

const serverHost = 'https://news-puller.herokuapp.com';

class Cuentas extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      total: 100,
      next: 0
    };

    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    this.loadMore()
  }

  loadMore() {
    const { next, items, total } = this.state;
    const url = serverHost + '/get/users/page/' + next;

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: items.concat(json),
          total: total,
          next: next + 1
        });
      });
  }

  renderItems(items) {
    return items.map((data) => {
      return (
        <User data={data} />
      );
    });
  }

  render() {
    const { items, total } = this.state;

    let header = <Header title='Las cuentas más activas en twitter'  />

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

export default Cuentas;
