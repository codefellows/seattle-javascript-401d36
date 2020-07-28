/**
 * Header
 * @component Header
 */

import React from 'react';
import { Paper, Container, Typography } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

class Header extends React.Component {
  render() {
    return (
      <Paper elementType="div" id="header" elevation={2}>
        <Container elementType="section">
          <Typography variant="h3" component="h1" gutterBottom>Trinkets & Bobbles</Typography>
        </Container>
        <Container>
          <Typography paragraph>CART (0)</Typography>
          <ShoppingCartIcon />
        </Container>
      </Paper>
    )
  }
}

export default Header;