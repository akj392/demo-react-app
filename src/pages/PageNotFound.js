import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';
import { Box, Typography } from '@mui/material';

const PageNotFound = () => {
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
            <SentimentDissatisfiedOutlinedIcon sx={{ fontSize: 100, color: 'text.secondary' }} />
            <Typography variant="h2" color='text.secondary'>Page Not Found</Typography>
        </Box>
    )
}

export default PageNotFound