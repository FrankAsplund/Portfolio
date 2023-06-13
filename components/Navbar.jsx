import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function ButtonAppBar() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box
      sx={{ flexGrow: 1 }}
      elevation={0}
      data-aos="fade-down"
      data-aos-duration="2000"
    >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            Frank Asplund
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
