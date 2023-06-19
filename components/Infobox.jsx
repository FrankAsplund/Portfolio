import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import AOS from "aos";
import "aos/dist/aos.css";

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
    <main className="container-box">
      <Stack
        sx={{
          mt: "6rem",
          mb: "8rem",
        }}
        className="box"
        spacing={4}
      >
        <Stack
          direction="column"
          sx={{
            mr: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="avatar-container"
            data-aos-delay="500"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <div className="avatar glass hoverShadow">
              <span>
                <Avatar
                  src="/images/pfp.jpg"
                  sx={{
                    width: 350,
                    height: 350,
                  }}
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
            <Grid item spacing={4} px={2} mx={2} className="glass hoverShadow">
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

            <Grid item spacing={4} px={2} mx={2} className="glass hoverShadow">
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
          className="glass hoverShadow"
          sx={{ p: 4, m: 4 }}
          useFlexGap
          flexWrap="wrap"
          data-aos-delay="500"
          data-aos="fade-left"
          data-aos-duration="4000"
        >
          <Typography gutterBottom variant="h1" m={0}>
            Frank Asplund
          </Typography>
          <Typography gutterBottom variant="h3">
            Front-end developer
          </Typography>
          <Typography gutterBottom variant="h5">
            Dedicated and determined to deliver responsive, functional websites
            on time. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Obcaecati nobis quibusdam quia ad ipsa explicabo perspiciatis at,
            accusantium molestias omnis.
          </Typography>
        </Stack>
      </Stack>
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
              rgba(0, 0, 0, 0.741),
              rgba(36, 58, 117, 0.769)
            );
            border-radius: 50%;
            animation: circleRotate 5s linear infinite;

            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </main>
  );
}
