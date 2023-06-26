import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import { Typography } from "@mui/material";
import Container from "@mui/material/Container";

export default function Work() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <main className="container-box">
      <Container
        className="glass"
        sx={{
          display: "grid",
          justifyItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Item One" value="1" />
                <Tab label="Item Two" value="2" />
                <Tab label="Item Three" value="3" />
                <Tab label="Item Four" value="4" />
                <Tab label="Item Five" value="5" />
              </TabList>
            </Box>
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
                  Internship, mainly as a front-end developer with some back-end
                  as well. Developing mainly in Vue.js.
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
                  Front-end developing at KYH
                </Typography>
                <Typography variant="body1">
                  Front-end developing with many other skills such as UX/UI,
                  WCAG as well as back-end.
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
                  Completed 2 courses in Programming 1 & 2 which used C# as the
                  primary language.
                </Typography>
              </Container>
            </TabPanel>
          </TabContext>
        </Box>
      </Container>
    </main>
  );
}
