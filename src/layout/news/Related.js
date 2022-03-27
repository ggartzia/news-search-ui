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
    const { mainNew, items } = this.state;
    const url = serverHost + '/get/related/' + mainNew.id;

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: items.concat(json),
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
    const { mainNew, items } = this.state;
    const header = <New data={mainNew} />

    return (
      <DataScroll
        header={header}
        items={items}
        render={this.renderItems}
        />
    );
  }
}

export default Related;
