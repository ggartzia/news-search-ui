import { forwardRef } from "react";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import TwitterIcon from "@mui/icons-material/Twitter";
import AddCircleIcon from '@mui/icons-material/AddCircle';

import Box from "../Box";
import Typography from "../Typography";

import pxToRem from "../../assets/theme/functions/pxToRem";
import findDayDifference from "../../assets/theme/functions/timeCalc";

function New({ data }) {
  const mediaLogo = `/medio/${data.paper}.jpg`;
  
  const renderTopic = function(topic) {
    const name = topic.name || topic;
    return (
      <Grid item sx={{ mx: 0, py: 0 }} key={name}>
        <Chip label={name}
              color="secondary"
              component="a"
              href={"/buscarTema/" + name}
              sx={{ cursor: 'pointer', maxWidth: '130px', textTransform: 'capitalize' }} />
      </Grid>
    );
  };

  const noticiasRelacionadas = function(id) {
    return (
      <Box
        component="a"
        href={"/noticias/" + id}
        rel="noreferrer"
        fontSize={pxToRem(14)}
        lineHeight={2}>
        <Typography variant="button" pr={0.5} fontWeight="medium" >
          Noticias relacionadas
        </Typography>

        <Typography variant="span" fontSize="large" verticalAlign="sub" >
          <AddCircleIcon />
        </Typography>
      </Box>
    );
  };

  const twitterShare = function(id, tweetCount) {
    return (
      <Box
        component="a"
        href={"/trending/" + id}
        rel="noreferrer"
        style={{float: 'right'}}
        fontSize={pxToRem(18)}
        color="#55acee">

        <TwitterIcon />
        {"  " + (tweetCount || 0)}
      </Box>
    );
  };

  return (
      <Grid item ml={3} mt={3} mb={3} key={data.id}>
        <Card style={{width: "340px"}}>
          <Box component="a"
               href={data.fullUrl}
               display="flex"
               alignItems="center"
               px={2}
               py={2}
               mb={1}>
            <Box mr={2}>
              <Avatar src={data.image} alt={data.title} variant="square" sx={{ width: 100, height: 100 }} />
            </Box>
            <Box display="flex" flexDirection="column">
              <Typography variant="button" fontWeight="medium">
                {data.title}
              </Typography>
            </Box>
          </Box>

          <Box display="flex" alignItems="center" px={1} py={0.5}>
            <Box mr={2}>
              <Avatar src={mediaLogo} alt={data.paper} size="s" />
            </Box>
            <Box display="flex" flexDirection="column">
              <Typography variant="button" fontWeight="medium">
                {data.paper}
              </Typography>
              <Typography variant="caption" color="secondary">
                Publicado hace {findDayDifference(data.published)}
              </Typography>
            </Box>
          </Box>
          <Grid container 
                px={1} 
                sx={{ justifyContent: 'space-between' }}>
            {data.topics.slice(0, 3).map((topic) => renderTopic(topic))}
          </Grid>
          <Grid container
                px={2}
                py={2} 
                sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
            {noticiasRelacionadas(data.id)}
            {twitterShare(data.id, data.tweetCount)}
          </Grid>
        </Card>
      </Grid>
  );

}

export default New;
