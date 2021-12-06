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
          <Box display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <Typography variant="h4">Medios utilizados</Typography>
          </Box>
          <Box
            sx={{
              "& .MuiTableRow-root:not(:last-child)": {
                "& td": {
                  borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                    `${borderWidth[1]} solid ${borderColor}`,
                },
              },
            }}
          >
            <Lista columns={columns} rows={rows} />
          </Box>

    </Layout>
  );
}

export default Medios;
