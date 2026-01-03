import { Box, Typography } from '@mui/material'

const Spinner = () => {
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
}

export default Spinner