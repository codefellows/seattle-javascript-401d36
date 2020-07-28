/** Footer
 * @component Footer
 */

import React from 'react';
import { Paper, Box, Typography } from '@material-ui/core';

class Footer extends React.Component {
  render() {
    return (
      <Paper elementType="div" id="footer" elevation={2}>
      <Box component="div" m={5}>
        <Typography paragraph>&copy; 2020 Biermann | <a href="https://github.com/ashleybiermann">Github</a> </Typography>
      </Box>
    </Paper>
    )
  }
}

export default Footer;