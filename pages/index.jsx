import App from "./_app";
import Document from "./_document";
import styles from "../styles/Home.module.css";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Navbar from "../components/Navbar";
import Skills from "../components/Skills";

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

export default function Home() {
  return (
    <div>
      <Head>
        <title>Frank Asplund</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main>
        <Paper
          elevation={2}
          sx={{
            p: 2,
            m: 8,
          }}
        >
          <Stack direction="row" spacing={8}>
            <Avatar
              src="/images/pfp.jpg"
              sx={{ width: 300, height: 300 }}
              alt="Frank Asplund"
            />

            <Stack useFlexGap flexWrap="wrap">
              <Typography gutterBottom variant="h1" m={0}>
                Frank Asplund
              </Typography>
              <Typography gutterBottom variant="h3">
                Front-end developer
              </Typography>
              <Typography gutterBottom variant="h5">
                Dedicated and determined to deliver responsive, functional
                websites on time.{" "}
              </Typography>
            </Stack>
          </Stack>

          {/* <Paper
            elevation={24}
            sx={{
              p: 0,
              m: 2,
            }}
          > */}
          <Grid item container rowSpacing={4} px={8} m={2}>
            <Link
              href="https://www.linkedin.com/in/frank-asplund-794187221/"
              underline="none"
            >
              <Image
                height={50}
                width={50}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                alt="LinkedIn"
              />
            </Link>

            <Link href="https://github.com/FrankAsplund" underline="none">
              <Image
                height={50}
                width={50}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="Github"
              />
            </Link>
          </Grid>
        </Paper>
        {/* </Paper> */}

        <h1>My skills</h1>
        <Skills />
      </main>

      {/* <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer> */}

      {/* main {
          font-family: Roboto;
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        } */}

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

      <style jsx global>{`
        html,
        body {
          font-family: Roboto;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
