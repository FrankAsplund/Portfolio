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
    <main>
      <AppBar
        position="static"
        className="glass navbar"
        sx={{
          height: 100,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Toolbar>
          <Typography
            variant="h3"
            component="div"
            sx={{
              flexGrow: 1,
              height: 100,
              display: "flex",
              alignItems: "center",
            }}
          >
            Frank Asplund
          </Typography>
        </Toolbar>
      </AppBar>
      <style jsx>{`
        .navbar {
          max-height: 100px;
          min-width: 100%;
          display: flex;
          flex-direction: row;
        }
      `}</style>
    </main>
  );
}
