import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Stack from "@mui/material/Stack";

import { Link } from "react-scroll";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });
  }
}

const SmoothScrollButton = ({ href, children }) => {
  const handleClick = () => {
    smoothScroll(href);
  };

  return (
    <Link
      to={href}
      smooth={true}
      spy={true}
      offset={-70} // Adjust the offset value based on your layout
      duration={500} // Adjust the duration as desired
      onClick={handleClick}
    >
      <Button
        variant="text"
        className="hover"
        sx={{ px: 2, mx: 2 }}
        size="large"
      >
        {children}
      </Button>
    </Link>
  );
};

const Navbar = () => {
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
                <SmoothScrollButton href="#navbar">Home</SmoothScrollButton>
                <SmoothScrollButton href="#about">About Me</SmoothScrollButton>
                <SmoothScrollButton href="#skills">Skills</SmoothScrollButton>
                <SmoothScrollButton href="#experience">
                  Experience
                </SmoothScrollButton>
                <SmoothScrollButton href="#contact">Contact</SmoothScrollButton>
                <Button
                  variant="text"
                  className="cardGlass hover"
                  sx={{ px: 2, mx: 2 }}
                  size="large"
                  onClick={() =>
                    window.open(
                      "https://github.com/FrankAsplund/my-cv/raw/878e4f560817b5bef7c733f04f41617c13da5010/CV-FrankAsplund%202023%20(English).pdf",
                      "_blank"
                    )
                  }
                >
                  Download Resume
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
};

export default Navbar;
