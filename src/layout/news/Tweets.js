import { Component } from "react";

import Box from '@mui/material/Box';

import DataScroll from "../../component/DataScroll";
import New from "../../component/New";
import TweetChart from "../../component/TweetChart";
import Post from "../../component/Post";

const serverHost = 'https://news-puller.herokuapp.com';

class Tweets extends Component {

  constructor(props) {
    super(props);

	  this.state = {
      id: props.match.params.id,
	  	selectedNew: {},
      chart: [],
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
        });

        return fetch(serverHost + '/get/tweets/' + json.id);
      })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          selectedNew: this.state.selectedNew,
          chart: json,
          items: [],
          next: 0
        });
      })
      .then(this.loadMore);
  }

  loadMore() {
    const { next, selectedNew, items } = this.state;
    const url = serverHost + '/get/tweets/' + selectedNew.id + '/page/' + next;

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
          <Post data={data} />
        );
      });
  }

  render() {
    const { selectedNew, chart, items } = this.state;

    const header = (
      <Box>
        <New data={selectedNew} />
        <TweetChart data={chart} />
      </ Box>
    )

    return (
      <DataScroll
        header={header}
        loadMore={this.loadMore}
        items={items}
        render={this.renderItems}
        />
    );
  }
}

export default Tweets;
