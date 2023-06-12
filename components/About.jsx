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

export default function About() {
  return (
    <main>
      <Container sx={{ mt: "6rem", mx: "2rem", mb: "4rem" }}>
        <Typography gutterBottom variant="h3">
          Hi!
        </Typography>
        <Typography gutterBottom variant="h5">
          These are my interests
        </Typography>
        <Stack direction="row" spacing={8}>
          <Avatar
            src="/images/pfp.jpg"
            sx={{ width: 50, height: 50 }}
            alt="Pic"
          />
          <Avatar
            src="/images/pfp.jpg"
            sx={{ width: 50, height: 50 }}
            alt="Pic"
          />
          <Avatar
            src="/images/pfp.jpg"
            sx={{ width: 50, height: 50 }}
            alt="Pic"
          />
          <Avatar
            src="/images/pfp.jpg"
            sx={{ width: 50, height: 50 }}
            alt="Pic"
          />
          <Avatar
            src="/images/pfp.jpg"
            sx={{ width: 50, height: 50 }}
            alt="Pic"
          />
        </Stack>
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
      ;
    </main>
  );
}
