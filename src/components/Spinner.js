import { Box, CircularProgress } from "@mui/material";

const Spinner = ({ size = 60, fullScreen = true }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: fullScreen ? "100vh" : "auto",
        width: "100%",
        backgroundColor: fullScreen ? "rgba(255,255,255,0.7)" : "transparent",
      }}
    >
      <CircularProgress size={size} />
    </Box>
  );
};

export default Spinner;