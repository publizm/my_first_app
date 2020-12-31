/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

class PickerComponent extends Component {
  state = {
    country: 'korea',
    value: 50,
  };

  sliderValueChange = (value) =>
    this.setState({
      value,
    });

  render() {
    return (
      <View style={styles.container}>
        {/* slider의 min/max value 값이 필수적으로 필요하다 */}
        <Slider
          style={{width: 300, height: 40}}
          value={this.state.value}
          minimumValue={0}
          maximumValue={100}
          onValueChange={this.sliderValueChange}
          minimumTrackTintColor="blue"
          maximumTrackTintColor="red"
          step={1}
        />
        <Text style={styles.input}>{this.state.value}</Text>
        <ActivityIndicator
          style={{paddingTop: 200}}
          size="large"
          color="green"
          animating={true}
        />
        <Picker
          style={{height: 50, width: 250}}
          selectedValue={this.state.country}
          onValueChange={(value, index) => this.setState({country: value})}>
          <Picker.Item label="Korea" value="korea" />
          <Picker.Item label="Canada" value="canada" />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    marginBottom: 200,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    marginTop: 20,
    fontSize: 25,
  },
});

export default PickerComponent;
