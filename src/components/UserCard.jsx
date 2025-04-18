import React from 'react';
import { Card, CardContent, Avatar, Typography } from '@mui/material';

const UserCard = ({ user, onClick }) => {
  return (
    <Card onClick={onClick}  className="cursor-pointer transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02] "
    elevation={3}>
      <CardContent className="flex gap-4 items-center">
        <Avatar src={user?.avatar} alt={user.first_name} sx={{ width: 56, height: 56 }} />
        <div>
          <Typography variant="subtitle1" fontWeight={600}>
            {user.first_name} {user.last_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {user.email}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserCard;