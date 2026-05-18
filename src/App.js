import "./App.css";
import { Divider, Container, Box } from "@mui/material";
import Header from "./components/Header/header";
import SearchBar from "./components/SearchBar/searchBar";
import Banner from "./components/Banner/banner";
import RouteCard from "./components/RouteCard/routeCard";
import InitialTests from "./components/InitialTests/initialTests";
import NextSteps from "./components/NextSteps/nextSteps";
import FooterNote from "./components/FooterNote/footerNote";
import { ResponseProvider } from "./context/responseContext";
import QueryName from "./components/QueryName/queryName";
import HowItWorks from "./components/StaticComponents/howItWorks";
import BetterRecommendations from "./components/StaticComponents/betterRecommendations";
import docImage from "./assets/doc.png";
import TreatmentCard from "./components/TreatmentCard/treatmentcard";
import ResearchStats from "./components/ResearchStats/researchStats";
import Accordion from "./components/Accordion/accordion";
import ThinkingSteps from "./components/ThinkingSteps/thinkingSteps";

function App() {
  return (
    <ResponseProvider>
      <Header />
      <Container>
        <Banner />
        <SearchBar />
      </Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Responsive: column on small screens, row on larger screens
          maxWidth: 1150,
          margin: "auto",
          mt: 4,
          mb: 4,
          gap: 4,
          padding: "14px",
        }}
      >
        <Box
          component="img"
          src={docImage}
          alt="Sample"
          sx={{
            maxWidth: "100%",
            width: { xs: "100%", md: "50%" }, // Ensure it doesn't stretch
            height: "auto", // Maintain aspect ratio
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        />
        <Box
          sx={{
            flex: 1, // Takes up the remaining space in row layout
          }}
        >
          <HowItWorks />
          <BetterRecommendations />
        </Box>
      </Box>

      <Box sx={{ width: "100vw", backgroundColor: "#f0f0f0" }}>
        <Divider sx={{ margin: "20px 0 0px 0" }} />
      </Box>
      <QueryName />
      <ThinkingSteps />
      <RouteCard />
      <InitialTests />
      <TreatmentCard />
      <NextSteps />
      <ResearchStats />
      <Box sx={{ width: "100vw" }}>
        <Container>
          <Accordion />
        </Container>
      </Box>
      <FooterNote />
    </ResponseProvider>
  );
}

export default App;
