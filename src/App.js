import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import { SideNav, AppHeader } from './components';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setIsClosing, setMobileOpen } from './store/slices/navDrawerSlice';

const drawerWidth = 70;

function App() {
  const mobileOpen = useSelector((store) => store.navDrawer.mobileOpen);
  const dispatch = useDispatch();

  const handleDrawerClose = () => {
    dispatch(setIsClosing(true));
    dispatch(setMobileOpen(false));
  };

  const handleDrawerTransitionEnd = () => {
    dispatch(setIsClosing(false));
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppHeader/>
      <Box component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
        <Drawer variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              top: '56px'
            },
          }}
          slotProps={{ root: { keepMounted: true } }}>
          <SideNav />
        </Drawer>
        <Drawer variant="permanent"
          sx={
            {
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
                top: '64px',
                height: 'calc(100% - 64px)'
              }
            }
          } open>
          <SideNav />
        </Drawer>
      </Box>
      <Box component="main"
        sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

export default App;

