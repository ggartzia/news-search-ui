import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Box from "../Box";
import Typography from "../Typography";


function User({ data }) {
  return (
    <Grid item ml={3} mr={2} mt={3} mb={3} key={data.id}>
      <Card style={{width: "330px"}}>
        <Box component="a"
             href={"/cuenta/" + data.id}
             display="flex"
             alignItems="center"
             px={1}
             py={1}
             mb={1}>
          <Box mr={2}>
            <Avatar src={data.image} alt={data.name} sx={{ width: 56, height: 56 }} />
          </Box>
          <Box display="flex" flexDirection="column">
            <Typography variant="button" fontWeight="medium">
              {data.name}
            </Typography>
            <Typography variant="caption" color="secondary">
              {data.tweets} noticias compartidas
            </Typography>
          </Box>
        </Box>
      </Card>
    </Grid>
  );
}

export default User;