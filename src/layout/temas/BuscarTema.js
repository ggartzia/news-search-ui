import { Component } from "react";

import Grid from "@mui/material/Grid";

import Layout from "../../component/Layout";
import Box from "../../component/Box";
import Card from "@mui/material/Card";
import Typography from "../../component/Typography";
import Search from "../../component/Search";
import New from "../../component/New";

class BuscarTema extends Component {

  constructor(props) {
      super(props);

      this.handler = this.handler.bind(this);

      this.state = {
          items: [],
          topic: null,
          DataisLoaded: false
      };

      const loadTopic = props.match.params.topic;

      if (loadTopic != null) {
        this.handler(null, loadTopic);
      }

  }

  handler(event, newValue) {
    console.log("helloooo", newValue);
    fetch("https://news-puller.herokuapp.com/get/news/" + newValue)
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

      if (!DataisLoaded) {
        return (
          <Layout>
            <Card>
                <Search title="Buscar tema..." onChange={this.handler} />
            </Card>

            <Box mt={5} mb={15}>
              <Typography variant="h5" fontWeight="medium">
                No se han encontrado noticias sobre {topic}
              </Typography>
            </Box>
          </Layout>
          );
      }

      return (
        <Layout>
          <Card>
            <Search title="Buscar tema..." handler={this.handler} />
          </Card>
          
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
