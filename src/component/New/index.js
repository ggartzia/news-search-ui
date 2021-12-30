import { forwardRef } from "react";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import TwitterIcon from "@mui/icons-material/Twitter";
import AddCircleIcon from '@mui/icons-material/AddCircle';

import Avatar from "../Avatar";
import Box from "../Box";
import Typography from "../Typography";

import colors from "../../assets/theme/base/colors";

import pxToRem from "../../assets/theme/functions/pxToRem";
import findDayDifference from "../../assets/theme/functions/timeCalc";

function New({ data }) {

  const { socialMediaColors } = colors;

  const noticiasRelacionadas = function(id) {
    return (
      <Box
        component="a"
        href="/ultimas-noticias/{id}"
        target="_blank"
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
        href="/trending/{id}"
        rel="noreferrer"
        fontSize={pxToRem(18)}
        color={socialMediaColors.twitter.main}
        pr={1}
        pl={15}>

        <TwitterIcon />
        {tweetCount}
      </Box>
    );
  };

  return (
      <Grid item xs={12} md={6} xl={4} key={data._id}>
        <Card>
          <Box display="flex" alignItems="center" px={1} py={1} mb={1}>
            <Box mr={2}>
              <Avatar src={data.image} alt="something here" variant="square" size="xxl"/>
            </Box>
            <Box display="flex" flexDirection="column">
              <Typography variant="button" fontWeight="medium">
                {data.title}
              </Typography>
            </Box>
          </Box>

          <Box display="flex" alignItems="center" px={1} py={0.5}>
            <Box mr={2}>
              <Avatar src={data.logo} alt={data.paper} size="sm" />
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
          
          <Box display="flex" px={1} py={0.5}>
            {noticiasRelacionadas(data._id)}
            {twitterShare(data._id, data.tweetCount)}
          </Box>
        </Card>
      </Grid>
  );

}

export default New;
