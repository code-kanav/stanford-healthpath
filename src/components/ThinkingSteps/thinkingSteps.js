import React, { useContext, useEffect, useState } from "react";
import { Box, Container, Typography, CircularProgress, Fade } from "@mui/material";
import { ResponseContext } from "../../context/responseContext";

const STEPS = [
  "Reading your health concern...",
  "Mapping possible diagnoses...",
  "Reviewing treatment options...",
  "Building your health path...",
];

const STEP_INTERVAL_MS = 3200;

const ThinkingSteps = () => {
  const { isLoading } = useContext(ResponseContext);
  const [currentStep, setCurrentStep] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      setCurrentStep(0);
      setVisible(true);
      return;
    }

    setCurrentStep(0);
    setVisible(true);

    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= STEPS.length - 1) {
          clearInterval(interval);
          return prev;
        }
        setVisible(false);
        setTimeout(() => {
          setVisible(true);
        }, 300);
        return prev + 1;
      });
    }, STEP_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <Container>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, my: 3 }}>
        <CircularProgress
          size={18}
          thickness={4}
          sx={{ color: "#9e9e9e", flexShrink: 0 }}
        />
        <Fade in={visible} timeout={300} key={currentStep}>
          <Typography
            variant="body1"
            sx={{
              color: "#616161",
              fontWeight: 450,
              letterSpacing: "0.01em",
            }}
          >
            {STEPS[currentStep]}
          </Typography>
        </Fade>
      </Box>
    </Container>
  );
};

export default ThinkingSteps;
