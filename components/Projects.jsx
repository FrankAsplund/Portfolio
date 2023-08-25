import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

import React, { useEffect, useState } from "react";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main data-aos="fade-up" data-aos-delay="100" data-aos-duration="2000">
      <Container
        sx={{
          display: "grid",
          mt: "6rem",
          mb: "4rem",
          justifyItems: "center",
          flexWrap: "wrap",
          textAlign: "center",
        }}
      >
        <Typography gutterBottom variant="h3">
          <span className="text" sx={{ textAlign: "center" }}>
            Currently deployed projects
          </span>
        </Typography>

        <Grid
          container
          rowSpacing={1}
          spacing={0}
          minHeight={160}
          columns={2}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item spacing={4} p={2} m={2}>
            <Typography
              gutterBottom
              variant="h4"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              🎵 The Music Rater 🎵
            </Typography>
            <Link
              className="project-container"
              href="https://music-rater-navy.vercel.app/"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar
                className="cardHoverShadow project-pic"
                variant="rounded"
                src="/images/musicraterTS.png"
                alt="Pic"
              />
            </Link>
            <Typography
              gutterBottom
              variant="text-sm"
              sx={{
                mt: "1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Project done in Typescript, React.js, Next.js, with Tailwind CSS.
              Deployed with Vercel.
            </Typography>
            <Typography
              gutterBottom
              variant="text-sm"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Still a work in progress, but feel free to try it out!
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <style jsx>{`
        main {
          font-family: Roboto;
          padding: 2rem 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .project-container {
          width: 700px;
          height: 500px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .project-pic {
          width: 700px;
          height: 500px;
        }

        @media only screen and (max-width: 900px) {
          .project-container {
            width: 310px;
            height: 310px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .project-pic {
            width: 310px;
            height: 310px;
          }
        }
      `}</style>
    </main>
  );
};

export default Projects;
