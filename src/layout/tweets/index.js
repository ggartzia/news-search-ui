import { Component } from "react";

import Box from '@mui/material/Box';

import TweetChart from "../../component/TweetChart";
import DataScroll from "../../component/DataScroll";
import New from "../../component/New";
import Post from "../../component/Post";

const serverHost = 'https://news-puller.herokuapp.com';

class Tweets extends Component {

  constructor(props) {
    super(props);

	  this.state = {
      id: props.match.params.id,
      article: {},
      total: 0,
      items: [],
      chart: [],
      page: 0
    };

    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    this.loadMore();
  }

  loadMore() {
    const { id, page, items, chart } = this.state;
    const url = serverHost + '/get/tweets/' + id + '/page/' + page;

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          id: id,
          items: items.concat(json.items),
          total: json.total,
          article: json.new,
          chart: json.chart,
          page: page + 1
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
    const { article, items, chart, total } = this.state;

    const header = (
      <Box>
        <New data={article} />
        <TweetChart data={chart} published={article.published} />
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
