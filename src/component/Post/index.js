import React, {forwardRef} from 'react'
import Avatar from "@mui/material/Avatar";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

const Post = forwardRef((data, ref) => {
  return (
    <div className="post" key={data._id}>
      <div className="post__avatar">
        <Avatar src={data.image} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {data.name}{" "} 
              <span className="post__headerSpecial">
                @{data.screen_name} 
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{data.text}</p>
          </div>
        </div>
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
})

export default Post;