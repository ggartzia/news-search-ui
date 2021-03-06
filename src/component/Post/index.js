import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Card from "@mui/material/Card";
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import Avatar from "@mui/material/Avatar";
import IconButton from '@mui/material/IconButton';
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import SentimentVerySatisfiedOutlinedIcon from '@mui/icons-material/SentimentVerySatisfiedOutlined'; //happy
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined'; //relax
import SentimentNeutralOutlinedIcon from '@mui/icons-material/SentimentNeutralOutlined'; //none
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined'; //sad
import SentimentVeryDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentVeryDissatisfiedOutlined'; //angry

const twitterHost = 'https://twitter.com/'
const twitterActions =  twitterHost + 'intent'
const tweetReply = twitterActions + '/tweet?in_reply_to='
const tweetRetweet = twitterActions + '/retweet?tweet_id='
const tweetLike = twitterActions + '/like?tweet_id='

function show_sentiment(rating) {
  if (rating == 'none') {
    return <SentimentNeutralOutlinedIcon color="info" />
  } else if (rating == 'happy') {
    return <SentimentVerySatisfiedOutlinedIcon color="success" />
  } else if (rating == 'relax') {
    return <SentimentSatisfiedOutlinedIcon color="info" />
  } else if (rating == 'sad') {
    return <SentimentDissatisfiedOutlinedIcon color="warning" />
  } else if (rating == 'angry') {
    return <SentimentVeryDissatisfiedOutlinedIcon color="error" />
  } else {
    return '';
  }
}

function Post({ data }) {
  return (
    <Card key={data._id}
          sx={{ width: '28%', margin: 3 }} >
      <Box component="a"
           href={twitterHost + data.screen_name}
           target="_blank"
           rel="noreferrer"
           color="text.primary">
        <CardHeader
          avatar={
            <Avatar src={data.image} alt={data.screen_name} />
          }
          title={data.name}
          action={show_sentiment(data.rating)}
          header={"@" + data.screen_name}
        />
        
      </Box>
      <CardContent>
        <Typography variant="body2"
                    color="text.secondary"
                    component="a"
                    href={twitterHost + data.screen_name + '/status/' + data._id }>
          {data.text}
        </Typography>
      </CardContent>
      <CardActions sx={{display: "flex", justifyContent: "space-around"}}>
        <IconButton aria-label="Responder"
                    target="_blank"
                    href={tweetReply  + data._id }>
          <ChatBubbleOutlineIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="Retwittear"
                    target="_blank"
                    href={tweetRetweet  + data._id }>
          <RepeatIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="Me gusta"
                    target="_blank"
                    href={tweetLike  + data._id }>
          <FavoriteBorderIcon fontSize="small" />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Post;
