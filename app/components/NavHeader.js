import React, { Component, PropTypes } from 'react';
import { NavigationExperimental } from 'react-native';
import { Colors } from '../constants';
import HeaderBackButton from './HeaderBackButton';

const {
  Header: NavigationHeader,
} = NavigationExperimental;

class NavHeader extends Component {

  render() {
    return (
      <NavigationHeader
        {...this.props}
        renderTitleComponent={this._renderTitleComponent}
        onNavigateBack={this._goBack}
        style={{backgroundColor:Colors.appThemeColor}}
        renderLeftComponent = {this._renderLeftComponent}
      />
    );
  }

  _goBack = () => {
    this.props.handleBackAction();
  }

  _renderTitleComponent= (props) => {
    return (
      <NavigationHeader.Title textStyle={{color:'white'}}>
        {props.scene.route.title}
      </NavigationHeader.Title>
    );
  }

  _renderLeftComponent= (props) => {
    if (props.scene.index === 0 || !props.onNavigateBack) {
      return null;
    }
    return (
      <HeaderBackButton
        onPress={props.onNavigateBack}
        imageStyle = {{tintColor : 'white'}}
      />
    );
  }
}

NavHeader.propTypes = {
  handleBackAction: PropTypes.func.isRequired,
};
export default NavHeader;
