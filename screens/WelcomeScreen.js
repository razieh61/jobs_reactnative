import _ from 'lodash';
import { AppLoading } from 'expo';
import React, {useState, useEffect} from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Slides from '../components/Slides';


const SLIDE_DATA = [
  { text: 'Welcome to JobApp', color: '#00A9F4' },
  { text: 'Use this to get a job', color: '#009688' },
  { text: 'Set your location and swipe away', color: '#03A9F4' }
];

const WelcomeScreen = () => {
  const [token, setToken] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchToken = async () => {
    let token = await AsyncStorage.getItem('fb_token');
    if (token) {
      navigation.navigate('main');
      setToken({token});
    } else {
      setToken(false);
    }
  }
  fetchToken();
  });

  if (_.isNull(token)) {
    return (<AppLoading />);
  }

  return (
    <View>
      <Slides data={SLIDE_DATA} onComplete={() => {
        navigation.navigate('auth');
      }}/>
    </View>
  );
}

export default WelcomeScreen;
