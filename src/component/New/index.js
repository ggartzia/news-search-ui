import { forwardRef } from "react";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import TwitterIcon from "@mui/icons-material/Twitter";
import AddCircleIcon from '@mui/icons-material/AddCircle';

import Avatar from "../Avatar";
import Box from "../Box";
import Typography from "../Typography";

import pxToRem from "../../assets/theme/functions/pxToRem";
import findDayDifference from "../../assets/theme/functions/timeCalc";

function New({ data }) {
  const mediaLogo = `/medio/${data.paper}.jpg`;
  
  const renderTopic = function(topic) {
    return (
      <Grid item sx={{ mx: 0, py: 0 }} key={topic}>
        <Chip label={topic}
              color="secondary"
              component="a"
              href={"/buscarTema/" + topic}
              sx={{ cursor: 'pointer', maxWidth: '130px' }} />
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
        {"  " + tweetCount}
      </Box>
    );
  };

  return (
      <Grid item xs={12} md={6} xl={4} key={data._id}>
        <Card>
          <Box component="a"
               href={data.fullUrl}
               display="flex"
               alignItems="center"
               px={1}
               py={1}
               mb={1}>
            <Box mr={2}>
              <Avatar src={data.image} alt={data.title} variant="square" size="l"/>
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
            {noticiasRelacionadas(data._id)}
            {twitterShare(data._id, data.tweetCount)}
          </Grid>
        </Card>
      </Grid>
  );

}

export default New;
