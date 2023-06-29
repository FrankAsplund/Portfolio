import Link from "next/link";
import Image from "next/image";

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
  return (
    <main>
      <footer className="glass footer">
        <div className="footerItems">
          <Link
            className="glass hoverShadow"
            href="https://github.com/FrankAsplund/Portfolio"
            underline="none"
            mx={2}
          >
            <Image
              height={50}
              width={50}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="Github"
            />
          </Link>
          <Typography
            variant="body1"
            sx={{
              my: 2,
              px: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
            component="div"
          >
            This project was created in VS Code with React.js, Next.js and
            Material UI components.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              my: 2,
              px: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
            component="div"
          >
            <Link
              href="https://www.flaticon.com/free-icons/"
              style={{ textDecoration: "none", color: "white" }}
            >
              Icons created by Freepik - Flaticon
            </Link>
          </Typography>

          <div
            className="hover arrow glass"
            elevation={24}
            onClick={handleScrollTotop}
          >
            <Avatar
              src="/images/up-arrow.png"
              variant="rounded"
              sx={{
                width: 35,
                height: 35,
              }}
            />
          </div>
        </div>
      </footer>
      <style jsx>{`
        .footer {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          padding: 1rem;
        }

        .footerItems {
          display: flex;
          margin: 0.5rem 1rem 0.5rem 0.5rem;
          justify-content: center;
          align-items: center;
          flex-direction: row;
        }

        .arrow {
          padding: 1rem;
          border: 0.5px solid;
          border-radius: 15%;
          box-shadow: 0 0 0.5rem rgba(255, 255, 255, 0.05);
          cursor: pointer;
        }

        @media only screen and (max-width: 900px) {
          .footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            padding: 1rem;
          }

          .footerItems {
            display: flex;
            align-items: center;

            flex-direction: column;
          }
        }
      `}</style>
    </main>
  );
}
