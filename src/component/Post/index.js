import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

import Box from "../Box";
import Typography from "../Typography";

function Post({ data }) {
  return (
    <Card key={data._id}>
      <Box mr={2}>
        <Avatar src={data.image} alt={data.screen_name} />
      </Box>
      <Box display="flex" flexDirection="column">
        <Grid item px={2}>
          <Box display="flex" flexDirection="column">
            <Typography variant="button" fontWeight="medium" mb={1}>
                {data.name}{" "}
            </Typography>
            <Typography variant="caption" color="secondary">
              @{data.screen_name} 
            </Typography>
          </Box>
          <Box display="flex" flexDirection="column">
            <Typography variant="caption" color="secondary">
              {data.text}
            </Typography>
          </Box>
        </Grid>
        <Grid item px={2}>
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </Grid>
      </Box>
    </Card>
  );
})

export default Post;
