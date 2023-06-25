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

export default function Education() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    setValue(0); // Reset the tab value on component mount
  }, []);

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
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
          }}
        >
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
          <div>
            <TabPanel value={value} index={0}>
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
            <TabPanel value={value} index={1}>
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
            <TabPanel value={value} index={2}>
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
  );
}
