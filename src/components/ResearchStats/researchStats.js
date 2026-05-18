import React from "react";
import { Box, Typography, Paper, Stack, Container } from "@mui/material";
import { MapOutlined, PersonOutline, MenuBookOutlined } from "@mui/icons-material";

const ResearchStats = () => {
  const stats = [
    {
      icon: <MapOutlined style={{ fontSize: 50, color: "#4285F4" }} />,
      number: "2M+",
      label: "Patient journeys analyzed",
    },
    {
      icon: <PersonOutline style={{ fontSize: 50, color: "#34A853" }} />,
      number: "10K+",
      label: "Specialist insights",
    },
    {
      icon: <MenuBookOutlined style={{ fontSize: 50, color: "#FBBC05" }} />,
      number: "20+",
      label: "Medical specialties",
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: "#182635;", // Full-width background color
        py: 6, // Add vertical padding for spacing
        px: 2, // Add horizontal padding for small screens
        mt: -3
      }}
    >
      <Container>
      <Box sx={{ maxWidth: "1200px", mx: "auto", textAlign: "center" }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 4,
            color: "rgba(255, 255, 255, 0.88)",
          }}
        >
          Our Research Impact
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="center"
          alignItems="center"
          spacing={4}
          sx={{ display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "16px",
            margin: "0 auto", }}
        >
          {stats.map((stat, index) => (
            <Paper
              key={index}
              elevation={4}
              sx={{
                flex: "1 1 280px",
                maxWidth: "350px",
                p: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "#FFFFFF", // Card background color
                borderRadius: "12px",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)", // Subtle shadow for a professional look
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "scale(1.05)", // Slight scale on hover
                  boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)", // Enhanced shadow on hover
                },
              }}
            >
              {stat.icon}
              <Typography
                variant="h4"
                minWidth={{ xs: "250px" }}
                sx={{
                  fontWeight: "bold",
                  mt: 2,
                  color: "rgba(0, 0, 0, 0.88)",
                }}
              >
                {stat.number}
              </Typography>
              <Typography variant="body1" sx={{ color: "#666", mt: 1 }}>
                {stat.label}
              </Typography>
            </Paper>
          ))}
        </Stack>
        <Typography
          variant="body2"
          sx={{
            mt: 6,
            fontStyle: "italic",
            color: "rgba(255, 255, 255, 0.88)",
          }}
        >
          A research initiative by Stanford School of Medicine
        </Typography>
      </Box>
      </Container>
    </Box>
  );
};

export default ResearchStats;
