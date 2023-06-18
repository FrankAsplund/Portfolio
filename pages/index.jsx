import App from "./_app";
import Document from "./_document";
import styles from "../styles/Home.module.css";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Navbar from "../components/Navbar";
import Infobox from "../components/Infobox";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Arrow from "../components/Arrow";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Container from "@mui/material/Container";
/* import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material"; */

export default function Home() {
  return (
    <div>
      <Head>
        <title>Frank Asplund</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-grad">
        <Navbar />
        <Container>
          <Infobox />
          <About />
          <Skills />
        </Container>
        <Footer />
      </main>

      <style jsx>{`
        main {
          font-family: Roboto;
          padding: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        Container {
          margin-top: 2rem;
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

        .bg-grad {
          background-image: linear-gradient(
            rgba(0, 0, 0, 0.741),
            rgba(36, 58, 117, 0.769)
          );
        }

        .container-box {
          min-height: 100vh;
        }

        .box {
          display: flex;
          flex-direction: row;
        }

        .glass {
          /* From https://css.glass */
          background: rgba(255, 255, 255, 0.07);
          border-radius: 16px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(2.8px);
          -webkit-backdrop-filter: blur(2.8px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .hover {
          transition: transform 0.15s;
        }

        .hover:hover {
          transform: scale(1.2);
        }

        .hoverShadow {
          transition: transform 0.15s;
        }

        .hoverShadow:hover {
          transform: scale(1.03);
          box-shadow: 0 0 1rem rgba(255, 255, 255, 0.2);
        }

        @media only screen and (max-width: 900px) {
          .box {
            display: flex;
            flex-direction: column;
          }
        }
      `}</style>
      {/* rgba(36, 58, 117, 0.769); */}
    </div>
  );
}
