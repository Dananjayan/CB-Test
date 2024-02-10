// src/components/UserDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';

const UserDetails = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(userData => setUser(userData))
      .catch(error => console.error('Error fetching user details:', error));
  }, [username]);

  return (
    <div>
      {user && (
        <div>
          <Typography variant="h4">{user.name || user.login} </Typography>
          <Typography variant="subtitle1">Company: {user.company || 'N/A'}</Typography>
          <Typography variant="subtitle1">Followers: {user.followers}</Typography>
          <Typography variant="subtitle1">Following: {user.following}</Typography>
          <Typography variant="subtitle1">Public Repos: {user.public_repos}</Typography>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
