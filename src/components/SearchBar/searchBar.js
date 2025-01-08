import React, { useContext, useState, useRef } from "react";
import axios from "axios";
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  CircularProgress,
  Typography,
} from "@mui/material";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"; // Arrow icon
import CloseIcon from "@mui/icons-material/Close"; // Close icon for removing file
import Suggestions from "../Suggestions/suggestions"; // Import the Suggestions component
import { ResponseContext } from "../../context/responseContext";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [file, setFile] = useState(null); // State to store the uploaded file
  const [isLoading, setIsLoading] = useState(false);
  const { setQueryResponse } = useContext(ResponseContext);
  const fileInputRef = useRef(null); // Ref for the file input

  // Handle Enter key press for search query
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleTextQuery();
    }
  };



  const handleTextQuery = async () => {
    if (!query.trim()) {
      alert("Please enter a query.");
      return;
    }
  
    if (!file && !query.trim()) {
      alert("Please enter a query and upload a file.");
      return;
    }
  
    setIsLoading(true);
    try {
      const endpoint = file ? "http://localhost:3001/upload" : "http://localhost:3001/query";
      const config = file
        ? {
            headers: { "Content-Type": "multipart/form-data" },
          }
        : {};
  
      const payload = file
        ? (() => {
            const formData = new FormData();
            formData.append("prompt", query);
            formData.append("file", file);
            return formData;
          })()
        : { input: query };
  
      const response = await axios.post(endpoint, payload, config);
      console.log(file ? "upload" : "query", response.data);
      setQueryResponse(response.data);
    } catch (error) {
      console.error("Error querying the API:", error);
      alert("Failed to get a response from the API.");
    } finally {
      setIsLoading(false);
    }
  };
  

  // Handle file upload
  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  // Handle file removal
  const handleRemoveFile = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset the file input field
    }
  };

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
        p: 0,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: { xs: 2, sm: 0}, alignItems: "center", width: { xs: "100%", sm: "50%", md: "50%" }}}>
        <TextField
          variant="outlined"
          placeholder="Describe your health concern..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyPress} // Handle Enter key press
          sx={{
            flex: 1,
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
                    <input
                      type="file"
                      id="image-upload"
                      ref={fileInputRef} // Attach ref to the file input
                      style={{ display: "none" }}
                      accept="image/*,application/pdf,.docx"
                      onChange={handleFileUpload}
                    />
                    <IconButton component="span">
                      <AttachFileIcon />
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
        {file && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              ml: 2,
              maxWidth: "200px",
              overflow: "hidden",
              bgcolor: "aqua blue",
              border: "1px solid #c9c9c9",
              borderRadius: "12px",
              padding: "12px"
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {file.name}
            </Typography>
            <IconButton
              size="small"
              sx={{ ml: 1 }}
              onClick={handleRemoveFile}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
        )}
      </Box>
      {/* Suggestions component added below */}
      <Suggestions onSuggestionClick={handleSuggestionClick} />
    </Box>
  );
};

export default SearchBar;
