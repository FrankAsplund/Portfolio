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
    <div>
      <main id="navbar">
        <AppBar color="transparent" position="static" className="navbar">
          <Toolbar>
            <div className="navbarContainer">
              <div className="navbarItems">
                <Button
                  href="#navbar"
                  variant="text"
                  className="hover"
                  sx={{ px: 2, mx: 2 }}
                  size="large"
                >
                  Home
                </Button>
                <Button
                  href="#about"
                  variant="text"
                  className="hover"
                  sx={{ px: 2, mx: 2 }}
                  size="large"
                >
                  About Me
                </Button>
                <Button
                  href="#skills"
                  variant="text"
                  className="hover"
                  sx={{ px: 2, mx: 2 }}
                  size="large"
                >
                  Skills
                </Button>
                <Button
                  href="#contact"
                  variant="text"
                  className="hover"
                  sx={{ px: 2, mx: 2 }}
                  size="large"
                >
                  Contact
                </Button>
              </div>
            </div>
          </Toolbar>
        </AppBar>
        <style jsx>{`
          .navbar {
            height: 100;

            max-height: 100px;
            min-width: 100%;
            display: flex;
            flex-direction: row;
          }

          .navbarContainer {
            display: flex;
            width: 100%;
            padding: 1rem 0 1rem 0;
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
            }

            .navbarItems {
              display: flex;
              align-items: center;
              padding: 0.5rem;
              flex-direction: column;
            }
          }
        `}</style>
      </main>
    </div>
  );
}
