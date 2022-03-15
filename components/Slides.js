import React from 'react';
import { View, Text, StyleSheet, ScrollView,Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const Slides = ({data, onComplete}) => {

  function renderLastSlide(index){
    if (index === data.length - 1){
      return (
        <Button
          title="Onwards!"
          raised
          buttonStyle={styles.buttonStyle}
          onPress={onComplete}
        />
      );
    }
  }

  const renderSlides = data.map((slide, index) => {
    return (
        <View
        key={slide.text}
        style={[styles.slideStyle, { backgroundColor: slide.color }]}
        >
          <Text style={styles.slideText}>{slide.text}</Text>
          {renderLastSlide(index)}
        </View>
      );
    });

  return (
    <>
    <ScrollView
      horizontal
      pagingEnabled
    >
      {renderSlides}
    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  slideStyle: {
    height: SCREEN_HEIGHT,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH
  },
  slideText: {
    fontSize: 30,
    color: 'white'
  },
  buttonStyle: {
    backgroundColor: '#0288D1'
  }
});

export default Slides;
