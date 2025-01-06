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
      question: "What is the Stanford Medical Assistant?",
      answer: "Stanford Medical Assistant is designed to provide health-related information, recommendations, and support. It analyzes your medical history, symptoms, and other relevant factors to assist you with preliminary guidance through interactive communication.",
    },
    {
      question: "Is the Stanford Medical Assistant a replacement for a doctor?",
      answer: "While the Stanford Medical Assistant provides valuable health insights, it is not intended to replace the expertise of a real doctor. It offers preliminary guidance and general information, and we recommend consulting with a healthcare professional for specific health concerns or medical advice.",
    },
    {
      question: "How accurate is the information provided by the Stanford Medical Assistant?",
      answer: "The Stanford Medical Assistant strives to provide accurate and relevant information based on advanced AI modeling and training. However, for definitive diagnoses and treatment plans, consulting with a healthcare professional is essential.",
    },
    {
      question: "Is my personal information secure when using the Stanford Medical Assistant?",
      answer: "Your privacy is a top priority for us. The Stanford Medical Assistant ensures that all data, including interactions with the Assistant, are protected with advanced encryption and security protocols, fully compliant with HIPAA and GDPR standards.",
    },
    {
      question: "Can the Stanford Medical Assistant diagnose medical conditions?",
      answer: "The Stanford Medical Assistant can suggest potential medical conditions based on the differential diagnosis process from the information you provide, but it cannot make definitive medical diagnoses. Always seek a professional evaluation for an accurate diagnosis.",
    },
    {
      question: "Can the Stanford Medical Assistant prescribe medications?",
      answer: "The Stanford Medical Assistant does not have the capability to prescribe medications. Medication prescriptions require a licensed healthcare professional who can evaluate your specific medical needs.",
    },
    {
      question: "Is the Stanford Medical Assistant available 24/7?",
      answer: "Yes, the Stanford Medical Assistant is available 24/7, allowing you to access health assistance anytime and anywhere, regardless of your subscription plan.",
    },
    {
      question: "Can I use the Stanford Medical Assistant for emergency situations?",
      answer: "The Stanford Medical Assistant is not equipped to handle emergency situations. In case of an emergency, contact your local emergency services or visit the nearest emergency room immediately.",
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
