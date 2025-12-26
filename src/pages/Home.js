import { Box, Typography } from '@mui/material'

const Home = () => {
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
    <Typography variant="h2" color='text.secondary'>Dashboard Page</Typography>
    </Box>
  )
}

export default Home