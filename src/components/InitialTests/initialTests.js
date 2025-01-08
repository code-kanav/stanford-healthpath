import React, { useContext } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Container,
} from "@mui/material";
import { ResponseContext } from "../../context/responseContext";

const InitialTests = () => {
  const { queryResponse,  } = useContext(ResponseContext);

  if (!queryResponse) {
    return null;
  }

  // JSON data for the tests
  const data = queryResponse?.response?.initialTests;

  return (
    <Box sx={{ width: "100vw", backgroundColor: "#eef7fa", pt: 2 , pb: 4}}>
    <Container>
      <Typography
        variant="h5"
        gutterBottom
        align="center"
        sx={{ fontWeight: "bold", margin: "20px 0" }}
      >
        Initial Tests (Day 1-3)
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "16px",
          margin: "0 auto",
        }}
      >
        {data.map((test, index) => (
          <Card
            key={index}
            variant="outlined"
            sx={{
              borderRadius: "12px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              flex: "1 1 calc(100% - 32px)", // Default to full width
              maxWidth: { xs: "100%", sm: "45%", md: "30%" }, // Adjust card width for responsive screens
              minWidth: "368px", // Ensure minimum card width
            }}
          >
            <CardContent sx={{ padding: "24px" }}>
              <Typography
                variant="h6"
                sx={{
                  color: "#1976d2",
                  fontWeight: "bold",
                  marginBottom: "8px",
                }}
              >
                {test?.initialTestName}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ color: "#757575", marginBottom: "16px" }}
              >
                {test?.likelihood} of cases
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                {test?.description.map((detail, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      background: "#f4f6f8",
                      borderRadius: "8px",
                      padding: "12px",
                      textAlign: "left",
                    }}
                  >
                    {detail}
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
    </Box>
  );
};

export default InitialTests;
