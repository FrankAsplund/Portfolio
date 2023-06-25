import Container from "@mui/material/Container";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Work() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    setValue(0); // Reset the tab value on component mount
  }, []);

  return (
    <div>
      <main className="container-box">
        <Container
          className="glass"
          sx={{
            display: "grid",
            justifyItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <div>
              <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: "divider" }}
              >
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
              </Tabs>
            </div>
            <div>
              <TabPanel value={value} index={0}>
                <div>
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
                </div>
              </TabPanel>
              <div>
                <TabPanel value={value} index={1}>
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
              </div>
              <div>
                <TabPanel value={value} index={2}>
                  Item Three
                </TabPanel>
              </div>
            </div>
          </Box>
        </Container>
      </main>
    </div>
  );
}

/* import Container from "@mui/material/Container";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Work() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setValue(0); // Reset the tab value on component mount
  }, []);

  return (
    <div>
      <main className="container-box">
        <Container
          className="glass"
          sx={{
            display: "grid",
            justifyItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <div>
              <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: "divider" }}
              >
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
                <Tab label="Item Four" {...a11yProps(3)} />
                <Tab label="Item Five" {...a11yProps(4)} />
                <Tab label="Item Six" {...a11yProps(5)} />
              </Tabs>
            </div>
            <div>
              <TabPanel value={value} index={0}>
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
              <TabPanel value={value} index={1}>
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
              <TabPanel value={value} index={2}>
                Item Three
              </TabPanel>
              <TabPanel value={value} index={3}>
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
              <TabPanel value={value} index={4}>
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
              <TabPanel value={value} index={5}>
                <Container
                  sx={{
                    display: "grid",
                    justifyItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <Typography variant="h4">2014 – 2017, Stockholm</Typography>
                  <Typography variant="h5"></Typography>
                  <Typography variant="body1">
                    Basic training as "Samband- och ledningssoldat"
                  </Typography>
                </Container>
              </TabPanel>
            </div>
          </Box>
        </Container>
      </main>
    </div>
  );
} */
