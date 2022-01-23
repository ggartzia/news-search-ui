import { Component } from "react";

import Grid from "@mui/material/Grid";

import Layout from "../../component/Layout";
import Box from "../../component/Box";
import Card from "@mui/material/Card";
import Typography from "../../component/Typography";
import Search from "../../component/Search";
import New from "../../component/New";

const serverHost = 'https://news-puller.herokuapp.com';

class BuscarTema extends Component {

  constructor(props) {
      super(props);

      this.handler = this.handler.bind(this);

      this.topic = props.match.params.topic;

      this.state = {
          items: [],
          topic: null,
          DataisLoaded: false
      };

      if (this.topic != null) {
        this.handler(null, this.topic);
      }

  }

  handler(event, newValue) {
    fetch(serverHost + '/get/news/' + newValue + '/page/0')
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                items: json,
                topic: newValue,
                DataisLoaded: true
            });
        });
  }

  render() {
      const { items, topic, DataisLoaded } = this.state;
      const title = this.topic ? this.topic : 'Buscar tema...'

      const search = (
        <Card>
          <Search title={title} onChange={this.handler} />
        </Card>
        )

      if (!DataisLoaded) {
        return (
          <Layout>
            {search}
          </Layout>
          );
      }

      return (
        <Layout>
          {search}
          <Box mt={5} mb={3}>
            <Grid container spacing={3} key="noticias">
              {items.map((data) => {
                return (
                  <New data={data} key={data._id}/>
                );
              })}
            </Grid>
          </Box>
        </Layout>
      );
    }
}

export default BuscarTema;
