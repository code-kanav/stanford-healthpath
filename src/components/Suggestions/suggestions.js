import React from "react";
import { Box, Button, Typography } from "@mui/material";

const suggestions = [
  "Knee pain when climbing stairs",
  "Back pain radiating to leg",
  "Headache with visual changes",
];

const Suggestions = ({ onSuggestionClick }) => {
  return (
    <Box sx={{ textAlign: "center", mt: 3 }}>
      <Typography variant="subtitle1" sx={{ mb: 1, color: "gray" }}>
        Try searching for:
      </Typography>
      <Box>
        {suggestions.map((text, index) => (
          <Button
            key={index}
            variant="outlined"
            sx={{
              m: 1,
              borderRadius: "12px",
              padding: "8px 16px",
              textTransform: "none",
            }}
            onClick={() => onSuggestionClick(text)} // Pass suggestion text to the handler
          >
            {text}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Suggestions;
