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
          {aboutData.map((about) => (
            <Grid item spacing={4} p={2} m={2} key={about.id}>
              <Paper
                elevation={24}
                sx={{
                  p: 8,
                  mt: 8,
                }}
              >
                <Avatar
                  variant="rounded"
                  src={about.src}
                  sx={{ width: 150, height: 150 }}
                  alt={about.alt}
                />
              </Paper>
            </Grid>
          ))}
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
    alt: "Guitar",
  },
  {
    id: 2,
    src: "/images/home-cooked-meal.png",
    alt: "Cooking",
  },
  {
    id: 3,
    src: "/images/data.png",
    alt: "Coding",
  },
  {
    id: 4,
    src: "/images/gym.png",
    alt: "Gym",
  },
  {
    id: 5,
    src: "/images/cat.png",
    alt: "Cat",
  },
];
