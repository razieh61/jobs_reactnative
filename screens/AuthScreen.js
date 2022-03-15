import React, {useEffect} from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { facebookLogin } from '../actions';

const AuthScreen = () => {
  const navigation = useNavigation();


  useEffect(() => {
    //  AsyncStorage.removeItem('fb_token');
/*
      const fetchToken = async () => {
       let token = await AsyncStorage.getItem('fb_token');
        if (token) {
          navigation.navigate('Map');
        }
      }
    {facebookLogin};
    fetchToken();
*/
   navigation.navigate('main');


  });



  return (
    <View />
        );
}

function mapStateToProps({ auth }) {
  return { token: auth.token };
}

export default connect(mapStateToProps, {facebookLogin})(AuthScreen);
