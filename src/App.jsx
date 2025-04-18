import React, { useMemo, useState, Suspense, lazy } from 'react';
import UserList from './components/UserList';;
import Header from './components/Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, CircularProgress } from '@mui/material';
const UserDetailsModal = lazy(() => import('./components/UserDetailsModal'));
const App = () => {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
          background: {
            default: darkMode ? '#121212' : '#f0f4f8',
          },
        },
      }),
    [darkMode]
  );

  const handleUserSelect = (id) => {
    setSelectedUserId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="min-h-screen p-4 transition-colors duration-300">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <UserList onUserSelect={handleUserSelect} />
        {isModalOpen && (
  <Suspense fallback={ <Box className="flex justify-center items-center h-40">
    <CircularProgress />
  </Box>}>
    <UserDetailsModal userId={selectedUserId} onClose={closeModal} />
  </Suspense>
)}
      </div>
    </ThemeProvider>
  );
};

export default App;