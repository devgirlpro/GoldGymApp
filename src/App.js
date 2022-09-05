import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Box width="400px">
      <Navbar />
      <BrowserRouter><Routes>
        <Route path="/" element={<Home />} />
        <Route patgh="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      </BrowserRouter><Footer />
    </Box>
  );
};

export default App;
