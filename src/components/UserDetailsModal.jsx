import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Avatar,
  Typography,
  Box,
  CircularProgress,
} from '@mui/material';
const baseUrl = import.meta.env.VITE_API_BASE_URL
const fetchUserDetails = async ({ queryKey }) => {
  const [, userId] = queryKey;
  const res = await axios.get(`${baseUrl}/${userId}`);
  return res.data.data;
};

const UserDetailsModal = ({ userId, onClose }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['userDetails', userId],
    queryFn: fetchUserDetails,
    enabled: !!userId,
  });

  return (
    <Dialog open={true} onClose={onClose} maxWidth="xs" fullWidth>
      {isLoading ? (
        <Box className="flex justify-center items-center h-40">
          <CircularProgress />
        </Box>
      ) : isError ? (
        <DialogTitle>Error loading user</DialogTitle>
      ) : (
        <>
          {/* <DialogTitle>User Details</DialogTitle> */}
          <DialogContent>
  <Box className="flex flex-col items-center gap-4">
  <Box className="w-48 h-48 rounded-full overflow-hidden shadow-lg ring-4 ring-primary-500">
      <img
        src={data.avatar}
        alt={`${data.first_name} ${data.last_name}`}
        className="w-full h-full object-cover"
      />
    </Box>
    <Box>
    <Typography variant="h5" className="text-center">
      {data.first_name} {data.last_name}
    </Typography>
    <Typography variant="body1" color="text.secondary" className="text-center">
      {data.email}
    </Typography>
    </Box>
  </Box>
</DialogContent>

          <DialogActions>
            <Button className='hover:bg-primary-500' onClick={onClose}>Close</Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
};

export default UserDetailsModal;
