import React, { useContext, useEffect, useRef } from "react";
import { Container, Typography, Skeleton } from "@mui/material";
import { ResponseContext } from "../../context/responseContext";

const QueryName = () => {
  const { queryResponse, isLoading } = useContext(ResponseContext);
  const scrollRef = useRef(null);
  useEffect(() => {
    if (isLoading || queryResponse) {
      const element = scrollRef.current;
      if (element) {
        const offset = 107;
        const top = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  }, [isLoading, queryResponse]);
  return (
    <Container ref={scrollRef}>
      {isLoading ? (
        <Skeleton variant="text" width={320} height={44} sx={{ mt: 2.5, mb: 1 }} />
      ) : (
        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", marginTop: "20px" }}>
          {queryResponse && "Routes for: " + queryResponse?.query}
        </Typography>
      )}
    </Container>
  );
};

export default QueryName;
