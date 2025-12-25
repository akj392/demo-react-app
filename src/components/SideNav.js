import HomeIcon from '@mui/icons-material/Home';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useNavigate, useLocation } from 'react-router-dom';

const SideNav = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const navs = [
        { to: '/home', element: <HomeIcon /> },
        { to: '/counter', element: <AvTimerIcon/> }
    ];
    return (
        <div className='vh-100 border'>
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
        </div>
    );
}
export default SideNav
