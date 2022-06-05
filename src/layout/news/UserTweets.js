import { Component } from "react";

import Box from '@mui/material/Box';

import DataScroll from "../../component/DataScroll";
import New from "../../component/New";
import Post from "../../component/Post";
import User from "../../component/User";

const serverHost = 'https://news-puller.herokuapp.com';

class Tweets extends Component {

  constructor(props) {
    super(props);

	  this.state = {
      id: props.match.params.user,
      selectedUser: {},
      total: 100,
      items: [],
      next: 0
    };

    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    const url = serverHost + '/get/user/' + this.state.id;

    fetch(url)
    .then((res) => res.json())
    .then((json) => {
      this.setState({
        id: this.state.id,
        selectedUser: json,
        total: 100,
        items: [],
        next: 0
      });
    })
    .then(this.loadMore);
  }

  loadMore() {
    
    const { id, next, selectedUser, items, total } = this.state;
    const url = serverHost + '/get/tweets/user/' + id + '/page/' + next;

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
    const { selectedUser, items, total } = this.state;

    const header = (
      <Box>
        <User data={selectedUser} />
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
