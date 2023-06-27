import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

export default function Work() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main
      className="container-box"
      id="experience"
      data-aos-delay="100"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="box-container">
        <Container
          sx={{
            mb: 2,
            display: "grid",
            justifyItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Typography gutterBottom variant="h3">
            My experience
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            sx={{
              display: "flex",
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            These are the most relevant work- and educational experiences in my
            life, that helped me shape who I am both in my work-life and my
            personal life.
          </Typography>
        </Container>

        <Stack
          sx={{
            mt: "6rem",
            mb: "8rem",
          }}
          className="box"
          spacing={4}
        >
          <TabContext value={value}>
            <div className="tab-panel">
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                orientation="vertical"
              >
                <Tab label="Onify" value="1" />
                <Tab label="KYH" value="2" />
                <Tab label="Beijer" value="3" />
                <Tab label="Försvarsmakten" value="4" />
                <Tab label="Rudbeck gymnasium" value="5" />
              </TabList>
            </div>

            <div className="tab-container">
              <TabPanel value="1">
                <Container
                  sx={{
                    display: "grid",
                    justifyItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <Typography variant="h4">
                    Front-end developer, 2022-2023. Stockholm
                  </Typography>
                  <Typography variant="h5">
                    Front-end developer at Onify.
                  </Typography>
                  <Typography variant="body1">
                    Internship, mainly as a front-end developer with some
                    back-end as well. Developing mainly in Vue.js.
                  </Typography>
                </Container>
              </TabPanel>
              <TabPanel value="2">
                {" "}
                <Container
                  sx={{
                    display: "grid",
                    justifyItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <Typography variant="h4">2021 – 2023, Stockholm</Typography>
                  <Typography variant="h5">
                    Studying Front-end developing at KYH
                  </Typography>
                  <Typography variant="body1">
                    Front-end developing in mainly React.js with many other
                    skills such as UX/UI, WCAG, agile work methods, as well as
                    some back-end developing.
                  </Typography>
                </Container>
              </TabPanel>
              <TabPanel value="3">
                <Container
                  sx={{
                    display: "grid",
                    justifyItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <Typography variant="h4">
                    Warehouse worker, 2019-2022. Märsta
                  </Typography>
                  <Typography variant="h5">
                    Beijer Byggmaterial Logistikcenter
                  </Typography>
                  <Typography variant="body1">
                    Forklift driver in a warehouse.
                  </Typography>
                </Container>
              </TabPanel>
              <TabPanel value="4">
                <Container
                  sx={{
                    display: "grid",
                    justifyItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <Typography variant="h4">2017 – 2018, Skövde</Typography>
                  <Typography variant="h5">
                    GMU - Grundläggande militärutbildning (Basic military
                    training)
                  </Typography>
                  <Typography variant="body1">
                    Basic training as "Samband- och ledningssoldat"
                  </Typography>
                </Container>
              </TabPanel>
              <TabPanel value="5">
                <Container
                  sx={{
                    display: "grid",
                    justifyItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <Typography variant="h4">2014 – 2017, Stockholm</Typography>
                  <Typography variant="h5">
                    Natural Science Program, Rudbeck
                  </Typography>
                  <Typography variant="body1">
                    Completed 2 courses in Programming 1 & 2 which used C# as
                    the primary language.
                  </Typography>
                </Container>
              </TabPanel>
            </div>
          </TabContext>
        </Stack>
      </div>
      <style jsx>
        {`
          /* .css-heg063-MuiTabs-flexContainer {
            display: flex !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
            align-content: center !important;
            align-items: center !important;
            flex-direction: row !important;
          } */

          /* .tab-panel Container {
            width: auto;
            height: auto;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            justify-items: center;
            margin-top: 2rem;
          } */

          @media only screen and (max-width: 600px) {
            /* .tab-panel Container {
              height: auto;
              width: auto;
              grid-template-columns: 1fr;
              display: flex;
              flex-direction: column;
            } */

            .css-heg063-MuiTabs-flexContainer {
              display: flex !important;
              flex-wrap: wrap !important;
              justify-content: center !important;
              align-content: center !important;
              align-items: center !important ;
              flex-direction: column !important;
            }
          }
        `}
      </style>
    </main>
  );
}
