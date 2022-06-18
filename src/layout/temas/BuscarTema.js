import { Component } from "react";

import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

import DataScroll from "../../component/DataScroll";
import NewList from "../../component/New/NewList";

const serverHost = 'https://news-puller.herokuapp.com';

class BuscarTema extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      topic: props.match.params.topic,
      total: 0,
      page: 0
    };

    this.handler = this.handler.bind(this);
    this.search = this.search.bind(this);
  }

  handler(event) {
    var newTopic = event.target.value;

    this.setState({
      items:[],
      topic: newTopic,
      total: 0,
      page: 0
    }, this.search);
  }

  componentDidMount() {
    if (this.state.topic != null) {
      this.search();
    }
  }

  search() {
    const { page, topic, items } = this.state;
    if (topic) {
      let url = serverHost + '/get/news/' + topic.toLowerCase() + '/page/' + page;

      fetch(url)
        .then((res) => res.json())
        .then((json) => {
          this.setState({
            items: items.concat(json.items),
            total: json.total,
            topic: topic,
            page: page + 1
          });
        });
    }
  }

  renderItems(items) {
    return items.map((data) => {
        return (
          <NewList data={data} key={data._id}/>
        );
      });
  }

  render() {
    const { items, total, topic } = this.state;
    const title = topic ? topic : 'Buscar tema...'

    const searchBox = (
      <Card sx={{ ml: 1}}>
        <Box my={1} mx={2}>
            <IconButton aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              onChange={this.handler}
              placeholder={title}
              inputProps={{ 'aria-label': 'search' }}
            />
        </Box>
      </Card>
    );

    return (
      <DataScroll
        header={searchBox}
        loadMore={this.search}
        items={items}
        total={total}
        render={this.renderItems}
        />
    );
  }
}

export default BuscarTema;
