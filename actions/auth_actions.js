import { AsyncStorage } from 'react-native';
import * as Facebook from 'expo-facebook';
import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from './types';

export const facbookLogin = () => async dispatch => {
  let token = await AsyncStorage.getItem('fb_token');
  if (token) {
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
  } else {
    doFacebookLogin(dispatch);
  }
};
 const doFacebookLogin = async (dispatch) => {

  try {
     await Facebook.initializeAsync({
           appId: '822464565260270',
         });
         const {
           type,
           token
         } = await Facebook.logInWithReadPermissionsAsync({
           permissions: ['public_profile'],
         });

     /* let { type, token } = await Facebook.logInWithReadPermissionsAsync('822464565260270', {
       permissions: ['public_profile']
     }); */


     if (type === 'cancel') {
       return dispatch({ type: FACEBOOK_LOGIN_FAIL });
     }

     await AsyncStorage.setItem('fb_token', token);
     dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });

  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`);
  }
 };
