import Box from "../Box";

function Layout({ children }) {

  return (
    <Box sx={{ p: 3, position: "relative", marginLeft: "17.125rem"}}>
      {children}
    </Box>
  );
}

export default Layout;
