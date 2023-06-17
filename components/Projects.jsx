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

import React, { useEffect, useState } from "react";

const Projects = () => {
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
          Some projects I've made
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
                width: 400,
                height: 400,
              }}
            >
              <Typography
                gutterBottom
                variant="h4"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Svinneriet
              </Typography>
              <Avatar
                variant="rounded"
                src="/images/guitar.png"
                sx={{ width: 150, height: 150 }}
                alt="Pic"
              />

              <Typography
                gutterBottom
                variant="h6"
                sx={{
                  width: 150,
                  height: 150,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Project done in React, with backend etc
              </Typography>
            </Paper>
          </Grid>
          <Grid item spacing={4} p={2} m={2}>
            <Paper
              elevation={24}
              sx={{
                p: 8,
                width: 400,
                height: 400,
              }}
            >
              <Typography
                gutterBottom
                variant="h2"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Examensarbete
              </Typography>
              <Avatar
                variant="rounded"
                src="/images/guitar.png"
                sx={{ width: 150, height: 150 }}
                alt="Pic"
              />

              <Typography
                gutterBottom
                variant="h6"
                sx={{
                  width: 150,
                  height: 150,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Project done in Vue 3, with Vuetify with backend etc
              </Typography>
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
};

export default Projects;
