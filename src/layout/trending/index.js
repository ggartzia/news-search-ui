import Card from "@mui/material/Card";

import Layout from "../../component/Layout";
import Header from "../../component/Header";
import Box from "../../component/Box";
import Typography from "../../component/Typography";

function Trending() {

  const tabs = ["24 h", "48 h", "1 semana"];
  const noticias = "";

  return (
    <Layout>
      <Header title="Las noticias más comentadas en redes" tabs={tabs} />
      <Box mt={5} mb={3}>
        <Grid container spacing={3}>
          {noticias}
        </Grid>
      </Box>
    </Layout>
  );
}

export default Trending;
