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
import ReactCardFlip from "react-card-flip";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [cardStates, setCardStates] = useState([
    { isFlipped: false },
    { isFlipped: false },
    { isFlipped: false },
    { isFlipped: false },
    { isFlipped: false },
  ]);

  const handleClick = (index) => {
    setCardStates((prevState) => {
      const newState = [
        { isFlipped: prevState[0].isFlipped },
        { isFlipped: prevState[1].isFlipped },
        { isFlipped: prevState[2].isFlipped },
        { isFlipped: prevState[3].isFlipped },
        { isFlipped: prevState[4].isFlipped },
      ];
      newState[index].isFlipped = !newState[index].isFlipped;
      return newState;
    });
  };

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
          This is what I like to do on my free time.
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
            <ReactCardFlip
              isFlipped={cardStates[0].isFlipped}
              flipDirection="horizontal"
            >
              <div>
                <Paper
                  onClick={() => handleClick(0)}
                  elevation={24}
                  sx={{
                    p: 8,
                    width: 278,
                    height: 278,
                  }}
                >
                  <Avatar
                    variant="rounded"
                    src="/images/guitar.png"
                    sx={{ width: 150, height: 150 }}
                    alt="Pic"
                  />
                </Paper>
              </div>

              <div>
                <Paper
                  onClick={() => handleClick(0)}
                  elevation={24}
                  sx={{
                    width: 278,
                    height: 278,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    sx={{
                      width: 150,
                      height: 150,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    I like to play guitar
                  </Typography>
                </Paper>
              </div>
            </ReactCardFlip>
          </Grid>

          <Grid item spacing={4} p={2} m={2}>
            <ReactCardFlip
              isFlipped={cardStates[1].isFlipped}
              flipDirection="horizontal"
            >
              <div>
                <Paper
                  onClick={() => handleClick(1)}
                  elevation={24}
                  sx={{
                    p: 8,
                    width: 278,
                    height: 278,
                  }}
                >
                  <Avatar
                    variant="rounded"
                    src="/images/home-cooked-meal.png"
                    sx={{ width: 150, height: 150 }}
                    alt="Pic"
                  />
                </Paper>
              </div>

              <div>
                <Paper
                  onClick={() => handleClick(1)}
                  elevation={24}
                  sx={{
                    width: 278,
                    height: 278,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    sx={{
                      width: 150,
                      height: 150,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    I like to cook meals at home
                  </Typography>
                </Paper>
              </div>
            </ReactCardFlip>
          </Grid>

          <Grid item spacing={4} p={2} m={2}>
            <ReactCardFlip
              isFlipped={cardStates[2].isFlipped}
              flipDirection="horizontal"
            >
              <div>
                <Paper
                  onClick={() => handleClick(2)}
                  elevation={24}
                  sx={{
                    p: 8,
                    width: 278,
                    height: 278,
                  }}
                >
                  <Avatar
                    variant="rounded"
                    src="/images/data.png"
                    sx={{ width: 150, height: 150 }}
                    alt="Pic"
                  />
                </Paper>
              </div>

              <div>
                <Paper
                  onClick={() => handleClick(2)}
                  elevation={24}
                  sx={{
                    width: 278,
                    height: 278,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    sx={{
                      width: 150,
                      height: 150,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    I like to code
                  </Typography>
                </Paper>
              </div>
            </ReactCardFlip>
          </Grid>
          <Grid item spacing={4} p={2} m={2}>
            <ReactCardFlip
              isFlipped={cardStates[3].isFlipped}
              flipDirection="horizontal"
            >
              <div>
                <Paper
                  onClick={() => handleClick(3)}
                  elevation={24}
                  sx={{
                    p: 8,
                    width: 278,
                    height: 278,
                  }}
                >
                  <Avatar
                    variant="rounded"
                    src="/images/gym.png"
                    sx={{ width: 150, height: 150 }}
                    alt="Pic"
                  />
                </Paper>
              </div>

              <div>
                <Paper
                  onClick={() => handleClick(3)}
                  elevation={24}
                  sx={{
                    width: 278,
                    height: 278,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    sx={{
                      width: 150,
                      height: 150,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    I like to work out
                  </Typography>
                </Paper>
              </div>
            </ReactCardFlip>
          </Grid>

          <Grid item spacing={4} p={2} m={2}>
            <ReactCardFlip
              isFlipped={cardStates[4].isFlipped}
              flipDirection="horizontal"
            >
              <div>
                <Paper
                  onClick={() => handleClick(4)}
                  elevation={24}
                  sx={{
                    p: 8,
                    width: 278,
                    height: 278,
                  }}
                >
                  <Avatar
                    variant="rounded"
                    src="/images/cat.png"
                    sx={{ width: 150, height: 150 }}
                    alt="Pic"
                  />
                </Paper>
              </div>

              <div>
                <Paper
                  onClick={() => handleClick(4)}
                  elevation={24}
                  sx={{
                    width: 278,
                    height: 278,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    sx={{
                      width: 150,
                      height: 150,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    I like to play with my cats
                  </Typography>
                </Paper>
              </div>
            </ReactCardFlip>
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

export default About;

/* const aboutData = [
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
]; */
