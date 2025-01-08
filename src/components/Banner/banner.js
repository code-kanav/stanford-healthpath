import React from "react";
import { Typography, Box } from "@mui/material";

const Banner = () => {
  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h6" color="primary">
        Stanford HealthPath
      </Typography>
      <Typography variant="h3" sx={{ fontWeight: "bold", mt: 2 , lineHeight: 1.5}}>
        Explore common healthcare <br></br>paths based on real clinical data.
      </Typography>
      {/* <Typography variant="subtitle1" sx={{ mt: 1, color: "gray" }}>
         Your Health Journey, Mapped
      </Typography> */}
    </Box>
  );
};

export default Banner;
