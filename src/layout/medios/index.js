import React from "react";
import moment from 'moment';

import Header from "../../component/Header";
import Box from "../../component/Box";
import Typography from "../../component/Typography";
import Lista from "./Lista";

import Avatar from "@mui/material/Avatar";

const serverHost = 'https://news-puller.herokuapp.com';
const apiEndpoint = serverHost + '/get/media';

function timeStamp(date) {
  return moment(date).format('DD MMM YYYY HH:MM:SS');
}

class Medios extends React.Component {

  constructor(props) {
      super(props);

      this.state = {
          mediosNoticias: [],
          mediosDeportes: [],
          mediosCorazon: []
      };
  }

  componentDidMount() {
    fetch(apiEndpoint + '/noticias')
        .then((res) => res.json())
        .then((json) => {
            this.setState(prevState => {
                prevState.mediosNoticias = json;          
                return prevState;
            });
        });
    
    fetch(apiEndpoint + '/deportes')
        .then((res) => res.json())
        .then((json) => {
            this.setState(prevState => {
                prevState.mediosDeportes = json;          
                return prevState;
            });
        });
    
    fetch(apiEndpoint + '/corazon')
        .then((res) => res.json())
        .then((json) => {
            this.setState(prevState => {
                prevState.mediosCorazon = json;          
                return prevState;
            });
        });
  }

  componentWillUnmount() {
    this.setState({
        mediosNoticias: [],
        mediosDeportes: [],
        mediosCorazon: []
    })
  }

  obtenerDatos(items) {
    return items.map( (data) => {
      const mediaLogo = `/medio/${data.media[0]._id}.jpg`;
      const twitter = 'https://twitter.com/' + data.media[0].twitter_name;

      return {
        nombre: (
          <Box display="flex"
               alignItems="center"
               px={1}
               py={0.5}
               component="a"
               href={twitter}>
            <Box mr={2}>
              <Avatar src={mediaLogo} alt={data.media[0]._id} sx={{ width: 32, height: 32 }} />
            </Box>
            <Box display="flex" flexDirection="column">
              <Typography variant="button" fontWeight="medium">
                {data.media[0].name}
              </Typography>
              <Typography variant="caption" color="secondary">
                {twitter}
              </Typography>
            </Box>
          </Box>
        ),
        noticias: (
          <Typography
            component="a"
            href={"/medios/" + data._id}
            variant="caption"
            color="secondary"
            fontWeight="medium" >
            Ver {data.news} noticias
          </Typography>
        ),
        tweets: (
          <Typography
            component="a"
            href={"/medios/" + data._id}
            variant="caption"
            color="secondary"
            fontWeight="medium">
            {data.totalRetweet} retweets y {data.totalReply} comentarios
          </Typography>
        ),
        actualizacion: (
          <Typography variant="caption" color="secondary" fontWeight="medium">
            {timeStamp(data.published)}
          </Typography>
        )
      };
    });
  }
  
  render() {
    const columns = [
      { name: "nombre", align: "left" },
      { name: "noticias", align: "left" },
      { name: "tweets", align: "center" },
      { name: "actualizacion", align: "center" }
    ];
    
    const { mediosNoticias, mediosDeportes, mediosCorazon } = this.state;
    
    return (
        <Box sx={{ p: 3, position: "relative", marginLeft: "17.125rem"}}>
          <Typography variant="subtitle1" fontWeight="bold" mt={1} ml={4} >
            Medios de noticias
          </Typography>
          <Box sx={{ mx: 3, py: 4 }}>
            <Lista columns={columns} rows={this.obtenerDatos(mediosNoticias)} />
          </Box>

          <Typography variant="subtitle1" fontWeight="bold" ml={4} >
            Medios de deportes
          </Typography>
          <Box sx={{ mx: 3, py: 4}}>
            <Lista columns={columns} rows={this.obtenerDatos(mediosDeportes)} />
          </Box>

          <Typography variant="subtitle1" fontWeight="bold" ml={4} >
            Medios del corazón
          </Typography>
          <Box sx={{ mx: 3, py: 4 }}>
            <Lista columns={columns} rows={this.obtenerDatos(mediosCorazon)} />
          </Box>
        </Box>
      );
  }
}


export default Medios;
