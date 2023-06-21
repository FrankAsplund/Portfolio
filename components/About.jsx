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
    <main
      id="about"
      className="container-box"
      data-aos="zoom-in-up"
      data-aos-duration="4000"
    >
      <Container
        sx={{
          display: "grid",
          mb: "4rem",
          justifyItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Typography gutterBottom variant="h3">
          Hobbies and interests
        </Typography>
        <Typography gutterBottom variant="h5">
          Click on each card to learn more about what I do on my free time.
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
                  className="glass hoverShadow"
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
                    alt="Guitar"
                  />
                </Paper>
              </div>

              <div>
                <Paper
                  onClick={() => handleClick(0)}
                  className="glass hoverShadow"
                  elevation={24}
                  sx={{
                    py: 10,
                    width: 278,
                    height: 278,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="body1"
                    sx={{
                      width: 180,
                      height: 120,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    I love playing my electric guitar. I'll either learn a song
                    I really like, or come up with melodies on my own, and
                    jamming along with my trusty loop pedal.
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
                  className="glass hoverShadow"
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
                    alt="Meal"
                  />
                </Paper>
              </div>

              <div>
                <Paper
                  onClick={() => handleClick(1)}
                  className="glass hoverShadow"
                  elevation={24}
                  sx={{
                    py: 10,
                    width: 278,
                    height: 278,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="body1"
                    sx={{
                      width: 180,
                      height: 120,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    It's so satisfying to realize a vision you have of a really
                    nice meal, serving it to someone else and seeing their
                    reaction. As with everything, the presentation of the meal
                    is also very important to me.
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
                  className="glass hoverShadow"
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
                    alt="Coding"
                  />
                </Paper>
              </div>

              <div>
                <Paper
                  onClick={() => handleClick(2)}
                  elevation={24}
                  className="glass hoverShadow"
                  sx={{
                    py: 10,
                    width: 278,
                    height: 278,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="body1"
                    sx={{
                      width: 180,
                      height: 120,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    My favourite thing about coding is the creative freedom it
                    combines with problem-solving. I get lost in the coding
                    sometimes because there's so much to learn, and constantly
                    improve upon.
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
                  className="glass hoverShadow"
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
                    alt="Gym"
                  />
                </Paper>
              </div>

              <div>
                <Paper
                  onClick={() => handleClick(3)}
                  className="glass hoverShadow"
                  elevation={24}
                  sx={{
                    py: 10,
                    width: 278,
                    height: 278,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="body1"
                    sx={{
                      width: 180,
                      height: 120,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    It's nice to enjoy a bit of lifting in the gym. I love
                    getting to listen to music, and resting my mind a bit.
                    Funnily enough, it's where I get the most eureka moments for
                    my programming problems.
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
                  className="glass hoverShadow"
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
                    alt="Cat"
                  />
                </Paper>
              </div>

              <div>
                <Paper
                  onClick={() => handleClick(4)}
                  className="glass hoverShadow"
                  elevation={24}
                  sx={{
                    py: 10,
                    width: 278,
                    height: 278,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="body1"
                    sx={{
                      width: 180,
                      height: 120,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    I have 3 cats named Zelda, Shinji and Cinder. All are of
                    course named after video game or anime characters because
                    I'm a nerd. I'm very happy to show pictures of them!
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
