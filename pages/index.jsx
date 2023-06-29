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
import Footer from "../components/Footer";
import Work from "../components/Work";
import Contact from "../components/Contact";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Container from "@mui/material/Container";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Frank Asplund</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-grad">
        <Container>
          <Navbar />
          <Infobox />
          <About />
          <Skills />
          <Work />

          <Contact />
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
      `}</style>

      <style jsx global>{`
        html,
        body {
          font-family: Roboto;
        }
        * {
          box-sizing: border-box;
        }

        /* NYA */
        .bg-grad {
          background-image: linear-gradient(
            rgba(15, 24, 46, 0.769),
            rgba(21, 33, 66, 0.769)
          );
        }

        .container-box {
          min-height: 100vh;
        }

        .box {
          display: flex;
          flex-direction: row !important;
        }

        .avatarImg {
          min-width: 350px !important;
          min-height: 350px !important;
          width: 350px !important;
          height: 350px !important;
        }

        .avatar-box {
          margin-right: 2rem;
          display: flex !important;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .tablist-stack {
          width: 300px;
          margin-right: 2rem;
          display: flex !important;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .glass {
          /* From https://css.glass */
          background: rgba(255, 255, 255, 0.07);
          border-radius: 16px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

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
          cursor: pointer;
        }

        /* .text {
          background: linear-gradient(
            rgb(164, 183, 202),
            rgba(129, 146, 192, 0.769)
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        } */

        /* Vit? */
        /* .hoverShadow:hover {
          transform: scale(1.03);
          box-shadow: 0 0 1rem rgba(255, 255, 255, 0.2);
        } */

        .hoverShadow:hover {
          transform: scale(1.03);
          box-shadow: 0 0 1rem rgba(80, 106, 176, 0.769);
        }

        .multiline {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 100%;
        }

        .contact {
          width: 80% !important;
          margin-top: 2rem;
        }

        .box-container {
          width: 100%;
          padding: 1rem;
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
        }

        .tab-container {
          max-width: 700px;
          min-width: 700px;
          margin: 0 !important;
          display: flex !important;
          flex-wrap: wrap !important;
          justify-content: center !important;
          align-content: center !important;
          align-items: center !important;
        }

        .tab-padding * {
          padding: 5px !important;
        }

        .tab-box {
          display: flex;
          align-items: stretch;
          flex-direction: row;
          justify-content: center;
        }

        @keyframes glowing {
          0% {
            text-shadow: 0 0 2px #90caf9, 0 0 20px #90caf9, 0 0 30px #90caf9;
          }
          50% {
            text-shadow: none;
          }
          100% {
            text-shadow: 0 0 2px #90caf9, 0 0 20px #90caf9, 0 0 30px #90caf9;
          }
        }

        .text {
          animation: glowing 10s infinite;
          color: #90caf9;
        }

        @media only screen and (max-width: 900px) {
          .box {
            display: flex;
            flex-direction: column !important;
          }

          .tab-box {
            display: flex;
            align-items: center;
            flex-direction: column;
          }

          .avatar-box {
            margin-right: 0px;
            display: flex !important;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .avatarImg {
            min-width: 280px !important;
            min-height: 280px !important;
            width: 280px !important;
            height: 280px !important;
          }

          .tab-container {
            max-width: 300;
            min-width: 300px;
            margin: 10px 0px 10px 0 !important;
            display: flex !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
            align-content: center !important;
            align-items: center !important;
          }

          .tab-panel {
            display: flex !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
            align-content: center !important;
            align-items: center !important ;
            flex-direction: column !important;
          }

          .contact {
            width: 100% !important;
            margin-top: 4rem;
            margin-bottom: 4rem;
          }

          .css-18iliqe-MuiStack-root {
            text-align: center !important;
            padding-left: 5px !important;
            padding-right: 5px !important;
          }
        }
      `}</style>
      {/* rgba(36, 58, 117, 0.769); */}
    </div>
  );
}
