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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            data-aos-delay="500"
            data-aos="fade-right"
            data-aos-duration="3000"
            src="/images/pfp.jpg"
            sx={{
              width: 350,
              height: 350,
            }}
            alt="Frank Asplund"
          />

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
            <Grid item spacing={4} px={2} mx={2}>
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

            <Grid item spacing={4} px={2} mx={2}>
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
          className="glass"
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
    </main>
  );
}
