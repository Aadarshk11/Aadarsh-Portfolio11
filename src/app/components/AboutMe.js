// src/app/components/AboutMe.js
import React from "react";
import { Box, Typography, Paper, Button } from "@mui/material";
import { keyframes } from "@emotion/react";
import { blue } from "@mui/material/colors";

// Define a subtle fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Define a pulse animation for the button
const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const AboutMe = () => {
  return (
    <Box
      sx={{
        padding: "60px 20px",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
        animation: `${fadeIn} 1s ease-out`,
      }}
      id="aboutme"
    >
      <Typography variant="h4" sx={{ fontWeight: 600, marginBottom: 5, color: blue[900] }}>
        About Me
      </Typography>
      <Box
        sx={{
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <Paper
          sx={{
            padding: 4,
            boxShadow: 3,
            borderRadius: "12px",
            backgroundColor: "#28282B",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "translateY(-10px)",
              boxShadow: 6,
            },
          }}
        >
          <Typography variant="body1" paragraph sx={{ color: "#FFFFFF", lineHeight: 1.8 }}>
          I am currently pursuing my Master's in Computer Applications (MCA) from the International Institute of Professional Studies, Devi Ahilya Vishwavidyalaya.<br></br><br></br>
          I am a passionate Full-Stack Developer who enjoys solving problems and turning ideas into reality.
            <br></br><br></br>My main focus is on developing scalable and efficient solutions, and I love learning new technologies. I’m always looking for exciting challenges and opportunities to collaborate with like-minded individuals.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              borderRadius: "20px",
              padding: "10px 30px",
              fontSize: "1rem",
              fontWeight: 600,
              textTransform: "none",
              "&:hover": {
                animation: "none",
                transform: "scale(1.05)",
              },
            }}
            href="/1719220217986.pdf" 
            target="_blank"
            download 
          >
            Download Resume
          </Button>
        </Paper>
      </Box>
    </Box>
  );
};

export default AboutMe;