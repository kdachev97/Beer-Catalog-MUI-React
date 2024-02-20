import { useContext } from 'react';
import {
  Box,
  Typography,
  CircularProgress
} from '@mui/material'
import { UserContext } from '../components/UserContext';

export default function Home() {
  const { user, loading } = useContext(UserContext);
  return (
    <Box sx={{ margin: '60px 0px 0 20px' }}>
      {loading ? (
        <Box>
          <CircularProgress />
        </Box>
      ) : (
        <Typography sx={{ fontSize: '20px' }}>
          Welcome back, <b>{user?.name?.first}{' '}{user?.name?.last}</b>!
        </Typography>
      )}
    </Box>
  )
}
