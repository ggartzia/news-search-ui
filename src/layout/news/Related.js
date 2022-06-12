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
	  	article: {},
	  	items: [],
      page: 0
	  };
    
    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    this.loadMore()
  }

  loadMore() {
    const { id, page } = this.state;
    const url = serverHost + '/get/related/' + id + '/page/' + page;

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          id: id,
          items: json.items,
          total: json.total,
          article: json.new,
          page: page + 1
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
    const { article, items, total } = this.state;
    const header = <New data={article} />

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

export default Related;
