"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { CssBaseline, Container } from "@mui/material";
import Header from "../app/components/Header";      
import HeroSection from "../app/components/HeroSection";  
import AboutMe from "../app/components/AboutMe";    
import Projects from "../app/components/Projects";  
import Footer from "../app/components/Footer";   
import Skills from "../app/components/Skills"; 
import ContactMe from "../app/components/ContactMe";  

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <CssBaseline />
      <Header />
      <HeroSection />
      <AboutMe />
      <Projects />
      <Skills/>
      <ContactMe/>
      <Footer />
    </>
  );
};

export default Home;
