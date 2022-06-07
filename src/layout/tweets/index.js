import { Component } from "react";

import Box from '@mui/material/Box';

import DataScroll from "../../component/DataScroll";
import New from "../../component/New";
import Post from "../../component/Post";

const serverHost = 'https://news-puller.herokuapp.com';

class Tweets extends Component {

  constructor(props) {
    super(props);

	  this.state = {
      id: props.match.params.id,
      selectedNew: {},
      total: 100,
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
          total: 100,
          items: [],
          next: 0
        });
      })
      .then(this.loadMore);
  }

  loadMore() {
    const { next, selectedNew, items, total } = this.state;
    const url = serverHost + '/get/tweets/' + selectedNew.id + '/page/' + next;

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: items.concat(json),
          total: total,
          selectedNew: selectedNew,
          next: next + 1
        });
      });
  }

  renderItems(items) {
    return items.map((data) => {
        return (
          <Post data={data} key={data._id}/>
        );
      });
  }

  render() {
    const { selectedNew, items, total } = this.state;

    const header = (
      <Box>
        <New data={selectedNew} />
      </ Box>
    )

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

export default Tweets;
