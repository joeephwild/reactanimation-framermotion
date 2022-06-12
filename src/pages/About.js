import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import image from '../images/img2.jpg'
import { motion } from "framer-motion";
import { animationTwo } from "../animation/animate";

const About = () => {
  return <motion.div
      initial="out"
       animate="in"
       exit="out" variants={animationTwo} 
        >
      <Header/>
      <Hero image={image} title="Perfection Matters" desc="making memories memorable"/>
  </motion.div>;
};

export default About;
