import { Component } from "react";

import Box from '@mui/material/Box';

import DataScroll from "../../component/DataScroll";
import New from "../../component/New";
import Post from "../../component/Post";
import User from "../../component/User";

const serverHost = 'https://news-puller.herokuapp.com';

class UserTweets extends Component {

  constructor(props) {
    super(props);

	  this.state = {
      id: props.match.params.user,
      user: {},
      total: 0,
      items: [],
      page: 0
    };

    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    this.loadMore();
  }

  loadMore() {
    
    const { id, page, items } = this.state;
    const url = serverHost + '/get/tweets/user/' + id + '/page/' + page;

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          id: id,
          items: items.concat(json.items),
          total: json.total,
          user: json.user,
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
    const { user, items, total } = this.state;

    const header = (
      <Box>
        <User data={user} />
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

export default UserTweets;
