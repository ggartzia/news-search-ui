import Card from "@mui/material/Card";

import Layout from "../../component/Layout";
import Box from "../../component/Box";
import Typography from "../../component/Typography";

function Temas() {

  return (
    <Layout>
      <Card sx={{ mx: 3, py: 2.5, px: 3 }}>
        <Box height="100%" mt={0.5} lineHeight={1}>
          <Typography variant="h5" fontWeight="medium">
            Los temas más utilizados en las noticias
          </Typography>
        </Box>
      </Card>

      <Box sx={{ mx: 6, py: 6, px: 2 }}>
        
      </Box>
    </Layout>
  );
}

export default Temas;
