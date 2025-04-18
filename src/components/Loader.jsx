import React from 'react';
import { CircularProgress } from '@mui/material';

const Loader = () => (
  <div className="flex justify-center items-center py-10">
    <CircularProgress color="primary" />
  </div>
);

export default Loader;