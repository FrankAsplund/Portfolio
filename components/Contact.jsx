import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

import AOS from "aos";
import "aos/dist/aos.css";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import SendIcon from "@mui/icons-material/Send";

export default function Contact() {
  const emailJsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const emailJsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const emailJsUserId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        emailJsServiceId,
        emailJsTemplateId,
        form.current,
        emailJsUserId
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <main className="container-box" id="contact">
        <Container
          sx={{
            display: "grid",
            justifyItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Typography gutterBottom variant="h3">
            I'd love to get to know you.
          </Typography>
          <Typography gutterBottom variant="body1">
            Send me an email if you have any inquries, questions, or just
            anything at all. I'm always interested in hearing about new
            technologies, getting to know new people, or just using this mail
            form to make sure it works. I'll make sure to respond as soon as
            possible!
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
            <Paper
              className="glass"
              elevation={24}
              sx={{
                my: 4,
                mx: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <form ref={form} className="contact" onSubmit={sendEmail}>
                <Grid item spacing={4} px={0} mx={2}>
                  <TextField
                    sx={{
                      mx: 2,
                      my: 2,
                    }}
                    type="text"
                    name="user_name"
                    label="Full Name"
                    variant="outlined"
                  />
                  <TextField
                    sx={{
                      mx: 2,
                      my: 2,
                    }}
                    type="text"
                    name="user_email"
                    label="Email"
                    variant="outlined"
                  />
                </Grid>

                <Grid item spacing={4} px={0} mx={2}>
                  <TextField
                    sx={{
                      mx: 2,
                      my: 2,
                    }}
                    type="text"
                    name="user_subject"
                    label="Subject"
                    variant="outlined"
                  />
                </Grid>

                <Grid item spacing={4} px={2} mx={2}>
                  <TextField
                    className="multiline"
                    label="Message"
                    name="message"
                    multiline
                    rows={8}
                  />
                </Grid>
                <Grid
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  }}
                  item
                  spacing={4}
                  px={2}
                  m={2}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    value="Send"
                    size="large"
                    endIcon={<SendIcon />}
                  >
                    Send
                  </Button>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Container>
        <style jsx>
          {`
            .multiline {
              margin: 1rem;
              padding: 1rem;
              width: 80% !important;
            }

            contactBtn {
              display: flex !important;
              flex-direction: row;
              justify-content: flex-end;
            }
          `}
        </style>
      </main>
    </div>
  );
}
