import InfiniteScroll from 'react-infinite-scroll-component';
import Grid from "@mui/material/Grid";
import CircularProgress from '@mui/material/CircularProgress';

import Box from "../Box";

function DataScroll({ header, loadMore, items, render }) {
  return (
    <Box sx={{ p: 3, position: "relative", marginLeft: "17.125rem"}}>
      {header}
      <Box mt={3}>
          <InfiniteScroll
            data-testid="news-infinite-scroll"
            pageStart={0}
            dataLength={items?.length}
            next={loadMore}
            loader={<Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
                         mt={10} >
                      <CircularProgress color="secondary" />
                    </Box>}
            hasMore={true}
          >
            <Grid container key="noticias">
              {render(items)}
            </Grid>
          </InfiniteScroll>
        </Box>
      
    </Box>
  );
}

export default DataScroll;
