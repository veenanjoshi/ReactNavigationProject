import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';

import { RouteConstants } from '../constants';

class About extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>About</Text>
        {
          /*
          <View style = {styles.button}>
            <Button onPress={() => this.props.pushRoute(RouteConstants.RouteMap[RouteConstants.RouteKeys.HELP])} title="Contact Us" />
          </View>
          */
        }

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

About.propTypes = {
  pushRoute : PropTypes.func.isRequired,
  popRoute  : PropTypes.func.isRequired,
};
export default About;
