import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { 
  Code as CodeIcon, 
  Storage as StorageIcon, 
  Language as LanguageIcon, 
  Build as BuildIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon
} from '@mui/icons-material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Blue
    },
    secondary: {
      main: '#4caf50', // Green
    },
    background: {
      default: '#e8f5e9', // Light green background
    },
  },
});

const Contacts = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Container maxWidth="lg" sx={{ flexGrow: 1, py: 4, display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h2" component="h1" gutterBottom align="center" color="primary">
            Contact Us & Project Details
          </Typography>
          <Grid container spacing={4} sx={{ flexGrow: 1 }}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
                <Typography variant="h4" gutterBottom color="secondary">
                  Contact Us
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <EmailIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Email" 
                      secondary="contact@fitnessapp.com"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <PhoneIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Phone" 
                      secondary="+1 (555) 123-4567"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <LocationIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Address" 
                      secondary="123 Fitness Street, Healthy City, HC 12345"
                    />
                  </ListItem>
                </List>
                <Typography variant="body1" paragraph sx={{ mt: 2 }}>
                  We're here to help you on your fitness journey. Feel free to reach out to us with any questions, suggestions, or concerns you may have about our fitness tracking app.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
                <Typography variant="h4" gutterBottom color="secondary">
                  About Our MERN Stack Fitness App
                </Typography>
                <Typography variant="body1" paragraph>
                  Our fitness tracking application is built using the MERN stack, a powerful and popular technology stack for modern web applications. MERN stands for MongoDB, Express.js, React, and Node.js.
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <StorageIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="MongoDB" 
                      secondary="NoSQL database for storing user profiles, workout data, and progress tracking information."
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <LanguageIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Express.js" 
                      secondary="Web application framework for Node.js, used to build our RESTful API and handle server-side logic."
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CodeIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="React" 
                      secondary="JavaScript library for building user interfaces, creating our interactive and responsive front-end."
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <BuildIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Node.js" 
                      secondary="JavaScript runtime built on Chrome's V8 JavaScript engine, used as our server-side environment."
                    />
                  </ListItem>
                </List>
                <Typography variant="body1" paragraph sx={{ mt: 2 }}>
                  By leveraging the MERN stack, we've created a scalable, efficient, and modern web application that provides a seamless experience for users to track their fitness journey, watch tutorial videos, and manage their workouts.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Contacts;

