import InfiniteScroll from 'react-infinite-scroll-component';
import Grid from "@mui/material/Grid";

import Box from "../Box";
import Typography from "../Typography";

function Layout({ header, loadMore, items, render }) {

  return (
    <Box sx={{ p: 3, position: "relative", marginLeft: "17.125rem"}}>
      {header}
      <Box mt={3}>
          <InfiniteScroll
            data-testid="news-infinite-scroll"
            pageStart={0}
            dataLength={items?.length}
            next={loadMore}
            loader={<Typography variant="h5" fontWeight="medium">Buscando noticias...</Typography>}
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

export default Layout;
