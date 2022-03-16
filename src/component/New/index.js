import { forwardRef } from "react";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import TwitterIcon from "@mui/icons-material/Twitter";
import AddCircleIcon from '@mui/icons-material/AddCircle';

import Box from "../Box";
import Typography from "../Typography";

export function renderTopic (topic) {
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
}

export function noticiasRelacionadas (id) {
  return (
    <Box
      component="a"
      href={"/noticias/" + id}
      rel="noreferrer"
      fontSize="0.875rem"
      lineHeight={2}>
      <Typography variant="button" pr={0.5} fontWeight="medium" >
        Noticias relacionadas
      </Typography>

      <Typography variant="span" fontSize="large" verticalAlign="sub" >
        <AddCircleIcon />
      </Typography>
    </Box>
  );
}

export function twitterShare (id, tweetCount) {
  return (
    <Box
      component="a"
      href={"/trending/" + id}
      rel="noreferrer"
      style={{float: 'right'}}
      fontSize="1.125rem"
      color="#55acee">

      <TwitterIcon />
      {"  " + (tweetCount || 0)}
    </Box>
  );
}

function TextReduced(text, length) {
    if (text == null) {
        return "";
    }

    if (text.length <= length) {
        return text;
    }

    text = text.substring(0, length);
    const last = text.lastIndexOf(" ");
    text = text.substring(0, last);

    return text + "...";
}

export function findDayDifference(published) {
  if (published != undefined) {
    const date1 = new Date(published);
    const date2 = new Date();

    const difference = (Math.abs(date2-date1))
    let diff = Math.floor(difference/(1000*60*60*24))
    if (diff > 0) {
      return diff + " día" + (diff > 1 ? "s" : "")
    } else {
      diff = Math.floor(difference/(1000*60*60))
      if (diff > 0) {
        return diff + " hora" + (diff > 1 ? "s" : "")
      } else {
        diff = Math.floor(difference/(1000*60))
        return diff + " minuto"  + (diff > 1 ? "s" : "")
      }
    }
  }
  return "0 segundos";
}

export default function New({ data }) {
  if (Object.keys(data).length != 0) {
    const mediaLogo = `/medio/${data.paper}.jpg`;

    return (
        <Grid item px={2} key={data.id}>
          <Card>
            <Box component="a"
                 href={data.fullUrl}
                 display="flex"
                 alignItems="center"
                 px={2}
                 py={2}>
              <Box mr={2}>
                <Avatar src={data.image} alt={data.title} variant="square" sx={{ width: 100, height: 100 }} />
              </Box>
              <Box display="flex" flexDirection="column">
                <Typography variant="button" fontWeight="medium" mb={1}>
                  {data.title}
                </Typography>
                <Typography variant="caption" color="secondary">
                  {TextReduced(data.description, 750)}
                </Typography>
              </Box>
            </Box>

            <Box display="flex" alignItems="center" px={2}>
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
                  px={2} 
                  py={2}
                  sx={{ justifyContent: 'space-between' }}>
              {data.topics.map((topic) => renderTopic(topic))}
            </Grid>
          </Card>
        </Grid>
    );
  } else {
    return "";
  }
}

