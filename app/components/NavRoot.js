import React, { PropTypes, Component } from 'react';
import NavHeader from './NavHeader';
import { RouteConstants } from '../constants';

import {
  BackAndroid,
  NavigationExperimental,
} from 'react-native';

const
  {
    CardStack: NavigationCardStack,
  } = NavigationExperimental;

class NavRoot extends Component {
  constructor (props) {
    super(props);
    this._renderScene = this._renderScene.bind(this);
    this._renderHeader = this._renderHeader.bind(this);
  }
  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', this._popRoute);
  }
  componentWillUnmount () {
    BackAndroid.removeEventListener('hardwareBackPress', this._popRoute);
  }

  render () {
    return (
      <NavigationCardStack
        navigationState={this.props.navigation}
        onNavigate={this._handleNavigate}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader} />
    );
  }

  _renderHeader(props){
    return(
      <NavHeader
        handleBackAction  = {this._popRoute}
        {...props}
      />
    );

  }

  _pushRoute = (route) => {
    this.props.pushRoute(route);
  }

  _popRoute = () => {
    if (this.props.navigation.index === 0) {
      return false;
    }
    this.props.popRoute();
    return true;
  }

  _renderScene (props) {
    const { route } = props.scene;

    let CurrentComponent = RouteConstants.RouteMap[route.key].component;

    return (
      <CurrentComponent
        pushRoute = {this._pushRoute}
        popRoute = {this._popRoute} />
    );

  }
}

NavRoot.propTypes = {
  navigation: PropTypes.object.isRequired,

  scene : PropTypes.shape({
    route : PropTypes.object.isRequired,
  }),

  pushRoute : PropTypes.func.isRequired,
  popRoute : PropTypes.func.isRequired,
};

export default NavRoot;
