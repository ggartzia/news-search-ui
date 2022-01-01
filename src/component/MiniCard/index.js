// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

import Box from "../Box";
import Typography from "../Typography";

function MiniCard({ title, count, icon }) {
  return (
    <Card>
      <Box bgColor="white" variant="gradient">
        <Box p={2}>
          <Grid container alignItems="center">
            <Grid item xs={8}>
              <Box ml={0} lineHeight={1}>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color="dark">
                  {title}
                </Typography>
                <Typography
                  variant="button"
                  color="text"
                  opacity={1}
                  textTransform="capitalize"
                  fontWeight="medium">
                  Utilizado en {count} noticias
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box
                variant="gradient"
                bgColor="info"
                color="white"
                width="3rem"
                height="3rem"
                marginLeft="auto"
                borderRadius="md"
                display="flex"
                justifyContent="center"
                alignItems="center"
                shadow="md"
              >
                <Icon fontSize="small" color="inherit">
                  {icon}
                </Icon>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Card>
  );
}

export default MiniCard;
