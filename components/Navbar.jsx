import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Stack from "@mui/material/Stack";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function ButtonAppBar() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main>
      <AppBar position="static" className="glass navbar">
        <Toolbar>
          <Typography
            variant="h3"
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            Frank Asplund
          </Typography>

          <div className="navbarContainer">
            <div className="navbarItems">
              <Button
                href="#infobox"
                variant="text"
                className="hover"
                sx={{ px: 2, mx: 2 }}
              >
                Home
              </Button>
              <Button
                href="#about"
                variant="text"
                className="hover"
                sx={{ px: 2, mx: 2 }}
              >
                About Me
              </Button>
              <Button
                href="#skills"
                variant="text"
                className="hover"
                sx={{ px: 2, mx: 2 }}
              >
                Skills
              </Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <style jsx>{`
        .navbar {
          height: 100;
          padding: 0.5rem;
          max-height: 100px;
          min-width: 100%;
          display: flex;
          flex-direction: row;
        }

        .navbarContainer {
          display: flex;
          width: 100%;
          margin: 0.5rem 1rem 0.5rem 0.5rem;
          justify-content: flex-end;
          align-items: center;
          flex-direction: row;
        }

        .navbarItems {
          display: flex;
          margin: 0.5rem 1rem 0.5rem 0.5rem;
          justify-content: flex-end;
          align-items: center;
          flex-direction: row;
        }

        @media only screen and (max-width: 900px) {
          .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            padding: 1rem;
          }

          .navbarItems {
            display: flex;
            align-items: center;
            padding: 1rem;
            flex-direction: column;
          }
        }
      `}</style>
    </main>
  );
}
