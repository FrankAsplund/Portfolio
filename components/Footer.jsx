import Link from "next/link";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const handleScrollTotop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function Footer() {
  /* useEffect(() => {
    AOS.init();
  }, []); */
  return (
    <footer>
      <AppBar
        position="static"
        sx={{
          height: 100,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Grid item spacing={4} p={2} m={2}>
          <Typography variant="h4" component="div">
            Frank Asplund
          </Typography>
        </Grid>

        <Grid item spacing={4} p={2} m={2}>
          <Typography variant="h5" component="div">
            This project was created in React.js, and Next.js with Material UI
            components.
          </Typography>
        </Grid>

        {/* <Grid item spacing={4} p={2} m={2}>
          <Link href="https://www.flaticon.com/free-icons/gym" underline="none">
            Icons created by Freepik - Flaticon
          </Link>
        </Grid> */}

        <Grid className="arrow" item spacing={4} p={2} m={2}>
          <Avatar
            onClick={handleScrollTotop}
            src="/images/up-arrow.png"
            variant="rounded"
            sx={{
              width: 35,
              height: 35,
            }}
          />
        </Grid>
      </AppBar>
      <style jsx>{`
        footer {
          background: #0f0f0f;
        }

        .arrow {
        }

        .arrow:hover {
          padding: 2px;
          border: solid 1px;
          background: #0f0f0f;
          border-radius: 2px;
        }

        .arrow:hover,
        .arrow:focus {
          background-color: #fff;
          color: #333;
        }
      `}</style>
    </footer>
  );
}
