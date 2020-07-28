/** Categories
 * @component Categories
 */

// A <Categories> component
// Shows a list of all categories
// Dispatches an action when one is clicked to “activate” it

import React from 'react';
import { connect } from 'react-redux';
import { Paper, List, ListItem, Typography } from '@material-ui/core';

import { changeCategory } from '../../store/categories.js';

class Categories extends React.Component {
  render() {
    let categoriesArr = this.props.categories.categories;
    console.log('looking for changeCategory', this.props.changeCategory);
    return (
      <Paper elevation={2} elementType="div">
        <Paper elementType="section">
          <Typography variant="h4">Browse Our Categories</Typography>
          <List>
            {categoriesArr.map((category, idx) => {
              console.log('category', category);
              return (
                <ListItem>
                  <li key={idx} onClick={() => this.props.changeCategory(category.normalizedName)}>{category.displayName}</li>
                </ListItem>
              )
            })}
          </List>
        </Paper>
        <Paper elementType="main"> MAIN
        </Paper>
      </Paper>
    )
  }
}

const mapStateToProps = state => {
  console.log('state from mapStateToProps in categories', state);
  return {
    categories: state.categories,
  }
}

const mapDispatchToProps = { changeCategory };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
