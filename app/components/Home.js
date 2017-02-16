import React, {Component, PropTypes} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';

import { RouteConstants, Colors } from '../constants';

const
  styles = StyleSheet.create({
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

class Home extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
        <View style={styles.button}>
          <Button
            onPress = {() => this.props.pushRoute(RouteConstants.RouteMap[RouteConstants.RouteKeys.HELP])}
            title   = "Go To Next"
            color   = {Colors.appThemeColor} />
        </View>
      </View>
    );
  }
  }

Home.propTypes = {
  pushRoute : PropTypes.func.isRequired,
  popRoute  : PropTypes.func.isRequired,
};

export default Home;
