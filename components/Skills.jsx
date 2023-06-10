import Image from "next/image";

import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";

export default function Skills() {
  return (
    <div>
      <Box gridColumn="span 4">
        <Grid
          container
          spacing={4}
          minHeight={160}
          columns={8}
          sx={{
            "--Grid-borderWidth": "1px",
            borderTop: "var(--Grid-borderWidth) solid",
            borderLeft: "var(--Grid-borderWidth) solid",
            borderColor: "divider",
            "& > div": {
              borderRight: "var(--Grid-borderWidth) solid",
              borderBottom: "var(--Grid-borderWidth) solid",
              borderColor: "divider",
            },
          }}
        >
          <Grid item p={2} m={2}>
            <Image
              height={75}
              width={75}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              alt="React"
            />
          </Grid>

          <Grid item p={2} m={2}>
            <Image
              height={75}
              width={75}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg"
              alt="Vue"
            />
          </Grid>

          <Grid item p={2} m={2}>
            <Image
              height={75}
              width={75}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JavaScript"
            />
          </Grid>

          <Grid item p={2} m={2}>
            <Image
              height={75}
              width={75}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
              alt="HTML5"
            />
          </Grid>

          <Image
            height={75}
            width={75}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
            alt="CSS3"
          />

          <Image
            height={75}
            width={75}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
            alt="Next.js"
          />

          <Image
            height={75}
            width={75}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuetify/vuetify-original.svg"
            alt="Vuetify"
          />

          <Image
            height={75}
            width={75}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            alt="Node.js"
          />

          <Image
            height={75}
            width={75}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="Github"
          />

          <Image
            height={75}
            width={75}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            alt="Git"
          />

          <Image
            height={75}
            width={75}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
            alt="Bootstrap"
          />

          <Image
            height={75}
            width={75}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
            alt="Figma"
          />

          <Image
            height={75}
            width={75}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
            alt="Material UI"
          />

          <Image
            height={75}
            width={75}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
            alt="Docker"
          />

          <Image
            height={75}
            width={75}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
            alt="SASS"
          />

          <Image
            height={75}
            width={75}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg"
            alt="Wordpress"
          />

          <Image
            height={75}
            width={75}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
            alt="MySQL"
          />
        </Grid>
      </Box>
    </div>
  );
}
