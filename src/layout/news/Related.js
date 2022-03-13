import { Component } from "react";

import Layout from "../../component/Layout";
import New from "../../component/New";
import NewList from "../../component/New/NewList";

const serverHost = 'https://news-puller.herokuapp.com';

class Related extends Component {

  constructor(props) {
    super(props);

	  this.state = {
      id: props.match.params.id,
	  	selectedNew: {},
	  	items: [],
      next: 0
	  };

    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    const url = serverHost + '/get/new/' + this.state.id;

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          selectedNew: json,
          items: [],
          next: 0
        });
      })
      .then(this.loadMore);
  }

  loadMore() {
    const { next, selectedNew, items } = this.state;
    const url = serverHost + '/get/relatedNews/' + selectedNew.id + '/page/' + next;

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: items.concat(json),
          selectedNew: selectedNew,
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
    const { selectedNew, items } = this.state;
    const header = <New data={selectedNew} />

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

export default Related;
