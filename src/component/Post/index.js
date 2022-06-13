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
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';


const twitterHost = 'https://twitter.com/'
const twitterActions =  twitterHost + 'intent'
const tweetReply = twitterActions + '/tweet?in_reply_to='
const tweetRetweet = twitterActions + '/retweet?tweet_id='
const tweetLike = twitterActions + '/like?tweet_id='

function show_sentiment(rating) {
  if (rating == 'neutral') {
    return <SentimentNeutralIcon fontSize="small" color="info" style={{ float: 'right' }} />
  } else if (rating == 'positive') {
    return <SentimentVerySatisfiedIcon fontSize="small" color="success" style={{ float: 'right' }} />
  } else if (rating == 'negative') {
    return <SentimentVeryDissatisfiedIcon fontSize="small" color="error" style={{ float: 'right' }} />
  } else {
    return '';
  }
}

function Post({ data }) {
  return (
    <Card key={data._id}
          sx={{ maxWidth: 330,
                marginLeft: 3,
                marginRight: 3,
                marginBottom: 3,
                marginTop: 3 }} >
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
          subheader={"@" + data.screen_name}
        />
        {show_sentiment(data.rating)}
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
