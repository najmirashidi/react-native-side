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
        this.visitDashboard = this.visitDashboard.bind(this);
    }

    visitDashboard(){
      this.props.navigator.push({
        name: 'Dashboard'
      });
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
              style={globals.button}
              onPress={this.visitDashboard}
            >
              <Icon name='person' size={36} color='white' />
              <Text style={globals.buttonText}>
                Go to Dashboard
              </Text>
            </TouchableOpacity>
            </View>
        )
    }
}

export default Landing;
