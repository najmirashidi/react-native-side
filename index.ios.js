/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Landing from './src/components/Landing';
import Dashboard from './src/components/Dashboard';
import { globals } from './src/styles';


class assemble extends Component {
  render() {
    return (
      <Navigator
        style={globals.flex}
        initialRoute={{ name: 'Landing' }}
        renderScene={(route, navigator) => {
          switch(route.name){
            case 'Landing':
              return (
                <Landing navigator={navigator}/>
            );
            case 'Dashboard':
              return (
                <Dashboard navigator={navigator}/>
            );
          }
        }}
      />
    );
  }
}


AppRegistry.registerComponent('assemble', () => assemble);
