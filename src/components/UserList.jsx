import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import UserCard from './UserCard';
import Loader from './Loader';
import { Box, Card, CardContent, Grid, Pagination, Skeleton, Stack } from '@mui/material';
const baseUrl = import.meta.env.VITE_API_BASE_URL
const fetchUsers = async ({ queryKey }) => {
  const [_key, page] = queryKey;
  const { data } = await axios.get(`${baseUrl}?page=${page}`);
  return data;
};

const UserList = ({ onUserSelect }) => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useQuery({
    queryKey: ['users', page],
    queryFn: fetchUsers,
  });

  if (isLoading) return <Loader />;
  if (isError) return <p className="text-red-500">Error fetching users</p>;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
         {isLoading
          ? Array.from(new Array(6)).map((_, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardContent className="flex gap-4 items-center">
                    <Skeleton variant="circular" width={56} height={56} />
                    <div className="w-full">
                      <Skeleton width="60%" height={20} />
                      <Skeleton width="80%" height={20} />
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))
          :data.data.map((user) => (
            <UserCard key={user.id} user={user} onClick={() => onUserSelect(user.id)} />
        ))}
      </div>
      <div className="flex justify-center mt-6">
      <Box className="flex justify-center mt-6">
        <Pagination
          count={data.total_pages}
          page={page}
          onChange={(e, val) => setPage(val)}
          color="primary"
        />
      </Box>
      </div>
    </div>
  );
};

export default UserList;