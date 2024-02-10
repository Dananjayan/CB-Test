import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(users => setUsers(users))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <List>
      {users.map(user => (
        <ListItem key={user.id} button component={Link} to={`/user/${user.login}`}>
          <ListItemAvatar>
            <Avatar src={user.avatar_url} alt="Avatar" />
          </ListItemAvatar>
          <ListItemText primary={`${user.login}`} secondary={`${user.name}`} />
        </ListItem>
      ))}
    </List>
  );
};

export default UserList;
