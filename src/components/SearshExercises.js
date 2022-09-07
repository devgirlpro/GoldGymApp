import React, { useState, useEffect } from 'react';
import { Box, Button, Stack, TextField, textField, Typography } from '@mui/material';

const SearshExercises = () => {
  return (
   <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField 
        height="76px"
        sx={{ input: { fontWeight: "700px", border: "none", borderRadius: "4px" }, width: { lg: "1000px", xs: "300px" }, backgroundColor: '#fff', borderRadius: '40px' }}
        // value={}
        // onChange={(e) => {}}
        placeholder="Search Exercises"
        type="text"
        />
        <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0', fontSize: { lg: '20px', xs: '14px' } }} >Search</Button>

      </Box>

   </Stack>
  )
}

export default SearshExercises