import React, { Component } from 'react';
import Config from 'react-native-config'

import {
  View,
  Text
} from 'react-native';

import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/Ionicons';
import BackButton from '../shared/BackButton';
import Colors from '../../styles/colors';
import { globals } from '../../styles';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const key = Config.GOOGLE_PLACES_API_KEY,

class Register extends Component{
  constructor(){
    super();
    this.goBack = this.goBack.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectLocation = this.selectLocation.bind(this);
    this.state = {
      email       : '',
      firstName   : '',
      lastName    : '',
      location    : null,
      password    : '',
    }
  }
  goBack(){
    this.props.navigator.pop();
  }
  selectLocation(data, details){
  /* TODO: handle location selection */
  }
  handleSubmit(){
      /* TODO: handle submit and direct to pt. 1 */
  }
  render(){
    let titleConfig = { title: 'Register', tintColor: 'white' };
    return (
      <View style={globals.flexContainer}>
        <NavigationBar
          title={titleConfig}
          tintColor={Colors.brandPrimary}
          leftButton={<BackButton handlePress={this.goBack}/>}
        />
        <ScrollView style={styles.container}>
          <Text style={styles.h4}>
            * Where are you looking for assemblies?
          </Text>
          <View style={globals.flex}>
            <GooglePlacesAutocomplete
              autoFocus={false}
              currentLocation={false}
              currentLocationLabel="Current location"
              fetchDetails={true}
              filterReverseGeocodingByTypes={['street_address']}
              getDefaultValue={() => {return '';}}
              GooglePlacesSearchQuery={{rankby: 'distance',}}
              GoogleReverseGeocodingQuery={{}}
              minLength={2}
              nearbyPlacesAPI='GooglePlacesSearch'
              onPress={this.selectLocation}
              placeholder='Your city'
              predefinedPlaces={[]}
              query={{
                key: GooglePlacesKey,
                language: 'en',
                types: '(cities)',
              }}
              styles={autocompleteStyles}>
            </GooglePlacesAutocomplete>
          </View>
          <Text style={styles.h4}>* Email</Text>
          <View style={styles.formField}>
            <TextInput
              autoCapitalize="none"
              keyboardType="email-address"
              maxLength={144}
              onChangeText={(email) => this.setState({ email })}
              onSubmitEditing={() => this.password.focus()}
              placeholder="Your email address"
              placeholderTextColor={Colors.copyMedium}
              returnKeyType="next"
              style={styles.input}
            />
          </View>
          <Text style={styles.h4}>* Password</Text>
          <View style={styles.formField}>
            <TextInput
              autoCapitalize="none"
              maxLength={20}
              onChangeText={(password) => this.setState({ password })}
              onSubmitEditing={() => this.firstName.focus()}
              placeholder="Your password"
              placeholderTextColor={Colors.copyMedium}
              ref={(el) => this.password = el }
              returnKeyType="next"
              secureTextEntry={true}
              style={styles.input}
            />
          </View>
          <Text style={styles.h4}>* First Name</Text>
          <View style={styles.formField}>
            <TextInput
              maxLength={20}
              onChangeText={(firstName) => this.setState({ firstName })}
              onSubmitEditing={() => this.lastName.focus()}
              placeholder="Your first name"
              placeholderTextColor='#bbb'
              ref={(el) => this.firstName = el }
              returnKeyType="next"
              style={styles.input}
            />
          </View>
          <Text style={styles.h4}>* Last name</Text>
          <View style={styles.formField}>
            <TextInput
              maxLength={20}
              onChangeText={(lastName) => this.setState({ lastName })}
              placeholder="Your last name"
              placeholderTextColor='#bbb'
              ref={(el) => this.lastName = el }
              returnKeyType="next"
              style={styles.input}
            />
         </View>
       </ScrollView>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={this.handleSubmit}
        >
          <Text style={globals.largeButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    )
  }
};

export default Register;
