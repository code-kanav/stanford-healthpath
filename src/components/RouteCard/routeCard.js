import React, { useContext } from "react";
import { Box, Container, Typography } from "@mui/material";
import { ResponseContext } from "../../context/responseContext";



const RouteCards = () => {
  const { queryResponse } = useContext(ResponseContext);
  const data = [
    {
      title: "Fastest Resolution",
      duration: queryResponse?.response.fastestResolution?.timeline,
      percentage: queryResponse?.response.fastestResolution?.likelihood + " of cases",
      description: queryResponse?.response?.fastestResolution?.resolutionName?.join(' + ') || '',
      bgColor: "#EAF8E9",
      textColor: "#2E7D32",
    },
    {
      title: "Normal Resolution",
      duration: queryResponse?.response.normalResolution?.timeline,
      percentage: queryResponse?.response.normalResolution?.likelihood + " of cases",
      description: queryResponse?.response?.normalResolution?.resolutionName?.join(' + ') || '',
      bgColor: "#E3F2FD",
      textColor: "#1565C0",
    },
    {
      title: "Complex Cases",
      duration: queryResponse?.response.complexCases?.timeline,
      percentage: queryResponse?.response.complexCases?.likelihood + " of cases",
      description: queryResponse?.response?.complexCases?.resolutionName?.join(' + ') || '',
      bgColor: "#F3E5F5",
      textColor: "#6A1B9A",
    },
  ];
  if (!queryResponse) {
    return null; // Return null to render nothing if `queryResponse` is empty
  }

  return (
    <Container>
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
        gap: 2,
        pt: 2,
        pb: 3,
        mb: 3,
        mt: 2,
      }}
    >
      {data.map((item, index) => (
        
        <Box
          key={index}
          sx={{
            backgroundColor: item.bgColor,
            borderRadius: "8px",
            padding: "16px",
            textAlign: "center",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: item.textColor }}
          >
            {item.title}
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", margin: "8px 0", color: item.textColor }}
          >
            {item.duration}
          </Typography>
          <Typography variant="body2" sx={{ color: item.textColor }}>
            {item.percentage}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: item.textColor, fontStyle: "italic" }}
          >
            {item.description}
          </Typography>
        </Box>
      ))}
    </Box>
    </Container>
  );
};

export default RouteCards;
