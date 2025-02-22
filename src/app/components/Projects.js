import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
} from "@mui/material";
import { blue, blueGrey } from "@mui/material/colors";
import { keyframes } from "@emotion/react";

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
      title: "Sampoorna",
      description:
        "The Sampoorna Club Website is a dynamic web platform designed to view, notify, and update events for various clubs in my college. It serves as a centralized hub for students to stay informed about upcoming events, announcements, and club activities. The backend leverages PHP, AJAX, JavaScript, jQuery, MySQL, HTML, CSS and Bootstrap making the platform reliable, scalable, engagement for students.",
      image: "/sampoorna.png",
      link: "#projects",
      link1: "https://iips.edu.in/sampoorna/Sampoorna.php",
    },
    {
      title: "CouponMania",
      description:
        "CouponMania is a feature-rich Android application designed to display advertisements for coupons, enabling users to discover and access the best deals effortlessly. It provides a user-friendly interface to showcase promotional offers and utilizes a Firebase Realtime Database to store user-generated data, along with advertisements of coupons, ensuring real-time updates and synchronization across devices.",
      image: "/download.jpg",
      link: "https://github.com/Aadarshk11/CouponAdvantage",
      link1: "#projects",
    },
    {
      title: "ArtistryValue",
      description:
        "This web application is designed to showcase and sell handmade crafts and artisan goods, providing a platform for artisans to share their unique creations with a wider audience. Built using the MERN stack (MongoDB, Express.js, React, Node.js). It supports full CRUD (Create, Read, Update, Delete) operations, allowing users to effortlessly list, manage, and update their handmade products.",
      image: "/WhatsApp-Image-2021-04-02-at-10.19.20-AM.jpeg",
      link: "https://github.com/Aadarshk11/ArtistryValue",
      link1: "#projects",
    },
    {
      title: "LDSS",
      description:
        "The Legal Decision Support System is an AI-powered prototype designed to assist users by providing accurate responses to legal queries, ensuring accessibility to legal information with ease and efficiency. Integrated LLMs to achieve this. Leveraging AI agents, it integrates natural language processing (NLP) and machine learning (ML) techniques to interpret legal terminology and offer well-informed guidance.",
      image: "/0_YK6VY3H_qNUSCTS0.jpg",
      link: "https://github.com/Aadarshk11/LDSS",
      link1: "#projects",
    },
  ];

  const containerRef = useRef(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  // Set up the automatic scrolling
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isUserInteracting) {
        if (containerRef.current) {
          const { scrollWidth, clientWidth, scrollLeft } = containerRef.current;
          // Reset scroll position to simulate infinite scrolling
          if (scrollLeft + clientWidth >= scrollWidth) {
            containerRef.current.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            scrollRight();
          }
        }
      }
    }, 3000); // Scroll every 3 seconds (adjust as needed)

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [isUserInteracting]); // Only restart the interval if user interaction state changes

  const handleMouseDown = () => setIsUserInteracting(true);
  const handleTouchStart = () => setIsUserInteracting(true);

  const handleMouseUp = () => setIsUserInteracting(false);
  const handleTouchEnd = () => setIsUserInteracting(false);

  // Clone the cards to create a circular effect
  const extendedProjects = [...projects, ...projects]; // Duplicate the array for continuous effect

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
      <Typography
        variant="h4"
        sx={{ fontWeight: 600, marginBottom: 5, color: blue[900] }}
      >
        My Projects
      </Typography>

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
            height: "0px", // Hide the scrollbar
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: blueGrey[500],
            borderRadius: "4px",
          },
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onMouseUp={handleMouseUp}
        onTouchEnd={handleTouchEnd}
      >
        {extendedProjects.map((project, index) => (
          <Card
            key={index}
            sx={{
              minWidth: 300,
              scrollSnapAlign: "start",
              transition: "transform 0.3s ease-in-out",
              backgroundColor: "#28282B",
              color: "white",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <CardMedia
              component="img"
              alt={project.title}
              image={project.image}
              sx={{
                height: 180, // Adjust this as needed
                objectFit: "cover",
              }}
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
              <Button size="small" href={project.link1} sx={{ color: "#00bfff" }}>
                View
              </Button>
              <Button
                size="small"
                href={project.link}
                sx={{ color: "#00bfff" }}
                target="_blank"
                rel="noopener noreferrer"
              >
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
