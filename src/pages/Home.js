import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import image from '../images/img.jpg'
import { motion } from 'framer-motion'
import { animationOne, transition } from '../animation/animate'

const Home = () => {
  return <motion.div
             initial='out'
             animate='in'
             exit='out'
             variants={animationOne}
             transition={transition}  >
      <Header/>
      <Hero image={image} 
      title="Black Is Beautiful"
      desc="shining bright is always black"/>
  </motion.div>;
};

export default Home;
