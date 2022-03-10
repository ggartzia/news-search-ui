// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

import Box from "../Box";
import Typography from "../Typography";

function MiniCard({ title, count }) {
  return (
    <Card>
      <Box bgColor="white" variant="gradient">
        <Box p={2} style={{width: "220px"}}>
          <Grid container alignItems="center">
            <Grid item xs={8}>
              <Box ml={0} lineHeight={1}>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color="dark">
                  {title}
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
                fontWeight="bold"
                borderRadius="md"
                display="flex"
                justifyContent="center"
                alignItems="center"
                shadow="md"
              >
                {count}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Card>
  );
}

export default MiniCard;
