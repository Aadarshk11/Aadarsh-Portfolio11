// src/app/components/Footer.js
import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#333", color: "white", padding: "20px 0", textAlign: "center" }}>
      <Typography variant="body2" paragraph>
        © 2025 My Portfolio | All Rights Reserved
      </Typography>
      <IconButton color="inherit" href="https://github.com/username">
        <GitHubIcon />
      </IconButton>
      <IconButton color="inherit" href="https://linkedin.com/in/username">
        <LinkedInIcon />
      </IconButton>
    </Box>
  );
};

export default Footer;
