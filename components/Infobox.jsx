import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import AOS from "aos";
import "aos/dist/aos.css";

/* import text from "../styles/text.module.css"; */
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useEffect } from "react";

export default function Infobox() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <main className="container-box" id="infobox">
        <Stack
          sx={{
            mt: "6rem",
            mb: "8rem",
          }}
          className="box"
          spacing={4}
        >
          <Stack className="avatar-box">
            <div
              className="avatar-container"
              data-aos-delay="500"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <div className="avatar glass hoverShadow">
                <span>
                  <Avatar
                    className="avatarImg"
                    src="/images/pfp2.jpg"
                    alt="Frank Asplund"
                  />
                </span>
              </div>
            </div>

            <Grid
              container
              rowSpacing={4}
              px={4}
              m={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              data-aos-delay="500"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <Grid
                item
                spacing={4}
                px={2}
                mx={2}
                className="glass hoverShadow"
              >
                <Link
                  href="https://www.linkedin.com/in/frank-asplund-794187221/"
                  underline="none"
                  mx={2}
                >
                  <Image
                    height={50}
                    width={50}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                    alt="LinkedIn"
                  />
                </Link>
              </Grid>

              <Grid
                item
                spacing={4}
                px={2}
                mx={2}
                className="glass hoverShadow"
              >
                <Link
                  href="https://github.com/FrankAsplund"
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
              </Grid>
            </Grid>
          </Stack>

          <Stack
            sx={{ py: 4, px: 6, m: 4 }}
            useFlexGap
            flexWrap="wrap"
            data-aos-delay="500"
            data-aos="zoom-in"
            data-aos-duration="4000"
          >
            <Typography
              gutterBottom
              variant="h2"
              m={0}
              sx={{ fontWeight: 400 }}
            >
              Frank Asplund
            </Typography>
            <Typography gutterBottom variant="h3" sx={{ fontWeight: 300 }}>
              <span className="text">Front-end developer</span>
            </Typography>
            <Typography gutterBottom variant="h5">
              Dedicated and determined to deliver responsive, functional
              websites on time, while ensuring a seamless user experience.
              Proficient in HTML, CSS, and JavaScript, with a focus on modern
              front-end frameworks such as
              <span style={{ color: "#00d8ff" }}> React </span>
              and
              <span style={{ color: "#42b883" }}> Vue.js</span>.
            </Typography>
          </Stack>
        </Stack>
      </main>
      <style jsx>
        {`
          .avatar-container {
            animation: bobbing 3s infinite alternate;
            width: 380px;
            height: 380px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          @keyframes bobbing {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0);
            }
          }

          .avatar-container .avatar {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .avatar span {
            position: absolute;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              rgb(74, 107, 137),
              rgba(35, 70, 167, 0.769)
            );
            border-radius: 50%;
            animation: circleRotate 5s linear infinite;

            display: flex;
            justify-content: center;
            align-items: center;
          }

          @keyframes glowing {
            0% {
              text-shadow: 0 0 2px #90caf9, 0 0 20px #90caf9, 0 0 30px #90caf9;
            }
            50% {
              text-shadow: none;
            }
            100% {
              text-shadow: 0 0 2px #90caf9, 0 0 20px #90caf9, 0 0 30px #90caf9;
            }
          }

          .text {
            animation: glowing 5s infinite;
            color: #90caf9;
          }

          @media only screen and (max-width: 900px) {
            .avatar-container {
              animation: bobbing 3s infinite alternate;
              width: 310px;
              height: 310px;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
        `}
      </style>
    </div>
  );
}
