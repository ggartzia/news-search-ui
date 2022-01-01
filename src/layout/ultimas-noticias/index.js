import { Component } from "react";

import Grid from "@mui/material/Grid";

import Layout from "../../component/Layout";
import Header from "../../component/Header";
import Box from "../../component/Box";
import Typography from "../../component/Typography";
import New from "../../component/New";

const tabs = ["Noticias", "Deportes", "Corazón"];

class UltimasNoticias extends Component {

  constructor(props) {
      super(props);

      this.handler = this.handler.bind(this);

      this.state = {
          items: [],
          tabValue: 0,
          DataisLoaded: false
      };
      
      this.handler(null, 0);
  }

  handler(event, newValue) {
    let theme = "noticias";
console.log('helloooooo ', newValue);
    if (newValue == 1) {
      theme = "deportes"
    } else if (newValue == 2) {
      theme = "corazon"
    } 

    fetch('https://news-puller.herokuapp.com/get/' + theme +'/24')
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                items: json,
                tabValue: newValue,
                DataisLoaded: true
            });
        });
  }

  render() {
    const { items, tabValue, DataisLoaded } = this.state;

    if (!DataisLoaded) {
      return (
        <Layout>
          <Header title="Últimas noticias" tabs={tabs} selected={tabValue} />
          <Box mt={5} mb={15}>
            <Typography variant="h5" fontWeight="medium">
              No se han encontrado noticias
            </Typography>
          </Box>
        </Layout>
        );
    }

    return (
      <Layout>
        <Header title="Últimas noticias" tabs={tabs} selected={tabValue} handler={this.handler} />
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

export default UltimasNoticias;
