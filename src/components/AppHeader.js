import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from 'react-redux';
import { setMobileOpen } from '../store/slices/navDrawerSlice';

const AppHeader = () => {
    const mobileOpen = useSelector((store) => store.navDrawer.mobileOpen);
    const isClosing = useSelector((store) => store.navDrawer.isClosing);
    const dispatch = useDispatch();
    const handleDrawerToggle = () => {
        if (!isClosing) {
            dispatch(setMobileOpen(!mobileOpen));
        }
    };
    return (
        <AppBar position="fixed"
            sx={{ width: '100%', left: 0 }}>
            <Toolbar>
                <IconButton color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={
                        {
                            mr: 2,
                            display: { sm: 'none' },
                            '&:hover': { color: 'primary.main' }
                        }
                    }>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h3" noWrap component="div">
                    Corner Shop
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <AccountCircleIcon sx={{ fontSize: 45, justifyContent: 'end' }} />
                <Typography variant="h6" fontStyle="italic" noWrap component="div">
                    Hi, Abhishek
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default AppHeader