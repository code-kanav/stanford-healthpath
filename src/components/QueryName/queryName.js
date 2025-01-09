import React, { useContext, useEffect, useRef } from "react";
import { Container, Typography } from "@mui/material";
import { ResponseContext } from "../../context/responseContext";

const QueryName = () => {
  const { queryResponse } = useContext(ResponseContext);
  const scrollRef = useRef(null);
  useEffect(() => {
    if (queryResponse) {
      const element = scrollRef.current;
      if (element) {
        const offset = 107; 
        const top = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  }, [queryResponse]);
  return (
    <Container ref={scrollRef}>
    <Typography variant="h5"
     gutterBottom
     sx={{ fontWeight: "bold", marginTop: "20px"}}>
        {queryResponse && "Routes for: " + queryResponse?.query}
    </Typography>
    </Container>

  );
};

export default QueryName;
