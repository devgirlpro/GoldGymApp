import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearshExercises from "../components/SearshExercises";
import Exercises from "../components/Exercises";
const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearshExercises />
      <Exercises />
    </Box>
  );
};

export default Home;
