import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            Frank Asplund
          </Typography>
          <Button variant="outlined">Primary 1</Button>
          <Button variant="outlined">Primary 2</Button>
          <Button variant="outlined">Primary 3</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
