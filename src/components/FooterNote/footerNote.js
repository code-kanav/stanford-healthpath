import React from "react";
import { Box, Typography } from "@mui/material";

const FooterNote = () => {
  return (
    <Box
      sx={{
        bgcolor: "#182635;", // Light background for distinction
        py: 4, // Vertical padding
        px: 2, // Horizontal padding for smaller screens
        textAlign: "center",
        borderTop: "1px solid #E0E0E0", // Subtle top border for separation
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color: "white", // Subtle text color
          fontSize: "0.9rem", // Slightly smaller font for a footer
          lineHeight: 1.6,
        }}
      >
        Based on Stanford Health Care referral patterns and clinical templates. Individual 
        experiences may vary based on findings.
      </Typography>
      <Typography
        variant="body2"
        sx={{
          mt: 2,
          color: "white", // Secondary text color
          fontSize: "0.8rem",
          fontStyle: "italic",
        }}
      >
        © 2025 Stanford Medical Assistant. All rights reserved.
      </Typography>
    </Box>
  );
};

export default FooterNote;
