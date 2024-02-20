import { useContext } from 'react';
import {
  Avatar,
  Box,
  CircularProgress,
  Typography
} from '@mui/material';
import Image from 'next/image';
import { UserContext } from '../components/UserContext';

export default function MyAccount() {
  const { user, loading } = useContext(UserContext);

  return (

    <Box sx={{ marginLeft: '20px' }}>
      <Box sx={{ margin: '20px' }}>
        <Typography
          data-cy="user"
          variant='h5'
        >
          My Account
        </Typography>
      </Box>

      {loading ? (
        <Box>
          <CircularProgress />
        </Box>
      ) : (

        <Box>
          <Box sx={{ margin: '20px' }}>
            <Avatar sx={{
              width: 100,
              height: 100
            }}
            >
              <Image
                src={user?.picture?.large}
                alt="Profile picture"
                width={100}
                height={100}
              />
            </Avatar>
          </Box>
          <Box sx={{ margin: '20px' }}>
            <Typography
              variant='h5'
              sx={{ marginBottom: '10px' }}
            >
              {user?.name?.first}{' '}{user?.name?.last}
            </Typography>
            <Typography
              sx={{ marginBottom: '10px' }}
            >
              {user?.email}
            </Typography>
            <Box display='block'>
              <Typography
                data-cy="gender"
                sx={{
                  border: 1,
                  borderColor: '#d8121e',
                  borderRadius: '20px',
                  padding: '2px 6px 2px 6px',
                  marginRight: '10px',
                  display: 'inline-block',
                  marginBottom: {
                    xs: '20px'
                  }
                }}
              >
                Gender: {user?.gender}
              </Typography>
              <Typography
                data-cy="phone"
                sx={{
                  border: 1,
                  borderColor: '#d8121e',
                  borderRadius: '20px',
                  padding: '2px 6px 2px 6px',
                  marginRight: '10px',
                  display: 'inline-block',
                  marginBottom: {
                    xs: '20px'
                  }
                }}
              >
                Phone: {user?.phone}
              </Typography>
              <Typography
                sx={{
                  border: 1,
                  borderColor: '#d8121e',
                  borderRadius: '20px',
                  padding: '2px 6px 2px 6px',
                  display: 'inline-block'
                }}
              >
                Location: {user?.location?.country}
              </Typography>
            </Box>
          </Box>
        </Box>

      )}

    </Box>
  )
}
