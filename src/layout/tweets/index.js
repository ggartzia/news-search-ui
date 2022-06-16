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
    const url = serverHost + '/get/tweets/' + this.state.id;

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          id: this.state.id,
          total: json.total,
          article: json.new,
          chart: json.chart,
          items: [],
          page: 0
        });
      })
      .then(this.loadMore);
  }

  loadMore() {
    const { id, page, items, chart, total, article } = this.state;
    const url = serverHost + '/get/tweets/' + id + '/page/' + page;

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          id: id,
          total: total,
          article: article,
          chart: chart,
          items: items.concat(json),
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
    let graph = '';

    if (chart.length > 2) {
      graph = <TweetChart data={chart} published={article.published} />
    }

    const header = (
      <Box>
        <New data={article} />
        {graph}
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
