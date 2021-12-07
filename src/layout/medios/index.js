import Card from "@mui/material/Card";

import Layout from "../../component/Layout";
import Lista from "../../component/Lista";
import Box from "../../component/Box";
import Typography from "../../component/Typography";
import Avatar from "../../component/Avatar";

import data from "./medios.json";

function obtenerDatos() {
  return data.map( (data) => {
    return {
      nombre: (
        <Box display="flex" alignItems="center" px={1} py={0.5}>
          <Box mr={2}>
            <Avatar src={data.logo} alt={data.paper} size="sm" variant="rounded" />
          </Box>
          <Box display="flex" flexDirection="column">
            <Typography variant="button" fontWeight="medium">
              {data.paper}
            </Typography>
            <Typography variant="caption" color="secondary">
              {data.feed}
            </Typography>
          </Box>
        </Box>
      ),
      tema: (
        <Typography variant="caption" color="secondary" fontWeight="medium">
          {data.topic}
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
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium" >
          Ejecutar
        </Typography>
      )
    };
  });
}

function Medios() {

  const columns = [
    { name: "nombre", align: "left" },
    { name: "tema", align: "left" },
    { name: "noticias", align: "center" },
    { name: "actualizacion", align: "center" },
    { name: "accion", align: "center" },
  ];
  const rows = obtenerDatos();

  return (
    <Layout>
      <Card sx={{ mx: 3, py: 2.5, px: 3 }}>
        <Box height="100%" mt={0.5} lineHeight={1}>
          <Typography variant="h5" fontWeight="medium">
            Medios utilizados
          </Typography>
        </Box>
      </Card>

      <Box sx={{ mx: 6, py: 6, px: 2 }}>
        <Lista columns={columns} rows={rows} />
      </Box>
    </Layout>
  );
}

export default Medios;
