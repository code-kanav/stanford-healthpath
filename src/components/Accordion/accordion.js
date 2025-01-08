import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Collapse,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const faqs = [
    {
      question: "What is the Stanford HealthPath?",
      answer: "Stanford HealthPath is a research project by Stanford’s HealthRex Lab that helps patients understand and explore potential healthcare pathways based on real clinical data patterns. It works like a navigation tool to help you understand your options and the typical paths other patients have taken.",
    },
    {
      question: "How does Stanford HealthPath work?",
      answer: "You can enter your health concern or symptoms, and the system will show you common healthcare pathways based on patterns from Stanford Health Care data. The tool can also analyze any medical documents or images you upload to provide more personalized recommendations.",
    },
    {
      question: "Is this medical advice?",
      answer: "No, Stanford HealthPath is a research tool designed to help you understand potential healthcare pathways. It should not be used as a substitute for professional medical advice. Always consult with your healthcare provider for medical decisions.",
    },
    {
      question: "What kind of files can I upload?",
      answer: "You can upload medical images (jpg, png) and PDF and DOCX reports related to your health concern. These files help provide context for generating more relevant pathway suggestions.",
    },
    {
      question: "How accurate is the information?",
      answer: "The pathways shown are based on patterns from real Stanford Health Care clinical data. However, every patient's situation is unique, and actual treatment paths may vary.",
    },
    {
      question: "What information will I see in the results?",
      answer: "Results typically include: Potential diagnoses and their likelihood, Recommended tests and procedures, Estimated timelines for each step, Success rates for different treatment options.",
    },
  ];
  const handleExpandClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Box
      sx={{
        maxWidth: "800px",
        margin: "20px auto",
        padding: "20px 0",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{
          fontWeight: "bold",
          color: "#1976d2",
          marginBottom: "30px",
        }}
      >
        Frequently Asked Questions
      </Typography>
      {faqs.map((faq, index) => (
        <Card
          key={index}
          sx={{
            marginBottom: "16px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease",
            ":hover": {
              transform: "scale(1.02)",
              boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
            },
          }}
        >
          <Button
            fullWidth
            onClick={() => handleExpandClick(index)}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "16px",
              textAlign: "left",
              textTransform: "none",
              color: "inherit",
              borderRadius: "inherit",
              backgroundColor: expandedIndex === index ? "#f1f5f9" : "white",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: expandedIndex === index ? "bold" : "normal",
              }}
            >
              {faq.question}
            </Typography>
            <ExpandMoreIcon
              sx={{
                transform: expandedIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            />
          </Button>
          <Collapse in={expandedIndex === index} timeout="auto" unmountOnExit>
            <CardContent
              sx={{
                padding: "16px",
                backgroundColor: "#f1f5f9",
                borderTop: "1px solid #e0e0e0",
              }}
            >
              <Typography variant="body1" color="text.secondary">
                {faq.answer}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </Box>
  );
};

export default FAQ;
