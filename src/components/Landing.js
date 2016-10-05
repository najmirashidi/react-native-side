import React, { Component } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Image
 } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import NavigationBar from 'react-native-navbar';
import Colors from '../styles/colors';
import { landingStyles } from '../styles';
import { globals } from '../styles';
import Dashboard from './Dashboard';

const styles = landingStyles;

class Landing extends Component {
    constructor(props){
        super(props)
        this.visitLogin = this.visitLogin.bind(this);
        this.visitRegister = this.visitRegister.bind(this);
    }

    visitLogin(){
      this.props.navigator.push({ name: 'Login' })
    }
    visitRegister(){
      this.props.navigator.push({ name: 'Register' })
    }

    render(){
        let titleConfig = { title: 'Landing', tintColor: 'white' };
        return(
            <View style={globals.flexContainer}>
                <View style={styles.container}>
                  <Image
                    style={styles.backgroundImage}
                    source={require('../assets/images/welcome.png')}
                  />
                </View>

            <View style={globals.flexCenter}>
                <Image
                    style={styles.logo}
                    source={require('../assets/images/logo.png')}
                 />
                 <Text style={[globals.lightText, globals.h2, globals.mb2]}>
                    assemblies
                 </Text>
                 <Text style={[globals.lightText, globals.h4]}>
                    Where Developers Connect
                 </Text>
            </View>
            <TouchableOpacity
              style={[globals.button, globals.inactive, styles.loginButton]}
              onPress={this.visitLogin}
            >
              <Icon name='lock' size={36} color={Colors.brandPrimary} />
              <Text style={[globals.buttonText, globals.primaryText]}>
                Login
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={globals.button}
              onPress={this.visitRegister}
            >
              <Icon name='person' size={36} color='white' />
              <Text style={globals.buttonText}>
                Create an account
              </Text>
            </TouchableOpacity>

            </View>
        )
    }
}

export default Landing;
