import React, { useState, useEffect } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearshExercises = () => {
  const [search, setSearch] = useState("");
  const [exercises, setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);

  //   useEffect(() => {
  //     const bodyPartsData = fetchData(
  //       "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
  //       exerciseOptions
  //     );
  //     // console.log(bodyPartsData);
  //     setBodyParts(["all", ...bodyPartsData]);
  //   }, []);

  // useEffect(() => {
  //   const fetchExercisesData = async () => {
  //     const bodyPartsData = await fetchData(
  //       "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
  //       exerciseOptions
  //     );
  //     console.log("bodyPartsData ==>", bodyPartsData);
  //     setBodyParts(["all", ...bodyPartsData]);
  //   };
  //   fetchExercisesData();
  // }, []);

  //using fetched api from Rapid api
  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      // const searchExercises = exercisesData.filter((exercise) => {
      //   return (
      //     exercise.name.toLowerCase().includes(search) ||
      //     exercise.target.toLowerCase().includes(search) ||
      //     exercise.equipment.toLowerCase().includes(search) ||
      //     exercise.bodyPart.toLowerCase().includes(search)
      //   );
      // });
      console.log(exercisesData);

      // setSearch("");
      // setExercises(searchExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="49px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{
            input: { fontWeight: "700px", border: "none", borderRadius: "4px" },
            width: { lg: "1000px", xs: "300px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0",
            fontSize: { lg: "20px", xs: "14px" },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar data={bodyParts} />
      </Box>
    </Stack>
  );
};

export default SearshExercises;
