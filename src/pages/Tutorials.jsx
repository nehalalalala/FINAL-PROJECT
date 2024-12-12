import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Container,
  ThemeProvider,
  createTheme,
} from '@mui/material';

// Sample workout data
const workouts = [
  {
    id: 1,
    title: 'Full Body HIIT',
    description: '30-minute high intensity interval training',
    youtubeId: 'ml6cT4AZdqI',
  },
  {
    id: 2,
    title: 'Yoga for Beginners',
    description: '20-minute yoga routine for flexibility',
    youtubeId: 'v7AYKMP6rOE',
  },
  {
    id: 3,
    title: 'Core Strength Workout',
    description: '15-minute ab-focused exercises',
    youtubeId: '3p8EBPVZ2Iw',
  },
  {
    id: 4,
    title: 'Cardio Kickboxing',
    description: '25-minute high-energy kickboxing session',
    youtubeId: 'fcN37TxBE_s',
  },
  {
    id: 5,
    title: 'Low Impact Cardio',
    description: '30-minute workout suitable for beginners',
    youtubeId: 'gC_L9qAHVJ8',
  },
  {
    id: 6,
    title: 'Pilates for Posture',
    description: '20-minute Pilates routine for better posture',
    youtubeId: 'jeNwE4VXqgs',
  },
  {
    id: 7,
    title: 'Strength Training at Home',
    description: '40-minute full body strength workout without equipment',
    youtubeId: 'xRRS7SYJyRQ',
  },
];

// Custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Blue
    },
    secondary: {
      main: '#4caf50', // Green
    },
    background: {
      default: 'white', // Light green background
    },
  },
});

const Tutorials = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 4, overflowY: 'auto' }}>
        <Container maxWidth={false} sx={{ maxWidth: 1200, margin: '0 auto' }}>
          <Typography variant="h2" component="h1" gutterBottom align="center" color="primary">
            Workout Tutorials
          </Typography>
          <Grid container spacing={4} sx={{ mb: 4 }}>
            {workouts.map((workout) => (
              <Grid item xs={12} sm={6} md={4} key={workout.id}>
                <Card 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    transition: '0.3s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
                    },
                  }}
                >
                  <CardMedia
                    component="iframe"
                    height="200"
                    src={`https://www.youtube.com/embed/${workout.youtubeId}`}
                    title={workout.title}
                    sx={{ border: 0 }}
                  />
                  <CardContent sx={{ flexGrow: 1, bgcolor: 'primary.light' }}>
                    <Typography gutterBottom variant="h5" component="h2" color="primary.contrastText">
                      {workout.title}
                    </Typography>
                    <Typography color="primary.contrastText">
                      {workout.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Tutorials;

