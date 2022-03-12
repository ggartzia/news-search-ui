import React from "react";

import Layout from "../../component/Layout";
import Header from "../../component/Header";
import Lista from "../../component/Lista";
import Box from "../../component/Box";
import Typography from "../../component/Typography";

import Avatar from "@mui/material/Avatar";
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import FavoriteIcon from '@mui/icons-material/Favorite';

const serverHost = 'https://news-puller.herokuapp.com';
const apiEndpoint = serverHost + '/get/media';

class Medios extends React.Component {

  constructor(props) {
      super(props);

      this.state = {
          mediosNoticias: [],
          mediosDeportes: [],
          mediosCorazon: []
      };
  }
  
  showIcon(theme) {
    if (theme == 'noticias') {
      return <NewspaperIcon />
    } else if (theme == 'deportes') {
      return <SportsBasketballIcon />
    } else {
      return <FavoriteIcon />
    }
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
      const execute = `${serverHost}/fetch/${data.paper}`
      const mediaLogo = `/medio/${data.paper}.jpg`;

      return {
        nombre: (
          <Box display="flex" alignItems="center" px={1} py={0.5}>
            <Box mr={2}>
              <Avatar src={mediaLogo} alt={data.paper} sx={{ width: 32, height: 32 }} />
            </Box>
            <Box display="flex" flexDirection="column">
              <Typography variant="button" fontWeight="medium">
                {data.name}
              </Typography>
              <Typography variant="caption" color="secondary">
                {data.feed}
              </Typography>
            </Box>
          </Box>
        ),
        tema: (
          <Typography variant="caption" color="secondary" fontWeight="medium">
            {this.showIcon(data.theme)}
          </Typography>
        ),
        noticias: (
          <Typography variant="caption" color="secondary" fontWeight="medium">
            {data.numeroNoticias}
          </Typography>
        ),
        actualizacion: (
          <Typography variant="caption" color="secondary" fontWeight="medium">
            {data.actualizacion}
          </Typography>
        ),
        accion: (
          <Typography
            component="a"
            href={execute}
            variant="caption"
            color="secondary"
            fontWeight="medium" >
            Ejecutar
          </Typography>
        )
      };
    });
  }
  
  render() {
    const columns = [
      { name: "nombre", align: "left" },
      { name: "tema", align: "left" },
      { name: "noticias", align: "center" },
      { name: "actualizacion", align: "center" },
      { name: "accion", align: "center" },
    ];
    
    const { mediosNoticias, mediosDeportes, mediosCorazon } = this.state;
    
    return (
        <Layout>
          <Header title="Medios utilizados" />

          <Typography variant="subtitle1" fontWeight="bold" mt={4} >
            Medios de noticias
          </Typography>
          <Box sx={{ mx: 3, py: 4 }}>
            <Lista columns={columns} rows={this.obtenerDatos(mediosNoticias)} />
          </Box>

          <Typography variant="subtitle1" fontWeight="bold">
            Medios de deportes
          </Typography>
          <Box sx={{ mx: 3, py: 4}}>
            <Lista columns={columns} rows={this.obtenerDatos(mediosDeportes)} />
          </Box>

          <Typography variant="subtitle1" fontWeight="bold">
            Medios del corazón
          </Typography>
          <Box sx={{ mx: 3, py: 4 }}>
            <Lista columns={columns} rows={this.obtenerDatos(mediosCorazon)} />
          </Box>
        </Layout>
      );
  }
}


export default Medios;
