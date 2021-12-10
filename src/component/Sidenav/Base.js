import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";

export default styled(Drawer)(({ theme }) => {
  const { palette, boxShadows, transitions } = theme;

  const { white } = palette;
  const { lg } = boxShadows;

  // styles for the sidenav when miniSidenav={false}
  const drawerOpenStyles = () => ({
    transform: "translateX(0)",
    transition: transitions.create("transform", {
      easing: transitions.easing.sharp,
      duration: transitions.duration.shorter,
    }),
    backgroundColor: white.main,
    boxShadow: lg,
    border: "none",
    marginBottom: "inherit",
    left: "0",
    width: 250,
    transform: "translateX(0)",
    transition: transitions.create(["width", "background-color"], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.enteringScreen,
    })
  });

  return {
    "& .MuiDrawer-paper": {
      ...drawerOpenStyles(),
    },
  };
});
