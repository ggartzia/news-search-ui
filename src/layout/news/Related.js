import { Component } from "react";

import DataScroll from "../../component/DataScroll";
import New from "../../component/New";
import NewList from "../../component/New/NewList";

const serverHost = 'https://news-puller.herokuapp.com';

class Related extends Component {

  constructor(props) {
    super(props);

	  this.state = {
      id: props.match.params.id,
	  	mainNew: {},
	  	items: []
	  };

    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    const url = serverHost + '/get/new/' + this.state.id;

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          mainNew: json,
          items: [],
          total: 100
        });
      })
      .then(this.loadMore);
  }

  loadMore() {
    const { mainNew, items, total } = this.state;
    const url = serverHost + '/get/related/' + mainNew.id;

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          total: total,
          mainNew: mainNew
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
    const { mainNew, items, total } = this.state;
    const header = <New data={mainNew} />

    return (
      <DataScroll
        header={header}
        items={items}
        total={total}
        render={this.renderItems}
        />
    );
  }
}

export default Related;
