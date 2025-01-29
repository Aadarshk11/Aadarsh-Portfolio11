// src/app/components/HeroSection.js
import React from "react";
import { Box, Typography, Button } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        background: 'url("/hero-bg.jpg") center/cover no-repeat',
        color: 'white',
        padding: '100px 0',
        textAlign: 'center',
        height: '100vh',
      }}
    >
      <Typography variant="h3" gutterBottom>
        Hello, I'm John Doe!
      </Typography>
      <Typography variant="h5" sx={{ marginBottom: 4 }}>
        A passionate web developer creating amazing user experiences.
      </Typography>
      <Button variant="contained" sx={{ borderRadius: "50px", fontSize: "1.1rem" }} href="#projects">
        View My Work
      </Button>
    </Box>
  );
};

export default HeroSection;
