import { Outlet } from "react-router-dom";
import Box from '@mui/material/Box';
import { SideNav } from "./components";

function App() {
  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <SideNav />
        <div className="container-fluid">
          <Outlet />
        </div>
      </Box>
    </div>
  );
}

export default App;
