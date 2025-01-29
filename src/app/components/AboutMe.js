// src/app/components/AboutMe.js
import React from "react";
import { Box, Typography, Grid, Paper, Button } from "@mui/material";

const AboutMe = () => {
  return (
    <Box sx={{ padding: "60px 20px", textAlign: "center" }} id="about">
      <Typography variant="h4" sx={{ fontWeight: 600, marginBottom: 5 }}>
        About Me
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 4, boxShadow: 3 }}>
            <Typography variant="body1" paragraph>
              I'm a Full-Stack Developer with a passion for creating intuitive and
              responsive websites. I have experience with modern web technologies like
              React, Node.js, and more.
            </Typography>
            <Button variant="contained" color="secondary" sx={{ borderRadius: '20px' }}>
              Download Resume
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: "300px",
              backgroundColor: "gray",
              borderRadius: "8px",
              backgroundImage: 'url("/my-photo.jpg")',
              backgroundSize: 'cover',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMe;
