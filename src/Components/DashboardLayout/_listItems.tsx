import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LayersIcon from '@material-ui/icons/Layers';
import { Link } from 'react-router-dom';

 const mainListItems = (
  <div>
    <ListItem key="dashboard" id="QUIZZZ" button component={Link} to="/">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Main" />
    </ListItem>
    <ListItem
      key="quizzes"
      id="quizzes"
      button
      component={Link}
      to="/quizzes"
    >
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="quizzes" />
    </ListItem>
  </div>
);

export default mainListItems;