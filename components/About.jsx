import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import AOS from "aos";
import "aos/dist/aos.css";

import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

import { useEffect } from "react";
import ReactFlipCard from "reactjs-flip-card";

export default function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main data-aos="zoom-in-up" data-aos-duration="4000">
      <Container
        sx={{
          display: "grid",
          mt: "6rem",
          mb: "4rem",
          justifyItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Typography gutterBottom variant="h3">
          Hi!
        </Typography>
        <Typography gutterBottom variant="h5">
          These are my interests
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
            <Paper
              elevation={24}
              sx={{
                p: 8,
                mt: 8,
              }}
            >
              <ReactFlipCard
                frontComponent={
                  <div>
                    <Avatar
                      variant="rounded"
                      src="/images/guitar.png"
                      sx={{ width: 150, height: 150 }}
                      alt="Pic"
                    />
                  </div>
                }
                backComponent={
                  <div>
                    <Typography gutterBottom variant="h5">
                      I like to play guitar
                    </Typography>
                  </div>
                }
              />
            </Paper>
          </Grid>

          <Grid item spacing={4} p={2} m={2}>
            <Paper
              elevation={24}
              sx={{
                p: 8,
                mt: 8,
              }}
            >
              <Avatar
                variant="rounded"
                src="/images/home-cooked-meal.png"
                sx={{ width: 150, height: 150 }}
                alt="Pic"
              />
            </Paper>
          </Grid>

          <Grid item spacing={4} p={2} m={2}>
            <Paper
              elevation={24}
              sx={{
                p: 8,
                mt: 8,
              }}
            >
              <Avatar
                variant="rounded"
                src="/images/data.png"
                sx={{ width: 150, height: 150 }}
                alt="Pic"
              />
            </Paper>
          </Grid>

          <Grid item spacing={4} p={2} m={2}>
            <Paper
              elevation={24}
              sx={{
                p: 8,
                mt: 8,
              }}
            >
              <Avatar
                variant="rounded"
                src="/images/gym.png"
                sx={{ width: 150, height: 150 }}
                alt="Pic"
              />
            </Paper>
          </Grid>

          <Grid item spacing={4} p={2} m={2}>
            <Paper
              elevation={24}
              sx={{
                p: 8,
                mt: 8,
              }}
            >
              <Avatar
                variant="rounded"
                src="/images/cat.png"
                sx={{ width: 150, height: 150 }}
                alt="Pic"
              />
            </Paper>
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
      `}</style>
    </main>
  );
}

const aboutData = [
  {
    id: 1,
    src: "/images/guitar.png",
    text: "I like to play guitar",
    alt: "Guitar",
  },
  {
    id: 2,
    src: "/images/home-cooked-meal.png",
    text: "I like to cook",
    alt: "Cooking",
  },
  {
    id: 3,
    src: "/images/data.png",
    text: "I like to code",
    alt: "Coding",
  },
  {
    id: 4,
    src: "/images/gym.png",
    text: "I like to work out",
    alt: "Gym",
  },
  {
    id: 5,
    src: "/images/cat.png",
    text: "I like to play with my cats",
    alt: "Cat",
  },
];
