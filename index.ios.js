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
import Register from './src/components/accounts/Register';
import Login from './src/components/accounts/Login';
import { globals } from './src/styles';


class assemble extends Component {
    constructor(){
      super();
      this.updateUser = this.updateUser.bind(this);
      this.state = {
        user: null
      };
    }
    updateUser(user){
      this.setState({ user: user });
    }

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
                  <Dashboard
                     updateUser={this.updateUser}
                     navigator={navigator}
                     user={this.state.user}
                   />
            );
            case 'Register':
              return (
                <Register navigator={navigator} />
            );
            case 'RegisterConfirmation':
              return (
                <RegisterConfirmation
                  {...route}
                  updateUser={this.updateUser}
                  navigator={navigator}
                />
            );
            case 'Login':
              return (
                  <Login
                    navigator={navigator}
                    updateUser={this.updateUser}
                  />
            );
          }
        }}
      />
    );
  }
}


AppRegistry.registerComponent('assemble', () => assemble);
