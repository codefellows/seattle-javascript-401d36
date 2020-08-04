import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

const List = (props) => {
  console.log(props);
  return (
    <View>
      <Text>Heres a list</Text>
    </View>
  )
}

const mapStateToProps = state => {
  return {
    people: state.people,
  }
}

export default connect(mapStateToProps, null)(List);