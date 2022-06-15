import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "../Box";
import Typography from "../Typography";

export function capitalize(text) {
  if (text.length > 3) {
    return text.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
  }

  return text.toUpperCase();
}

export default function Topic({ topic }) {
  return (
    <Grid item sx={{ margin: 3, width: "20%" }} key={topic.name}>
        <Typography
            component="a"
            href={"/buscarTema/" + topic.name}
            variant="caption"
            color="secondary"
            fontWeight="medium" >
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
                        {capitalize(topic.name)}
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
                      {topic.usage}
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Card>
        </Typography>
      </Grid>
      );
}
