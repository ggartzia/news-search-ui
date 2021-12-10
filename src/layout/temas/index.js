import Grid from "@mui/material/Grid";

import Layout from "../../component/Layout";
import Header from "../../component/Header";
import Box from "../../component/Box";
import Typography from "../../component/Typography";

function Temas() {

  const tabs = ["24 h", "48 h", "1 semana"];
  const temas = "";

  return (
    <Layout>
    <Header title="Los temas más utilizados en las noticias" tabs={tabs} />
    <Box mt={5} mb={3}>
      <Grid container spacing={3}>
        {temas}
      </Grid>
    </Box>
    </Layout>
  );
}

export default Temas;
