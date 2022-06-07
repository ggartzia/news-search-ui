import InfiniteScroll from 'react-infinite-scroll-component';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CircularProgress from '@mui/material/CircularProgress';

function DataScroll({ header, loadMore, items, total, render }) {
  return (
    <Box sx={{ p: 3, marginLeft: "17.125rem" }}>
      {header}
      <Box mt={3} sx={{ height: "%100", overflowY: "hidden" }} >
          <InfiniteScroll
            data-testid="news-infinite-scroll"
            pageStart={0}
            dataLength={items?.length}
            next={loadMore}
            loader={<Box sx={{ display: "flex", p: 3, alignItems: "center", flexDirection: "column" }}>
                      <CircularProgress color="secondary" />
                    </Box>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Has llegado al final</b>
              </p>
            }
            hasMore={items?.length < total}
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
