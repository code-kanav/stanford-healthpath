import React from "react";
import { Typography, Box } from "@mui/material";

const Banner = () => {
  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h6" color="primary">
        Stanford Medical Assistant
      </Typography>
      <Typography variant="h3" sx={{ fontWeight: "bold", mt: 2 }}>
        Your Health Journey, Mapped
      </Typography>
      <Typography variant="subtitle1" sx={{ mt: 1, color: "gray" }}>
        Explore common healthcare paths based on real clinical data
      </Typography>
    </Box>
  );
};

export default Banner;
