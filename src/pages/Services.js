
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import image from '../images/img3.jpg'
import {  motion } from 'framer-motion'
import { animationThree } from '../animation/animate'

const Services = () => {
  return <motion.div
  initial="out"
  animate="end"
  exit="out" variants={animationThree}
     >
      <Header/>
      <Hero image={image} title="Picture Perfect" desc="call let make that dream posible"/>
      </motion.div>
};

export default Services;
