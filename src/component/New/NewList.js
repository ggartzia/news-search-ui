import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import TwitterIcon from "@mui/icons-material/Twitter";
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { renderTopic, noticiasRelacionadas, twitterShare, findDayDifference } from "../New";
import Box from "../Box";
import Typography from "../Typography";

function NewList({ data }) {
  article = data.new ? data.new : data;
  const mediaLogo = `/medio/${article.paper}.jpg`;

  return (
      <Grid item ml={3} mt={2} mb={2} style={{width: "30%"}} key={article._id}>
        <Card>
          <Box component="a"
               href={article.fullUrl}
               display="flex"
               alignItems="center"
               px={2}
               py={2}>
            <Box mr={2}>
              <Avatar src={article.image}
                      alt={article.title}
                      variant="square"
                      sx={{ width: 100, height: 100 }} />
            </Box>
            <Box display="flex" flexDirection="column">
              <Typography variant="button" fontWeight="medium">
                {article.title}
              </Typography>
            </Box>
          </Box>

          <Box display="flex" alignItems="center" px={1} mb={1}>
            <Box mr={2}>
              <Avatar src={mediaLogo} alt={article.paper} size="s" />
            </Box>
            <Box display="flex" flexDirection="column">
              <Typography variant="button" fontWeight="medium">
                {article.paper}
              </Typography>
              <Typography variant="caption" color="secondary">
                Publicado hace {findDayDifference(article.published)}
              </Typography>
            </Box>
          </Box>
          <Grid container 
                px={1} 
                sx={{ justifyContent: 'space-between' }}>
            {article.topics.slice(0, 3).map((topic) => renderTopic(topic))}
          </Grid>
          <Grid container
                px={3}
                pt={1} 
                pb={0.5} 
                >
            {noticiasRelacionadas(article._id)}
            {twitterShare(article)}
          </Grid>
        </Card>
      </Grid>
  );

}

export default NewList;
