import React from "react";
import { Box, Typography } from "@mui/material";

const HowItWorks = () => {
  return (
    <Box sx={{ backgroundColor: "#f4f7fc", padding: 2, borderRadius: 2 }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        How this works:
      </Typography>
      <Typography>
        Upload photos or documents of your symptoms, and get insights based on
        similar cases at Stanford Health Care. See possible diagnoses,
        recommended tests, and typical treatment paths - all based on real
        patient data.
      </Typography>
    </Box>
  );
};

export default HowItWorks;