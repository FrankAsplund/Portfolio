import Image from "next/image";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Skills() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main data-aos-delay="100" data-aos="fade-up" data-aos-duration="2000">
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
          My skills
        </Typography>
        <Typography gutterBottom variant="h5">
          These are the technologies, frameworks, and languages I have
          experience in.
        </Typography>
      </Container>

      <Container sx={{ mt: "2rem", mx: "0rem", mb: "4rem" }}>
        <Grid
          container
          rowSpacing={1}
          spacing={0}
          minHeight={160}
          columns={2}
          justifyContent="center"
          alignItems="center"
        >
          {skillsData.map((skill) => (
            <Grid item spacing={4} p={2} m={2} key={skill.id}>
              <Image height={75} width={75} src={skill.src} alt={skill.alt} />
              <Typography
                variant="h6"
                sx={{
                  display: "grid",
                  mt: "10px",
                  justifyItems: "center",
                  flexWrap: "wrap",
                }}
              >
                {skill.alt}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}

const skillsData = [
  {
    id: 1,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
    alt: "React",
  },
  {
    id: 2,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg",
    alt: "Vue",
  },
  {
    id: 3,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    alt: "JavaScript",
  },
  {
    id: 4,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
    alt: "HTML5",
  },
  {
    id: 5,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
    alt: "CSS3",
  },
  {
    id: 6,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    alt: "Next.js",
  },
  {
    id: 7,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuetify/vuetify-original.svg",
    alt: "Vuetify",
  },
  {
    id: 8,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    alt: "Node.js",
  },
  {
    id: 9,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    alt: "Github",
  },
  {
    id: 10,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    alt: "Git",
  },
  {
    id: 11,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    alt: "Bootstrap",
  },
  {
    id: 12,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    alt: "Figma",
  },
  {
    id: 13,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    alt: "Material UI",
  },
  {
    id: 14,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    alt: "Docker",
  },
  {
    id: 15,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    alt: "SASS",
  },
  {
    id: 16,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
    alt: "Wordpress",
  },
  {
    id: 17,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    alt: "MySQL",
  },
];

<style jsx>{`
  main {
    font-family: Roboto;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`}</style>;
