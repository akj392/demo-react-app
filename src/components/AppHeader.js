import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from 'react-redux';
import { setMobileOpen } from '../store/slices/navDrawerSlice';
import { logout } from '../store/slices/authSlice';
import { useState } from 'react';
import { Divider, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AppHeader = () => {
    const mobileOpen = useSelector((store) => store.navDrawer.mobileOpen);
    const isClosing = useSelector((store) => store.navDrawer.isClosing);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleDrawerToggle = () => {
        if (!isClosing) {
            dispatch(setMobileOpen(!mobileOpen));
        }
    };
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = async () => {
        handleMenuClose();
        try {
            dispatch(logout());
            navigate("/login", { replace: true });
        } catch (err) {
            console.error("Logout failed", err);
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
                <IconButton size="large"
                    edge="end"
                    color="inherit"
                    onClick={handleMenuOpen}>
                    <AccountCircleIcon sx={{ fontSize: 45 }} />
                </IconButton>

                <Menu anchorEl={anchorEl}
                    open={open}
                    onClose={handleMenuClose}
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    transformOrigin={{ vertical: "top", horizontal: "right" }}>
                    <Box sx={{ px: 2, py: 1 }}>
                        <Typography variant="subtitle1">Abhishek Kumar</Typography>
                        <Typography variant="body2" color="text.secondary">
                            abhishek@example.com
                        </Typography>
                    </Box>
                    <Divider />
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}

export default AppHeader