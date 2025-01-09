import React, { useContext, useState, useRef, useEffect } from "react";
import axios from "axios";
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  CircularProgress,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
import Suggestions from "../Suggestions/suggestions"; // Import the Suggestions component
import { ResponseContext } from "../../context/responseContext";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const { setQueryResponse } = useContext(ResponseContext);
  const fileInputRef = useRef(null);
  const searchBoxRef = useRef(null); // Ref for detecting clicks outside
  const debounceTimeoutRef = useRef(null);

  const fetchSuggestions = async (query) => {
    console.log("input", query);
    try {
      const response = await axios.post(
        "http://localhost:3001/suggestions",
        { input: query } // Use "input" as the key in the request payload
      );
      setSuggestions(response.data.suggestions || []);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const handleInputChange = (event) => {
    const input = event.target.value;
    setQuery(input);

    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    debounceTimeoutRef.current = setTimeout(() => {
      if (input.trim().length >= 2) {
        fetchSuggestions(input);
      } else {
        setSuggestions([]); // Clear suggestions if input is less than 3 characters
      }
    }, 300); // Debounce delay
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]); // Clear suggestions after selection
  };

  const handleTextQuery = async () => {
    if (!query.trim()) {
      alert("Please enter a query.");
      return;
    }

    setIsLoading(true);
    try {
      const endpoint = file ? "http://localhost:3001/upload" : "http://localhost:3001/query";
      const config = file
        ? { headers: { "Content-Type": "multipart/form-data" } }
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
      setQueryResponse(response.data);
    } catch (error) {
      console.error("Error querying the API:", error);
      alert("Failed to get a response from the API.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset the file input field
    }
  };

  const handleClickOutside = (event) => {
    if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
      setSuggestions([]); // Close suggestions list if clicked outside
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
      <Box sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          width: { xs: "100%", sm: "80%", md: "80%" },
          position: "relative",
        }}>
      <Box
        ref={searchBoxRef}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: { xs: "100%", sm: "65%", md: "65%" },
          position: "relative",
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Describe your health concern..."
          value={query}
          onChange={handleInputChange}
          sx={{
            flex: 1,
            width: { xs: "100%", sm: "100%", md: "100%" },
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
                      ref={fileInputRef}
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
                    {isLoading ? <CircularProgress size={24} /> : <ArrowForwardIcon />}
                  </IconButton>
                </InputAdornment>
              </>
            ),
          }}
        />
        {suggestions.length > 0 && (
          <List
            sx={{
              position: "absolute",
              top: "90%",
              left: 0,
              right: 0,
              bgcolor: "background.paper",
              boxShadow: 3,
              zIndex: 10,
              borderRadius: "12px",
              mt: 1,
            }}
          >
            {suggestions.map((suggestion, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={() => handleSuggestionClick(suggestion)}>
                  <ListItemText primary={suggestion} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        )}
      </Box>
      {file && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            maxWidth: "200px",
            overflow: "hidden",
            border: "1px solid #c9c9c9",
            borderRadius: "12px",
            padding: "12px",
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
          <IconButton size="small" sx={{ ml: 1 }} onClick={handleRemoveFile}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
      )}
      </Box>
      <Suggestions onSuggestionClick={handleSuggestionClick} />
    </Box>
  );
};

export default SearchBar;
