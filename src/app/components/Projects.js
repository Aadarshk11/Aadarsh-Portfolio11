// src/app/components/Projects.js
import React from "react";
import { Box, Typography, Card, CardContent, CardMedia, CardActions, Button } from "@mui/material";
import { blue, blueGrey } from "@mui/material/colors";
import { keyframes } from "@emotion/react";
import { IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

// Define a fade-in animation
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

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Description for project 1.",
      image: "/pexels-lynxexotics-4143660.jpg",
      link: "#",
    },
    {
      title: "Project 2",
      description: "Description for project 2.",
      image: "/pexels-lynxexotics-4143660.jpg",
      link: "#",
    },
    {
      title: "Project 3",
      description: "Description for project 3.",
      image: "/pexels-lynxexotics-4143660.jpg",
      link: "#",
    },
    {
      title: "Project 4",
      description: "Description for project 4.",
      image: "/pexels-lynxexotics-4143660.jpg",
      link: "#",
    },
    {
      title: "Project 5",
      description: "Description for project 5.",
      image: "/pexels-lynxexotics-4143660.jpg",
      link: "#",
    },
  ];

  return (
    <Box
      sx={{
        padding: "60px 20px",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
        animation: `${fadeIn} 1s ease-out`,
      }}
      id="projects"
    >
      <Typography variant="h4" sx={{ fontWeight: 600, marginBottom: 5, color: blue[900] }}>
        My Projects
      </Typography>

      {/* Horizontal Scrolling Container */}
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: 4,
          padding: "20px 10px",
          scrollSnapType: "x mandatory",
          "&::-webkit-scrollbar": {
            height: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#28282B",
            borderRadius: "4px",
          },
        }}
      >
        {projects.map((project, index) => (
          <Card
            key={index}
            sx={{
              minWidth: 300,
              scrollSnapAlign: "start",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <CardMedia
              component="img"
              alt={project.title}
              height="140"
              image={project.image}
            />
            <CardContent sx={{ backgroundColor: "#28282B" }}>
              <Typography gutterBottom variant="h5" component="div">
                {project.title}
              </Typography>
              <Typography variant="body2" sx={{ backgroundcolor:"#28282B", fontSize: "1rem", fontWeight: 500 }}>
                {project.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href="#">
                View
              </Button>
              <Button size="small" href={project.link}>
                Source Code
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;