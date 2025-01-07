import React, { useContext, useState } from "react";
import axios from "axios";
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  CircularProgress,
} from "@mui/material";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
import ImageIcon from "@mui/icons-material/Image";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"; // Arrow icon
import Suggestions from "../Suggestions/suggestions"; // Import the Suggestions component
import { ResponseContext } from "../../context/responseContext";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setQueryResponse , setNextQueryResponse } = useContext(ResponseContext);

  // Handle Enter key press for search query
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleTextQuery();
    }
  };

  // Handle the query submission for search
  const handleTextQuery = async () => {
    if (!query.trim()) return alert("Please enter a query.");
    setIsLoading(true);
    setNextQueryResponse(null);
    try {
      const response = await axios.post("https://healthpath-backend.vercel.app/query", {
        input: query,
      });
      setQueryResponse(response.data);
    } catch (error) {
      console.error("Error querying the API:", error);
      alert("Failed to get a response from the API.");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle image upload
  // const handleImageUpload = async (event) => {
  //   const file = event.target.files[0];
  //   if (!file) return alert("Please select an image file.");

  //   const formData = new FormData();
  //   formData.append("image", file);

  //   try {
  //     const response = await axios.post(
  //       "https://healthpath-backend.vercel.app/upload",
  //       formData,
  //       {
  //         headers: { "Content-Type": "multipart/form-data" },
  //       }
  //     );
  //     setImageResponse(response.data);
  //     alert(`Image Description: ${response.data.description}`);
  //   } catch (error) {
  //     console.error("Error uploading the image:", error);
  //     alert("Failed to process the image.");
  //   }
  // };

  // Function to handle suggestion click and set query
  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 4,
        p: 0
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Describe your health concern..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress} // Handle Enter key press
        sx={{
          width: { xs: "100%", sm: "50%", md: "50%" },
          "& .MuiOutlinedInput-root": {
            borderRadius: "14px",
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
          endAdornment: (
            <>
              <InputAdornment position="end">
                <label htmlFor="image-upload">
                  {/* <input
                    type="file"
                    id="image-upload"
                    style={{ display: "none" }}
                    accept="image/*"
                    onChange={handleImageUpload}
                  /> */}
                  <IconButton component="span" disabled>
                    <ImageIcon />
                  </IconButton>
                </label>
              </InputAdornment>
              <InputAdornment position="end">
                <IconButton onClick={handleTextQuery} disabled={isLoading}>
                  {isLoading ? (
                    <CircularProgress size={24} />
                  ) : (
                    <ArrowForwardIcon />
                  )}
                </IconButton>
              </InputAdornment>
            </>
          ),
        }}
      />
      {/* Suggestions component added below */}
      <Suggestions onSuggestionClick={handleSuggestionClick} />
    </Box>
  );
};

export default SearchBar;
