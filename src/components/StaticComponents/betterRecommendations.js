import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";


const BetterRecommendations = () => {
  return (
    <Box sx={{ backgroundColor: "#f4f7fc", padding: 2, borderRadius: 2, mt: 2 }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Please include these details for better recommendations:
      </Typography>
      <List sx={{ listStyleType: 'disc', pl: 2 }}>
        <ListItem sx={{ display: 'list-item', margin: 0, padding: "4px 0" }}>
          <ListItemText primary="Your age and gender" />
        </ListItem>
        <ListItem sx={{ display: 'list-item', margin: 0, padding: "4px 0" }}>
          <ListItemText primary="How long you've had the symptoms" />
        </ListItem>
        <ListItem sx={{ display: 'list-item', margin: 0, padding: "4px 0" }}>
          <ListItemText primary="When/what makes it worse or better" />
        </ListItem>
        <ListItem sx={{ display: 'list-item', margin: 0, padding: "4px 0" }}>
          <ListItemText primary="Current treatments or medications" />
        </ListItem>
        <ListItem sx={{ display: 'list-item', margin: 0, padding: "4px 0" }}>
          <ListItemText primary="Relevant medical history" />
        </ListItem>
      </List>
      <Typography variant="body2" sx={{ mt: 2 }}>
        <b>Example:</b> "35 year old male, knee pain for 2 weeks, worse when climbing
        stairs and after sitting long time, taking ibuprofen with some relief,
        no prior knee problems"
      </Typography>
    </Box>
  );
};

export default BetterRecommendations;