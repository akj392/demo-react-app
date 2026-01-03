import AvTimerIcon from '@mui/icons-material/AvTimer';
import SpeedIcon from '@mui/icons-material/Speed';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setIsClosing, setMobileOpen } from '../store/slices/navDrawerSlice';

const NavElement = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const navs = [
        { to: '/dashboard', element: <SpeedIcon /> },
        { to: '/counter', element: <AvTimerIcon /> }
    ];
    return (
        <List>
            {navs.map((nav) => (
                <ListItem key={nav.to} disablePadding>
                    <ListItemButton onClick={() => navigate(nav.to)}>
                        <ListItemIcon sx={{
                            minWidth: 20,
                            color: location.pathname === nav.to ? 'primary.main' : 'text.secondary',
                            '&:hover': {
                                color: 'primary.main'
                            },
                            '.MuiSvgIcon-root': {
                                fontSize: 35
                            }
                        }}>
                            {nav.element}
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    )
}

const SideNav = () => {
    const mobileOpen = useSelector((store) => store.navDrawer.mobileOpen);
    const dispatch = useDispatch();
    const drawerWidth = 70;

    const handleDrawerClose = () => {
        dispatch(setIsClosing(true));
        dispatch(setMobileOpen(false));
    };

    const handleDrawerTransitionEnd = () => {
        dispatch(setIsClosing(false));
    };
    return (
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
                <NavElement />
            </Drawer>
            <Drawer variant="permanent"
                sx={
                    {
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                            top: '70px',
                            height: 'calc(100% - 64px)'
                        }
                    }
                } open>
                <NavElement />
            </Drawer>
        </Box>

    );
}
export default SideNav
