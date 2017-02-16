/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * The examples provided by Facebook are for non-commercial testing and
 * evaluation purposes only.
 *
 * Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @providesModule HeaderBackButton
 * @flow
*/

import React, { PropTypes } from 'react';

import {
  I18nManager,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

type Props = {
  imageStyle?: any,
  onPress: Function,
  style?: any,
};

const
  styles = StyleSheet.create({
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      height: 24,
      width: 24,
      margin: Platform.OS === 'ios' ? 10 : 16,
      resizeMode: 'contain',
      transform: [{scaleX: I18nManager.isRTL ? -1 : 1}],
    },
  }),

  HeaderBackButton = (props: Props) => (
    <TouchableOpacity style={[styles.buttonContainer, props.style]} onPress={props.onPress}>
      <Image
        style={[styles.button, props.imageStyle]}
        source={Platform.OS === 'ios' ? require('../images/back-icon.ios.png') : require('../images/back-icon.android.png')} />
    </TouchableOpacity>
  );

HeaderBackButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default HeaderBackButton;
