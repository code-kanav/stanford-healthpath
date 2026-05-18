import React, { useContext, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Collapse,
  Divider,
  Container,
  Skeleton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import { ResponseContext } from "../../context/responseContext";

const TreatmentCard = () => {
  const [expandedState, setExpandedState] = useState({});
  const { queryResponse, isLoading } = useContext(ResponseContext);
  const data = queryResponse?.response?.possibleDiagnoses;

  if (isLoading) {
    return (
      <Box sx={{ width: "100vw", backgroundColor: "#eef7fa", pt: 2, pb: 4 }}>
        <Container>
          <Skeleton variant="text" width={300} height={40} sx={{ mx: "auto", mb: 2 }} />
          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px", margin: "0 auto" }}>
            {[0, 1, 2].map((i) => (
              <Card key={i} sx={{ borderRadius: "12px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", flex: "1 1 calc(100% - 32px)", maxWidth: { xs: "100%", sm: "45%", md: "30%" }, minWidth: "368px" }}>
                <CardContent>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Skeleton variant="text" width="55%" height={32} />
                    <Skeleton variant="rounded" width={70} height={24} />
                  </Box>
                  <Skeleton variant="text" width="45%" sx={{ mt: 1 }} />
                  <Skeleton variant="text" width="35%" sx={{ mt: 2, mb: 1 }} />
                  <Skeleton variant="rounded" height={64} sx={{ mb: 1 }} />
                  <Skeleton variant="rounded" height={64} sx={{ mb: 1 }} />
                  <Skeleton variant="rounded" height={64} />
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>
    );
  }

  if (!queryResponse) {
    return null;
  }

  const handleExpandClick = (cardIndex, treatmentIndex) => {
    const key = `${cardIndex}-${treatmentIndex}`;
    setExpandedState((prev) => ({
      ...prev,
      [key]: !prev[key], // Toggle the specific treatment's expanded state
    }));
  };

  return (
    <Box sx={{ width: "100vw", backgroundColor: "#eef7fa", pt: 2, pb: 4 }}>
      <Container>
        <Typography
          variant="h5"
          gutterBottom
          align="center"
          sx={{ fontWeight: "bold", marginBottom: "20px" }}
        >
          Possible Diagnoses (Days 3-5)
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
          {data.map((test, cardIndex) => (
            <Card
              key={cardIndex}
              sx={{
                borderRadius: "12px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                flex: "1 1 calc(100% - 32px)", // Default to full width
                maxWidth: { xs: "100%", sm: "45%", md: "30%" }, // Adjust card width for responsive screens
                minWidth: "368px", // Ensure minimum card width
              }}
            >
              <CardContent>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="h6">
                    {test.possibleDiagnosesName}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="green"
                    sx={{
                      backgroundColor: "#d4f8d4",
                      padding: "0.2rem 0.5rem",
                      borderRadius: "8px",
                    }}
                  >
                    {test.urgency}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" mt={1}>
                  Likelihood: {test.likelihood} of cases
                </Typography>

                {/* Treatment Options */}
                <Typography variant="subtitle1" mt={2}>
                  Treatment Options:
                </Typography>

                {test.treatments.map((option, treatmentIndex) => {
                  const key = `${cardIndex}-${treatmentIndex}`;
                  return (
                    <Box key={treatmentIndex}>
                      {/* Clickable Treatment */}
                      <Button
                        fullWidth
                        onClick={() =>
                          handleExpandClick(cardIndex, treatmentIndex)
                        }
                        sx={{
                          textTransform: "none",
                          justifyContent: "space-between",
                          border: "1px solid #e0e0e0",
                          padding: "1rem",
                          backgroundColor: "#fafafa",
                          mt: 1,
                          borderRadius: "8px",
                          boxShadow: expandedState[key] ? 3 : 0,
                        }}
                      >
                        <Box>
                          <Typography
                            variant="body1"
                            sx={{ textAlign: "left", lineHeight: "2" }}
                          >
                            {option.treatmentName}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            textAlign="left"
                          >
                            <AccessTimeIcon
                              fontSize="small"
                              sx={{
                                verticalAlign: "middle",
                                mr: 0.7,
                                mb: "3px",
                              }}
                            />
                            {option.timeline} <br></br>
                            <span
                              color="text.secondary"
                              sx={{
                                textAlign: "left",
                                lineHeight: "2",
                                margin: "0",
                              }}
                            >
                              <CheckCircleIcon
                                fontSize="small"
                                sx={{
                                  color: "green",
                                  verticalAlign: "middle",
                                  mr: 0.7,
                                  mb: "3px",
                                }}
                              />
                              Success rate: {option.successRate}
                            </span>
                          </Typography>
                        </Box>
                        <ExpandMoreIcon
                          sx={{
                            transform: expandedState[key]
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                            transition: "transform 0.3s",
                          }}
                        />
                      </Button>

                      {/* Collapsible Section */}
                      <Collapse
                        in={expandedState[key]}
                        timeout="auto"
                        unmountOnExit
                      >
                        <Box mt={2}>
                          <Divider />
                          <Box mt={2}>
                            {option.description.map((step, stepIndex) => (
                              <TreatmentStep key={stepIndex} title={step} />
                            ))}
                          </Box>
                        </Box>
                      </Collapse>
                    </Box>
                  );
                })}
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

// Component for Individual Steps
const TreatmentStep = ({ title }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        padding: "1rem",
        marginBottom: "1rem",
      }}
    >
      <Box display="flex" alignItems="center" gap={1} mb={0.5}>
        <LocalHospitalIcon color="primary" />
        <Typography variant="subtitle1">{title}</Typography>
      </Box>
    </Box>
  );
};

export default TreatmentCard;
