import React, { useRef } from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  CardMedia, 
  CardActions, 
  Button, 
  IconButton 
} from "@mui/material";
import { blue, blueGrey } from "@mui/material/colors";
import { keyframes } from "@emotion/react";
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
      title: "Project 3",
      description: "Description for project 3.",
      image: "/pexels-lynxexotics-4143660.jpg",
      link: "#",
    },
  ];

  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      sx={{
        padding: "60px 20px",
        textAlign: "center",
        
        animation: `${fadeIn} 1s ease-out`,
        position: "relative",
      }}
      id="projects"
    >
      <Typography variant="h4" sx={{ fontWeight: 600, marginBottom: 5, color: blue[900] }}>
        My Projects
      </Typography>

      <IconButton
        onClick={scrollLeft}
        sx={{
          position: "absolute",
          left: 10,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
          backgroundColor: "rgba(43, 40, 40, 0.42)",
          color: "white",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          },
        }}
      >
        <ChevronLeft />
      </IconButton>

      <IconButton
        onClick={scrollRight}
        sx={{
          position: "absolute",
          right: 10,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
          backgroundColor: "rgba(43, 40, 40, 0.42)",
          color: "white",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          },
        }}
      >
        <ChevronRight />
      </IconButton>

      <Box
        ref={containerRef}
        sx={{
          display: "flex",
          justifyContent: "center",
          overflowX: "auto",
          gap: 4,
          padding: "20px 10px",
          scrollSnapType: "x mandatory",
          maxWidth: "1300px",
          margin: "0 auto",
          "&::-webkit-scrollbar": {
            height: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: blueGrey[500],
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
              backgroundColor: "#28282B", // Slightly lighter than background
              color: "white",
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
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {project.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
                {project.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{ color: "#00bfff" }}>
                View
              </Button>
              <Button size="small" href={project.link} sx={{ color: "#00bfff" }}>
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