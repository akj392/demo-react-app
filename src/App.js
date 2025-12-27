import { Box, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { SideNav, AppHeader } from './components';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setCredentials, finishInitializing } from './store/slices';
import { Login } from './pages';


function App() {
  const dispatch = useDispatch();
  const { isAuthenticated, isInitializing } = useSelector(store => store.auth);

  
  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(token, user)
    if (token && user) {
      dispatch(setCredentials({ user, token }));
    } else {
      dispatch(finishInitializing())
    }
    // eslint-disable-next-line
  }, []);

  if (isInitializing) {
    return (
      <Box sx={
        {
          minHeight: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }
      }>
        <Typography variant="h2" color='text.secondary'>
          Loading ....
        </Typography>
      </Box>
    )
  } else if (isAuthenticated) {
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppHeader />
        <SideNav />
        <Box component="main"
          sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    );
  } else {
    return <Login />
  }
}

export default App;

