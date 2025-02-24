import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Elon",
    role: "Whats your learner profile?",
    bio: "write about yourself...",
  },
  {
    name: "Michael",
    role: "Whats your learner profile?",
    bio: "write about yourself...",
  },
  {
    name: "Owen",
    role: "Whats your learner profile?",
    bio: "write about yourself...",
  },
  {
    name: "Jack",
    role: "Whats your learner profile?",
    bio: "write about yourself...",
  },
  {
    name: "Andy",
    role: "Whats your learner profile?",
    bio: "write about yourself...",
  },
];

const AboutUs = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2, textAlign: "center" }}>
      <Typography variant="h3" gutterBottom>
        About Us
      </Typography>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Meet the Team Behind Our Learning Journey
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345, mx: "auto" }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {member.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.role}
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  {member.bio}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        sx={{
          mt: 4,
          backgroundColor: "aqua",
          "&:hover": { backgroundColor: "white" },
          color: "black",
        }}
        component={Link}
        to="/"
      >
        Home
      </Button>
    </Box>
  );
};

export default AboutUs;
