import React from 'react';
import ReactDOM from 'react-dom';
import { Paper, TextField, Box, Typography, List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { BlurOn } from '@material-ui/icons';

import './index.scss';

const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    list: {
      backgroundColor: theme.palette.primary.main,
    },
    listItem: {
      color: '#ffffff',
    }
  }
})

const App = () => {

  const classes = useStyles();

  return (
    <Paper>
      <Box component="div" m={5}>
        <Typography variant="h1" component="h2" gutterBottom>My React App!!</Typography>
        <Box component="form" m={5}>
          <TextField label="Name" />
          <TextField label="Password" variant="outlined" />
        </Box>
        <List className={classes.list}  >
          <ListItem button className={classes.listItem}>
            <ListItemIcon className={classes.listItem}>
              <BlurOn />
            </ListItemIcon>
            <ListItemText>Item 1</ListItemText>
          </ListItem>
          <Divider />
          <ListItem button className={classes.listItem}>
            <ListItemText>Item 2</ListItemText>
          </ListItem>
        </List>
      </Box>
    </Paper>
  )
};

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
