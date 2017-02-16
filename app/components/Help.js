import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';

class Help extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Contact Us @989-898-9898</Text>
        
      </View>
    );
  }
  }

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    fontSize: 22,
    textAlign: 'center',
  },
  container: {
    paddingTop: 60,
  },
  button : {
    height : 40,
    paddingLeft : 64,
    paddingRight : 64,
  },
});

Help.propTypes = {
  pushRoute : PropTypes.func.isRequired,
  popRoute  : PropTypes.func.isRequired,
};
export default Help;
