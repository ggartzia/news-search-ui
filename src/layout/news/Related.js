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
	  	items: []
	  };
    
  }

  componentDidMount() {
    const url = serverHost + '/get/related/' + this.state.id;

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json.items,
          total: json.total,
          article: json.new
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
        items={items}
        total={total}
        render={this.renderItems}
        />
    );
  }
}

export default Related;
